'use client';
import { useEffect, useState } from 'react';

import { Box, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import {
	BreadCrumb,
	ButtonPrimary,
	ButtonSecondary,
} from '@/app/components/atoms';

export default function PrivacityPage(): JSX.Element {
	const [displayTextField, setDisplayTextField] = useState<'none' | 'flex'>(
		'none',
	);
	const [editing, setEditing] = useState(false);
	const [aviso, setAviso] = useState<null | {
		text: string[];
		updated: string;
	}>(null);
	const [avisoText, setAvisoText] = useState('\n');

	useEffect(() => {
		// fetch aviso de privacidad
		setAviso(avisoEjemplo);
	}, []);

	const handleUpdateClick = (): void => {
		setEditing(false);
		setDisplayTextField('none');

		const parrafos = avisoText.split('\\n');

		setAviso({
			text: parrafos,
			updated: new Date().toDateString(),
		});
		setAvisoText('');
		// Aqui se manda el aviso al back pa
	};

	const handleAvisoChange = (
		event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
	): void => {
		if (event.target.value.includes('\n')) {
			setAvisoText(event.target.value.replace(/\n/g, '\\n'));
		} else {
			setAvisoText(event.target.value);
		}
	};

	const handleCancelClick = (): void => {
		setDisplayTextField('none');
		setEditing(false);
		setAvisoText('');
	};

	const avisoEjemplo = {
		text: [
			`Este aviso de privacidad establece los términos en que usa y protege la información que es proporcionada por sus usuarios al momento de utilizar su sitio web. Esta empresa está comprometida con la seguridad de los datos de sus usuarios. Cuando le pedimos llenar los campos de información personal con la cual usted pueda ser identificado, lo hacemos asegurando que sólo se empleará de acuerdo con los términos de este documento. Sin embargo este aviso de privacidad puede cambiar con el tiempo o ser actualizado por lo que le recomendamos y enfatizamos revisar continuamente esta página para asegurarse que está de acuerdo con dichos cambios.`,
			`Información que es recogida: Nuestro sitio web podrá recoger información personal por ejemplo: Nombre, información de contacto como su dirección de correo electrónica e información demográfica. Así mismo cuando sea necesario podrá ser requerida información específica para procesar algún pedido o realizar una entrega o facturación.`,
		],
		updated: '2021-10-10',
	};

	return (
		<main>
			<Box>
				<Typography variant='h1'>Aviso de privacidad</Typography>
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
							placeholder='Este aviso de privacidad establece...'
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
						<Typography variant='h1'>Aviso de privacidad</Typography>
					</Grid>
					<Grid xs={12}>
						<Typography variant='caption'>
							{aviso?.updated != null &&
								`ultima actualizacion: ${aviso.updated}`}
						</Typography>
					</Grid>
					<Grid xs={12}>
						{aviso?.text.map((parrafo, index) => (
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
