'use client';
import {
	Card,
	CardContent,
	Typography,
	Box,
	useMediaQuery,
	useTheme,
	Stack,
} from '@mui/material';
import { Discount, IconAddToCart } from '../atoms';
import Image from 'next/image';
import type { Perfume } from '@/entities';

interface Props {
	perfume: Perfume;
}

export const CardProduct = ({ perfume }: Props): JSX.Element => {
	const primaryColor = useTheme().palette.primary.main;

	const { name, description, images, price, discount } = perfume;
	const added = false; // TODO: get from context of cart

	const handleClick = (): void => {
		// TODO: add to cart
	};

	return (
		<Card sx={{ width: { xs: 183, md: 300 }, height: { xs: 350, md: 470 } }}>
			<CardContent>
				<Stack spacing={1}>
					<Image
						priority
						style={{ borderRadius: '4px', width: '100%', height: 'auto' }}
						src={images[0]}
						alt={name}
						sizes='100vw'
						width={500}
						height={300}
					/>
					<Typography
						className='clamp-lines clamp-2-lines'
						gutterBottom
						variant='subtitle2'
						component='div'
						maxWidth='250px'
						sx={{
							overflow: 'hidden',
							textOverflow: 'ellipsis',
							webkitLineClamp: 2,
							webkitBoxOrient: 'vertical',
							display: '-webkit-box',
						}}
					>
						{name}
					</Typography>
					<Box
						display='flex'
						gap={1}
						justifyContent='space-between'
						alignItems='center'
						mb={1}
					>
						<Discount discount={discount ?? undefined} price={price} />
						<Box
							onClick={handleClick}
							sx={{ cursor: 'pointer' }}
							display='flex'
							alignItems='center'
							height='24px'
						>
							<IconAddToCart color={added ? primaryColor : '#000000'} />
						</Box>
					</Box>
					<Typography
						className='clamp-lines clamp-3-lines'
						variant='caption'
						sx={{
							overflow: 'hidden',
							textOverflow: 'ellipsis',
							webkitLineClamp: 3,
							webkitBoxOrient: 'vertical',
							display: '-webkit-box',
						}}
					>
						{description}
					</Typography>
				</Stack>
			</CardContent>
		</Card>
	);
};

interface CardEssenceProps {
	title: string;
	description: string;
	image: string;
}

export const CardEssence = ({
	title,
	description,
	image,
}: CardEssenceProps): JSX.Element => {
	const desktop = useMediaQuery(useTheme().breakpoints.up('sm'));

	return (
		<Card
			sx={{
				width: { xs: 183, sm: 300 },
				height: { xs: 335, sm: 455 },
				overflow: 'hidden',
			}}
		>
			<CardContent>
				<Image
					style={{ borderRadius: '4px' }}
					src={image}
					alt={title}
					width={desktop ? 270 : 153}
					height={desktop ? 270 : 153}
				/>
				<Typography gutterBottom variant='subtitle2' component='div'>
					{title}
				</Typography>
				<Typography variant='caption'>{description}</Typography>
			</CardContent>
		</Card>
	);
};
