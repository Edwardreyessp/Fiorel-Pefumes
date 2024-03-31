'use client';
import { Box, Grid, Typography } from '@mui/material';
import { IconTruck } from '../atoms';
import type { SxProps } from '@mui/system';

interface CardCartProps {
	montoActual: number;
}

export const CardEnvio = ({ montoActual }: CardCartProps): JSX.Element => {
	const precioParaEnvioGratis = 799;
	const porcentaje =
		montoActual >= precioParaEnvioGratis
			? 100
			: (montoActual / precioParaEnvioGratis) * 100;

	const cardProps: SxProps = {
		display: 'flex',
		gap: '20px',
		alignItems: 'center',
		border: '0.019em solid #999999',
		borderRadius: '4px',
		padding: '10px',
		width: '360px',
		height: '100px',
	};

	return (
		<Box sx={cardProps}>
			<Grid container>
				<Grid xs={8} marginY={'auto'} alignItems={'center'}>
					<Typography width={'228px'}>
						{porcentaje < 100
							? `¡Te faltan $${precioParaEnvioGratis - montoActual} MXN para envío
						gratis!`
							: 'Nosotros nos encargamos del envío'}
					</Typography>
					<Box
						sx={{
							display: 'flex',
							gap: '10px',
							alignItems: 'center',
							justifyContent: 'center',
							minWidth: '228px',
						}}
					>
						<Box
							sx={{
								position: 'relative',
								width: '100%',
								height: '10px',
								backgroundColor: '#71717A',
								borderRadius: '5px',
								minWidth: '228px',
							}}
						>
							<Box
								sx={{
									position: 'absolute',
									top: 0,
									left: 0,
									width: `${porcentaje}%`,
									height: '100%',
									backgroundColor: '#45D053',
									borderRadius: '5px',
								}}
							/>
						</Box>
					</Box>
				</Grid>
				<Grid xs={2} marginX={'auto'}>
					<IconTruck width='75px' />
				</Grid>
			</Grid>
		</Box>
	);
};
