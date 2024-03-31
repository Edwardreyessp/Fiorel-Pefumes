'use client';
import { Link, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useSearchParams } from 'next/navigation';

export default function VerifyEmail(): JSX.Element {
	const searchParams = useSearchParams();
	const email = searchParams.get('email') ?? '';

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
			<Grid container xs={12} my={'auto'} md={5} lg={4} px={{ xs: 2 }}>
				<Grid marginBottom={4} xs={12}>
					<Typography align='center' variant='h1'>
						Verifica tu correo
					</Typography>
				</Grid>
				<Grid>
					<Typography align='center'>
						Hemos enviado un enlace a tu correo {email + '\n'}
						para que puedas confirmarlo y unirte a Fiorel
					</Typography>
				</Grid>
				<Grid
					xs
					marginTop={4}
					display={'flex'}
					flexDirection={'row'}
					justifyContent={'center'}
				>
					<Typography variant='caption'>
						¿No has recibido el correo?{' '}
						<Link href='/auth/register' color={'#413EEC'}>
							Reenviar
						</Link>
					</Typography>
				</Grid>
			</Grid>
		</main>
	);
}
