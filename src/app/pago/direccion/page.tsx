'use client';
import { ButtonPrimary, ButtonSecondary, Input } from '@/app/components/atoms';
import { InputAlert } from '@/app/components/molecules';
import {
	Box,
	Stack,
	Checkbox,
	FormControlLabel,
	Typography,
} from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AdressPage(): JSX.Element {
	const router = useRouter();
	const emailRegex =
		/[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/;
	const [error, setError] = useState('');
	const [isError, setIsError] = useState({
		name: false,
		lastname: false,
		city: false,
		colony: false,
		postalCode: false,
		street1: false,
		email: false,
		reference: false,
	});
	const [info, setInfo] = useState({
		name: '',
		lastname: '',
		city: '',
		colony: '',
		postalCode: '',
		street1: '',
		street2: '',
		email: '',
		newsletter: false,
		phone: '',
		reference: '',
		saveInfo: false,
	});

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setInfo({ ...info, [event.target.id]: event.target.value });
	};

	const handleSubmit = (): void => {
		if (
			info.name === '' ||
			info.lastname === '' ||
			info.city === '' ||
			info.colony === '' ||
			info.postalCode === '' ||
			info.street1 === '' ||
			info.email === '' ||
			!emailRegex.test(info.email) ||
			info.reference === ''
		) {
			setError('Por favor llena bien todos los campos marcados con *');
			setIsError({
				name: info.name === '',
				lastname: info.lastname === '',
				city: info.city === '',
				colony: info.colony === '',
				postalCode: info.postalCode === '',
				street1: info.street1 === '',
				email: info.email === '' || !emailRegex.test(info.email),
				reference: info.reference === '',
			});
		} else {
			setError('');
			setIsError({
				name: false,
				lastname: false,
				city: false,
				colony: false,
				postalCode: false,
				street1: false,
				email: false,
				reference: false,
			});
			router.push('/pago/total');
			console.log(info); // TODO: Send info to API
		}
	};

	const handleCancel = (): void => {
		router.push('/pago');
	};

	return (
		<Box
			display='flex'
			flexDirection={{ xs: 'column-reverse', sm: 'row' }}
			justifyContent='space-evenly'
			alignItems='center'
			gap={{ xs: 3, sm: 0 }}
		>
			<Stack spacing={2}>
				<Typography variant='h1'>Ingresa tu dirección de envío</Typography>
				{error !== '' && <InputAlert message={error} />}
				<Input
					errorVariant={isError.name}
					label='Nombre*'
					id={'name'}
					onChange={handleChange}
				/>
				<Input
					errorVariant={isError.lastname}
					label='Apellido*'
					id={'lastname'}
					onChange={handleChange}
				/>
				<Input
					errorVariant={isError.city}
					label='Ciudad*'
					id={'city'}
					onChange={handleChange}
				/>
				<Input
					errorVariant={isError.colony}
					label='Colonia*'
					id={'colony'}
					onChange={handleChange}
				/>
				<Input
					errorVariant={isError.postalCode}
					label='Código Postal*'
					id={'postalCode'}
					onChange={handleChange}
				/>
				<Input
					errorVariant={isError.street1}
					label='Calle 1*'
					id={'street1'}
					onChange={handleChange}
				/>
				<Input label='Calle 2' id={'street2'} onChange={handleChange} />
				<Input
					errorVariant={isError.email}
					label='Email*'
					id={'email'}
					onChange={handleChange}
				/>
				<FormControlLabel
					control={<Checkbox id='newsletter' onChange={handleChange} />}
					label='Recibir noticias y promociones'
				/>
				<Input
					label='Número de contacto'
					id={'phone'}
					onChange={handleChange}
				/>
				<Input
					errorVariant={isError.reference}
					label='Referencia del comicilio*'
					id={'reference'}
					onChange={handleChange}
				/>
				<FormControlLabel
					control={<Checkbox id='saveInfo' onChange={handleChange} />}
					label='Guardar esta información para futuras compras'
				/>
				<Box display='flex' gap={2}>
					<ButtonPrimary text={'Enviar'} onClick={handleSubmit} />
					<ButtonSecondary text={'Cancelar'} onClick={handleCancel} />
				</Box>
			</Stack>
			<Stack spacing={2} alignItems='center'>
				<Typography>¡Garantiza tu compra con datos precisos!</Typography>
				<Box
					sx={{ position: 'relative' }}
					width={{ xs: 364, sm: 423 }}
					height={{ xs: 364, sm: 423 }}
				>
					<Image fill src='/images/Perfume1.png' alt='address' />
				</Box>
				<Typography variant='caption' maxWidth={{ xs: 364, sm: 423 }}>
					Llena correctamente la información de tu tarjeta para asegurar una
					transacción exitosa y sin contratiempos. Recuerda que los envíos solo
					están disponibles para direcciones dentro de México. ¡Gracias por tu
					colaboración en hacer que tu experiencia de compra sea segura y
					eficiente!
				</Typography>
			</Stack>
		</Box>
	);
}
