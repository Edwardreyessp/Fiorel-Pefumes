'use client';
import { ButtonSecondary } from '../atoms';
import { Box, Grid, Typography } from '@mui/material';

interface ProcederPagoProps {
	discount?: number;
	total: number;
	handleOnClick: () => void;
}

export const ProcederPago = ({
	discount,
	total,
	handleOnClick,
}: ProcederPagoProps): JSX.Element => {
	return (
		<Box
			sx={{ borderTop: 'solid  1px black' }}
			display={'grid'}
			justifyContent={'center'}
			alignContent={'center'}
		>
			<Grid my={2} container xs={12}>
				{discount !== undefined && (
					<Grid item xs={12}>
						<Typography variant='body2' fontSize={'16px'}>
							Descuento: {discount} MXN
						</Typography>
					</Grid>
				)}
				<Grid my={2}>
					<Typography variant='body2' fontSize={'16px'}>
						Total: {total} MXN
					</Typography>
				</Grid>
				<ButtonSecondary text={'Proceder al pago'} onClick={handleOnClick} />
			</Grid>
		</Box>
	);
};
