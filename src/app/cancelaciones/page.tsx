'use client';
import { Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

export default function CanecellationAndDevolutionsPage(): JSX.Element {
	const [politica, setPolitica] = useState<null | {
		text: string[];
		updated: string;
	}>(null);
	useEffect(() => {
		// fetch data
		setPolitica(politicaEjemplo);
	}, []);
	const politicaEjemplo = {
		text: [
			`En caso de cancelación de un servicio, el cliente deberá notificar con 24 horas de anticipación para poder reagendar su cita. En caso de no notificar con el tiempo establecido, el cliente perderá el 50% del monto total del servicio. En caso de no asistir a la cita, el cliente perderá el monto total del servicio. 
		`,
			`En caso de cancelación de un servicio, el cliente deberá notificar con 24 horas de anticipación para poder reagendar su cita. En caso de no notificar con el tiempo establecido, el cliente perderá el 50% del monto total del servicio. En caso de no asistir a la cita, el cliente perderá el monto total del servicio. 
		`,
			`En caso de cancelación de un servicio, el cliente deberá notificar con 24 horas de anticipación para poder reagendar su cita. En caso de no notificar con el tiempo establecido, el cliente perderá el 50% del monto total del servicio. En caso de no asistir a la cita, el cliente perderá el monto total del servicio. 
		`,
		],
		updated: '2021-10-10',
	};

	return (
		<main>
			<Grid xs={12}>
				<Typography variant='h1'>Cancelaciones y devoluciones</Typography>
			</Grid>
			<Grid xs={12}>
				<Typography variant='caption'>
					{politica?.updated != null &&
						`ultima actualizacion: ${politica.updated}`}
				</Typography>
			</Grid>
			<Grid xs={12}>
				{politica?.text.map((parrafo: string, index) => (
					<Typography py={1} key={index} variant='body1'>
						{parrafo}
					</Typography>
				))}
			</Grid>
		</main>
	);
}
