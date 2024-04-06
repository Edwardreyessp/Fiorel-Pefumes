'use client';
import { Box, Typography } from '@mui/material';
import type { SxProps } from '@mui/material';
import { GetIcon, Tag } from '../atoms';
import { cloneElement, useContext } from 'react';
import type { PerfumeFamily } from '@/entities';
import { AddEssence } from '@/app/admin/categorias/AddEssence';
import { CategoryContext } from '@/providers/CategoryProvider';

interface CategoryProps {
	family: PerfumeFamily;
}

export const Family = ({ family }: CategoryProps): JSX.Element => {
	const { name, icon, essences } = family;
	const { setTag } = useContext(CategoryContext);

	const titleBox: SxProps = {
		background: 'black',
		borderRadius: '4px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '178px',
		minWidth: '178px',
		gap: 1,
		padding: '16px',
		cursor: 'pointer',
	};

	const handleUpdateTag = (): void => {
		setTag({
			tag: family,
			collection: 'perfumeFamilies',
			method: 'PUT',
		});
	};

	return (
		<Box borderRadius='4px' display='flex' border='1px solid'>
			<Box onClick={handleUpdateTag} sx={titleBox}>
				<Box height='24px'>
					{cloneElement(GetIcon(icon), { color: '#ffffff' })}
				</Box>
				<Typography
					className='clamp-lines clamp-3-lines'
					sx={{
						maxWidth: 100,
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						webkitLineClamp: 2,
						webkitBoxOrient: 'vertical',
						display: '-webkit-box',
					}}
					variant='body2'
					color='#ffffff'
				>
					{name}
				</Typography>
			</Box>
			<Box
				display='flex'
				flexWrap='wrap'
				gap={1}
				alignItems='center'
				p={{ xs: '20px 15px', sm: '20px 30px' }}
			>
				{essences.map((essence, index) => (
					<Tag key={index} essence={essence} />
				))}
				<AddEssence idFamily={family.id} />
			</Box>
		</Box>
	);
};
