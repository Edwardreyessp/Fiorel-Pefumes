'use client';
import { CardAdmin } from '@/app/components/molecules';
import { Box, Stack, Typography } from '@mui/material';

export default function ResumePage(): JSX.Element {
	// TODO: Obtener datos de ingresos de admin
	// const data = {
	// 	ingresoBruto: 300,
	// 	ingresoComision: 350,
	// 	ingresoNeto: 650,
	// };

	return (
		<Stack spacing={2} >
			<Typography variant='h1'>Resumen</Typography>
			<Box display='flex' gap={2} flexDirection={{ xs: 'column', md: 'row' }}>
				<CardAdmin
					colorBorder={'#FFC20A'}
					colorTitle={'#FFC20A'}
					dashboardText={'Title'}
					captionText='Ingreso bruto'
				/>
				<CardAdmin
					colorBorder={'#FF2828'}
					colorTitle={'#FF2828'}
					dashboardText={'Title'}
					captionText='Ingreso de comisión'
				/>
			</Box>
			<CardAdmin
				colorBorder={'#45D053'}
				colorTitle={'#45D053'}
				dashboardText={'Title'}
				captionText='Ingreso neto'
			/>
		</Stack>
	);
}
