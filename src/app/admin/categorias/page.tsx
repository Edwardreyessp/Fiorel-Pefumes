import { Stack, Typography } from '@mui/material';
import { CategoryTabs } from './Categories';
import { Suspense } from 'react';
import { Loading } from './Loading';
import { BasicTabs } from '@/app/components/molecules';
import { CategoryProvider } from './Provider';

export default function CategoriesPage(): JSX.Element {
	return (
		<CategoryProvider>
			<Stack spacing={2}>
				<Typography variant='h1' component='p'>
					Categorías
				</Typography>
				<Suspense fallback={<Loading />}>
					<BasicTabs tabs={categories} />
				</Suspense>
			</Stack>
		</CategoryProvider>
	);
}

const categories = [
	{
		title: 'Mujer',
		children: <CategoryTabs idCategory='woman' />,
	},
	{
		title: 'Hombre',
		children: <CategoryTabs idCategory='man' />,
	},
	{
		title: 'Unisex',
		children: <CategoryTabs idCategory='unisex' />,
	},
];
