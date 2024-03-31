'use client';
import { Box } from '@mui/material';
import { IconPicker } from '../atoms';
import styles from './IconTable.module.css';
import { icons } from '../utils';
import { type TagData } from '@/app/admin/categorias/Provider';

interface IconTableProps {
	tag: TagData;
	setTag: (tag: TagData) => void;
}

export const IconTable = (props: IconTableProps): JSX.Element => {
	const { tag, setTag } = props;

	const handleIconClick = (icon: string): void => {
		setTag({
			...tag,
			tag: {
				...tag.tag,
				icon,
			},
		});
	};

	return (
		<Box className={styles.container}>
			{icons.map((icon, index) => (
				<IconPicker
					key={index}
					icon={icon.id}
					onClick={() => {
						handleIconClick(icon.id);
					}}
					isSelected={icon.id === tag.tag.icon}
				/>
			))}
		</Box>
	);
};
