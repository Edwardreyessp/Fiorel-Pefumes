'use client';
import { ButtonSecondary, IconAdd } from '@/app/components/atoms';
import { BasicTabs } from '@/app/components/molecules';
import { HoverImage } from '@/app/components/molecules/HoverImages';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function BannersPage(): JSX.Element {
	const tabs = [
		{
			title: 'Home principal',
			children: <HomeBanners />,
		},
		{
			title: 'Home seccion media',
			children: <HomeMidSectionBanners />,
		},
		{
			title: 'Acerca de nosotros',
			children: <AboutUsBanners />,
		},
	];

	return (
		<main>
			<Box >
				<Typography variant='h1'>Banners</Typography>
				<p>Breadcrumb</p>
				<BasicTabs tabs={tabs} />
			</Box>
		</main>
	);
}

const HomeBanners = (): JSX.Element => {
	const [urls, setUrls] = useState<bannerInterface[]>([]);
	const router = useRouter();

	const handleCick = (): void => {
		router.push('/admin/banners/crear');
	};

	useEffect(() => {
		console.log('get banners home principal');
		// fetch('http://localhost:3000/api/banners')
		// 	.then((response) => response.json())
		// 	.then((data) => {
		// 		setUrls(data);
		// 	});

		setUrls(bannersList);
	}, []);
	interface bannerInterface {
		id: number;
		title: string;
		image: string;
	}
	const bannersList: bannerInterface[] = [
		{
			id: 1,
			title: 'Banner 1',
			image: '/images/Banner1_desktop.png',
		},
		{
			id: 2,
			title: 'Banner 2',
			image: '/images/Banner2_desktop.png',
		},
		{
			id: 3,
			title: 'Banner 3',
			image: '/images/Banner3_desktop.png',
		},
		{
			id: 4,
			title: 'Banner 4',
			image: '/images/Banner4_desktop.png',
		},
	];

	const handleDelete = (id: number): void => {
		console.log('delete', id);
	};

	const handleEdit = (id: number): void => {
		// esta funcion nos navega a la pagina de edicion
		console.log('edit', id);
	};

	return (
		<>
			<ButtonSecondary text='' endIcon={<IconAdd />} onClick={handleCick} />
			<Box display='flex' flexWrap='wrap' gap={2}>
				{urls.map(banner => (
					<HoverImage
						key={banner.id}
						image={banner.image}
						bothIcons={true}
						handleDelete={() => {
							handleDelete(banner.id);
						}}
						handleEdit={() => {
							handleEdit(banner.id);
						}}
					/>
				))}
			</Box>
		</>
	);
};

const HomeMidSectionBanners = (): JSX.Element => {
	const [urls, setUrls] = useState<bannerInterface[]>([]);
	const router = useRouter();

	const handleCick = (): void => {
		router.push('/admin/banners/crear');
	};

	useEffect(() => {
		console.log('get banners home mid section');
		// fetch('http://localhost:3000/api/banners')
		// 	.then((response) => response.json())
		// 	.then((data) => {
		// 		setUrls(data);
		// 	});

		setUrls(bannersList);
	}, []);
	interface bannerInterface {
		id: number;
		title: string;
		image: string;
	}
	const bannersList: bannerInterface[] = [
		{
			id: 1,
			title: 'Banner 1',
			image: '/images/Banner1_desktop.png',
		},
		{
			id: 2,
			title: 'Banner 2',
			image: '/images/Banner2_desktop.png',
		},
		{
			id: 4,
			title: 'Banner 4',
			image: '/images/Banner4_desktop.png',
		},
	];

	const handleDelete = (id: number): void => {
		console.log('delete', id);
	};

	const handleEdit = (id: number): void => {
		// esta funcion nos navega a la pagina de edicion
		console.log('edit', id);
	};

	return (
		<>
			<ButtonSecondary text='' endIcon={<IconAdd />} onClick={handleCick} />
			<Box display='flex' flexWrap='wrap' gap={2} paddingTop={'35px'}>
				{urls.map(banner => (
					<HoverImage
						key={banner.id}
						image={banner.image}
						bothIcons={true}
						handleDelete={() => {
							handleDelete(banner.id);
						}}
						handleEdit={() => {
							handleEdit(banner.id);
						}}
					/>
				))}
			</Box>
		</>
	);
};

const AboutUsBanners = (): JSX.Element => {
	const [urls, setUrls] = useState<bannerInterface[]>([]);
	const router = useRouter();

	const handleCick = (): void => {
		router.push('/admin/banners/crear');
	};

	useEffect(() => {
		console.log('get banners about us section');
		// fetch('http://localhost:3000/api/banners')
		// 	.then((response) => response.json())
		// 	.then((data) => {
		// 		setUrls(data);
		// 	});

		setUrls(bannersList);
	}, []);
	interface bannerInterface {
		id: number;
		title: string;
		image: string;
	}
	const bannersList: bannerInterface[] = [
		{
			id: 2,
			title: 'Banner 2',
			image: '/images/Banner2_desktop.png',
		},
		{
			id: 4,
			title: 'Banner 4',
			image: '/images/Banner4_desktop.png',
		},
	];

	const handleDelete = (id: number): void => {
		console.log('delete', id);
	};

	const handleEdit = (id: number): void => {
		// esta funcion nos navega a la pagina de edicion
		console.log('edit', id);
	};

	return (
		<>
			<ButtonSecondary text='' endIcon={<IconAdd />} onClick={handleCick} />
			<Box display='flex' flexWrap='wrap' gap={2} paddingTop={'35px'}>
				{urls.map(banner => (
					<HoverImage
						key={banner.id}
						image={banner.image}
						bothIcons={true}
						handleDelete={() => {
							handleDelete(banner.id);
						}}
						handleEdit={() => {
							handleEdit(banner.id);
						}}
					/>
				))}
			</Box>
		</>
	);
};
