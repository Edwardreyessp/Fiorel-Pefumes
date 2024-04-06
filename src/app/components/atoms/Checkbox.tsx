'use client';
import { Checkbox as CheckBoxComponent, FormControlLabel } from '@mui/material';
import type { ChangeEvent } from 'react';

export interface CheckBoxProps {
	id: string;
	label: string;
	checked: boolean;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = ({
	id,
	label,
	checked,
	onChange,
}: CheckBoxProps): JSX.Element => {
	return (
		<FormControlLabel
			control={
				<CheckBoxComponent
					id={id}
					checked={checked}
					onChange={onChange}
					inputProps={{ 'aria-label': 'controlled' }}
				/>
			}
			label={label}
		/>
	);
};
