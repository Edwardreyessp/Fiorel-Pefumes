'use client';
import { type Order, type Perfume } from '@/entities';
import {
	Box,
	Stack,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
	useTheme,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { perfumes } from '../utils/perfumes';
import { CardProduct } from '../molecules';

export function OrdersEmpty(): JSX.Element {
	const [Recomendations] = useState<Perfume[]>(perfumes);

	useEffect(() => {
		// Endpoint to get recomendations
	}, []);

	return (
		<Stack spacing={2} width={'70vw'}>
			<Typography width={'270px'}>Aún no has hecho ningún pedido</Typography>
			<Typography width={'270px'} variant='body2' color={'#413EEC'}>
				¿Quieres ver nuestros productos?
			</Typography>
			<Box display={'flex'} justifyContent={'space-evenly'}>
				{Recomendations.slice(0, 4).map(perfume => (
					<CardProduct key={perfume.id} perfume={perfume} />
				))}
			</Box>
		</Stack>
	);
}

export function HaverOrders(): JSX.Element {
	const color = useTheme().palette.primary.main;
	const [hoveredOrderId, setHoveredOrderId] = useState<number | null>(null);
	const columns = ['Orden', 'Fecha', 'Estado', 'Total', ''];
	const [orders] = useState<Order[]>([
		{
			id: 1,
			products: [perfumes[0]],
			quantity: 1,
			total: 1000,
			status: 'pending',
			createdAt: new Date(),
		},
		{
			id: 2,
			products: [perfumes[1]],
			quantity: 1,
			total: 1000,
			status: 'completed',
			createdAt: new Date(),
		},
		{
			id: 3,
			products: [perfumes[2]],
			quantity: 1,
			total: 1000,
			status: 'cancelled',
			createdAt: new Date(),
		},
	]);
	const handleHover = (orderId: number): void => {
		setHoveredOrderId(orderId);
		// Enrutar a la pagina de detalles
	};

	const handleLeave = (): void => {
		setHoveredOrderId(null);
	};

	const handleDetailsClick = (orderId: number): void => {
		// Enrutar a la página de detalles
		window.location.href = '/account/' + orderId;
	};

	return (
		<TableContainer sx={{ pt: '40px', width: '70vw' }}>
			<Table>
				<TableHead>
					<TableRow sx={{ top: 0, position: 'sticky', background: '#fff' }}>
						{columns.map((column: string, index: number) => (
							<TableCell key={index} sx={{ textAlign: 'center' }}>
								<Typography variant='body2'>{column}</Typography>
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{orders.map((order: Order) => (
						<TableRow key={order.id}>
							<TableCell sx={{ textAlign: 'center' }}>
								<Typography>{order.id}</Typography>
							</TableCell>
							<TableCell sx={{ textAlign: 'center' }}>
								<Typography>{order.createdAt.toLocaleDateString()}</Typography>
							</TableCell>
							<TableCell sx={{ textAlign: 'center' }}>
								<Typography>{order.status}</Typography>
							</TableCell>
							<TableCell sx={{ textAlign: 'center' }}>
								<Typography>{order.total}</Typography>
							</TableCell>
							<TableCell
								sx={{ textAlign: 'center' }}
								onMouseEnter={() => {
									handleHover(order.id);
								}}
								onMouseLeave={handleLeave}
								onClick={() => {
									handleDetailsClick(order.id);
								}}
								style={{ cursor: 'pointer' }}
							>
								<Typography
									variant='body2'
									color={hoveredOrderId === order.id ? color : '#000000'}
								>
									Ver mas
								</Typography>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

export function DetailOrder(): JSX.Element {
	const columns = ['Nombre', 'ID', 'Cantidad', 'Precio'];
	const [perfume] = useState<Perfume[]>(perfumes);

	return (
		<TableContainer sx={{ pt: '40px', width: '70vw' }}>
			<Table>
				<TableHead>
					<TableRow sx={{ top: 0, position: 'sticky', background: '#fff' }}>
						{columns.map((column: string, index: number) => (
							<TableCell key={index} sx={{ textAlign: 'center' }}>
								<Typography variant='body2'>{column}</Typography>
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{perfume.map((perfume: Perfume) => (
						<TableRow key={perfume.id}>
							<TableCell sx={{ textAlign: 'center' }}>
								<Typography>{perfume.name}</Typography>
							</TableCell>
							<TableCell sx={{ textAlign: 'center' }}>
								<Typography>{perfume.id}</Typography>
							</TableCell>
							<TableCell sx={{ textAlign: 'center' }}>
								<Typography>{1}</Typography>
							</TableCell>
							<TableCell sx={{ textAlign: 'center' }}>
								<Typography>{perfume.price}</Typography>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
