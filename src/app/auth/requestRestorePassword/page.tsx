'use client';
import { ButtonSecondary, Input } from '@/app/components/atoms';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/';
import { useRouter } from 'next/navigation';
import { type ChangeEvent } from 'react';

export default function LoginPage(): JSX.Element {
	const router = useRouter();
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
						Restablece tu contraseña
					</Typography>
				</Grid>
				<Grid my={2} xs={12} md={4} mdOffset={4}>
					<Input
						label='Correo'
						added
						id={''}
						onChange={function (event: ChangeEvent<HTMLInputElement>): void {
							throw new Error('Function not implemented.');
						}}
					/>
				</Grid>
				<Grid
					xs={12}
					md={4}
					mdOffset={4}
					display={'flex'}
					flexDirection={'row'}
					justifyContent={'center'}
				>
					<Typography align='center'>
						Te enviaremos un correo para que puedas reestablecer tu contraseña
					</Typography>
				</Grid>
				<Grid
					xs={5}
					xsOffset={3.5}
					marginTop={2}
					md={2}
					mdOffset={5}
					xl={1}
					xlOffset={5.5}
				>
					<ButtonSecondary
						text='Restablecer'
						onClick={() => {
							router.push('/auth/login');
						}}
					/>
				</Grid>
			</Grid>
		</main>
	);
}
