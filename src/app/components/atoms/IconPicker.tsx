'use client';
import { Box, useTheme, type SxProps } from '@mui/material';
import { cloneElement } from 'react';
import { GetIcon } from '.';

export interface IconPickerElement {
	icon: string;
	onClick: () => void;
	isSelected: boolean;
}

export const IconPicker = (iconPicker: IconPickerElement): JSX.Element => {
	const { icon, onClick, isSelected } = iconPicker;
	const primary = useTheme().palette.primary.main;

	const styleBox: SxProps = {
		display: 'grid',
		placeItems: 'center',
		border: isSelected ? '1px solid ' + primary : 'none',
		width: '40px',
		height: '40px',
		background: '#F4F4F5',
		borderRadius: '4px',
		cursor: 'pointer',
	};

	return (
		<Box sx={styleBox} onClick={onClick}>
			{cloneElement(GetIcon(icon), {
				color: isSelected ? primary : '#000000',
			})}
		</Box>
	);
};
