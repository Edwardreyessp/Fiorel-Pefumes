'use client';
import { CardNewsletter } from '@/app/components/molecules';
import { NewsletterForm } from '@/app/components/organisms';
import { NewsletterCard } from '@/app/components/utils';
import type { NewsletterItem } from '@/entities';
import { Stack, Typography, Button } from '@mui/material';
import { useState, type ChangeEvent, useEffect } from 'react';

export default function EditNewsletterPage(): JSX.Element {
	const [isEditing, setIsEditing] = useState<boolean>(true);
	const [text, setText] = useState<NewsletterItem>({
		id: '0',
		title: '',
		description: '',
		link: '',
		image: '',
		modifies: [
			{
				date: '2021-10-10',
				type: 'Se editó',
			},
		],
	});

	useEffect(() => {
		setText(NewsletterCard);
	}, []);

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
		setText({ ...text, [event.target.id]: event.target.value });
	};

	const toggleEdit = (): void => {
		setIsEditing(!isEditing);
	};

	const handleSave = (): void => {
		console.log('Save');
	};

	const handleSaveAndSend = (): void => {
		console.log('Save and send');
	};

	return (
		<Stack spacing={2} alignItems='center'>
			<Typography variant='h1' alignSelf='flex-start'>
				Editar Newsletter
			</Typography>
			{isEditing ? (
				<NewsletterForm newsletter={text} handleChange={handleInputChange} />
			) : (
				<CardNewsletter newsletter={text} />
			)}
			<Stack direction='row' spacing={2} width='100%' maxWidth='840px'>
				<Button
					onClick={toggleEdit}
					variant='contained'
					color='secondary'
					sx={{ flex: 1 }}
				>
					{isEditing ? 'Ver vista previa' : 'Regresar a editar'}
				</Button>
				{!isEditing && (
					<Button
						variant='contained'
						color='secondary'
						sx={{ flex: 1 }}
						onClick={handleSave}
					>
						Guardar
					</Button>
				)}
				{!isEditing && (
					<Button
						variant='contained'
						sx={{ flex: 1 }}
						onClick={handleSaveAndSend}
					>
						Guardar y enviar a mis clientes
					</Button>
				)}
			</Stack>
		</Stack>
	);
}
