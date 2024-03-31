'use client';
import { IconAdd } from '@/app/components/atoms';
import { Box } from '@mui/material';
import { useContext } from 'react';
import { CategoryContext } from './Provider';
import generateUniqueId from 'generate-unique-id';

interface Props {
	idFamily: string;
}

export const AddEssence = ({ idFamily }: Props): JSX.Element => {
	const { setTag } = useContext(CategoryContext);

	const addEssence = (): void => {
		setTag({
			tag: {
				id: generateUniqueId(),
				name: '',
				icon: 'heart',
				idParent: idFamily,
			},
			collection: 'perfumeEssences',
			method: 'POST',
		});
	};

	return (
		<main>
			<Box onClick={addEssence} height='24px' sx={{ cursor: 'pointer' }}>
				<IconAdd />
			</Box>
		</main>
	);
};
