'use client';
import { Skeleton, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { getFAQS } from '@/firebase';
import { type Faq } from '@/entities'; // Importa Faq en lugar de type Faq
import { AccordionFAQ } from '../atoms';

export function GetFaqs(): JSX.Element {
	const [faqsData, setFaqsData] = useState<Faq[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async (): Promise<void> => {
			try {
				const faqsData = await getFAQS();
				setFaqsData(faqsData);
				setIsLoading(false);
			} catch (error) {
				setIsLoading(false);
			}
		};

		void fetchData();
	}, []);

	return (
		<div>
			<Stack spacing={4}>
				<Typography variant='h1'>Preguntas Frecuentes</Typography>
				{isLoading ? (
					<Stack spacing={2}>
						{[1, 2, 3, 4].map(index => (
							<Skeleton
								key={index}
								animation='wave'
								variant='rectangular'
								height={50}
							/>
						))}
					</Stack>
				) : (
					<Stack spacing={2}>
						{faqsData.map((faq, index) => (
							<AccordionFAQ
								key={index}
								title={faq.question}
								description={faq.answer}
							/>
						))}
						<Typography px={5} py={2} textAlign={'center'}>
							¿Tienes alguna pregunta sin resolver? Estamos aquí para ayudarte.
							No dudes en ponerte en contacto con nosotros enviándonos un correo
							a{' '}
						</Typography>
						<Typography pt={2} pb={4} textAlign={'center'}>
							<a href='mailto:Fiorel.perfumerias@gmail.com'>
								Fiorel.perfumerias@gmail.com
							</a>
						</Typography>
					</Stack>
				)}
			</Stack>
		</div>
	);
}
