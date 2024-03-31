'use client';
import { NavMiCuenta } from '@/app/components/molecules';
import { MiInfo, type MiInfoData } from '@/app/components/molecules/MiInfo';
import { CloseSesion, DetailOrder } from '@/app/components/organisms';
import { miInfo } from '@/app/components/utils';
import { Box, Stack, Typography } from '@mui/material';
import { useState } from 'react';

export default function Page(): JSX.Element {
	const [Informacion] = useState<MiInfoData>(miInfo);

	return (
		<div>
			<Box px={10} display={{ sx: 'block', md: 'none' }}>
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
										<Typography variant='h1'>Pedido a detalle</Typography>
										<DetailOrder />
									</Stack>
									<Box pl={20}>
										<MiInfo data={Informacion} />
									</Box>
								</Box>
							),
						},
						{
							label: 'Cerrar sesión',
							content: <CloseSesion />,
						},
					]}
				/>
			</Box>

			<Box display={{ md: 'block', xs: 'none' }}>
				<NavMiCuenta
					startTab={1}
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
									<Typography variant='h1'>Pedido a detalle</Typography>
									<DetailOrder />
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
		</div>
	);
}
