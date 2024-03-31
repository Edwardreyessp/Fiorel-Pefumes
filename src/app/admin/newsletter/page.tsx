'use client';
import { Box, Button, Stack, Typography } from '@mui/material';
import { NewsletterItems } from '@/app/components/utils';
import { CardNews } from '@/app/components/molecules';
import { useRouter } from 'next/navigation';

export default function NewsletterPage(): JSX.Element {
	const router = useRouter();

	const handleCreate = (): void => {
		router.push('/admin/newsletter/crear');
	};

	return (
		<Stack spacing={2} alignItems='center'>
			<Box display='flex' width='100%'>
				<Typography variant='h1' flex={1}>
					Newsletter
				</Typography>
				{NewsletterItems.length > 0 && (
					<Button variant='contained' color='secondary' onClick={handleCreate}>
						Crear mensaje
					</Button>
				)}
			</Box>

			<Box
				display='flex'
				flexWrap='wrap'
				gap={4}
				justifyContent={{ xs: 'center', md: 'flex-start' }}
			>
				{NewsletterItems.map(item => (
					<CardNews
						key={item.id}
						Title={item.title}
						image={item.image}
						onClick={() => {}}
						onDelete={() => {}}
						onEdit={() => {}}
					/>
				))}
			</Box>

			{NewsletterItems.length === 0 && (
				<Stack width='100%' spacing={2}>
					<Typography>
						Parece que no has creado ningún mensaje, redacta tus correos y da a
						conocer al mundo tus productos
					</Typography>
					<Button variant='contained' color='secondary' onClick={handleCreate}>
						Crear mensaje
					</Button>
				</Stack>
			)}
		</Stack>
	);
}
