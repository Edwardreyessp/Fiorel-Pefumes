'use client';
import { useState } from 'react';
import { Box, InputBase } from '@mui/material';
import { IconAdd, IconMinus } from '.';

interface Props {
	idProduct: string;
}

export const QuantityProduct = ({ idProduct }: Props): JSX.Element => {
	const [count, setCount] = useState(1); // Obtener cuenta del idProduct en carro de compras

	const handleAdd = (): void => {
		setCount(count + 1); // TODO: Agregar al carro de compras
	};

	const handleMinus = (): void => {
		if (count > 1) {
			setCount(count - 1);
		}
	};

	const handleInputChange = (
		event: React.ChangeEvent<HTMLInputElement>,
	): void => {
		const value = parseInt(event.target.value);
		if (!isNaN(value) && value >= 1) {
			setCount(value);
		}
	};

	return (
		<Box display='flex' alignItems='center' gap={'10px'}>
			<Box onClick={handleMinus} height='24px' sx={{ cursor: 'pointer' }}>
				<IconMinus />
			</Box>
			<InputBase
				placeholder='1'
				type='number'
				sx={{ width: 20.5 }}
				value={count}
				onChange={handleInputChange}
				inputProps={{
					style: {
						textAlign: 'center',
						fontFamily: 'Gothic A1',
						fontSize: '1rem',
						lineHeight: '1.5rem',
					},
				}}
			/>
			<Box onClick={handleAdd} height='24px' sx={{ cursor: 'pointer' }}>
				<IconAdd />
			</Box>
		</Box>
	);
};
