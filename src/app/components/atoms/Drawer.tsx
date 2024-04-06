'use client';
import {
	Box,
	Drawer as MuiDrawer,
	Typography,
	useTheme,
	useMediaQuery,
	Stack,
} from '@mui/material';
import {
	Checkbox,
	IconClose,
	RadioButtonsGroup,
	type RadioProps,
	type CheckBoxProps,
} from '.';
import { useState } from 'react';

interface Props {
	isOpen: boolean;
	onClose: () => void;
	radioOptions: RadioProps[];
	isFilter?: boolean;
	checkboxes?: CheckBoxProps[]; // Nueva propiedad para los checkboxes
}

export const DrawerOrden = ({
	isOpen,
	onClose,
	radioOptions,
	isFilter = false,
	checkboxes = [],
}: Props): JSX.Element => {
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
	const [isHovered, setIsHovered] = useState(false);

	return (
		<MuiDrawer anchor={'right'} open={isOpen} onClose={onClose}>
			<Box
				sx={{
					width: isDesktop ? '424px' : '100vw',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					pt: '20px',
				}}
			>
				<Box sx={{ width: '80%' }}>
					<Box sx={{ borderBottom: `1px solid ${theme.palette.primary.main}` }}>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
							}}
						>
							<Typography variant='h1'>Ordenar por</Typography>
							<Box
								onClick={onClose}
								onMouseEnter={() => {
									setIsHovered(true);
								}}
								onMouseLeave={() => {
									setIsHovered(false);
								}}
								onPointerDown={e => {
									e.preventDefault();
								}}
								sx={{ width: '24px', height: '24px', cursor: 'pointer' }}
							>
								<IconClose color={isHovered ? '#FF2828' : '#999999'} />
							</Box>
						</Box>
					</Box>
					<Box sx={{ marginRight: 'auto' }} p={1}>
						<RadioButtonsGroup options={radioOptions} />
					</Box>
				</Box>
				{isFilter && checkboxes.length > 0 ? (
					<Box
						sx={{
							width: isDesktop ? '424px' : '100vw',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
							pt: '20px',
						}}
					>
						<Box sx={{ width: '80%' }}>
							<Box
								sx={{ borderBottom: `1px solid ${theme.palette.primary.main}` }}
							>
								<Box
									sx={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'space-between',
									}}
								>
									<Typography variant='h1'>Filtrar por</Typography>
									<Box></Box>
								</Box>
							</Box>
							<Stack sx={{ marginRight: 'auto' }} p={1}>
								{checkboxes.map((checkbox, index) => (
									<Checkbox
										key={index}
										id={checkbox.id}
										label={checkbox.label}
										checked={checkbox.checked}
										onChange={checkbox.onChange}
									/>
								))}
							</Stack>
						</Box>
					</Box>
				) : null}
			</Box>
		</MuiDrawer>
	);
};
