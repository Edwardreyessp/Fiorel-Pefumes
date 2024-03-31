'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import { BreadCrumb, ButtonSecondary, IconAdd } from '@/app/components/atoms';
import { CardCoupon, type Coupon } from '@/app/components/molecules';

export default function PromotionsPage(): JSX.Element {
	const [promos, setPromos] = useState<Coupon[]>([]);
	const router = useRouter();

	useEffect(() => {
		// fetch('http://localhost:3000/api/promotions')
		// 	.then(response => response.json())
		// 	.then(data => {
		// 		setPromos(data);
		// 	});
		setPromos(coupons);
	}, []);

	const handleClick = (): void => {
		router.push('/admin/promociones/crear');
	};

	const handleEdit = (id: string): void => {
		console.log('edit', id);
		// router.push(`/admin/promociones/editar/${id}`);
		router.push(`/admin/promociones/editar/`);
	};

	const handleDelete = (id: string): void => {
		console.log('delete', id);
	};

	const coupons: Coupon[] = [
		{
			id: '1',
			code: '1234',
			discount: 10,
			expiryDate: '2021-12-12',
			createdAt: '2021-11-12',
		},
		{
			id: '2',
			code: '5678',
			discount: 20,
			expiryDate: '2021-12-12',
			createdAt: '2021-11-12',
		},
		{
			id: '3',
			code: '91011',
			discount: 30,
			expiryDate: '2021-12-12',
			createdAt: '2021-11-12',
		},
		{
			id: '3',
			code: '91011',
			discount: 30,
			expiryDate: '2021-12-12',
			createdAt: '2021-11-12',
		},
		{
			id: '3',
			code: '91011',
			discount: 30,
			expiryDate: '2021-12-12',
			createdAt: '2021-11-12',
		},
	];

	return (
		<main>
			<Box paddingTop={'35px'} >
				<Typography paddingBottom={3} variant='h1'>
					Promociones
				</Typography>
				<BreadCrumb />
				{promos.length === 0 && (
					<Typography marginTop={3} variant='body1'>
						Por el momento no hay cupones, créalos y has conocer a tus clientes
						las ofertas de tus ventas
					</Typography>
				)}
				<Grid container>
					<Grid py={4} xs={12}>
						<ButtonSecondary
							text=''
							endIcon={<IconAdd />}
							onClick={handleClick}
						/>
					</Grid>
					<Grid container xs={12}>
						{promos.map((promo, index) => (
							<Grid
								xs={12}
								lg={6}
								xl={4}
								my={2}
								display={'flex'}
								flexDirection={'row'}
								justifyContent={'center'}
								key={index}
							>
								<CardCoupon
									coupon={promo}
									onEdit={() => {
										handleEdit(promo.id);
									}}
									onDelete={() => {
										handleDelete(promo.id);
									}}
								/>
							</Grid>
						))}
					</Grid>
				</Grid>
			</Box>
		</main>
	);
}
