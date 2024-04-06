'use client';
import { BreadCrumb, ButtonPrimary } from '@/app/components/atoms';
import { GetFaqs } from '@/app/components/organisms';
import { Stack, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function FAQsPage(): JSX.Element {
	const router = useRouter();
	const changeToUpdate = (): void => {
		router.push('/admin/faq/edit');
	};

	return (
		<main>
			<Stack spacing={2}>
				<Typography variant='h1'>Preguntas Frecuentes</Typography>
				<BreadCrumb />
				<ButtonPrimary text={'Actualizar'} onClick={changeToUpdate} />
				<GetFaqs />
			</Stack>
		</main>
	);
}
