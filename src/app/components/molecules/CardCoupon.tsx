'use client';
import { Box, Stack, Typography } from '@mui/material';
import { IconEdit, IconTrash } from '../atoms';
import { useState } from 'react';

interface CardCouponProps {
	coupon: Coupon;
	onEdit: () => void;
	onDelete: () => void;
}

export interface Coupon {
	id: string;
	code: string;
	discount: number;
	expiryDate: string;
	createdAt: string;
}

export const CardCoupon = ({
	coupon,
	onEdit,
	onDelete,
}: CardCouponProps): JSX.Element => {
	const { code, discount, expiryDate, createdAt } = coupon;
	const [hover, setHover] = useState<'edit' | 'trash' | null>(null);

	const handleMouseEnter = (type: 'edit' | 'trash'): void => {
		setHover(type);
	};

	const handleMouseLeave = (): void => {
		setHover(null);
	};

	const handleIconClick = (action: 'edit' | 'delete'): void => {
		if (action === 'edit') {
			onEdit();
		} else if (action === 'delete') {
			onDelete();
		}
	};

	const boxStyle = {
		display: 'flex',
		gap: 2,
		border: 'solid 1px',
		p: 2,
		borderRadius: '4px',
		width: '283px',
		justifyContent: 'space-between',
	};

	return (
		<Box sx={boxStyle}>
			<>
				<Box>
					<Box display='flex' gap={1}>
						<Typography
							sx={{
								maxWidth: 150,
								overflow: 'hidden',
								textOverflow: 'ellipsis',
							}}
							noWrap
							variant='body2'
						>
							{code}
						</Typography>
						<Typography variant='body2' color='primary'>
							{discount}%
						</Typography>
					</Box>
					<Box>
						<Typography variant='caption'>
							{createdAt} - {expiryDate}
						</Typography>
					</Box>
				</Box>
				<Stack spacing={1}>
					<Box
						height='24px'
						onMouseEnter={() => {
							handleMouseEnter('edit');
						}}
						onMouseLeave={handleMouseLeave}
						onClick={() => {
							handleIconClick('edit');
						}}
					>
						<IconEdit color={hover === 'edit' ? '#000000' : '#999999'} />
					</Box>
					<Box
						height='24px'
						onMouseEnter={() => {
							handleMouseEnter('trash');
						}}
						onMouseLeave={handleMouseLeave}
						onClick={() => {
							handleIconClick('delete');
						}}
					>
						<IconTrash color={hover === 'trash' ? '#FF2828' : '#999999'} />
					</Box>
				</Stack>
			</>
		</Box>
	);
};
