'use client';
import {
	Box,
	Button,
	Divider,
	Drawer,
	Stack,
	Typography,
	useTheme,
} from '@mui/material';
import { IconClose } from '../atoms';
import { CardCart, CardEnvio } from '../molecules';
import type { CarritoItem } from '@/entities';
import { useEffect, useState } from 'react';

interface DrawerProps {
	open: boolean;
	onClose: () => void;
	items: CarritoItem[];
}

export const DrawerCart = (props: DrawerProps): JSX.Element => {
	const { open, onClose, items } = props;
	const primaryColor = useTheme().palette.primary.main;
	const [totals, setTotals] = useState({
		subTotal: 0,
		discount: 0,
	});

	useEffect(() => {
		if (items.length === 0) {
			setTotals({
				subTotal: 0,
				discount: 0,
			});
			return;
		}

		const subTotal = items.reduce((acc, item) => {
			return acc + item.item.price * item.quantity;
		}, 0);

		const discount = items.reduce((acc, item) => {
			return acc + (item.item.price - item.item.discount) * item.quantity;
		}, 0);

		setTotals({
			subTotal: subTotal - discount,
			discount,
		});
	}, [items]);

	return (
		<Drawer open={open} onClose={onClose} anchor='right'>
			<Box width='400px' display='flex' p={2}>
				<Typography flex={1} textAlign='center' variant='body2'>
					TU CARRITO
				</Typography>
				<Box onClick={onClose} sx={{ cursor: 'pointer' }} height='24px'>
					<IconClose />
				</Box>
			</Box>

			<Divider sx={{ background: primaryColor, height: 2 }} />

			<Stack flex={1} spacing={2} alignItems='center' py={2}>
				<CardEnvio montoActual={totals.subTotal} />
				<Stack spacing={2} width='100%' alignItems='center'>
					{items.length === 0 ? (
						<Typography variant='button' textAlign='center'>
							No hay productos en el carrito
						</Typography>
					) : (
						items.map(item => (
							<CardCart
								key={item.item._id}
								// item={item} // * Solo se debería pasar el item
								id={item.item._id}
								name={item.item.name}
								price={item.item.price}
								discount={item.item.discount}
								image={item.item.images[0]}
								quantity={item.quantity}
								handleRemove={() => {}}
								handleAdd={() => {}}
								handleSubtract={() => {}}
							/>
						))
					)}
				</Stack>
			</Stack>

			<Divider sx={{ background: 'black' }} />

			{items.length > 0 && (
				<Stack spacing={2} p={2}>
					<Typography variant='button'>
						Descuento: ${totals.discount}
					</Typography>
					<Typography variant='button'>Subtotal: ${totals.subTotal}</Typography>
					<Button variant='contained' color='secondary'>
						Finalizar Compra
					</Button>
				</Stack>
			)}
		</Drawer>
	);
};
