'use client';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import { CardCart, CardEnvio, Newsletter } from '../components/molecules';
import { ButtonPrimary, IconCart } from '../components/atoms';
import { perfumes } from '../components/utils/perfumes'; // TODO: import from API
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function PaymanetPage(): JSX.Element {
	const router = useRouter();
	const [couponText, setCouponText] = useState('');
	const [isValidCoupon, setIsValidCoupon] = useState(false);
	const primaryColor = useTheme().palette.primary.main;

	const handleContinueBuying = (): void => {
		router.push('/perfumes');
	};

	const handleCouponChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setCouponText(e.target.value);
	};

	const handleCouponSubmit = (): void => {
		if (coupons.includes(couponText)) {
			setIsValidCoupon(true);
		} else {
			setIsValidCoupon(false);
		}
	};

	return (
		<Box
			display='flex'
			justifyContent='space-evenly'
			flexDirection={{ xs: 'column-reverse', sm: 'row' }}
			gap={2}
		>
			<Stack spacing={2} alignItems='center'>
				<Box
					display='flex'
					alignItems='center'
					gap={2}
					flexDirection={{ xs: 'column', sm: 'row' }}
				>
					<CardEnvio montoActual={500} />
					<Box width='fit-content'>
						<ButtonPrimary
							text={'Seguir comprando'}
							onClick={handleContinueBuying}
							endIcon={<IconCart />}
						/>
					</Box>
				</Box>
				<Box
					display='flex'
					flexWrap='wrap'
					gap={2}
					maxWidth='730px'
					justifyContent={{ xs: 'center', sm: 'left' }}
				>
					{perfumes.map(perfume => (
						<CardCart
							key={perfume.id}
							id={perfume.id}
							name={perfume.name}
							price={perfume.price}
							image={perfume.images[0]}
							quantity={0}
							handleRemove={() => {}}
							handleAdd={() => {}}
							handleSubtract={() => {}}
						/>
					))}
				</Box>
			</Stack>
			<Stack spacing={2} alignItems='center'>
				<Typography variant='h1'>Método de pago</Typography>
				<Stack alignItems='center'>
					<Typography>Total de la compra</Typography>
					<Typography>$9999</Typography>
					<Typography variant='caption' color='#999999'>
						+500 de envío
					</Typography>
				</Stack>
				<Stack spacing={1} alignItems='center'>
					<Newsletter
						idInput={'coupon'}
						labelInput='Cupón'
						labelButton='Aplicar'
						handleChange={handleCouponChange}
						handleSubmit={handleCouponSubmit}
					/>
					<Typography
						variant='caption'
						color={isValidCoupon ? primaryColor : '#999999'}
					>
						{isValidCoupon
							? `Cupón aplicado: ${couponText}`
							: 'Ningún cupón aplicado'}
					</Typography>
				</Stack>
				{/* // TODO: PayPal buttons */}
			</Stack>
		</Box>
	);
}

const coupons = ['MARZO2024', 'PRIMAVERA'];
