'use client';
import type { Perfume } from '@/entities';
import {
	deleteInventory,
	getInventory,
	putInventory,
	saveInventory,
} from '@/firebase';
import { Backdrop, CircularProgress } from '@mui/material';
import { useRouter } from 'next/navigation';
import { createContext, useContext, useState } from 'react';
import { TagContext } from './TagsProvider';
import dayjs from 'dayjs';
import { WebModal } from '@/app/components/molecules';

export interface PerfumeContextProps {
	perfumes: Perfume[];
	getPerfumes: () => Promise<void>;
	postPerfume: (perfume: Perfume) => Promise<void>;
	isLoading: boolean;
	filterPerfumes: (filters: Filters) => void;
	setNewPerfume: (perfume: Perfume) => void;
	selectedPerfume: Perfume;
	updatePerfume: (perfume: Perfume) => Promise<void>;
	onDelete: () => void;
}

export const PerfumeContext = createContext<PerfumeContextProps>({
	perfumes: [] as Perfume[],
	getPerfumes: async (): Promise<void> => {},
	postPerfume: async (perfume: Perfume): Promise<void> => {},
	isLoading: false,
	filterPerfumes: (filters: Filters): void => {},
	setNewPerfume: (perfume: Perfume): void => {},
	selectedPerfume: {
		id: '',
		name: '',
		brand: '',
		description: '',
		sells: 0,
		price: 0,
		discount: 0,
		createdAt: dayjs(),
		status: 'draft',
		stock: 0,
		images: [] as string[],
		slug: '',
		category: 'Mujer',
		family: '',
		essences: [] as string[],
	},
	updatePerfume: async (perfume: Perfume): Promise<void> => {},
	onDelete: () => {},
});

interface Filters {
	search: string;
	withStock: boolean;
	noStock: boolean;
	published: boolean;
	draft: boolean;
}

export const PerfumeProvider = ({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element => {
	const { updateAlert, selectedTags, setErrors, updateTags } =
		useContext(TagContext);
	const [allPerfumes, setAllPerfumes] = useState<Perfume[]>([]);
	const [perfumes, setPerfumes] = useState<Perfume[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [selectedPerfume, setSelectedPerfume] = useState<Perfume>({
		id: '',
		name: '',
		brand: '',
		description: '',
		sells: 0,
		price: 0,
		discount: 0,
		createdAt: dayjs(),
		status: 'draft',
		stock: 0,
		images: [] as string[],
		slug: '',
		category: 'Mujer',
		family: '',
		essences: [] as string[],
	});
	const router = useRouter();

	const getPerfumes = async (): Promise<void> => {
		setIsLoading(true);

		await getInventory().then(data => {
			setAllPerfumes(data as Perfume[]);
			setPerfumes(data as Perfume[]);
			setIsLoading(false);
		});
	};

	const postPerfume = async (perfume: Perfume): Promise<void> => {
		if (
			selectedTags.categoryID === null ||
			selectedTags.familyID === null ||
			selectedTags.essencesID.length === 0
		) {
			if (selectedTags.categoryID === null) {
				setErrors('category', true);
			} else if (selectedTags.familyID === null) {
				setErrors('family', true);
			} else {
				setErrors('essence', true);
			}

			updateAlert(true);
			return;
		}

		setIsLoading(true);
		await saveInventory(perfume).then(async () => {
			await getPerfumes().then(async () => {
				await new Promise(resolve => setTimeout(resolve, 4000));
				router.push('/admin/inventario');
				setIsLoading(false);
			});
		});
	};

	const updatePerfume = async (perfume: Perfume): Promise<void> => {
		if (
			selectedTags.categoryID === null ||
			selectedTags.familyID === null ||
			selectedTags.essencesID.length === 0
		) {
			if (selectedTags.categoryID === null) {
				setErrors('category', true);
			} else if (selectedTags.familyID === null) {
				setErrors('family', true);
			} else {
				setErrors('essence', true);
			}

			updateAlert(true);
			return;
		}

		setIsLoading(true);
		await putInventory(perfume).then(async () => {
			await getPerfumes().then(async () => {
				router.push('/admin/inventario');
				setIsLoading(false);
			});
		});
	};

	const filterPerfumes = (filters: Filters): void => {
		let filteredPerfumes: Perfume[] = allPerfumes;

		// Filtros de stock
		if (filters.withStock && !filters.noStock) {
			filteredPerfumes = filteredPerfumes.filter(perfume => perfume.stock > 0);
		} else if (!filters.withStock && filters.noStock) {
			filteredPerfumes = filteredPerfumes.filter(
				perfume => perfume.stock === 0,
			);
		}

		// Filtros de estado
		if (filters.published && !filters.draft) {
			filteredPerfumes = filteredPerfumes.filter(
				perfume => perfume.status === 'published',
			);
		} else if (!filters.published && filters.draft) {
			filteredPerfumes = filteredPerfumes.filter(
				perfume => perfume.status === 'draft',
			);
		}

		// Filtro de búsqueda
		if (filters.search !== '') {
			filteredPerfumes = filteredPerfumes.filter(perfume =>
				perfume.name.toLowerCase().includes(filters.search.toLowerCase()),
			);
		}

		setPerfumes(filteredPerfumes);
	};

	const setNewPerfume = (perfume: Perfume): void => {
		setSelectedPerfume(perfume);
		updateTags({
			categoryID: null,
			familyID: null,
			essencesID: [],
		});
	};

	const onDelete = (): void => {
		setIsOpen(true);
	};

	const onClose = (): void => {
		setIsOpen(false);
	};

	const handleDelete = async (): Promise<void> => {
		setIsLoading(true);
		await deleteInventory(selectedPerfume.id).then(async () => {
			await getPerfumes().then(async () => {
				setIsLoading(false);
				setIsOpen(false);
			});
		});
	};

	return (
		<PerfumeContext.Provider
			value={{
				perfumes,
				getPerfumes,
				postPerfume,
				isLoading,
				filterPerfumes,
				setNewPerfume,
				selectedPerfume,
				updatePerfume,
				onDelete,
			}}
		>
			{children}
			<Backdrop sx={{ color: '#fff', zIndex: 9999 }} open={isLoading}>
				<CircularProgress color='primary' />
			</Backdrop>
			<WebModal
				open={isOpen}
				title={'Eliminar perfume'}
				description={'¿Estás seguro de que deseas eliminar este perfume?'}
				closeText={'Cancelar'}
				handleClose={onClose}
				type='warning'
				legend='Esta acción es irreversible.'
				agreeText='Eliminar'
				handleAgree={() => {
					handleDelete().catch(() => {
						console.error('Error al eliminar el perfume');
					});
				}}
			/>
		</PerfumeContext.Provider>
	);
};
