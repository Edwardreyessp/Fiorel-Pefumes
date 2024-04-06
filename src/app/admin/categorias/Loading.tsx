import { BasicTabs } from '@/app/components/molecules';
import { Stack, Typography, Skeleton } from '@mui/material';

export const Loading = (): JSX.Element => {
	return <BasicTabs tabs={Loader} />;
};

const SkeletonCategory = (): JSX.Element => (
	<Stack spacing={2}>
		<Typography component='p'>Cargando...</Typography>
		<Skeleton variant='rounded' width='100%' height={80} />
		<Skeleton variant='rounded' width='100%' height={80} />
		<Skeleton variant='rounded' width='100%' height={80} />
	</Stack>
);

const Loader = [
	{
		title: 'Mujer',
		children: <SkeletonCategory />,
	},
	{
		title: 'Hombre',
		children: <SkeletonCategory />,
	},
	{
		title: 'Unisex',
		children: <SkeletonCategory />,
	},
];
