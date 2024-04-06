import { BreadCrumb } from '@/app/components/atoms';
import { Stack, Typography } from '@mui/material';

const InventarioLayout = ({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element => {
	return (
		<main>
			<Stack spacing={1} sx={{ mb: 4 }}>
				<Typography variant='h1'>Inventario</Typography>
				<BreadCrumb />
			</Stack>
			{children}
		</main>
	);
};

export default InventarioLayout;
