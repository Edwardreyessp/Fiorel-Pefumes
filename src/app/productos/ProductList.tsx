'use client';
import type { Perfume } from '@/entities';
import { getInventory } from '@/firebase';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { CardProduct } from '../components/molecules';

export const ProductList = ({
	category,
}: {
	category: string;
}): JSX.Element => {
	const [products, setProducts] = useState<Perfume[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getInventory()
			.then(data => {
				setProducts(data as Perfume[]);
				setIsLoading(false);
			})
			.catch(error => {
				console.error('Error getting inventory:', error);
			});
	}, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<Box display='flex' flexWrap='wrap' gap={4} justifyContent='center'>
			{products
				.filter(product => {
					if (category === 'Todos') return true;
					// TODO: Agregar los sets de categorías
					if (category === 'Mujer') return product.category === 'woman';
					if (category === 'Hombre') return product.category === 'man';
					if (category === 'Unisex') return product.category === 'unisex';
					return product.category === category;
				})
				.map(product => (
					<CardProduct key={product.id} perfume={product} />
				))}
		</Box>
	);
};
