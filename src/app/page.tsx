'use client';
import { Box, Stack, useMediaQuery } from '@mui/material';
import { CarruselImage } from './components/atoms/Carrusel';
import {
	KnowUs,
	Layout,
	QuestionHome,
	ReviewsHome,
} from './components/organisms';
import { useTheme } from '@mui/system';

export default function Home(): JSX.Element {
	const imagesDesktop = [
		{
			image: '/images/Banner1_desktop.png',
			link: 'https://via.placeholder.com/150',
		},
		{
			image: '/images/Banner2_desktop.png',
			link: 'https://via.placeholder.com/150',
		},
		{
			image: '/images/Banner3_desktop.png',
			link: 'https://via.placeholder.com/150',
		},
	];

	const imagesMobile = [
		{
			image: '/images/Banner1_mobile.png',
			link: 'https://via.placeholder.com/150',
		},
		{
			image: '/images/Banner2_mobile.png',
			link: 'https://via.placeholder.com/150',
		},
		{
			image: '/images/Banner3_mobile.png',
			link: 'https://via.placeholder.com/150',
		},
	];

	const isDesktop = useMediaQuery(useTheme().breakpoints.up('sm'));
	const images = isDesktop ? imagesDesktop : imagesMobile;

	const BannerDesktop = '/images/Banner2_desktop.png';
	const BannerMobile = '/images/Banner2_mobile.png';
	const Banner = isDesktop ? BannerDesktop : BannerMobile;

	return (
		<main>
			<Layout>
				<Stack spacing={2}>
					<CarruselImage images={images} />
					<KnowUs />
					<Box
						position='relative'
						height={{ xs: '1097px', sm: '600px' }}
						width={'100%'}
						sx={{
							backgroundImage: `url("${Banner}")`,
							backgroundSize: 'cover',
						}}
					/>
					<QuestionHome />
					<ReviewsHome />
				</Stack>
			</Layout>
		</main>
	);
}
