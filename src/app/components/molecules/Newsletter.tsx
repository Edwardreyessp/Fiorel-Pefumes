import { Box } from '@mui/material';
import { ButtonInput, Input } from '../atoms';
import { type ChangeEvent } from 'react';

interface props {
	idInput: string;
	labelInput: string;
	labelButton: string;
	handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
	handleSubmit: () => void;
	defaultValue?: string;
}

export const Newsletter = ({
	idInput,
	labelInput,
	labelButton,
	handleChange,
	handleSubmit,
	defaultValue,
}: props): JSX.Element => {
	return (
		<Box
			display={'flex'}
			sx={{ border: '1px solid #fff', borderRadius: '4px' }}
		>
			<Input
				label={labelInput}
				id={idInput}
				onChange={handleChange}
				added={true}
				defaultValue={defaultValue ?? ''}
			/>
			<Box maxWidth={'400px'} minWidth={'117px'}>
				<ButtonInput onClick={handleSubmit} text={labelButton} />
			</Box>
			<Box />
		</Box>
	);
};
