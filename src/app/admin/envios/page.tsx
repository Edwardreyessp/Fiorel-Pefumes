'use client';
import {
	BreadCrumb,
	ButtonPrimary,
	Datepicker,
	DrawerOrden,
	IconFilter,
} from '@/app/components/atoms';
import { Newsletter } from '@/app/components/molecules';
import {
	CardOrder,
	type StatusOption,
	type CardOrderProps,
} from '@/app/components/organisms';
import { type Perfume } from '@/entities';
import { Grid, IconButton, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';
import { type ChangeEvent, useEffect, useState } from 'react';

export default function ShipmentsPage(): JSX.Element {
	const [open, setOpen] = useState(false);
	return (
		<main>
			<Grid container paddingTop={'35px'} px={{ xs: '5%', md: '15%' }}>
				<Grid my={2} xs={11}>
					<Typography variant='h1'>Envíos</Typography>
				</Grid>
				<Grid my={2} xs={1}>
					<IconButton
						aria-label='filter'
						onClick={() => {
							setOpen(true);
						}}
					>
						<IconFilter />
					</IconButton>
					<DrawerOrden
						isOpen={open}
						onClose={() => {
							setOpen(false);
						}}
						radioOptions={[
							{ value: '1', label: 'Option 1', disabled: false },
							{ value: '2', label: 'Option 2', disabled: false },
							{ value: '3', label: 'Option 3', disabled: false },
						]}
						isFilter={true}
					/>
				</Grid>
				<Grid marginBottom={2} xs={12}>
					<BreadCrumb />
				</Grid>
				<RenderEnvios />
			</Grid>
		</main>
	);
}

const RenderEnvios = (): JSX.Element => {
	// usestate para el estado de las ordenes
	const [orders, setOrders] = useState<CardOrderProps[]>([]);
	const [orderUno, setOrderUno] = useState<StatusOption>('En camino');
	const [orderDos, setOrderDos] = useState<StatusOption>('En preparación');
	const [fecha, setFecha] = useState<dayjs.Dayjs>(dayjs());

	const router = useRouter();
	useEffect(() => {
		// Fetch data
		setOrders(ordenes);
	}, []);

	const perfumeUno: Perfume = {
		_id: '1',
		name: 'Sauvage',
		brand: 'Dior',
		description: 'Eau de Parfum',
		sells: 100,
		price: 1500,
		discount: 0,
		essence: {
			id: '1',
			name: 'Citrico',
			icon: 'citrico',
		},
		status: 'published',
		stock: 10,
		images: [''],
		slug: 'sauvage',

		gender: 'Hombre',
		family: 'familia',
		notes: ['note'],
		createdAt: dayjs('2018-08-08'),
	};

	const ordenes: CardOrderProps[] = [
		{
			orderId: '123456',
			address: 'Calle 123, Colonia Centro, CDMX',
			date: 'Hace 2 horas',
			option: orderUno,
			setOption: setOrderUno,
			perfumes: [perfumeUno],
		},
		{
			orderId: '123457',
			address: 'Calle 456, Colonia Centro, CDMX',
			date: 'Hace 3 horas',
			option: orderDos,
			setOption: setOrderDos,
			perfumes: [perfumeUno],
		},
	];

	return (
		<main>
			<>
				{orders.length > 0 ? (
					<>
						<Grid py={3} container spacing={2}>
							<Grid xs={12} md={6} marginBottom={2}>
								<Datepicker value={fecha} setValue={setFecha} />
							</Grid>
							<Grid xs={12} marginBottom={1} md={6}>
								<Newsletter
									labelInput='# de orden'
									labelButton='Buscar'
									idInput={''}
									handleChange={function (
										event: ChangeEvent<HTMLInputElement>,
									): void {
										throw new Error('Function not implemented.');
									}}
									handleSubmit={function (): void {
										throw new Error('Function not implemented.');
									}}
								/>
							</Grid>

							{orders.map(order => (
								<Grid key={order.orderId} xs={12} marginBottom={2}>
									<CardOrder {...order} />
								</Grid>
							))}
						</Grid>
					</>
				) : (
					<>
						<Typography py={3} variant='h1'>
							¿Por el momento no hay envíos pendientes?
						</Typography>
						<Typography paddingBottom={3} variant='body1'>
							No dudes en compartir una oferta especial con ellos y fomentar las
							compras con envío a domicilio ¡Vamos por más clientes satisfechos!
						</Typography>
						<ButtonPrimary
							text='Ofrecer descuento'
							onClick={() => {
								router.push('/admin/promociones');
							}}
						/>
					</>
				)}
			</>
		</main>
	);
};
