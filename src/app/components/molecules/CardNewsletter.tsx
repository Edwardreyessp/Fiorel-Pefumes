'use client';
import {
	Box,
	Card,
	CardContent,
	Stack,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import Image from 'next/image';
import { ButtonPrimary } from '../atoms';
import type { NewsletterItem } from '@/entities';

interface CardNewsletterProps {
	newsletter: NewsletterItem;
}

export const CardNewsletter = ({
	newsletter,
}: CardNewsletterProps): JSX.Element => {
	const { title, description, image, link } = newsletter;
	const desktop = useMediaQuery(useTheme().breakpoints.up('sm'));

	const handleClick = (): void => {
		window.open(link, '_blank');
	};

	return (
		<Card sx={{ maxWidth: { xs: 354, sm: 840 }, border: 'solid 1px #999999' }}>
			<CardContent>
				<Stack spacing={2} alignItems='center' sx={{ textAlign: 'center' }}>
					<Image
						src='/images/fiorel_perfumes_black.png'
						alt={title}
						width={156}
						height={47}
					/>
					<Image
						src={image}
						alt={title}
						width={desktop ? 800 : 314}
						height={desktop ? 400 : 123}
						style={{ maxWidth: desktop ? 800 : 314, cursor: 'pointer' }}
						onClick={handleClick}
					/>
					<Typography variant='h1' component='div'>
						{title}
					</Typography>
					<Typography>{description}</Typography>
					<Box>
						<ButtonPrimary text='Conocer más' onClick={handleClick} />
					</Box>
				</Stack>
			</CardContent>
		</Card>
	);
};
