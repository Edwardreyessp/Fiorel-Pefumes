'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { Box, FormControl, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import dayjs, { type Dayjs } from 'dayjs';

import {
	BreadCrumb,
	ButtonPrimary,
	ButtonSecondary,
	CouponInput,
	Datepicker,
	IconPercentage,
	Input,
} from '@/app/components/atoms';
import { type Coupon } from '@/app/components/molecules';

export default function PromotionsPage(): JSX.Element {
	const [promo, setPromo] = useState<Coupon | null>();
	const [fechaStart, setFechaStart] = useState<Dayjs>(dayjs());
	const [fechaEnd, setFechaEnd] = useState<Dayjs>(dayjs());
	const [codigoCoupon, setCodigoCoupon] = useState('');
	const router = useRouter();

	useEffect(() => {
		// fetch('http://localhost:3000/api/promotion/[id]')
		// 	.then(response => response.json())
		// 	.then(data => {
		// 		setPromos(data);
		// 	});
		setPromo(coupon);
		setFechaStart(dayjs(coupon.createdAt));
		setFechaEnd(dayjs(coupon.expiryDate));

		return () => { };
	}, []);

	const handleClick = (): void => {
		router.push('/admin/promociones/crear');
	};

	const handleCouponChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		console.log(e.target.value);
		setCodigoCoupon(e.target.value);
	};

	const handleSave = (): void => {
		console.log('save coupon: ', codigoCoupon);
		router.push('/admin/promociones');
	};

	const coupon: Coupon = {
		id: '1',
		code: '1234',
		discount: 10,
		// acceptable date format for dayjs
		expiryDate: '2024-12-12',
		createdAt: '2024-11-12',
	};

	return (
		<main>
			<Box >
				<Typography paddingBottom={3} variant='h1'>
					Editar Promoción
				</Typography>
				<BreadCrumb />
				<FormControl
					onSubmit={() => {
						handleSave();
					}}
				>
					<Grid px={{ lg: '15%' }} container spacing={2}>
						<Grid marginTop={4} xs={12}>
							<Input
								label='Descuento'
								startIcon={<IconPercentage />}
								id='descuentoLabel'
								defaultValue={promo?.discount.toString() ?? ''}
								onChange={() => { }}
							/>
						</Grid>
						<Grid container xs={12}>
							<Grid xs={3}>
								<Typography variant='body1'>Fecha inicio:</Typography>
							</Grid>
							<Grid xs={9}>
								<Datepicker setValue={setFechaStart} value={fechaStart} />
							</Grid>
						</Grid>
						<Grid container xs={12}>
							<Grid xs={3}>
								<Typography variant='body1'>Fecha fin:</Typography>
							</Grid>
							<Grid xs={9}>
								<Datepicker setValue={setFechaEnd} value={fechaEnd} />
							</Grid>
						</Grid>
						<Grid
							display={'flex'}
							flexDirection={'row'}
							justifyContent={'center'}
							xs={12}
						>
							<CouponInput
								placeholder='Escribe aqui tu codigo'
								value={promo?.code ?? ''}
								id={'couponCode'}
								maxLength={6}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
									handleCouponChange(e);
								}}
							/>
						</Grid>
						<Grid container xs={12}>
							<Grid xs={12} md={6}>
								{/* <ButtonPrimary text='Guardar' type={'submit'} /> */}
								<ButtonPrimary text='Guardar' onClick={handleSave} />
							</Grid>
							<Grid xs={12} md={6}>
								<ButtonSecondary text='Cancelar' onClick={handleClick} />
							</Grid>
						</Grid>
					</Grid>
				</FormControl>
			</Box>
		</main>
	);
}
