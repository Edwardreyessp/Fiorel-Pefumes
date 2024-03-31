'use client';
import { ButtonSecondary, Input } from '@/app/components/atoms';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/';
import { type ChangeEvent } from 'react';

export default function RestorePasswordPage(): JSX.Element {
	return (
		<main
			style={{
				backgroundImage: 'url(/images/login.jpeg)',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				height: '100vh',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<Grid
				container
				px={{ xs: 2 }}
				xs={12}
				my={'auto'}
				display={'flex'}
				flexDirection={'column'}
				alignItems={'center'}
				justifyContent={'center'}
				justifyItems={'center'}
			>
				<Grid marginBottom={3} md={4}>
					<Typography align='center' variant='h1'>
						Restablece tu contraseña
					</Typography>
				</Grid>
				<Grid my={3} container md={4}>
					<Grid xs={12}>
						<Input
							label='Contraseña nueva'
							id={''}
							onChange={function (event: ChangeEvent<HTMLInputElement>): void {
								throw new Error('Function not implemented.');
							}}
						/>
					</Grid>
					<Grid my={2} xs={12}>
						<Input
							label='Confirmar contraseña nueva'
							id={''}
							onChange={function (event: ChangeEvent<HTMLInputElement>): void {
								throw new Error('Function not implemented.');
							}}
						/>
					</Grid>
					<Grid xs={7} xsOffset={2.5} md={5} mdOffset={3.5}>
						<ButtonSecondary text='Cambiar contraseña' onClick={() => {}} />
					</Grid>
				</Grid>
			</Grid>
		</main>
	);
}
