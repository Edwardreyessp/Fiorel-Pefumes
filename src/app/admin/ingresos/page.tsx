'use client';
import { Datepicker, DrawerOrden, IconFilter } from '@/app/components/atoms';
import { Newsletter } from '@/app/components/molecules';
import { type Ingreso } from '@/entities/Ingreso';
import {
	Box,
	Stack,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
	useTheme,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import dayjs from 'dayjs'; // Import dayjs
import { useState, type ChangeEvent, useEffect } from 'react';
import { rowsIngresos } from '../../components/utils/Ingresos';

export default function IncomesPage(): JSX.Element {
	const columns = [
		'Producto',
		'ID',
		'Fecha',
		'Ingreso Bruto',
		'Comisión',
		'Total',
	];
	const [IsHovered, setIsHovered] = useState(false);
	const [DrawerOpen, setDrawerOpen] = useState(false);
	const color = useTheme().palette.primary.main;
	const [grossIncome, setGrossIncome] = useState(0);
	const [comision, setComision] = useState(0);
	const [netIncome, setNetIncome] = useState(0);
	const name =
		'Nombre del perfume extremadamente largo que no cabe en la tabla de ingresos';

	const [rows] = useState(rowsIngresos);

	useEffect(() => {
		let grossIncome = 0;
		let comision = 0;
		let netIncome = 0;
		rows.Ingresos.forEach((ingreso: Ingreso) => {
			grossIncome += ingreso.grossIncome;
			comision += ingreso.comision;
			netIncome += ingreso.netIncome;
		});
		setGrossIncome(grossIncome);
		setComision(comision);
		setNetIncome(netIncome);
	}, [rows.Ingresos]);

	return (
		<Stack spacing={2} pt={{ xs: 5, md: 1 }}>
			<DrawerOrden
				isOpen={DrawerOpen}
				onClose={() => {
					setDrawerOpen(false);
				}}
				radioOptions={[
					{ value: '1', label: 'Option 1', disabled: false },
					{ value: '2', label: 'Option 2', disabled: false },
					{ value: '3', label: 'Option 3', disabled: false },
				]}
			/>

			<Box
				display={'flex'}
				justifyContent={'space-between'}
				alignItems={'center'}
			>
				<Typography variant='h1'>Ingresos</Typography>
				<Box
					height={'24px'}
					onPointerDown={e => {
						e.preventDefault();
					}}
					sx={{ cursor: 'pointer' }}
					onMouseEnter={() => {
						setIsHovered(true);
					}}
					onMouseLeave={() => {
						setIsHovered(false);
					}}
					onClick={() => {
						setDrawerOpen(true);
					}}
				>
					<IconFilter color={IsHovered ? '#000000' : color} />
				</Box>
			</Box>

			<Grid container>
				<Grid xs={12} md={6}>
					<Typography pb={1}>Ingresos</Typography>
					<Datepicker
						label='Mes'
						value={dayjs()}
						setValue={() => {}}
						format='MMMM'
					/>
				</Grid>
				<Grid xs={12} md={6}>
					<Typography pb={1}>Producto</Typography>
					<Newsletter
						idInput={''}
						labelInput={'Buscar por id de producto'}
						labelButton={'Buscar'}
						handleChange={function (
							event: ChangeEvent<HTMLInputElement>,
						): void {
							throw new Error('Function not implemented.');
						}}
						handleSubmit={function (): void {
							throw new Error('Function not implemented.');
						}}
					/>
				</Grid>

				<TableContainer sx={{ pt: '40px' }}>
					<Table>
						<TableHead>
							<TableRow sx={{ top: 0, position: 'sticky', background: '#fff' }}>
								{columns.map((column: string, index: number) => (
									<TableCell key={index} sx={{ textAlign: 'center' }}>
										<Typography variant='body2'>{column}</Typography>
									</TableCell>
								))}
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.Ingresos.map((row: Ingreso, index: number) => (
								<TableRow key={index}>
									<TableCell sx={{ textAlign: 'center' }}>
										<Typography>{name}</Typography>
									</TableCell>
									<TableCell sx={{ textAlign: 'center' }}>
										<Typography>{row._idPerfume}</Typography>
									</TableCell>
									<TableCell sx={{ textAlign: 'center' }}>
										<Typography>
											{dayjs(row.date).format('DD/MM/YYYY')}
										</Typography>
									</TableCell>
									<TableCell sx={{ textAlign: 'center' }}>
										<Typography>{row.grossIncome}</Typography>
									</TableCell>
									<TableCell sx={{ textAlign: 'center' }}>
										<Typography>{row.comision}</Typography>
									</TableCell>
									<TableCell sx={{ textAlign: 'center' }}>
										<Typography>{row.netIncome}</Typography>
									</TableCell>
								</TableRow>
							))}
							<TableRow
								sx={{
									top: 0,
									position: 'sticky',
									background: '#fff',
									zIndex: 1,
								}}
							>
								<TableCell sx={{ textAlign: 'center' }}></TableCell>
								<TableCell sx={{ textAlign: 'center' }}></TableCell>
								<TableCell sx={{ textAlign: 'center' }}>
									<Typography variant='body2'>Total</Typography>
								</TableCell>
								<TableCell sx={{ textAlign: 'center' }}>
									<Typography variant='body2'>{grossIncome}</Typography>
								</TableCell>
								<TableCell sx={{ textAlign: 'center' }}>
									<Typography variant='body2'>{comision}</Typography>
								</TableCell>
								<TableCell sx={{ textAlign: 'center' }}>
									<Typography variant='body2' color={'primary'}>
										{netIncome}
									</Typography>
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
			</Grid>
		</Stack>
	);
}
