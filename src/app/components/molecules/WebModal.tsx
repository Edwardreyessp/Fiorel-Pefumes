'use client';
import {
	Box,
	Dialog,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Typography,
} from '@mui/material';
import Image from 'next/image';
import {
	ButtonPrimary,
	ButtonSecondary,
	IconCheck,
	IconClose,
	IconWarning,
} from '../atoms';

interface WebModalProps {
	open: boolean;
	title: string;
	description: string;
	closeText: string;
	handleClose: () => void;
	agreeText?: string;
	handleAgree?: () => void;
	legend?: string;
	type?: 'info' | 'warning' | 'error' | 'success';
}

export const WebModal = ({
	open,
	title,
	description,
	closeText,
	handleClose,
	agreeText,
	handleAgree,
	legend,
	type = 'info',
}: WebModalProps): JSX.Element => {
	return (
		<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby='alert-dialog-title'
			aria-describedby='alert-dialog-description'
			sx={{ textAlign: 'center', zIndex: 990 }}
		>
			<DialogTitle
				id='alert-dialog-title'
				sx={{ maxWidth: 464, minWidth: 336 }}
			>
				<Box
					display='flex'
					justifyContent='end'
					onClick={handleClose}
					sx={{ cursor: 'pointer' }}
				>
					<IconClose />
				</Box>
				<SelectIcon type={type} />
				<Typography variant='h1' component='div'>
					{title}
				</Typography>
			</DialogTitle>
			<DialogContent sx={{ maxWidth: 464, minWidth: 336 }}>
				<DialogContentText id='alert-dialog-description'>
					{description}
				</DialogContentText>
				<Box display='flex' gap={1} mt={2}>
					<ButtonSecondary onClick={handleClose} text={closeText} />
					{handleAgree != null && (
						<ButtonPrimary onClick={handleAgree} text={agreeText ?? 'Agree'} />
					)}
				</Box>
				<Typography variant='caption'>{legend ?? ''}</Typography>
			</DialogContent>
		</Dialog>
	);
};

const SelectIcon = ({
	type,
}: {
	type: 'info' | 'warning' | 'error' | 'success';
}): JSX.Element => {
	switch (type) {
		case 'info':
			return (
				<Image
					src='/assets/images/logo.png'
					alt='Picture of the author'
					width={300}
					height={90.38}
					style={{ marginBottom: 20 }}
				/>
			);
		case 'warning':
			return <IconWarning width='6.25rem' color='#FFC20A' />;
		case 'error':
			return <IconWarning width='6.25rem' color='#FF2828' />;
		case 'success':
			return <IconCheck width='6.25rem' color='#45D053' />;
	}
};
