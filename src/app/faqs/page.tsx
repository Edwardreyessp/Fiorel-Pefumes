'use client';
import { Stack, Typography } from '@mui/material';
import { Layout } from '../components/organisms/Layout';
import { GetFaqs } from '../components/organisms';

export default function FAQsPage(): JSX.Element {
	return (
		<div>
			<Layout>
				<Stack spacing={4} p={4}>
					<Typography variant='h1'>Preguntas Frecuentes</Typography>
					<GetFaqs />
				</Stack>
			</Layout>
		</div>
	);
}
