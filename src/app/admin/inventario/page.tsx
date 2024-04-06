'use client';
import { Checkbox, IconCircle } from '@/app/components/atoms';
import { Newsletter } from '@/app/components/molecules';
import { useTheme } from '@mui/material/styles';
import { Box, Button, Stack, Typography } from '@mui/material';
import { type ChangeEvent, useState, useContext } from 'react';
import { ProductList } from './ProductList';
import { PerfumeContext } from '@/providers/PerfumeProvider';
import { useRouter } from 'next/navigation';
import { TagContext } from '@/providers/TagsProvider';

export default function InventoryPage(): JSX.Element {
	const [search, setSearch] = useState('');
	const router = useRouter();
	const { filterPerfumes } = useContext(PerfumeContext);
	const { updateTags } = useContext(TagContext);
	const [filters, setFilters] = useState({
		withStock: false,
		noStock: false,
		published: false,
		draft: false,
	});

	const handleSubmit = (): void => {
		filterPerfumes({ ...filters, search });
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
		setSearch(event.target.value);
		filterPerfumes({ ...filters, search: event.target.value });
	};

	const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
		const key = event.target.id;
		setFilters({
			...filters,
			[key]: !filters[key as keyof typeof filters],
		});

		filterPerfumes({
			...filters,
			[key]: !filters[key as keyof typeof filters],
			search,
		});
	};

	const addProduct = (): void => {
		updateTags({ categoryID: null, familyID: null, essencesID: [] });
		router.push('/admin/inventario/crear');
	};

	const color = useTheme().palette.primary.main;

	return (
		<Stack spacing={2}>
			{/* TODO:AGREGAR EL INVENTARIO */}
			<Box
				display={{ xs: 'block', md: 'flex' }}
				justifyContent={'space-between'}
				sx={{ borderBottom: ' 1px solid #000' }}
				pb={3}
			>
				<Box display={{ xs: 'block', md: 'flex' }}>
					<Stack
						sx={{ borderBottom: { xs: `1px solid ${color}`, md: 'none' } }}
						pb={{ xs: 2, md: 0 }}
						spacing={{ xs: 0, md: 2 }}
					>
						<Checkbox
							id='withStock'
							label='Stock'
							checked={filters.withStock}
							onChange={onChange}
						/>
						<Checkbox
							id='noStock'
							label='Sin stock'
							checked={filters.noStock}
							onChange={onChange}
						/>
					</Stack>
					<Stack py={{ xs: 2, md: 0 }} spacing={{ xs: 2, md: 2 }}>
						<Checkbox
							id='published'
							label='Publicado'
							checked={filters.published}
							onChange={onChange}
						/>
						<Checkbox
							id='draft'
							label='No publicado'
							checked={filters.draft}
							onChange={onChange}
						/>
					</Stack>
				</Box>
				<Stack spacing={2}>
					<Box>
						<Newsletter
							idInput={'search'}
							labelInput={'Buscar por nombre'}
							labelButton={'Buscar'}
							handleChange={handleChange}
							handleSubmit={handleSubmit}
						/>
					</Box>
					<Button
						fullWidth
						variant='contained'
						color='secondary'
						onClick={addProduct}
					>
						Agregar producto
					</Button>
				</Stack>
			</Box>

			<Stack spacing={3}>
				<Box display={'flex'} gap={2}>
					<Box display={'flex'} height={'24px'} gap={1}>
						<IconCircle color={'#45D053'} />
						<Typography variant='body2'>Publicado</Typography>
					</Box>
					<Box display={'flex'} height={'24px'} gap={1}>
						<IconCircle color={'#FFC20A'} />
						<Typography variant='body2'>No publicado</Typography>
					</Box>
				</Box>

				<ProductList />
			</Stack>
		</Stack>
	);
}
