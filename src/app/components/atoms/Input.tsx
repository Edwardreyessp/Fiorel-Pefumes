'use client';
import { InputBase, TextField, styled, type SxProps } from '@mui/material';
import { cloneElement, type ReactNode } from 'react';

interface InputProps {
	added?: boolean;
	autoFocus?: boolean;
	defaultValue?: string;
	disabled?: boolean;
	errorVariant?: boolean;
	id: string;
	label: string;
	helperText?: string;
	maxLen?: number;
	startIcon?: ReactNode;
	endIcon?: ReactNode;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
	added = false,
	autoFocus = false,
	defaultValue,
	disabled = false,
	errorVariant = undefined,
	id,
	label,
	helperText = '',
	maxLen,
	startIcon,
	endIcon,
	onChange,
}: InputProps): JSX.Element => {
	const InputAddedStyle: SxProps = {
		'& .MuiOutlinedInput-root': {
			borderRadius: '4px 0 0 4px',
		},
	};

	const iconStyle: SxProps = {
		padding: '2', // Elimina el margen alrededor del icono
	};

	const isStartIcon = Boolean(startIcon);

	return (
		<TextField
			fullWidth
			sx={
				added
					? { ...InputAddedStyle, backgroundColor: '#f4f4f5' }
					: { backgroundColor: '#f4f4f5' }
			}
			autoFocus={autoFocus}
			defaultValue={defaultValue}
			inputProps={{ maxLength: maxLen }}
			disabled={disabled}
			error={errorVariant}
			id={id}
			label={isStartIcon || added ? '' : label}
			placeholder={label}
			helperText={helperText}
			onChange={onChange}
			InputProps={{
				startAdornment: Boolean(startIcon) && (
					<>
						{cloneElement(startIcon as React.ReactElement, { sx: iconStyle })}
					</>
				),
				endAdornment: Boolean(endIcon) && (
					<>{cloneElement(endIcon as React.ReactElement, { sx: iconStyle })}</>
				),
			}}
		/>
	);
};

const InputDashed = styled(InputBase)({
	border: '2px dashed #999999',
	borderRadius: '4px',
	height: '120px',
	fontSize: '36px',
	width: '100%',
	minWidth: '384px',
	'& .MuiInputBase-input': {
		textAlign: 'center',
	},
	'&:hover': {
		border: '2px dashed #000000',
	},
	'&:focus': {
		border: '2px dashed #000000',
	},
	'&:disabled': {
		border: '2px dashed #999999',
	},
	'&:disabled:hover': {
		border: '2px dashed #999999',
	},
});

interface CouponInputProps {
	disabled?: boolean;
	errorVariant?: boolean;
	placeholder: string;
	value?: string;
	id?: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	maxLength?: number; // Agregar maxLength
}

export const CouponInput = (props: CouponInputProps): JSX.Element => {
	const { maxLength, ...rest } = props; // Extraer maxLength del resto de las props
	return <InputDashed {...rest} inputProps={{ maxLength }} />; // Pasar maxLength como inputProps
};
