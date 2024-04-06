'use client';
import { leerExcel } from '@/app/components/atoms/ExceltoData';
import { AlertFloat, CardAdmin } from '@/app/components/molecules';
import { Box, Stack, Typography, Button, Backdrop } from '@mui/material';
import { useRef, useState } from 'react';
import { AccordionFAQ, BreadCrumb } from '@/app/components/atoms';
import { type Faq } from '@/entities';
import { updateFAQS } from '@/firebase';

export default function EditsFAQsPage(): JSX.Element {
	const [fileData, setfileData] = useState<Faq[] | null>(null);
	const fileInputRef = useRef<HTMLInputElement | null>(null);
	const [isVisible, setisVisible] = useState(false);
	const [ShowAlert, setShowAlert] = useState(false);
	const [ShowError, setShowError] = useState(false);
	const [ErrorText, setErrorText] = useState(
		'Error al actualizar las preguntas frecuentes',
	);
	const [isUploading, setisUploading] = useState(false);

	const DownloadExcel = (): void => {
		const fileUrl = '/ExcelTemplate/ExcelTemplate.xlsx';

		fetch(fileUrl)
			.then(async response => await response.blob())
			.then(blob => {
				// Crea un enlace temporal
				const downloadLink = document.createElement('a');
				const url = window.URL.createObjectURL(blob);

				downloadLink.href = url;
				downloadLink.download = 'ExcelTemplate.xlsx';

				// Agrega el enlace al documento
				document.body.appendChild(downloadLink);

				// Inicia la descarga
				downloadLink.click();

				// Elimina el enlace del documento
				document.body.removeChild(downloadLink);

				// Liberar recursos
				window.URL.revokeObjectURL(url);

				console.log('Descargando Excel');
			})
			.catch(error => {
				console.error('Error al descargar el archivo', error);
			});
	};

	const MapFaqs = async (): Promise<void> => {
		if (fileInputRef.current != null) {
			// Dispara el evento de clic en el input de tipo file
			fileInputRef.current.click();
		}
	};

	const handleFileChange = async (
		event: React.ChangeEvent<HTMLInputElement>,
	): Promise<void> => {
		const file = event.target.files?.[0];
		if (file == null) return;
		const data = await leerExcel(file);
		setfileData(data);
		setisVisible(true);
	};
	const upDateFaqs = async (): Promise<void> => {
		if (fileData != null && fileData.length > 1) {
			// Verificar si alguna pregunta o respuesta está vacía
			const hasEmptyData = fileData
				.slice(1)
				.some(faq => faq.question.length === 0 || faq.answer.length === 0);

			if (!hasEmptyData) {
				try {
					await updateFAQS(fileData.slice(1));
					setisUploading(false);
					setShowAlert(true);
				} catch (error) {
					console.error('Error al actualizar las preguntas frecuentes:', error);
					setShowError(true);
					setErrorText('Error al actualizar las preguntas frecuentes:');
				}
			} else {
				console.error('No se pueden subir preguntas frecuentes vacías');
				setShowError(true);
				setErrorText('No se pueden subir preguntas frecuentes vacías');
			}
		} else {
			console.error('No hay datos para actualizar');
			setShowError(true);
			setErrorText('No hay datos para actualizar');
		}
	};

	return (
		<main>
			<Stack spacing={2}>
				<Typography variant='h1'>Preguntas Frecuentes</Typography>
				<BreadCrumb />
				<Box
					display={{ sx: '', md: 'flex' }}
					justifyContent={'space-around'}
					width={'100%'}
					sx={{ borderBottom: `1px solid #000` }}
					pb={3}
				>
					<CardAdmin
						dashboardText={'Descargar'}
						captionText='Descarga el formato del Excel'
						onClick={DownloadExcel}
					/>
					<Box p={2} />
					<CardAdmin
						dashboardText={'Subir'}
						captionText='Subir el Excel completado'
						onClick={MapFaqs}
					/>
					{/* Input de tipo file oculto */}
					<input
						type='file'
						ref={fileInputRef}
						style={{ display: 'none' }}
						onChange={
							handleFileChange as (
								event: React.ChangeEvent<HTMLInputElement>,
							) => void
						}
						accept='.xls,.xlsx'
					/>
				</Box>
				{isVisible && (
					<Button
						onClick={() => {
							setisUploading(true);
							void upDateFaqs();
							setisVisible(false);
						}}
						variant='contained'
					>
						Guardar Cambios
					</Button>
				)}
				{fileData?.slice(1).map((faq, index) => {
					return (
						<AccordionFAQ
							key={index}
							title={faq.question?.toString() ?? ''}
							description={faq.answer?.toString() ?? ''}
						/>
					);
				})}
				<AlertFloat
					text={'Se guardaron correctamente'}
					open={ShowAlert}
					type='success'
					handleClose={() => {
						setShowAlert(false);
					}}
				/>
				<AlertFloat
					text={ErrorText}
					open={ShowError}
					type='error'
					handleClose={() => {
						setShowError(false);
					}}
				/>
				<Backdrop open={isUploading} />
			</Stack>
		</main>
	);
}
