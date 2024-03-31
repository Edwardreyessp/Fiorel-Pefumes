'use client';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { Discount, IconTrash, QuantityProduct } from '../atoms';
import { useState } from 'react';
import type { SxProps } from '@mui/system';

interface CardCartProps {
	id: string;
	name: string;
	price: number;
	discount?: number;
	image: string;
	quantity: number;
	handleRemove: (id: string) => void;
	handleAdd: (id: string) => void;
	handleSubtract: (id: string) => void;
}

export const CardCart = ({
	id,
	name,
	price,
	discount,
	image,
	quantity,
	handleRemove,
	handleAdd,
	handleSubtract,
}: CardCartProps): JSX.Element => {
	const [hover, setHover] = useState(false);

	const handleRemoveProduct = (): void => {
		handleRemove(id);
	};

	const handleHover = (): void => {
		setHover(true);
	};

	const handleLeave = (): void => {
		setHover(false);
	};

	const cardProps: SxProps = {
		display: 'flex',
		gap: '20px',
		alignItems: 'center',
		border: '0.019em solid #999999',
		borderRadius: '4px',
		padding: '10px',
		width: '100%',
		maxWidth: '355px',
	};

	return (
		<Box sx={cardProps}>
			<Image
				src={image}
				alt={name}
				width={75}
				height={75}
				style={{ borderRadius: '4px' }}
			/>
			<Box flex={1}>
				<Box display='flex' gap='10px' justifyContent='center'>
					<Typography
						flex={1}
						variant='subtitle2'
						noWrap
						sx={{
							overflow: 'hidden',
							textOverflow: 'ellipsis',
							maxWidth: '200px',
						}}
					>
						{name}
					</Typography>
					<Box
						onMouseEnter={handleHover}
						onMouseLeave={handleLeave}
						onClick={handleRemoveProduct}
						sx={{ cursor: 'pointer' }}
						display='flex'
						alignItems='center'
					>
						<IconTrash color={hover ? '#ff0000' : '#000000'} />
					</Box>
				</Box>
				<Box
					display='flex'
					gap='20px'
					justifyContent='space-between'
					mt={1}
					mr={0.4}
				>
					<QuantityProduct idProduct='' />
					<Discount discount={discount} price={price} />
				</Box>
			</Box>
		</Box>
	);
};
