'use client';
import {
	ButtonPrimary,
	ButtonSecondary,
	IconArrrowLeft,
	QuantityProduct,
	SimpleTag,
} from '@/app/components/atoms';
import { CarruselProduct } from '@/app/components/atoms/Carrusel';
import { CardProduct } from '@/app/components/molecules';
import { Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import { type Perfume } from '@/entities';
import dayjs from 'dayjs';
import { perfumes } from '@/app/components/utils/perfumes';
import { Layout } from '@/app/components/organisms';

export default function ProductPage(): JSX.Element {
	const [isHovered, setIsHovered] = useState(false);
	const [perfume, setPerfume] = useState<Perfume>({
		_id: '',
		name: '',
		brand: '',
		description: '',
		sells: 0,
		price: 0,
		discount: 0,
		createdAt: dayjs(), // Asegúrate de que dayjs esté importado y configurado correctamente
		essence: { id: '', name: '', icon: '' },
		status: 'draft', // O 'published', según el valor predeterminado que desees
		stock: 0,
		images: [],
		slug: '',
		gender: 'Unisex', // O 'male' o 'female', según el valor predeterminado que desees
		family: '',
		notes: [],
	});

	useEffect(() => {
		setPerfume(perfumes[0]);
	}, []);

	const isDesktop = useMediaQuery(useTheme().breakpoints.up('md'));
	const cardsToShow = isDesktop ? 3 : 1;

	const color = useTheme().palette.primary.main;

	return (
		<Layout>
			<Box px={{ xs: 2, md: 30 }}>
				<Box display={'flex'} alignItems={'center'} px={{ xs: '', md: 30 }}>
					<Box
						height={'24px'}
						onPointerDown={e => {
							e.preventDefault();
						}}
						sx={{ cursor: 'pointer' }}
						onMouseEnter={() => {
							setIsHovered(true);
						}}
						onMouseLeave={() => {
							setIsHovered(false);
						}}
					>
						<IconArrrowLeft color={isHovered ? color : '#000000'} />
					</Box>
					<Typography variant='subtitle1' pl={2}>
						Volver a productos
					</Typography>
				</Box>

				<Box display={{ xs: '', md: 'flex' }} justifyContent={'space-evenly'}>
					<Box display={'flex'} justifyContent={'center'} pt={{ xs: 2, md: '' }}>
						<CarruselProduct item={perfume} />
					</Box>
					<Stack spacing={2} pl={{ xs: '', md: 5 }}>
						<Typography variant='subtitle1'>{perfume.name}</Typography>
						<Typography variant='caption'>{perfume.brand}</Typography>
						<Typography>${perfume.price}</Typography>
						<QuantityProduct idProduct='' />
						<Typography variant='subtitle1'>Descripción</Typography>
						<SimpleTag text='Unisex' type='primary' />
						<Typography maxWidth={{ sx: '50%', md: '435px' }}>
							{perfume.description}
						</Typography>
						<Typography variant='subtitle1'>Escencias</Typography>
						<Box display={'flex'} justifyContent={'space-evenly'}>
							{perfume.notes.map((note, index) => (
								<SimpleTag key={index} text={note} type='secondary' />
							))}
						</Box>
						<ButtonSecondary
							text={'Agregar al carrito'}
							onClick={function (): void {
								throw new Error('Function not implemented.');
							}}
						/>
						<ButtonPrimary
							text={'Comprar ahora'}
							onClick={function (): void {
								throw new Error('Function not implemented.');
							}}
						/>
					</Stack>
				</Box>

				<Typography variant='subtitle1' textAlign={'center'} py={2}>
					También te podría gustar
				</Typography>

				<Box display={'flex'} justifyContent={'space-evenly'}>
					{/* Mapea las tarjetas según el número determinado */}
					{[...Array(cardsToShow)].map((_, index) => (
						<CardProduct key={index} perfume={perfumes[index]} />
					))}
				</Box>
			</Box>
		</Layout>
	);
}
