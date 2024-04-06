'use client';
import { IconPercentage, Input } from '@/app/components/atoms';
import { CardProduct, DragAndDrop } from '@/app/components/molecules';
import type { Perfume } from '@/entities';
import { PerfumeContext } from '@/providers/PerfumeProvider';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import dayjs from 'dayjs';
import generateUniqueId from 'generate-unique-id';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import type * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { PerfumeSchema } from '@/schemas';
import { TagPicker } from './TagPicker';
import { TagContext } from '@/providers/TagsProvider';

const CreatePage = (): JSX.Element => {
	const { postPerfume } = useContext(PerfumeContext);
	const { selectedTags, setErrors, updateAlert } = useContext(TagContext);
	const [newPerfume, setNewPerfume] = useState<Perfume>({
		id: generateUniqueId(),
		name: '',
		brand: '',
		description: '',
		sells: 0,
		price: 0,
		discount: 0,
		createdAt: dayjs(),
		status: 'draft',
		stock: 0,
		images: ['/images/perfume1.png'],
		slug: '',
		category: 'Mujer',
		family: '',
		essences: [],
	});

	const form = useForm<zod.infer<typeof PerfumeSchema>>({
		resolver: zodResolver(PerfumeSchema),
		defaultValues: {
			name: newPerfume.name,
			brand: newPerfume.brand,
			description: newPerfume.description,
			price: newPerfume.price.toString(),
		},
	});

	const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setNewPerfume({
			...newPerfume,
			[e.target.id]: e.target.value,
		});

		// Quitar errores si son correctos los campos del zod resolver
		if (e.target.id in form.formState.errors) {
			if (
				form.formState.errors[
					e.target.id as keyof typeof form.formState.errors
				] != null
			) {
				// Limpiar errores del zod resolver
				form.clearErrors(e.target.id as keyof typeof form.formState.errors);
			}
		}
	};

	const onSave = async (status: string): Promise<void> => {
		try {
			const isValid = await form.trigger(); // Trigger validation
			if (isValid) {
				const data = form.getValues();
				await postPerfume({
					...newPerfume,
					status: status as 'published' | 'draft',
					name: data.name,
					brand: data.brand,
					description: data.description,
					price: Number(data.price),
					category: selectedTags.categoryID as 'Mujer' | 'Hombre' | 'Unisex',
					family: selectedTags.familyID ?? '',
					essences: selectedTags.essencesID,
				});
			} else {
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
				}
			}
		} catch (error) {
			console.error('Error al guardar y publicar el perfume:', error);
		}
	};

	return (
		<Stack spacing={2}>
			<Typography variant='body2'>Detalles generales</Typography>
			<TextField
				label='Nombre'
				{...form.register('name')}
				error={!(form.formState.errors.name == null)}
				helperText={form.formState.errors.name?.message}
				placeholder='Nombre'
				inputProps={{ style: { backgroundColor: '#f4f4f5' } }}
				id='name'
				onChange={onChange}
			/>
			<TextField
				label='Marca de inspiración'
				{...form.register('brand')}
				error={!(form.formState.errors.brand == null)}
				helperText={form.formState.errors.brand?.message}
				placeholder='Marca de inspiración'
				inputProps={{ style: { backgroundColor: '#f4f4f5' } }}
				id='brand'
				onChange={onChange}
			/>
			<Stack>
				<TextField
					label='Descripción'
					{...form.register('description')}
					multiline
					rows={4}
					error={!(form.formState.errors.description == null)}
					placeholder='Descripción'
					sx={{ backgroundColor: '#f4f4f5' }}
					id='description'
					onChange={onChange}
				/>
				{!(form.formState.errors.description == null) && (
					<Box>
						<Typography variant='caption' color='error' ml={2}>
							{form.formState.errors.description?.message}
						</Typography>
					</Box>
				)}
			</Stack>
			<Typography variant='body2'>Fotos</Typography>
			<DragAndDrop />
			<Typography variant='body2'>Propiedades</Typography>
			<Box display='flex' width='100%' gap={2}>
				<TextField
					label='Precio'
					{...form.register('price')}
					error={!(form.formState.errors.price == null)}
					helperText={form.formState.errors.price?.message}
					type='number'
					placeholder='Precio'
					inputProps={{ style: { backgroundColor: '#f4f4f5' } }}
					id='price'
					onChange={onChange}
				/>
				<Input
					id='discount'
					label='Descuento'
					onChange={onChange}
					endIcon={<IconPercentage />}
					defaultValue={newPerfume.discount.toString()}
					type='number'
				/>
				<Input
					id='stock'
					label='Stock'
					onChange={onChange}
					defaultValue={newPerfume.stock.toString()}
					type='number'
				/>
			</Box>
			<TagPicker />
			<Typography variant='body2'>Vista previa</Typography>
			<Box
				display='flex'
				justifyContent='space-evenly'
				alignItems='center'
				flexDirection={{ xs: 'column', md: 'row' }}
				gap={4}
				width='100%'
			>
				<CardProduct perfume={newPerfume} isInteractive={false} />
				<Stack spacing={2} flex={{ xs: 1, md: 1 / 2 }} width='100%'>
					<Button
						variant='contained'
						fullWidth
						onClick={() => {
							onSave('published').catch(error => {
								console.error(error);
							});
						}}
					>
						Guardar y publicar
					</Button>
					<Button
						variant='contained'
						color='secondary'
						fullWidth
						onClick={() => {
							onSave('draft').catch(error => {
								console.error(error);
							});
						}}
					>
						Guardar
					</Button>
				</Stack>
			</Box>
		</Stack>
	);
};

export default CreatePage;
