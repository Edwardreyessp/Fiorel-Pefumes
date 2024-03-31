'use client';
import { NavMiCuenta } from '@/app/components/molecules';
import {
	ChangeInfo,
	CloseSesion,
	HaverOrders,
	OrdersEmpty,
} from '@/app/components/organisms';
import { Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';

export default function ChangeInfoPage(): JSX.Element {
	const isDesktop = useMediaQuery(useTheme().breakpoints.up('md'));
	const hasData = true;
	return (
		<div>
			{isDesktop ? (
				<Box px={10}>
					<NavMiCuenta
						tabs={[
							{
								label: 'Mi cuenta',
								content: <ChangeInfo />,
								link: '/account/',
							},
							{
								label: 'Cerrar sesión',
								content: <CloseSesion />,
							},
						]}
					/>
				</Box>
			) : (
				<Box>
					<NavMiCuenta
						tabs={[
							{
								label: 'Mi cuenta',
								content: <ChangeInfo />,
								link: '/account/',
							},
							{
								label: 'Pedidos',
								content: (
									<Stack spacing={{ xs: 1, md: 2 }}>
										<Typography variant='h1'>Mi pedidos</Typography>
										{hasData ? <HaverOrders /> : <OrdersEmpty />}
									</Stack>
								),
							},
							{
								label: 'Salir',
								content: <CloseSesion />,
							},
						]}
					/>
				</Box>
			)}
		</div>
	);
}
