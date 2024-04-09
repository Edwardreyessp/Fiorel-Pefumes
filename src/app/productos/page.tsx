'use client';
import {
	Box,
	Button,
	Divider,
	Drawer,
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import { Layout } from '../components/organisms';
import { useSearchParams } from 'next/navigation';
import { IconClose, IconFilter, RowButtonGroup } from '../components/atoms';
import { useEffect, useState } from 'react';
import { ProductList } from './ProductList';

export default function ProductsPage(): JSX.Element {
	const searchParams = useSearchParams();
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	const categoryValue = searchParams.get('category')!;
	const [selectedSection, setSelectedSection] = useState<string>('Todos');
	const [currentSection, setCurrentSection] = useState<Section>(sections.all);
	const [isLoading, setIsLoading] = useState(true);
	const [search, setSearch] = useState<string>('');
	const [sorterOpen, setSorterOpen] = useState(false);
	const [sorterValue, setSorterValue] = useState('sells.desc');
	const [categoriesOpen, setCategoriesOpen] = useState(false);

	useEffect(() => {
		if (categoryValue in values) {
			setSelectedSection(categoryValue);
		}
	}, [categoryValue]);

	useEffect(() => {
		setCurrentSection(sections[selectedSection]);
		setIsLoading(false);
	}, [selectedSection]);

	useEffect(() => {
		setSorterValue('sells.desc');
	}, []);

	const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setSearch((event.target as HTMLInputElement).value);
	};

	const onCloseSorter = (): void => {
		setSorterOpen(false);
	};

	const onOpenSorter = (): void => {
		setSorterOpen(true);
	};

	const onOpenCategories = (): void => {
		setCategoriesOpen(true);
	};

	const onCloseCategories = (): void => {
		setCategoriesOpen(false);
	};

	const handleChangeSorter = (
		event: React.ChangeEvent<HTMLInputElement>,
	): void => {
		setSorterValue((event.target as HTMLInputElement).value);
	};

	const handleChangeCategory = (
		event: React.ChangeEvent<HTMLInputElement>,
	): void => {
		setSelectedSection((event.target as HTMLInputElement).value);
	};

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<main>
			<Layout>
				<Stack
					spacing={2}
					mt={{ xs: 3.5 + 7, md: 3.5 + 8 }}
					p={{ xs: 2, md: 6 }}
					mb={3.5}
				>
					<Typography variant='h1'>{currentSection.title}</Typography>
					<Typography maxWidth={500}>{currentSection.desription}</Typography>
					<Stack>
						<Typography variant='caption' alignSelf='flex-end'>
							100 perfumes
						</Typography>
						<Divider color='secondary' />
					</Stack>

					<Box
						display='flex'
						gap={2}
						justifyContent='space-between'
						alignItems='center'
						flexDirection={{ xs: 'column', xl: 'row' }}
					>
						<Stack display={{ xs: 'none', xl: 'block' }}>
							<RowButtonGroup
								values={values}
								selectedValue={selectedSection}
								setSelectedValue={setSelectedSection}
							/>
						</Stack>
						<Box
							display={{ xs: 'flex', xl: 'none' }}
							justifyContent='space-between'
							width='100%'
						>
							<Button
								variant='contained'
								color='secondary'
								endIcon={<IconFilter color='white' />}
								style={{ borderRadius: '50px', width: '150px', height: '48px' }}
								onClick={onOpenCategories}
							>
								Categoría
							</Button>
							<Button
								variant='contained'
								color='secondary'
								endIcon={<IconFilter color='white' />}
								style={{ borderRadius: '50px', width: '150px', height: '48px' }}
								onClick={onOpenSorter}
							>
								Ordenar
							</Button>
						</Box>
						<Box display='flex' gap={2} alignItems='center' width='100%'>
							<Box display='flex' width='100%'>
								<TextField
									id='name'
									fullWidth
									label='Nombre'
									sx={{
										'& .MuiOutlinedInput-root': {
											borderRadius: '4px 0 0 4px',
										},
									}}
									onChange={onChangeSearch}
								/>
								<Button
									sx={{ borderRadius: '0 4px 4px 0', width: '150px' }}
									variant='contained'
									color='secondary'
								>
									Buscar
								</Button>
							</Box>
							<Stack display={{ xs: 'none', xl: 'block' }}>
								<Button
									variant='contained'
									color='secondary'
									endIcon={<IconFilter color='white' />}
									style={{
										borderRadius: '50px',
										width: '150px',
										height: '48px',
									}}
									onClick={onOpenSorter}
								>
									Ordenar
								</Button>
							</Stack>
						</Box>
					</Box>
					<ProductList
						category={currentSection.value}
						search={search}
						sorter={sorterValue}
					/>
				</Stack>
			</Layout>
			<Drawer anchor='right' open={sorterOpen} onClose={onCloseSorter}>
				<Stack spacing={2} p={2} width='100svw' maxWidth={414}>
					<Stack spacing={1}>
						<Box
							display='flex'
							alignItems='center'
							justifyContent='space-between'
						>
							<Typography variant='subtitle1'>Ordenar por</Typography>
							<Box
								height='24px'
								mb='-10px'
								onClick={onCloseSorter}
								sx={{ cursor: 'pointer' }}
							>
								<IconClose />
							</Box>
						</Box>
						<Divider />
					</Stack>
					<FormControl>
						<RadioGroup
							aria-labelledby='demo-radio-buttons-group-label'
							defaultValue='sells.desc'
							name='radio-buttons-group'
							value={sorterValue}
							onChange={handleChangeSorter}
						>
							<FormControlLabel
								value='sells.desc'
								control={<Radio />}
								label='Popularidad'
							/>
							<FormControlLabel
								value='name.asc'
								control={<Radio />}
								label='Nombre: (A-Z)'
							/>
							<FormControlLabel
								value='name.desc'
								control={<Radio />}
								label='Nombre: (Z-A)'
							/>
						</RadioGroup>
					</FormControl>
				</Stack>
			</Drawer>
			<Drawer anchor='right' open={categoriesOpen} onClose={onCloseCategories}>
				<Stack spacing={2} p={2} width='100svw' maxWidth={414}>
					<Stack spacing={1}>
						<Box
							display='flex'
							alignItems='center'
							justifyContent='space-between'
						>
							<Typography variant='subtitle1'>Categoría</Typography>
							<Box
								height='24px'
								mb='-10px'
								onClick={onCloseCategories}
								sx={{ cursor: 'pointer' }}
							>
								<IconClose />
							</Box>
						</Box>
						<Divider />
					</Stack>
					<FormControl>
						<RadioGroup
							aria-labelledby='demo-radio-buttons-group-label'
							defaultValue='Todos'
							name='radio-buttons-group'
							value={selectedSection}
							onChange={handleChangeCategory}
						>
							<FormControlLabel
								value='Todos'
								control={<Radio />}
								label='Todos'
							/>
							<FormControlLabel
								value='Mujer'
								control={<Radio />}
								label='Mujer'
							/>
							<FormControlLabel
								value='Hombre'
								control={<Radio />}
								label='Hombre'
							/>
							<FormControlLabel
								value='Unisex'
								control={<Radio />}
								label='Unisex'
							/>
							<FormControlLabel value='Sets' control={<Radio />} label='Sets' />
						</RadioGroup>
					</FormControl>
				</Stack>
			</Drawer>
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
	Todos: { title: 'Todos nuestros perfumes', desription, value: 'Todos' },
	Mujer: {
		title: 'Perfumes de Dama',
		desription:
			'Nuestro catálogo de mujer se pensó minuciosamente para adecuarse a las necesidades de la mujer moderna, escoge tu favorita.',
		value: 'Mujer',
	},
	Hombre: {
		title: 'Pefumes de Caballero',
		desription: 'Un accesorio que te acompaña y resalta tu masculinidad.',
		value: 'Hombre',
	},
	Unisex: {
		title: 'Unisex',
		desription:
			'Aunque creemos que cualquier aroma queda contigo, seleccionamos una lista de aromas en nuestro catálogo tanto para ella como para él.',
		value: 'Unisex',
	},
	Sets: {
		title: 'Set',
		desription:
			'Porque uno nunca es suficiente. Sabemos que a nuestros clientes les gustaría tener todo nuestro catálogo de perfumes en su tocador. Te facilitamos la tarea al crear una serie de sets con 3 perfumes de 30 ml. para que puedas probarlos todos. Encuentra tu perfume huella y deja una impresión permanente en la mente de todos a tu alrededor.',
		value: 'Sets',
	},
};

const values = ['Todos', 'Mujer', 'Hombre', 'Unisex', 'Sets'];
