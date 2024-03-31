import { Box, Typography, Alert, Snackbar } from '@mui/material';
import { cloneElement } from 'react';

interface InputAlertProps {
	message: string;
}

export const InputAlert = ({ message }: InputAlertProps): JSX.Element => {
	return (
		<Box
			sx={{
				background: 'rgba(255, 40, 40, .17)',
				border: '#FF2828 2px solid',
				textAlign: 'center',
				padding: '10px 12px',
			}}
		>
			<Typography variant='button' color='error'>
				{message}
			</Typography>
		</Box>
	);
};

interface AlertFloatProps {
	text: string;
	open: boolean;
	handleClose: () => void;
	type?: 'error' | 'warning' | 'info' | 'success';
	icon?: JSX.Element;
}

export const AlertFloat = ({
	text,
	open,
	handleClose,
	type = 'info',
	icon,
}: AlertFloatProps): JSX.Element => {
	return (
		<Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
			<Alert
				variant='filled'
				severity={type}
				sx={{
					bgcolor: type === 'info' ? 'secondary.main' : type,
					display: 'flex',
					alignItems: 'center',
				}}
				icon={
					icon !== undefined
						? cloneElement(icon, {
								color: type === 'success' ? 'black' : 'white',
							})
						: icon
				}
			>
				<Typography mb='-5px'>{text}</Typography>
			</Alert>
		</Snackbar>
	);
};
