'use client';
import { Box, Card, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { IconEdit, IconTrash } from '../atoms';
import { useState } from 'react';
import type { Perfume } from '@/entities';

interface CardInventarioProps {
	perfume: Perfume;
	IconEditFuction: () => void;
	IconTrashFuction: () => void;
}

export const CardInventario = ({
	perfume,
	IconEditFuction,
	IconTrashFuction,
}: CardInventarioProps): JSX.Element => {
	const [isHovered, setIsHovered] = useState(false);
	const [isHovered2, setIsHovered2] = useState(false);
	const { name, stock, status, images, sells } = perfume;

	const statusMap = {
		published: '1px solid #45D053',
		draft: '1px solid #FFC20A',
	};

	return (
		<Card
			sx={{
				display: 'flex',
				width: '100%',
				height: '150',
				alignItems: 'center',
				justifyContent: 'space-between',
				p: 2,
				border: statusMap[status] ?? '1px solid #FF2828',
				gap: 2,
			}}
		>
			<Image src={images[0]} alt='Imagen producto' width={100} height={100} />
			<Stack spacing={1} width='100%'>
				<Typography variant='body2'>{name}</Typography>
				<Stack>
					<Typography variant='caption'>En stock: {stock}</Typography>
					<Typography variant='caption'>Ventas: {sells}</Typography>
				</Stack>
			</Stack>
			<Box
				display={'flex'}
				flexDirection={'column'}
				justifyContent={'space-between'}
				height={'100px'}
			>
				{' '}
				{/* Ajusta la altura al 100% */}
				<Box
					height={24}
					onClick={IconEditFuction}
					onPointerDown={e => {
						e.preventDefault();
					}}
					sx={{ cursor: 'pointer' }}
					onMouseEnter={() => {
						setIsHovered(true);
					}}
					onMouseLeave={() => {
						setIsHovered(false);
					}}
				>
					<IconEdit color={isHovered ? '#000000' : '#999999'} />
				</Box>
				<Box
					height={24}
					onClick={IconTrashFuction}
					onPointerDown={e => {
						e.preventDefault();
					}}
					sx={{ cursor: 'pointer' }}
					onMouseEnter={() => {
						setIsHovered2(true);
					}}
					onMouseLeave={() => {
						setIsHovered2(false);
					}}
				>
					<IconTrash color={isHovered2 ? '#FF2828' : '#999999'} />
				</Box>
			</Box>
		</Card>
	);
};
