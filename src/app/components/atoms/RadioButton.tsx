'use client';
import { type Dispatch, type SetStateAction, useState, cloneElement } from 'react';
import {
	Button,
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
} from '@mui/material';

export interface RadioProps {
	value: string | 'disabled';
	disabled: boolean;
	label: string;
}

interface RadioButtonsGroupProps {
	label?: string;
	options: RadioProps[];
	row?: boolean;
}

export const RadioButtonsGroup = ({
	label = '',
	options,
	row = false,
}: RadioButtonsGroupProps): JSX.Element => {
	const [value, setValue] = useState('');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setValue((event.target as HTMLInputElement).value);
	};
	return (
		<FormControl>
			<FormLabel id={`row-radio-buttons-group-${label}`}>{label}</FormLabel>
			<RadioGroup
				row={row}
				aria-labelledby={`row-radio-buttons-group-${label}`}
				name='row-radio-buttons-group'
				onChange={handleChange}
				value={value}
			>
				{options.map(option => (
					<FormControlLabel
						key={option.label}
						value={option.value}
						disabled={option.disabled}
						control={<Radio />}
						label={option.label}
					/>
				))}
			</RadioGroup>
		</FormControl>
	);
};

interface RowButtonGroupProps {
	values: string[];
	selectedValue: string;
	setSelectedValue: Dispatch<SetStateAction<string>>;
}

export const RowButtonGroup = ({
	values,
	selectedValue,
	setSelectedValue,
}: RowButtonGroupProps): JSX.Element => {
	const handleButtonClick = (value: string): void => {
		setSelectedValue(value);
	};

	const renderButton = (value: string): JSX.Element => (
		<Button
			key={value}
			variant={selectedValue === value ? 'contained' : 'outlined'}
			color={selectedValue === value ? 'secondary' : 'primary'}
			onClick={() => {
				handleButtonClick(value);
			}}
			style={{
				marginRight: '5x',
				marginLeft: '5px',
				borderRadius: '500px',
				minWidth: '150px',
				height: '48px',
			}}
		>
			{value}
		</Button>
	);

	return (
		<FormControl>
			<div style={{ display: 'flex' }}>
				{values.map(value => renderButton(value))}
			</div>
		</FormControl>
	);
};


export interface RadioButtonProps {
	value: string;
	onClick: () => void;
	StartIcon?: JSX.Element;
	EndIcon?: JSX.Element;
}

export const RadioButton = ({ value, onClick, StartIcon, EndIcon }: RadioButtonProps): JSX.Element => {
	return (
		<Button
			variant={'contained'}
			color={'secondary'}
			onClick={() => {
				onClick();
			}}

			startIcon={
				StartIcon !== undefined
					? cloneElement(StartIcon, { color: 'white' })
					: undefined
			}
			endIcon={
				EndIcon !== undefined
					? cloneElement(EndIcon, { color: 'white' })
					: undefined
			}
			style={{
				marginRight: '5x',
				marginLeft: '5px',
				borderRadius: '500px',
				minWidth: '150px',
				height: '48px',
			}}
		>
			{StartIcon}
			{value}
		</Button>
	)
}