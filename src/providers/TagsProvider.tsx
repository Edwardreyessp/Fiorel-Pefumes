'use client';
import { AlertFloat } from '@/app/components/molecules';
import type { PerfumeCategory } from '@/entities';
import { deleteTag, getTags, postTag, putTag } from '@/firebase/tags';
import { createContext, useState } from 'react';
import { type TagData } from './CategoryProvider';

export const TagContext = createContext({
	filteredTags: [] as PerfumeCategory[],
	getAllTags: async () => {},
	isLoading: false,
	updateTags: (tags: SelectedTags) => {},
	selectedTags: {
		categoryID: null as string | null,
		familyID: null as string | null,
		essencesID: [] as string[],
	},
	allTags: [] as PerfumeCategory[],
	errorTags: {
		category: false,
		family: false,
		essence: false,
	},
	setErrors: (key: string, value: boolean) => {},
	updateAlert: (open: boolean) => {},
	refresh: false,
	postNewTag: async (tag: TagData) => {},
	putNewTag: async (tag: TagData) => {},
	deleteATag: async (tag: TagData) => {},
});

interface SelectedTags {
	categoryID: string | null;
	familyID: string | null;
	essencesID: string[];
}

interface ErrorProps {
	category: boolean;
	family: boolean;
	essence: boolean;
}

export const TagsProvider = ({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element => {
	const [allTags, setAllTags] = useState<PerfumeCategory[]>([]);
	const [filteredTags, setFilteredTags] = useState<PerfumeCategory[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [refresh, setRefresh] = useState(false);
	const [isAlertOpen, setIsAlertOpen] = useState(false);
	const [errorTags, setErrorTags] = useState<ErrorProps>({
		category: false,
		family: false,
		essence: false,
	});
	const [selectedTags, setSelectedTags] = useState<SelectedTags>({
		categoryID: null,
		familyID: null,
		essencesID: [],
	});

	const refreshTags = (): void => {
		setRefresh(!refresh);
	};

	const getAllTags = async (): Promise<void> => {
		setIsLoading(true);
		getTags()
			.then(tags => {
				setAllTags(tags);
				setFilteredTags(tags);
				setIsLoading(false);
			})
			.catch(error => {
				console.error('Error getting tags: ', error);
			});
	};

	const filterTags = (): void => {
		if (selectedTags.categoryID !== null) {
			const filteredByCategories = allTags.filter(
				category => category.id === selectedTags.categoryID,
			);
			if (selectedTags.familyID !== null) {
				const filteredByFamilies = filteredByCategories.filter(category =>
					category.families.find(family => family.id === selectedTags.familyID),
				);
				setFilteredTags(filteredByFamilies);
			} else {
				setFilteredTags(filteredByCategories);
			}
		} else {
			setFilteredTags(allTags);
		}
	};

	const updateTags = (tags: SelectedTags): void => {
		setSelectedTags(tags);
		filterTags();
	};

	const setErrors = (key: string, value: boolean): void => {
		if (key === 'category') {
			setErrorTags({
				category: value,
				family: false,
				essence: false,
			});
		} else if (key === 'family') {
			setErrorTags({
				...errorTags,
				family: value,
				essence: false,
			});
		} else if (key === 'essence') {
			setErrorTags({
				...errorTags,
				essence: value,
			});
		}
	};

	const onCloseAlert = (): void => {
		setIsAlertOpen(false);
	};

	const updateAlert = (open: boolean): void => {
		setIsAlertOpen(open);
	};

	const postNewTag = async (tag: TagData): Promise<void> => {
		await postTag(tag)
			.then(() => {
				refreshTags();
			})
			.catch(() => {
				updateAlert(true);
			});
	};

	const putNewTag = async (tag: TagData): Promise<void> => {
		await putTag(tag)
			.then(() => {
				refreshTags();
			})
			.catch(() => {
				updateAlert(true);
			});
	};

	const deleteATag = async (tag: TagData): Promise<void> => {
		deleteTag(tag)
			.then(() => {
				refreshTags();
			})
			.catch(() => {
				updateAlert(true);
			});
	};

	return (
		<TagContext.Provider
			value={{
				filteredTags,
				getAllTags,
				isLoading,
				updateTags,
				selectedTags,
				allTags,
				errorTags,
				setErrors,
				updateAlert,
				refresh,
				postNewTag,
				putNewTag,
				deleteATag,
			}}
		>
			{children}
			<AlertFloat
				text='Llena todos los campos para continuar.'
				open={isAlertOpen}
				handleClose={onCloseAlert}
				type='error'
			/>
		</TagContext.Provider>
	);
};
