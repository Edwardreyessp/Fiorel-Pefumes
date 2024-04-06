'use client';
import { putPrivacy, getPrivacy } from '@/firebase';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const PrivacityPage = (): JSX.Element => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(true);
	const [textProps, setTextProps] = useState({
		isEditing: false,
		text: 'Aviso de privacidad',
		content: 'Aviso de privacidad',
		updateAt: '2021-10-10',
	});

	useEffect(() => {
		const fetchData = async (): Promise<void> => {
			const privacy = await getPrivacy();
			setTextProps(prev => ({ ...prev, ...privacy, text: privacy.content }));
			setIsLoading(false);
		};
		fetchData().catch(console.error);
	}, []);

	const handleEdit = (): void => {
		setTextProps({ ...textProps, isEditing: true });
	};

	const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setTextProps({ ...textProps, text: e.target.value });
	};

	const onSave = async (): Promise<void> => {
		await putPrivacy(textProps.text);
		setTextProps({ ...textProps, isEditing: false, content: textProps.text });
		router.refresh();
	};

	const onCancel = (): void => {
		setTextProps({
			...textProps,
			isEditing: false,
			text: textProps.content,
		});
	};

	if (isLoading) {
		return <Typography>Loading...</Typography>;
	}

	return (
		<Stack spacing={2}>
			<Box display='flex' gap={4} alignItems='center'>
				<Typography variant='h1'>Aviso de privacidad</Typography>
				{!textProps.isEditing ? (
					<Button variant='contained' sx={{ mt: '4px' }} onClick={handleEdit}>
						Editar
					</Button>
				) : (
					<>
						<Button
							variant='contained'
							color='secondary'
							sx={{ mt: '4px' }}
							onClick={onCancel}
						>
							Cancelar
						</Button>
						<Button
							variant='contained'
							onClick={() => {
								onSave().catch(console.error);
							}}
							sx={{ mt: '4px' }}
						>
							Guardar
						</Button>
					</>
				)}
			</Box>
			<Typography variant='caption'>
				Última actualización: {textProps.updateAt}
			</Typography>
			{!textProps.isEditing ? (
				<Typography sx={{ whiteSpace: 'pre-line' }}>
					{textProps.content}
				</Typography>
			) : (
				<TextField
					multiline
					rows={10}
					value={textProps.text}
					onChange={onChange}
				/>
			)}
		</Stack>
	);
};

export default PrivacityPage;
