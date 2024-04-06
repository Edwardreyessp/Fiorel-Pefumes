'use client';
import { Stack, Typography } from '@mui/material';
import { CategoryTabs } from './Categories';
import { useContext, useEffect } from 'react';
import { Loading } from './Loading';
import { BasicTabs } from '@/app/components/molecules';
import { CategoryProvider } from '../../../providers/CategoryProvider';
import { TagContext } from '@/providers/TagsProvider';

export default function CategoriesPage(): JSX.Element {
	const { getAllTags, isLoading, refresh } = useContext(TagContext);

	useEffect(() => {
		getAllTags().catch(() => {
			console.error('Error al cargar las categorías');
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [refresh]);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<CategoryProvider>
			<Stack spacing={2}>
				<Typography variant='h1' component='p'>
					Categorías
				</Typography>
				<BasicTabs tabs={categories} />
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
