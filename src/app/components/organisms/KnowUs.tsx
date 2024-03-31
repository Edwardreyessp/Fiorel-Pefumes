import { Typography } from '@mui/material';
import { ButtonHome, ButtonPrimary } from '../atoms';
import { CardProduct } from '../molecules';
import Grid from '@mui/material/Unstable_Grid2';
import { perfume } from '../utils/perfumes';

export function KnowUs(): JSX.Element {
	return (
		<Grid container spacing={2}>
			<Grid xs={12}>
				<Typography variant='h1' textAlign={'center'}>
					Conoce nuestros productos
				</Typography>
			</Grid>
			<Grid container spacing={2} xs={12} px={{ sx: '55px', md: '200px' }}>
				<Grid xs={12} md={3}>
					<ButtonHome text={'Hombre'} onClick={function (): void {}} />
				</Grid>
				<Grid xs={12} md={3}>
					<ButtonHome text={'Mujer'} onClick={function (): void {}} />
				</Grid>
				<Grid xs={12} md={3}>
					<ButtonHome text={'Unisex'} onClick={function (): void {}} />
				</Grid>
				<Grid xs={12} md={3}>
					<ButtonHome text={'Sets'} onClick={function (): void {}} />
				</Grid>
			</Grid>
			<Grid xs={12}>
				<Typography variant='h1' textAlign={'center'}>
					Los más destacados
				</Typography>
			</Grid>
			¿
			<Grid container xs={12} px={{ sx: '', md: '150px' }}>
				<Grid xs={6} md={3}>
					<CardProduct perfume={perfume} />
				</Grid>
				<Grid xs={6} md={3}>
					<CardProduct perfume={perfume} />
				</Grid>
				<Grid xs={6} md={3}>
					<CardProduct perfume={perfume} />
				</Grid>
				<Grid xs={6} md={3}>
					<CardProduct perfume={perfume} />
				</Grid>
			</Grid>
			<Grid xs={12} px={{ sx: '80%', md: '40%' }}>
				<ButtonPrimary text={'Ver todos los perfumes'} onClick={() => {}} />
			</Grid>
		</Grid>
	);
}
