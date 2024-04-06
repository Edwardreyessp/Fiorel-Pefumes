'use client';
import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Box,
	Typography,
	Stack,
} from '@mui/material';
import { IconArrowDown, IconTruck } from '../atoms';
import { StatusPicker } from '../molecules';
import type { Perfume } from '@/entities';
import { useState } from 'react';

export interface CardOrderProps {
	orderId: string;
	address: string;
	date: string;
	option: string;
	setOption: (status: StatusOption) => void;
	perfumes: Perfume[];
}

export type StatusOption = 'En preparación' | 'En camino' | 'Recibido';

export const CardOrder = (props: CardOrderProps): JSX.Element => {
	const { orderId, address, date, option, setOption, perfumes } = props;
	const statusOptions: StatusOption[] = [
		'En preparación',
		'En camino',
		'Recibido',
	];
	const [expanded, setExpanded] = useState(false);

	const handleAccordionChange = (): void => {
		setExpanded(!expanded);
	};

	return (
		<Accordion
			sx={{ border: 'solid 1px' }}
			expanded={expanded}
			onChange={handleAccordionChange}
		>
			<AccordionSummary
				expandIcon={
					<Box marginY={expanded ? 2 : 1} height='24px' width='24px'>
						<IconArrowDown />
					</Box>
				}
				sx={{
					justifyContent: 'space-between',
					alignItems: 'flex-start',
				}}
			>
				<Stack spacing={2} width='100%' pr={2}>
					<Box display='flex' justifyContent='space-between' width='100%'>
						<Box>
							<Box display='flex' gap={2}>
								<Typography variant='body2'>Orden {orderId}</Typography>
								<IconTruck />
							</Box>
							<Typography variant='caption'>{address}</Typography>
						</Box>
						<Typography variant='caption'>{date}</Typography>
					</Box>
					<StatusPicker
						option={option}
						setOption={setOption}
						options={statusOptions}
					/>
				</Stack>
			</AccordionSummary>
			<AccordionDetails>
				<Stack spacing={2} width='100%' pr={4}>
					<Typography variant='body2'>Productos</Typography>
					{perfumes.map(perfume => (
						<Box
							key={perfume.id}
							display='flex'
							justifyContent='space-between'
							width='100%'
						>
							<Typography
								maxWidth={{ xs: '80%', sm: '90%' }}
								noWrap
								sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
							>
								{perfume.id} - {perfume.name}
							</Typography>
							<Typography>${perfume.price}</Typography>
						</Box>
					))}
					<Box display='flex' justifyContent='space-between' width='100%'>
						<Typography variant='body2'>Total</Typography>
						<Typography>
							${perfumes.reduce((acc, curr) => acc + curr.price, 0)}
						</Typography>
					</Box>
				</Stack>
			</AccordionDetails>
		</Accordion>
	);
};
