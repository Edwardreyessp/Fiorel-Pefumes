'use client';
import { CardInventario } from '@/app/components/molecules';
import type { Perfume } from '@/entities';
import { PerfumeContext } from '@/providers/PerfumeProvider';
import { Stack } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';

export const ProductList = (): JSX.Element => {
	const { getPerfumes, perfumes, isLoading, setNewPerfume, onDelete } =
		useContext(PerfumeContext);
	const router = useRouter();

	useEffect(() => {
		getPerfumes().catch(() => {
			console.error('Error al cargar los perfumes');
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	const onEdit = (perfume: Perfume): void => {
		setNewPerfume(perfume);
		router.push('/admin/inventario/editar');
	};

	const handleDelete = (perfume: Perfume): void => {
		setNewPerfume(perfume);
		onDelete();
	};

	return (
		<Stack spacing={2}>
			{perfumes?.map(perfume => (
				<CardInventario
					key={perfume.id}
					perfume={perfume}
					IconEditFuction={() => {
						onEdit(perfume);
					}}
					IconTrashFuction={() => {
						handleDelete(perfume);
					}}
				/>
			))}
		</Stack>
	);
};
