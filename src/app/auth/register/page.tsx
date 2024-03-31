'use client';
import { ButtonSecondary, IconGoogle, Input } from '@/app/components/atoms';
import { Divider, FormGroup, Link, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage(): JSX.Element {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const router = useRouter();

	const handleChangeName = (
		event: React.ChangeEvent<HTMLInputElement>,
	): void => {
		setName(event.target.value);
	};

	const handleChangeEmail = (
		event: React.ChangeEvent<HTMLInputElement>,
	): void => {
		setEmail(event.target.value);
	};

	const handleChangePassword = (
		event: React.ChangeEvent<HTMLInputElement>,
	): void => {
		setPassword(event.target.value);
	};

	const handleSubmit = (): void => {
		// Perform form validation
		if (name.length === 0 || email.length === 0 || password.length === 0) {
			alert('Please fill in all fields');
			return;
		}

		// Perform any other actions like sending data to the server
		console.log('Form submitted:', { name, email, password });

		// wait for 1 second and then redirect to the success page with the email as a query parameter
		setTimeout(() => {
			router.push(`/auth/register/success?email=${email}`);
		}, 1000);
	};
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
			<FormGroup
				style={{ marginBottom: 'auto', marginTop: 'auto' }}
				onSubmit={handleSubmit}
			>
				<Grid container px={{ xs: 2 }} xs={12} my={'auto'}>
					<Grid xs={12} marginBottom={3} md={4} mdOffset={4}>
						<Typography align='center' variant='h1'>
							Bienvenido, inicia sesion
						</Typography>
					</Grid>
					<Grid xs={12} my={3} md={4} mdOffset={4}>
						<ButtonSecondary
							text='Reistrate con Google'
							startIcon={<IconGoogle />}
							onClick={() => {}}
						/>
					</Grid>
					<Grid xs={12} my={1} md={4} mdOffset={4}>
						<Divider> O </Divider>
					</Grid>
					<Grid xs={12} my={3} container md={4} mdOffset={4}>
						<Grid marginBottom={1} xs={12}>
							<Input
								label='Nombre'
								added
								onChange={handleChangeName}
								id={'name'}
							/>
						</Grid>
						<Grid my={1} xs={12}>
							<Input
								label='Correo'
								added
								onChange={handleChangeEmail}
								id={'email'}
							/>
						</Grid>
						<Grid my={1} xs={12}>
							<Input
								label='Contraseña'
								added
								onChange={handleChangePassword}
								id={'password'}
							/>
						</Grid>
						<Grid xs={5} xsOffset={3.5} marginTop={1} md={3} mdOffset={4.5}>
							<ButtonSecondary text='Registrarse' onClick={handleSubmit} />
						</Grid>
					</Grid>
					<Grid
						md={4}
						mdOffset={4}
						display={'flex'}
						flexDirection={'row'}
						justifyContent={'center'}
					>
						<Typography variant='caption'>
							¿Ya tienes cuenta?{' '}
							<Link href='/auth/login' color={'#413EEC'}>
								{' '}
								Inicia sesion
							</Link>
						</Typography>
					</Grid>
				</Grid>
			</FormGroup>
		</main>
	);
}
