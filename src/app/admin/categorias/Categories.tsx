import { Family } from '@/app/components/molecules';
import type { PerfumeCategory } from '@/entities';
import { AddFamily } from './AddFamily';
import { Stack } from '@mui/material';

async function getCategory(id: string): Promise<PerfumeCategory> {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/categories?id=${id}`,
		{
			next: {
				revalidate: 0,
			},
		},
	);

	if (!response.ok) {
		throw new Error('Error getting categories');
	}

	const category = await response.json();

	return category;
}

interface Props {
	idCategory: string;
}

export const CategoryTabs = async ({
	idCategory,
}: Props): Promise<JSX.Element> => {
	const category = await getCategory(idCategory);

	return (
		<main>
			<Stack spacing={2}>
				{category.families.map(family => (
					<Family key={family.id} family={family} />
				))}
			</Stack>
			<AddFamily idCategory={category.id} />
		</main>
	);
};
