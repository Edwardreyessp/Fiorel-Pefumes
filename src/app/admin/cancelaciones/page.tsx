'use client';
import { useEffect, useState } from 'react';

import { Box, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import {
	BreadCrumb,
	ButtonPrimary,
	ButtonSecondary,
} from '@/app/components/atoms';

export default function CancellationPage(): JSX.Element {
	const [displayTextField, setDisplayTextField] = useState<'none' | 'flex'>(
		'none',
	);
	const [editing, setEditing] = useState(false);
	const [politica, setPolitica] = useState<null | {
		text: string[];
		updated: string;
	}>(null);
	const [politicaText, setPoliticaText] = useState('\n');

	useEffect(() => {
		// fetch politica de privacidad
		setPolitica(politicaEjemplo);
	}, []);

	const handleUpdateClick = (): void => {
		setEditing(false);
		setDisplayTextField('none');
		// aqui se agregan los parrafos al politica y se actualiza la fecha
		const parrafos = politicaText.split('\\n');

		setPolitica({
			text: parrafos,
			updated: new Date().toISOString(),
		});

		setPoliticaText('');
		// Aqui se manda el politica al back pa
	};

	const handleAvisoChange = (
		event: React.ChangeEvent<HTMLTextAreaElement>,
	): void => {
		if (event.target.value.includes('\n')) {
			setPoliticaText(event.target.value.replace(/\n/g, '\\n'));
		} else {
			setPoliticaText(event.target.value);
		}
	};

	const handleCancelClick = (): void => {
		setDisplayTextField('none');
		setEditing(false);
		setPoliticaText('');
	};

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
			<Box>
				<Typography variant='h1'>Politica de cancelaciones</Typography>
				<BreadCrumb />
				<Grid container marginTop={3} spacing={2}>
					<Grid
						xs={12}
						style={{
							display: displayTextField,
							transition: 'opacity 0.5s ease-out', // Apply transition to opacity property
						}}
					>
						<TextField
							fullWidth
							multiline
							maxRows={20}
							placeholder='En caso de cancelacionse se establece que...'
							onChange={handleAvisoChange}
						/>
					</Grid>
					<Grid my={3} xs={12}>
						{editing ? (
							<>
								<Grid>
									<ButtonPrimary
										text='Actualizar'
										onClick={handleUpdateClick}
									/>
								</Grid>
								<Grid>
									<ButtonSecondary
										text='Cancelar'
										onClick={handleCancelClick}
									/>
								</Grid>
							</>
						) : (
							<ButtonPrimary
								text='Actualizar'
								onClick={() => {
									setDisplayTextField('flex');
									setEditing(true);
								}}
							/>
						)}
					</Grid>
					<Grid xs={12}>
						<Typography variant='h1'>Vista previa</Typography>
					</Grid>
					<Grid xs={12}>
						<Typography variant='h1'>Politica de cancelaciones</Typography>
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
				</Grid>
			</Box>
		</main>
	);
}
