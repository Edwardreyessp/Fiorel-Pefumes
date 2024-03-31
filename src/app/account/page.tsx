'use client';
import { Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { NavMiCuenta } from '../components/molecules';
import { CloseSesion, HaverOrders, OrdersEmpty } from '../components/organisms';
import { MiInfo, type MiInfoData } from '../components/molecules/MiInfo';
import { useState } from 'react';
import { miInfo } from '../components/utils';

export default function AccountPage(): JSX.Element {
	const isDesktop = useMediaQuery(useTheme().breakpoints.up('md'));
	const hasData = true;
	const [Informacion] = useState<MiInfoData>(miInfo);

	return (
		<div>
			{isDesktop ? (
				<Box px={10}>
					<NavMiCuenta
						tabs={[
							{
								label: 'Mi cuenta',
								content: (
									<Box
										display={'flex'}
										width={'100%'}
										justifyContent={'space-between'}
									>
										<Stack spacing={{ xs: 1, md: 2 }}>
											<Typography variant='h1'>Mi pedidos</Typography>
											{hasData ? <HaverOrders /> : <OrdersEmpty />}
										</Stack>
										<Box pl={20}>
											<MiInfo data={Informacion} />
										</Box>
									</Box>
								),
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
								content: (
									<Box>
										<MiInfo data={Informacion} />
										{/* <ChangePassword /> */}
									</Box>
								),
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
