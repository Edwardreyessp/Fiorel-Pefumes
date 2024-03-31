'use client';
import type { NewsletterItem } from '@/entities';
import { Box, Stack } from '@mui/material';
import Image from 'next/image';
import { Input } from '../atoms';
import { type ChangeEvent } from 'react';

interface Props {
	newsletter: NewsletterItem;
	handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const NewsletterForm = ({
	newsletter,
	handleChange,
}: Props): JSX.Element => {
	return (
		<Stack spacing={2} alignItems='center'>
			<Stack
				spacing={2}
				width={{ xs: '354px', md: '840px' }}
				alignItems='center'
				border='solid 1px'
				p={2}
			>
				<Image
					src='/images/fiorel_perfumes_black.png'
					alt={'Fiorel'}
					width={156}
					height={47}
				/>
				<Box maxWidth={{ xs: '314px', md: '800px' }} position='relative'>
					{/* //TODO: Agregar Drop image */}
					<Image fill src={newsletter.image} alt={newsletter.title} />
				</Box>
				{inputProps.map(input => (
					<Input
						key={input.id}
						id={input.id}
						label={input.label}
						defaultValue={newsletter[
							input.id as keyof NewsletterItem
						].toString()}
						onChange={handleChange}
					/>
				))}
			</Stack>
		</Stack>
	);
};

const inputProps = [
	{ id: 'title', label: 'Título del mensaje' },
	{ id: 'description', label: 'Cuerpo del mensaje' },
	{ id: 'link', label: 'Link del producto o página' },
];
