'use client';
import { CardAdmin } from '@/app/components/molecules';
import { Box, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { CarruselComponent } from '../components/atoms/Carrusel';
import { perfumes } from '../components/utils/perfumes';


export default function DashboardPage(): JSX.Element {
	const router = useRouter();

	// TODO: Obtener datos de ingresos de admin
	// const data = {
	// 	ingresoBruto: 300,
	// 	ingresoComision: 350,
	// 	ingresoNeto: 650,
	// };

	// TODO: Obtener productos con poco stock


	const handleGoToResume = (): void => {
		router.replace('admin/resumen');
	};

	const handleGoToOrders = (): void => {
		router.replace('admin/envios');
	};

	const handleGoToColors = (): void => {
		router.replace('admin/colores');
	};

	return (
		<div>
			<Stack spacing={2} p={2}>
				<Typography variant='h1'>Administrador Fiorel</Typography>
				<Box display='flex' gap={2} flexDirection={{ xs: 'column', md: 'row' }}>
					<CardAdmin
						colorBorder={'#FFC20A'}
						colorTitle={'#FFC20A'}
						dashboardText={'Title'}
						captionText='Ingreso bruto'
						onClick={handleGoToResume}
					/>
					<CardAdmin
						colorBorder={'#FF2828'}
						colorTitle={'#FF2828'}
						dashboardText={'Title'}
						captionText='Ingreso de comisión'
						onClick={handleGoToResume}
					/>
				</Box>
				<CardAdmin
					colorBorder={'#45D053'}
					colorTitle={'#45D053'}
					dashboardText={'Title'}
					captionText='Ingreso neto'
					onClick={handleGoToResume}
				/>
				<Box
					display='flex'
					alignItems='center'
					gap={2}
					flexDirection={{ xs: 'column', md: 'row' }}
				>

					<Stack spacing={2}>
						<Typography variant='body2' textAlign={"center"}>Productos con poco stock</Typography>
						<CarruselComponent items={perfumes} />
					</Stack>
					<Stack spacing={2} flex={1} mt={-10} width={"100%"} >

						<Stack spacing={2} >
							<Stack spacing={2} flex={1} width='100%'>
								<CardAdmin
									dashboardText={'Colores'}
									captionText='Cambia los colores de Fiorel web'
									onClick={handleGoToColors}
								/>
								<CardAdmin
									dashboardText={'Ir a Pedidos'}
									onClick={handleGoToOrders}
								/>
							</Stack>

						</Stack>
					</Stack>
				</Box>
			</Stack>
		</div>
	);
}
