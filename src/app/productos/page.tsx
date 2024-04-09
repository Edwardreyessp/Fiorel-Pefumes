'use client';
import { Divider, Stack, Typography } from '@mui/material';
import { Layout } from '../components/organisms';
import { useSearchParams } from 'next/navigation';
import { RowButtonGroup } from '../components/atoms';
import { useEffect, useState } from 'react';
import { ProductList } from './ProductList';

export default function ProductsPage(): JSX.Element {
	const searchParams = useSearchParams();
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	const categoryValue = searchParams.get('category')!;
	const [selectedSection, setSelectedSection] = useState<string>('Todos');
	const [currentSection, setCurrentSection] = useState<Section>(sections.all);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (categoryValue in values) {
			setSelectedSection(categoryValue);
		}
	}, [categoryValue]);

	useEffect(() => {
		setCurrentSection(sections[selectedSection]);
		setIsLoading(false);
	}, [selectedSection]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<main>
			<Layout>
				<Stack spacing={2} mt={3.5 + 8} p={6} mb={3.5}>
					<Typography variant='h1'>Perfumes {currentSection.title}</Typography>
					<Typography maxWidth={500}>{currentSection.desription}</Typography>
					<Stack>
						<Typography variant='caption' alignSelf='flex-end'>
							100 perfumes
						</Typography>
						<Divider color='secondary' />
					</Stack>

					<RowButtonGroup
						values={values}
						selectedValue={selectedSection}
						setSelectedValue={setSelectedSection}
					/>
					<ProductList category={currentSection.value} />
				</Stack>
			</Layout>
		</main>
	);
}

const desription =
	'Recuerda que... Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus, justo auctor congue ultrices, mi sapien rutrum ipsum, sed tempor odio augue vel mauris. Morbi at purus viverra, luctus sapien ut, pretium magna.';

interface Section {
	title: string;
	desription: string;
	value: string;
}

type Sections = Record<string, Section>;

const sections: Sections = {
	Todos: { title: 'para todos', desription, value: 'Todos' },
	Mujer: { title: 'para mujer', desription, value: 'Mujer' },
	Hombre: { title: 'para hombre', desription, value: 'Hombre' },
	Unisex: { title: 'unisex', desription, value: 'Unisex' },
	Sets: { title: 'en set', desription, value: 'Sets' },
};

const values = ['Todos', 'Mujer', 'Hombre', 'Unisex', 'Sets'];
