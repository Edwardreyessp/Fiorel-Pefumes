'use client';
import { IconButton, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useCallback, useState } from 'react';
import { type DropzoneRootProps, useDropzone } from 'react-dropzone';
import { IconAddImage } from '../atoms';
import { HoverImage } from './HoverImages';

interface DragAndDropProps {
	caption?: string;
	widthXheight?: string;
	imageWidth?: number;
	imageHeight?: number;
	limit?: number;
}

export const DragAndDrop = ({
	caption = 'Arrastrar o seleccionar imagen',
	widthXheight = '1000px por 1000px',
	imageWidth = 100,
	imageHeight = 100,
	limit = 1,
}: DragAndDropProps): JSX.Element => {
	const [acceptedFiles, setAcceptedFiles] = useState<File[]>([]);
	const onDrop = useCallback<(acceptedFiles: File[]) => void>(acceptedFiles => {
		setAcceptedFiles(prevFiles => [...prevFiles, ...acceptedFiles]);
		// TODO: Upload files to server
	}, []);
	const {
		getRootProps,
		isDragActive,
	}: {
		getRootProps: <T extends DropzoneRootProps>(props?: T) => T;
		isDragActive: boolean;
	} = useDropzone({ onDrop });

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		const formData = new FormData();
		console.log(formData);
	};

	const handleDelete = (index: number): void => {
		const newFiles = acceptedFiles.filter((_, i) => i !== index);
		setAcceptedFiles(newFiles);
	};

	return (
		<form onSubmit={handleSubmit}>
			{acceptedFiles.length !== 0 ? (
				<Grid
					container
					xs={12}
					width={'100%'}
					display={'flex'}
					flexDirection={'row'}
					alignItems={'center'}
					overflow={'clip'}
					gap={2}
					px={{ xs: 2, sm: 4 }}
				>
					{acceptedFiles.map((file, index) => (
						<Grid key={index}>
							<HoverImage
								image={URL.createObjectURL(file)}
								imageWidth={imageWidth}
								imageHeight={imageHeight}
								handleDelete={() => {
									handleDelete(index);
								}}
							/>
						</Grid>
					))}
					{acceptedFiles.length < limit && (
						<Grid
							container
							{...getRootProps()}
							style={{
								padding: '20px',
								border: isDragActive
									? '2px dashed #B2CD27'
									: '2px dashed #71717A',
								borderRadius: '4px',
							}}
						>
							{isDragActive ? (
								<Typography>Drop the files here ...</Typography>
							) : (
								<>
									<Grid display={'grid'} justifyContent={'center'} xs={12}>
										<IconButton>
											<IconAddImage color='#B2CD27' width='52' />
										</IconButton>
									</Grid>
									<Grid display={'grid'} justifyContent={'center'} xs={12}>
										<Typography align='center' variant='caption'>
											{caption}
										</Typography>
									</Grid>
									<Grid display={'grid'} justifyContent={'center'} xs={12}>
										<Typography variant='caption'>{widthXheight}</Typography>
									</Grid>
								</>
							)}
						</Grid>
					)}
				</Grid>
			) : (
				<Grid
					container
					{...getRootProps()}
					style={{
						padding: '20px',
						border: isDragActive ? '2px dashed #B2CD27' : '2px dashed #71717A',
						borderRadius: '4px',
					}}
					mx={{ xs: 2, sm: 4 }}
				>
					{isDragActive ? (
						<Typography>Drop the files here ...</Typography>
					) : (
						<>
							<Grid display={'grid'} justifyContent={'center'} xs={12}>
								<IconButton>
									<IconAddImage color='#B2CD27' width='52' />
								</IconButton>
							</Grid>
							<Grid display={'grid'} justifyContent={'center'} xs={12}>
								<Typography align='center' variant='caption'>
									{caption}
								</Typography>
							</Grid>
							<Grid display={'grid'} justifyContent={'center'} xs={12}>
								<Typography variant='caption'>{widthXheight}</Typography>
							</Grid>
						</>
					)}
				</Grid>
			)}
		</form>
	);
};
