'use client';
import { Box, Typography } from '@mui/material';

interface DiscountProps {
	discount?: number;
	price: number;
}

export const Discount = ({ discount, price }: DiscountProps): JSX.Element => {
	return (
		<Box display='flex' gap={1} mb='-5px'>
			{discount !== 0 && (
				<Typography sx={{ textDecoration: 'line-through' }} color='#999999'>
					${discount}
				</Typography>
			)}
			<Typography>${price}</Typography>
		</Box>
	);
};
