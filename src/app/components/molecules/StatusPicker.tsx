'use client';
import {
	Box,
	MenuItem,
	OutlinedInput,
	Select,
	Typography,
} from '@mui/material';
import { type StatusOption } from '../organisms';

interface StatusPickerProps {
	option: string;
	setOption: (status: StatusOption) => void;
	options: string[];
}

export const StatusPicker = ({
	option,
	setOption,
	options,
}: StatusPickerProps): JSX.Element => {
	const cancelEventPropagation = (
		e: React.MouseEvent<HTMLDivElement>,
	): void => {
		e.stopPropagation();
	};

	return (
		<Select
			onClick={cancelEventPropagation}
			fullWidth
			value={option}
			onChange={e => {
				setOption(e.target.value as StatusOption);
			}}
			input={<OutlinedInput size='small' />}
			renderValue={selected => <OrderOption name={selected} />}
		>
			{options.map(name => (
				<MenuItem key={name} value={name}>
					{name}
				</MenuItem>
			))}
		</Select>
	);
};

const OrderOption = ({ name }: { name: string }): JSX.Element => {
	const colorMap: Record<string, string> = {
		'En preparación': 'secondary.main',
		'En camino': '#FFC20A',
		Recibido: 'success.main',
	};

	return (
		<Box
			bgcolor={colorMap[name]}
			p='8px 16px'
			borderRadius='4px'
			width='128px'
			textAlign='center'
			color={name === 'En preparación' ? 'white' : 'inherit'}
		>
			<Typography mb='-4px'>{name}</Typography>
		</Box>
	);
};
