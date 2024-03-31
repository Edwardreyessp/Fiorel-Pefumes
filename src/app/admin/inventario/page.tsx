'use client';
import { ButtonSecondary, Checkbox, IconCircle } from '@/app/components/atoms';
import { CardInventario, Newsletter } from '@/app/components/molecules';
import { useTheme } from '@mui/material/styles';
import { Box, Stack, Typography, useMediaQuery } from '@mui/material';
import { type ChangeEvent, useState } from 'react';

export default function InventoryPage(): JSX.Element {
	const [Stock, setStock] = useState(false);
	const [outStock, setooutStock] = useState(false);
	const [published, setPublished] = useState(false);
	const [unpublished, setUnpublished] = useState(false);
	const [search, setSearch] = useState('');

	const pushStock = (event: boolean): void => {
		setStock(event);
	};

	const pushOutStock = (event: boolean): void => {
		setooutStock(event);
	};

	const pushPublished = (event: boolean): void => {
		setPublished(event);
	};

	const pushUnpublished = (event: boolean): void => {
		setUnpublished(event);
	};

	const handleSubmit = (): void => {
		console.log('se detona la busqueda de' + search + ' en el inventario');
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
		setSearch(event.target.value);
	};

	const onPush = (): void => {
		window.location.href = '/admin/inventario/edit';
	};

	const isDesktop = useMediaQuery(useTheme().breakpoints.up('sm'));
	const color = useTheme().palette.primary.main;

	return (
		<main>
			<Stack spacing={2} >
				<Typography variant='h1'>Inventario</Typography>
				<Typography variant='caption'>Aquí se mostrará el breadcrum</Typography>
				{/* TODO:AGREGAR EL INVENTARIO */}
				<Box
					display={isDesktop ? 'flex' : ''}
					justifyContent={'space-between'}
					sx={{ borderBottom: ' 1px solid #000' }}
					pb={3}
				>
					<Box display={isDesktop ? 'flex' : ''}>
						<Stack
							sx={{ borderBottom: isDesktop ? '' : '1px solid ' + color }}
							pb={isDesktop ? '' : 2}
							spacing={isDesktop ? 2 : ''}
						>
							<Checkbox label='Stock' checked={Stock} onChange={pushStock} />
							<Checkbox
								label='Sin stock'
								checked={outStock}
								onChange={pushOutStock}
							/>
						</Stack>
						<Stack
							pt={isDesktop ? '' : 2}
							pb={isDesktop ? '' : 2}
							spacing={isDesktop ? 2 : ''}
						>
							<Checkbox
								label='Publicado'
								checked={published}
								onChange={pushPublished}
							/>
							<Checkbox
								label='No publicado'
								checked={unpublished}
								onChange={pushUnpublished}
							/>
						</Stack>
					</Box>
					<Stack spacing={2}>
						<Box>
							<Newsletter
								idInput={'Buscar por id'}
								labelInput={'Buscar por id'}
								labelButton={'Buscar'}
								handleChange={handleChange}
								handleSubmit={handleSubmit}
							/>
						</Box>
						<Box>
							<ButtonSecondary text={'Agregar producto'} onClick={onPush} />
						</Box>
					</Stack>
				</Box>

				<Stack spacing={3}>
					<Box display={'flex'}>
						<Box display={'flex'} height={'24px'} pr={2}>
							<IconCircle color={'#45D053'} />
							<Typography variant='body2' pl={1}>
								Publicado
							</Typography>
						</Box>
						<Box display={'flex'} height={'24px'}>
							<IconCircle color={'#FFC20A'} />
							<Typography variant='body2' pl={1}>
								No publicado
							</Typography>
						</Box>
					</Box>
					{/* Agregar mapeo de card Inventario */}
					<CardInventario
						urlImage={'/images/perfume1.png'}
						name={'Fragancia'}
						date={'19/02/29'}
						id={'#455'}
						stock={0}
						isAvailable={true}
						IconEditFuction={onPush}
						IconTrashFuction={() => {
							onPush();
						}}
						onClick={() => {
							onPush();
						}}
					/>
					<CardInventario
						urlImage={'/images/perfume1.png'}
						name={'Fragancia'}
						date={'19/02/29'}
						id={'#455'}
						stock={0}
						isAvailable={false}
						IconEditFuction={onPush}
						IconTrashFuction={() => {
							onPush();
						}}
						onClick={() => {
							onPush();
						}}
					/>
				</Stack>
			</Stack>
		</main>
	);
}
