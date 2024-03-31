'use client';
import { Input } from '@/app/components/atoms';
import { BasicTabs } from '@/app/components/molecules';
import { Box, Stack, Typography } from '@mui/material';
import { type ChangeEvent } from 'react';

export default function CrearBannersPage(): JSX.Element {
	const tabs = [
		{
			title: 'Home principal',
			children: <></>,
		},
		{
			title: 'Home seccion media',
			children: <></>,
		},
		{
			title: 'Acerca de nosotros',
			children: <></>,
		},
	];
	const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
		console.log(e.target.value);
	};

	return (
		<main>
			<Box px={'10%'}>
				<Typography variant='h1'>Banners</Typography>
				<p>Breadcrumb</p>
				<Stack
					borderRadius={'4px'}
					py={4}
					px={'15%'}
					border={'1px solid black'}
					gap={2}
				>
					<Typography variant='body1'>Seccion:</Typography>
					<BasicTabs tabs={tabs} />
					<Input
						label='Nombre del banner'
						id='nombreBanner'
						onChange={e => {
							handleChange(e);
						}}
					/>
					<Input
						label='Link del producto/Pagina'
						id='linkBanner'
						onChange={e => {
							handleChange(e);
						}}
					/>
				</Stack>
			</Box>
		</main>
	);
}
