'use client';
import { IconAdd } from '@/app/components/atoms';
import { Box } from '@mui/material';
import { useContext } from 'react';
import { CategoryContext } from './Provider';
import generateUniqueId from 'generate-unique-id';

interface Props {
	idCategory: string;
}

export const AddFamily = ({ idCategory }: Props): JSX.Element => {
	const { setTag } = useContext(CategoryContext);

	const addFamily = (): void => {
		setTag({
			tag: {
				id: generateUniqueId(),
				name: '',
				icon: 'heart',
				idParent: idCategory,
			},
			collection: 'perfumeFamilies',
			method: 'POST',
		});
	};

	return (
		<main>
			<Box
				onClick={addFamily}
				height='24px'
				width='24px'
				sx={{ cursor: 'pointer', py: 1 }}
			>
				<IconAdd />
			</Box>
		</main>
	);
};
