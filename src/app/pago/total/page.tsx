'use client';
import { ButtonSecondary } from '@/app/components/atoms';
import { Stack, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function TotalPage(): JSX.Element {
	const router = useRouter();

	const handleContinueBuying = (): void => {
		router.push('/perfumes');
	};

	return (
		<Stack alignItems='center'>
			<Stack spacing={2} alignItems='center' maxWidth={681}>
				<Typography>Total de la compra: $9999</Typography>
				<Typography variant='caption' color='#999'>
					Ningún cupón aplicado
				</Typography>
				{/* // TODO: Agregar tabla */}
				<Typography variant='h1' color='primary'>
					Orden #1234
				</Typography>
				<Typography>Hecho con la siguiente información:</Typography>
				<Stack>
					<Typography variant='caption'>Fecha: 05/03/2024</Typography>
					<Typography variant='caption'>
						Acerina 63 Colonia Estrella DF Gustavo a Madero 07810 entre Talismán
						y Joyas
					</Typography>
					<Typography variant='caption'>usuario10@gmail.com</Typography>
					<Typography variant='caption'>+55563235</Typography>
				</Stack>
				<ButtonSecondary text='Aceptar' onClick={handleContinueBuying} />
			</Stack>
		</Stack>
	);
}
