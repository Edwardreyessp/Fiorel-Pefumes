'use client';
import { AccordionFAQ, ButtonPrimary } from '@/app/components/atoms';
import { Stack, Typography } from '@mui/material';

export default function FAQsPage(): JSX.Element {
	const faqs = [
		{
			question: '¿Qué es Lorem Ipsum?',
			answer:
				'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
		},
		{
			question: '¿Por qué lo usamos?',
			answer:
				'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.',
		},
		{
			question: '¿Dónde puedo conseguirlo?',
			answer:
				'Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera.',
		},
		{
			question: '¿Qué es Lorem Ipsum?',
			answer:
				'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
		},
		{
			question: '¿Por qué lo usamos?',
			answer:
				'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.',
		},
		{
			question: '¿Dónde puedo conseguirlo?',
			answer:
				'Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera.',
		},
		{
			question: '¿Qué es Lorem Ipsum?',
			answer:
				'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
		},
		{
			question: '¿Por qué lo usamos?',
			answer:
				'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.',
		},
		{
			question: '¿Dónde puedo conseguirlo?',
			answer:
				'Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera.',
		},
		{
			question: '¿Qué es Lorem Ipsum?',
			answer:
				'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
		},
		{
			question: '¿Por qué lo usamos?',
			answer:
				'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.',
		},
		{
			question: '¿Dónde puedo conseguirlo?',
			answer:
				'Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera.',
		},
	];

	const changeToUpdate = (): void => {
		// Ensure that the code is executed on the client side

		window.location.href = '/admin/faq/edit';
	};

	return (
		<main>
			<Stack spacing={2}>
				<Typography variant='h1'>Preguntas Frecuentes</Typography>
				<Typography variant='caption'>Esto será un breadcrumb</Typography>
				<ButtonPrimary text={'Actualizar'} onClick={changeToUpdate} />
				<Stack spacing={2} overflow='auto'>
					{faqs.map((faq, index) => (
						<AccordionFAQ
							key={index}
							title={faq.question}
							description={faq.answer}
						/>
					))}
				</Stack>
			</Stack>
		</main>
	);
}
