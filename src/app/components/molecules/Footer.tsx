'use client';

import { Box, IconButton, Link, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Newsletter } from './';
import {
	AccordionFooter,
	IconInstagram,
	IconMail,
	IconWhatsApp,
} from '../atoms';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export const Footer = (): JSX.Element => {
	return (
		<>
			<PhoneFooter />
			<DesktopFooter />
		</>
	);
};

const handleSubmit = (email: string): void => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	if (email.trim() === '') {
		alert('Por favor, ingrese un correo electrónico.');
		return;
	}

	if (!emailRegex.test(email)) {
		alert('Por favor, ingrese un correo electrónico válido.');
		return;
	}

	alert('submit to ' + email); // TODO: replace with actual submit
};

const DesktopFooter = (): JSX.Element => {
	const [email, setEmail] = useState('');
	const router = useRouter();

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setEmail((event.target as HTMLInputElement).value);
	};

	const renderLinks = (
		links: Array<{ name: string; href: string }>,
	): JSX.Element => {
		return (
			<Grid xs={12}>
				{links.map((link, index) => (
					<Grid key={index} xs={12}>
						<Link
							key={index}
							href={link.href}
							color={'white'}
							underline='hover'
						>
							{link.name}
						</Link>
					</Grid>
				))}
			</Grid>
		);
	};

	const linksNecesitasAyuda = [
		{ name: 'Llámanos al 800-737-4072', href: '/' },
		{ name: 'Lunes a Sábado de 9 am a 9 pm', href: '/' },
	];
	const linksNosotros = [{ name: 'Quienes somos', href: '/nosotros' }];

	const linksAtencionCliente = [
		{ name: 'Preguntas frecuentes', href: '/faqs' },
		{ name: 'Cancelación y devoluciones', href: '/cancelaciones' },
		{ name: 'Envíos', href: '/' },
	];

	return (
		<>
			<Box
				sx={{
					backgroundColor: 'Black',
					color: '#fff',
					padding: '20px',
					flexShrink: 0,
					display: { xs: 'none', md: 'block' },
				}}
			>
				<Grid container spacing={2}>
					<Grid xs={4}>
						<Typography marginBottom={2} variant='subtitle1'>
							¿Necesitas ayuda?
						</Typography>
						{renderLinks(linksNecesitasAyuda)}
						{/* Iconos */}
						<Grid marginTop={2} container xs={12} gap={2}>
							<Grid xs={4}>
								<IconButton
									onClick={(): void => {
										router.push('/#whatsapp');
									}}
								>
									<IconWhatsApp color='#B2CD27' width='48' />
								</IconButton>
							</Grid>
							<Grid xs={4}>
								<IconButton
									onClick={(): void => {
										router.push('/#email');
									}}
								>
									<IconMail color='#B2CD27' width='48' />
								</IconButton>
							</Grid>
							<Grid xs={4}>
								<IconButton
									onClick={(): void => {
										router.push('/#instagram');
									}}
								>
									<IconInstagram color='#B2CD27' width='48' />
								</IconButton>
							</Grid>
						</Grid>
					</Grid>
					<Grid xs={3}>
						<Typography marginBottom={2} variant='subtitle1'>
							Atencion al cliente
						</Typography>
						{renderLinks(linksAtencionCliente)}
					</Grid>
					<Grid container xs={5}>
						<Grid xs>
							<Typography marginBottom={2} variant='subtitle1'>
								Nosotros
							</Typography>
							{renderLinks(linksNosotros)}
						</Grid>
						<Grid xs={6} md={8}>
							<Typography align='left' variant='subtitle1'>
								Entérate antes que nadie sobre las novedades
							</Typography>
							<Newsletter
								idInput={'Email'}
								labelInput={'Email'}
								labelButton={'Suscribirse'}
								handleChange={handleChange}
								handleSubmit={() => {
									handleSubmit(email);
								}}
							/>
						</Grid>
					</Grid>
				</Grid>
			</Box>
			<Box
				sx={{
					bgcolor: 'black',
					color: 'white',
					padding: '10px',
					textAlign: 'center',
					borderTop: '1px solid #fff',
					display: { xs: 'none', md: 'flex' },
					gap: 2,
				}}
				justifyContent='center'
			>
				<Link href='#' variant='caption' color='white' underline='hover'>
					Políticas de privacidad
				</Link>
				<Typography variant='caption' color='white'>
					|
				</Typography>
				<Link href='#' variant='caption' color='white' underline='hover'>
					Términos y condiciones
				</Link>
				<Typography variant='caption' color='white'>
					|
				</Typography>
				<Link href='#' variant='caption' color='white' underline='hover'>
					2024 Todos los derechos reservados
				</Link>
			</Box>
		</>
	);
};

const PhoneFooter = (): JSX.Element => {
	const [email, setEmail] = useState('');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setEmail((event.target as HTMLInputElement).value);
	};

	const router = useRouter();

	const linksNecesitasAyuda = [
		{ name: 'Llámanos al 800-737-4072', href: '/' },
		{ name: 'Lunes a Sábado de 9 am a 9 pm', href: '/' },
	];
	const linksNosotros = [{ name: 'Quiénes somos', href: '/nosotros' }];

	const linksAtencionCliente = [
		{ name: 'Preguntas frecuentes', href: '/faqs' },
		{ name: 'Cancelación y devoluciones', href: '/' },
		{ name: 'Envíos', href: '/' },
	];

	return (
		<>
			<Box
				sx={{
					backgroundColor: 'black',
					color: '#fff',
					padding: '20px',
					flexShrink: 0,
					display: { xs: 'block', md: 'none' },
				}}
			>
				<Grid container spacing={2}>
					{/* Iconos */}
					<Grid marginTop={2} display={'center'} container xs={12}>
						<Grid xsOffset={3} xs={2}>
							<IconButton
								onClick={(): void => {
									router.push('/#whatsapp');
								}}
							>
								<IconWhatsApp color='#B2CD27' width='48' />
							</IconButton>
						</Grid>
						<Grid xs={2}>
							<IconButton
								onClick={(): void => {
									router.push('/#email');
								}}
							>
								<IconMail color='#B2CD27' width='48' />
							</IconButton>
						</Grid>
						<Grid xs={2}>
							<IconButton
								onClick={(): void => {
									router.push('/#instagram');
								}}
							>
								<IconInstagram color='#B2CD27' width='48' />
							</IconButton>
						</Grid>
					</Grid>
					{/* Necesitas ayuda */}
					<Grid xs={12}>
						<AccordionFooter
							title='¿Necesitas ayuda?'
							links={linksNecesitasAyuda}
						/>
					</Grid>
					{/* Atencion al cliente */}
					<Grid xs={12}>
						<AccordionFooter
							title='Atención al cliente'
							links={linksAtencionCliente}
						/>
					</Grid>
					{/* Nosotros */}
					<Grid xs={12}>
						<AccordionFooter title='Nosotros' links={linksNosotros} />
					</Grid>
					<Grid xs={12}>
						<Typography align='left' variant='subtitle1'>
							Entérate antes que nadie sobre las novedades
						</Typography>
						<Newsletter
							idInput={'Email'}
							labelInput={'Email'}
							labelButton={'Suscribirse'}
							handleChange={handleChange}
							handleSubmit={() => {
								handleSubmit(email);
							}}
						/>
					</Grid>
				</Grid>
			</Box>
			<Stack
				sx={{
					bgcolor: 'black',
					color: 'white',
					textAlign: 'center',
					borderTop: '1px solid #fff',
					display: { md: 'none' },
				}}
				justifyContent='center'
				gap={1}
			>
				<Link
					paddingTop={2}
					href='#'
					variant='caption'
					color='white'
					underline='hover'
				>
					Políticas de privacidad
				</Link>
				<Link href='#' variant='caption' color='white' underline='hover'>
					Términos y condiciones
				</Link>
				<Link
					paddingBottom={3}
					href='#'
					variant='caption'
					color='white'
					underline='hover'
				>
					2024 Todos los derechos reservados
				</Link>
			</Stack>
		</>
	);
};
