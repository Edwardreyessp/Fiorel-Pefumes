'use client';
import { IconButton, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { IconAddImage } from '../atoms';

interface DragAndDropProps {
	size: string;
	imageWidth: number;
}

export const DragAndDrop = ({
	size,
	imageWidth,
}: DragAndDropProps): JSX.Element => {
	const onDrop = useCallback<(acceptedFiles: File[]) => void>(acceptedFiles => {
		console.log(acceptedFiles[0]);
		// Do something with the files
	}, []);
	const {
		isDragActive,
		acceptedFiles,
	}: {
		isDragActive: boolean;
		acceptedFiles: File[];
	} = useDropzone({ onDrop });

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		const formData = new FormData();
		console.log(formData);
	};

	return (
		<form onSubmit={handleSubmit}>
			{acceptedFiles.length !== 0 ? (
				<img // Change this to a HoverImage component
					src={URL.createObjectURL(acceptedFiles[0])}
					alt=''
					style={{
						width: imageWidth + 'px',
					}}
				/>
			) : (
				<Grid
					container
					style={{
						padding: '20px',
						border: isDragActive ? '2px dashed #B2CD27' : '2px dashed #71717A',
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
									Arrastra y suelta un archivo
								</Typography>
							</Grid>
							<Grid display={'grid'} justifyContent={'center'} xs={12}>
								<Typography variant='caption'>({size})</Typography>
							</Grid>
						</>
					)}
				</Grid>
			)}
		</form>
	);
};
