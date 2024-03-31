'use client';
import { IconEdit, IconTrash } from '@/app/components/atoms';
import { CardNewsletter, WebModal } from '@/app/components/molecules';
import { NewsletterCard } from '@/app/components/utils';
import {
	Box,
	Button,
	Stack,
	Table,
	TableCell,
	TableHead,
	TableRow,
	Typography,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ViewNewsletterPage(): JSX.Element {
	const [openWarn, setOpenWarn] = useState(false);
	const router = useRouter();

	const handleDeleteHistory = (): void => {
		setOpenWarn(true);
	};

	const handleEdit = (): void => {
		router.push(`/admin/newsletter/editar/${NewsletterCard.id}`);
	};

	const handleDelete = (): void => {
		console.log('deleted');
		setOpenWarn(false);
	};

	const handleClose = (): void => {
		setOpenWarn(false);
	};

	return (
		<Stack spacing={2} alignItems='center'>
			<Typography variant='h1' alignSelf='flex-start'>
				Newsletter - {NewsletterCard.title}
			</Typography>
			<CardNewsletter newsletter={NewsletterCard} />
			<Stack direction='row' spacing={2} width='100%' justifyContent='center'>
				<Button
					variant='contained'
					color='secondary'
					endIcon={<IconEdit color='#fff' />}
					onClick={handleEdit}
				>
					Editar
				</Button>
				<Button variant='contained'>Volver a enviar</Button>
			</Stack>
			<Box display='flex' gap={2} alignItems='center' width='100%'>
				<Typography variant='h1' alignSelf='flex-start'>
					Historial del Newsletter
				</Typography>
				<Box height='24px' onClick={handleDeleteHistory}>
					<IconTrash color='#999' />
				</Box>
				<WebModal
					open={openWarn}
					title={'Borrar historial de newsletter'}
					description={
						'Esta acción es irreversible. ¿Estás seguro de eliminar el historial de este newsletter?'
					}
					closeText={'Cancelar'}
					handleClose={handleClose}
					agreeText='Eliminar'
					handleAgree={handleDelete}
					type='warning'
				/>
			</Box>

			<Table sx={{ maxWidth: 600 }}>
				<TableHead>
					<TableRow>
						<TableCell align='center'>
							<Typography variant='body2'>Fecha</Typography>
						</TableCell>
						<TableCell align='center'>
							<Typography variant='body2'>Acción</Typography>
						</TableCell>
					</TableRow>
				</TableHead>
				<TableHead>
					{NewsletterCard.modifies.map(row => (
						<TableRow key={row.date}>
							<TableCell align='center'>{row.date}</TableCell>
							<TableCell align='center'>{row.type}</TableCell>
						</TableRow>
					))}
				</TableHead>
			</Table>
		</Stack>
	);
}
