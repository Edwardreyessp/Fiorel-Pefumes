'use client';
import { Family } from '@/app/components/molecules';
import { AddFamily } from './AddFamily';
import { Stack } from '@mui/material';
import { TagContext } from '@/providers/TagsProvider';
import { useContext } from 'react';

interface Props {
	idCategory: string;
}

export const CategoryTabs = ({ idCategory }: Props): JSX.Element => {
	const { allTags, isLoading } = useContext(TagContext);

	if (isLoading) {
		return <p>Loading...</p>;
	}

	return (
		<main>
			<Stack spacing={2}>
				{allTags.map(category => {
					if (category.id === idCategory) {
						return category.families.map(family => (
							<Family key={family.id} family={family} />
						));
					}
					return null;
				})}
			</Stack>
			<AddFamily
				idCategory={
					allTags.find(category => category.id === idCategory)?.id ?? 'woman'
				}
			/>
		</main>
	);
};
