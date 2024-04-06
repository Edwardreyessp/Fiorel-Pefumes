'use client';
import {
	Box,
	Card,
	CardContent,
	Dialog,
	Stack,
	Typography,
} from '@mui/material';
import {
	useState,
	type Dispatch,
	type SetStateAction,
	type ChangeEvent,
	useEffect,
	useContext,
} from 'react';
import { IconTable, Newsletter, WebModal } from '../molecules';
import { useRouter } from 'next/navigation';
import { CategoryContext, type TagData } from '@/providers/CategoryProvider';
import { TagContext } from '@/providers/TagsProvider';

interface Props {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
}

export type collection = 'perfumeFamilies' | 'perfumeEssences';

export interface CategoryType {
	id: string;
	name: string;
	icon: string;
	idParent: string;
}

export const CategoryPicker = (props: Props): JSX.Element => {
	const router = useRouter();
	const { open, setOpen } = props;
	const [showModal, setShowModal] = useState(false);
	const { selectedTag, clearTag, showAlert, handleLoading } =
		useContext(CategoryContext);
	const { deleteATag, postNewTag, putNewTag } = useContext(TagContext);
	const [newTag, setNewTag] = useState<TagData>({
		tag: {
			id: '',
			name: '',
			icon: '',
			idParent: '',
		},
		collection: 'perfumeFamilies',
		method: 'POST',
	});

	useEffect(() => {
		setNewTag(selectedTag);
	}, [selectedTag]);

	const handleClose = (): void => {
		setOpen(false);
	};

	const onDelete = (): void => {
		clearTag();
		setOpen(false);
		handleLoading(false);
		showAlert('Eliminado correctamente');
		router.refresh();
	};

	const handleSave = (): void => {
		if (newTag.method === 'POST') {
			postNewTag(newTag)
				.then(() => {
					onSave();
				})
				.catch(() => {
					onError('guardar');
				});
		}
		if (newTag.method === 'PUT') {
			putNewTag(newTag)
				.then(() => {
					onSave();
				})
				.catch(() => {
					onError('actualizar');
				});
		}
	};

	const onSave = (): void => {
		clearTag();
		setOpen(false);
		handleLoading(false);
		showAlert();
		router.refresh();
	};

	const onError = (message: string): void => {
		handleLoading(false);
		clearTag();
		setOpen(false);
		showAlert(`Error al ${message}, intenta nuevamente`, 'error');
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
		setNewTag({
			...newTag,
			tag: {
				...newTag.tag,
				name: event.target.value,
			},
		});
	};

	const onClickDelete = (): void => {
		setShowModal(true);
	};

	const handleCloseModal = (): void => {
		setShowModal(false);
	};

	return (
		<Dialog open={open} onClose={handleClose} sx={{ zIndex: 900 }}>
			<Card
				sx={{ width: 'fit-content', maxWidth: '353px', maxHeight: '215px' }}
			>
				<CardContent>
					<Stack spacing={1} alignItems='center'>
						<IconTable tag={newTag} setTag={setNewTag} />
						<Newsletter
							idInput={'name'}
							labelInput={'Nombre'}
							labelButton={'Guardar'}
							defaultValue={newTag.tag.name}
							handleChange={handleChange}
							handleSubmit={() => {
								handleLoading(true);
								handleSave();
							}}
						/>
						<Box display='flex' width='100%' justifyContent='end' gap={1}>
							<Typography
								display={selectedTag.tag.name === '' ? 'none' : 'block'}
								variant='caption'
								color={'#999999'}
								onClick={onClickDelete}
								sx={{ cursor: 'pointer', '&:hover': { color: '#ff0000' } }}
							>
								Eliminar
							</Typography>
							<Typography
								variant='caption'
								onClick={handleClose}
								color={'#999999'}
								sx={{ cursor: 'pointer', '&:hover': { color: '#000' } }}
							>
								Cancelar
							</Typography>
						</Box>
					</Stack>
				</CardContent>
			</Card>
			<WebModal
				open={showModal}
				title={'¿Eliminar?'}
				description={
					'¿Estás seguro de querer eliminar? Esta acción es irreversible'
				}
				type='warning'
				closeText={'Cancelar'}
				agreeText='Aceptar'
				handleClose={handleCloseModal}
				handleAgree={() => {
					handleLoading(true);
					deleteATag(newTag)
						.then(() => {
							handleCloseModal();
							onDelete();
						})
						.catch(() => {
							onError('eliminar');
						});
				}}
			/>
		</Dialog>
	);
};
