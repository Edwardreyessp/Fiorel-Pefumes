'use client';
import { Box, Typography, useTheme } from '@mui/material';
import type { SxProps } from '@mui/material';
import type { PerfumeEssence } from '@/entities';

export interface Props {
	essence: PerfumeEssence;
	type?: 'category' | 'primary' | 'secondary';
}

interface TagProps {
	text: string;
	type: 'category' | 'primary' | 'secondary';
}

export const SimpleTag = ({ text, type }: TagProps): JSX.Element => {
	const colorMap = {
		category: '#E33D6F',
		primary: useTheme().palette.primary.main,
		secondary: 'secondary.main',
	};

	const tagProps: SxProps = {
		borderRadius: '4px',
		backgroundColor: colorMap[type],
		p: '8px 16px',
		width: 'fit-content',
	};

	return (
		<Box sx={tagProps} textAlign='center'>
			<Typography color='white'>{text}</Typography>
		</Box>
	);
};
