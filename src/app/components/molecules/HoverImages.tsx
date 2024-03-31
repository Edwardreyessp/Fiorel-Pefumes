'use client';

import { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { IconEdit, IconTrash } from '../atoms';

interface Props {
	image: string;
	bothIcons?: boolean;
	handleEdit?: () => void;
	handleDelete: () => void;
}

export const HoverImage = ({
	image,
	bothIcons = false,
	handleEdit,
	handleDelete,
}: Props): JSX.Element => {
	const [hover, setHover] = useState(false);
	const [hoverEdit, setHoverEdit] = useState(false);
	const [hoverTrash, setHoverTrash] = useState(false);

	const handleHoverTrash = (): void => {
		setHoverTrash(true);
	};

	const handleLeaveTrash = (): void => {
		setHoverTrash(false);
	};

	const handleHoverEdit = (): void => {
		setHoverEdit(true);
	};

	const handleLeaveEdit = (): void => {
		setHoverEdit(false);
	};

	const handleHover = (): void => {
		setHover(true);
	};

	const handleLeave = (): void => {
		setHover(false);
	};

	return (
		<Box
			position='relative'
			width='100%'
			onMouseEnter={handleHover}
			onMouseLeave={handleLeave}
		>
			<img src={image} alt='product' width='100%' />
			{hover && (
				<Box
					position='absolute'
					top='0'
					left='0'
					width='100%'
					height='calc(100% - 8.51px)'
					bgcolor='rgba(0, 0, 0, 0.8)'
					display='flex'
					justifyContent='center'
					alignItems='center'
				>
					{bothIcons && (
						<IconButton
							onMouseEnter={handleHoverEdit}
							onMouseLeave={handleLeaveEdit}
							onClick={handleEdit}
						>
							<IconEdit
								color={hoverEdit ? '#FFFFFF' : '#999999'}
								width='24px'
							/>
						</IconButton>
					)}
					<IconButton
						onMouseEnter={handleHoverTrash}
						onMouseLeave={handleLeaveTrash}
						onClick={handleDelete}
					>
						<IconTrash
							color={hoverTrash ? '#FF2828' : '#999999'}
							width='24px'
						/>
					</IconButton>
				</Box>
			)}
		</Box>
	);
};
