'use client';
import { useState } from 'react';
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

export default function PromotionsPage(): JSX.Element {
	const [fechaStart, setFechaStart] = useState<Dayjs>(dayjs());
	const [fechaEnd, setFechaEnd] = useState<Dayjs>(dayjs());
	const [codigoCoupon, setCodigoCoupon] = useState<string>('');
	const router = useRouter();

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

	return (
		<main>
			<Box>
				<Typography paddingBottom={3} variant='h1'>
					Crear Promoción
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
								id={'couponCode'}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
									handleCouponChange(e);
								}}
								maxLength={6}
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
