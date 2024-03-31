'use client';
import { Checkbox as CheckBoxComponent, FormControlLabel } from '@mui/material';

export interface CheckBoxProps {
	label: string;
	checked: boolean;
	onChange: (event: boolean) => void;
}

export const Checkbox = ({
	label,
	checked,
	onChange,
}: CheckBoxProps): JSX.Element => {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		onChange(event.target.checked);
	};

	return (
		<FormControlLabel
			control={
				<CheckBoxComponent
					checked={checked}
					onChange={handleChange}
					inputProps={{ 'aria-label': 'controlled' }}
				/>
			}
			label={label}
		/>
	);
};
