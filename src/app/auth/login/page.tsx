'use client';
import { ButtonSecondary, IconGoogle, Input } from '@/app/components/atoms';
import { Divider, Link, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/';
import { type ChangeEvent } from 'react';

export default function LoginPage(): JSX.Element {
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
			<Grid container px={{ xs: 2 }} xs={12} my={'auto'}>
				<Grid xs={12} marginBottom={3} md={4} mdOffset={4}>
					<Typography align='center' variant='h1'>
						Bienvenido, inicia sesion
					</Typography>
				</Grid>
				<Grid xs={12} my={3} md={4} mdOffset={4}>
					<ButtonSecondary
						text='Inicia sesion con Google'
						startIcon={<IconGoogle />}
						onClick={() => {}}
					/>
				</Grid>
				<Grid xs={12} my={1} md={4} mdOffset={4}>
					<Divider> O </Divider>
				</Grid>
				<Grid my={3} container md={4} mdOffset={4}>
					<Grid xs={12}>
						<Input
							label='Correo'
							id={''}
							onChange={function (event: ChangeEvent<HTMLInputElement>): void {
								throw new Error('Function not implemented.');
							}}
						/>
					</Grid>
					<Grid my={2} xs={12}>
						<Input
							label='Contraseña'
							id={''}
							onChange={function (event: ChangeEvent<HTMLInputElement>): void {
								throw new Error('Function not implemented.');
							}}
						/>
					</Grid>
					<Grid
						display={'flex'}
						flexDirection={'row'}
						justifyContent={'right'}
						xs={12}
					>
						<Link
							href='/auth/requestRestorePassword'
							align='right'
							color={'#000'}
							variant='caption'
							sx={{
								textDecoration: 'none',
								':hover': { textDecoration: 'underline' },
							}} // Remove the ":hover" property
						>
							¿Olvidaste tu contraseña?
						</Link>
					</Grid>
					<Grid xs={6} marginTop={2} xsOffset={3} md={5} mdOffset={3.5}>
						<ButtonSecondary text='Iniciar sesion' onClick={() => {}} />
					</Grid>
				</Grid>
				<Grid
					md={4}
					mdOffset={4}
					xs={12}
					display={'flex'}
					flexDirection={'row'}
					justifyContent={'center'}
				>
					<Typography variant='caption'>
						¿No tienes cuenta?{' '}
						<Link
							sx={{ textDecoration: 'none' }}
							href='/auth/register'
							color={'#413EEC'}
						>
							Unete ahora
						</Link>
					</Typography>
				</Grid>
			</Grid>
		</main>
	);
}
