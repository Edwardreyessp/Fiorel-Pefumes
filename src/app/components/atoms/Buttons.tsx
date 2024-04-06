'use client';
import { Button } from '@mui/material';
import type { SxProps } from '@mui/system';
import { cloneElement } from 'react';

interface ButtonProps {
	text: string;
	startIcon?: JSX.Element;
	endIcon?: JSX.Element;
	onClick: () => void
}

export const ButtonPrimary = ({
	text,
	startIcon,
	endIcon,
	onClick,
}: ButtonProps): JSX.Element => {
	return (
		<Button
			fullWidth
			startIcon={startIcon}
			endIcon={endIcon}
			onClick={onClick}
			variant='contained'
		>
			{text}
		</Button>
	);
};

export const ButtonSecondary = ({
	text,
	startIcon = undefined, // Por defecto, el ícono será negro
	endIcon = undefined,
	onClick,
}: ButtonProps): JSX.Element => {
	return (
		<Button
			fullWidth
			startIcon={
				startIcon !== undefined
					? cloneElement(startIcon, { color: 'white' })
					: undefined
			}
			endIcon={
				endIcon !== undefined
					? cloneElement(endIcon, { color: 'white' })
					: undefined
			}
			onClick={onClick}
			variant='contained'
			color='secondary'
		>
			{text}
		</Button>
	);
};

export const ButtonInput = ({
	text,
	startIcon = undefined, // Por defecto, el ícono será negro
	endIcon = undefined,
	onClick,
}: ButtonProps): JSX.Element => {
	const buttonStyles: SxProps = {
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,
		height: "100%"
	};

	return (
		<Button
			fullWidth
			sx={buttonStyles}
			startIcon={
				startIcon !== undefined
					? cloneElement(startIcon, { color: 'white' })
					: undefined
			}
			endIcon={
				endIcon !== undefined
					? cloneElement(endIcon, { color: 'white' })
					: undefined
			}
			onClick={onClick}
			variant='contained'
			color='secondary'
		>
			{text}
		</Button>
	);
};

export const ButtonHome = ({ text, onClick }: ButtonProps): JSX.Element => {
	return (
		<Button
			fullWidth
			sx={{ borderRadius: 0 }}
			variant='contained'
			color='secondary'
			onClick={onClick}
		>
			{text}
		</Button>
	);
};
