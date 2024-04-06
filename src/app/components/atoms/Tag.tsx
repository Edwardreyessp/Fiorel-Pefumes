'use client';
import { Box, Typography, useTheme } from '@mui/material';
import type { SxProps } from '@mui/material';
import { cloneElement, useContext } from 'react';
import { GetIcon } from './';
import type { PerfumeEssence } from '@/entities';
import { CategoryContext } from '@/app/admin/categorias/Provider';

export interface Props {
	essence: PerfumeEssence;
	type?: 'category' | 'primary' | 'secondary';
}

export const Tag = ({ essence, type = 'category' }: Props): JSX.Element => {
	const { setTag } = useContext(CategoryContext);

	const colorMap = {
		category: '#E33D6F',
		primary: useTheme().palette.primary.main,
		secondary: 'secondary.main',
	};

	const tagProps: SxProps = {
		borderRadius: '4px',
		backgroundColor: colorMap[type],
		display: 'flex',
		gap: 1,
		alignItems: 'center',
		p: '8px 16px',
		width: 'fit-content',
		cursor: type === 'category' ? 'pointer' : 'default',
	};

	const iconView: SxProps = {
		maxWidth: { xs: 95, sm: 500 },
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
	};

	const handleUpdateTag = (): void => {
		setTag({
			tag: essence,
			collection: 'perfumeEssences',
			method: 'PUT',
		});
	};

	return (
		<Box
			sx={tagProps}
			textAlign='center'
			onClick={type === 'category' ? handleUpdateTag : () => {}}
		>
			{type === 'category' &&
				cloneElement(GetIcon(essence.icon), { color: 'white' })}
			<Typography color='white' sx={type === 'category' ? iconView : {}}>
				{essence.name}
			</Typography>
		</Box>
	);
};

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
