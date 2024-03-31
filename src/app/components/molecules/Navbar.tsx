'use client';
import { Fragment, useState } from 'react';
import {
	AppBar,
	Button,
	Drawer,
	IconButton,
	InputBase,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
	styled,
} from '@mui/material';
import type { ButtonProps } from '@mui/material/Button';
import { Box } from '@mui/system';
import {
	IconCart,
	IconClose,
	IconMenu,
	IconProfile,
	IconSearch,
} from '../atoms';
import Image from 'next/image';

const NavButton = styled(Button)<ButtonProps>(({ theme }) => ({
	[theme.breakpoints.down('sm')]: {
		display: 'none',
	},
	fontFamily: ['gothic.style.fontFamily'],
	fontSize: '19px',
}));

export const Navbar = (): JSX.Element => {
	return (
		<AppBar position='static'>
			<Toolbar sx={{ bgcolor: 'white', display: 'flex' }}>
				<MenuDrawer />
				<Box sx={{ marginX: { xs: 'auto', sm: '0' } }}>
					<Image
						src='/images/fiorel_perfumes_black.png'
						alt='logo'
						width={156}
						height={47}
					/>
				</Box>
				<Box sx={{ marginX: { xs: '0', sm: 'auto' } }}>
					<NavButton variant='text' color='inherit'>
						MI FRAGANCIA
					</NavButton>
					<ColeccionMenu />
				</Box>
				<IconButton aria-label='Cart'>
					<IconCart />
				</IconButton>
				<SearchDrawer />
				<IconButton
					aria-label='Profile'
					sx={{ display: { xs: 'none', sm: 'flex' } }}
				>
					<IconProfile />
				</IconButton>
			</Toolbar>
		</AppBar>
	);
};

const SearchDrawer = (): JSX.Element => {
	const [state, setState] = useState(false);

	const toggleDrawer = (open: boolean) => () => {
		setState(open);
	};

	const list = (): JSX.Element => (
		<Box
			sx={{
				width: '100%',
				flexDirection: 'column',
				alignItems: 'center', // Alinea los items al centro verticalmente
			}}
			role='presentation'
		>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					height: '64px',
					marginLeft: '50px',
					marginRight: '50px',
				}}
			>
				<IconButton>
					<IconSearch />
				</IconButton>
				<InputBase
					placeholder='Buscar...'
					sx={{
						flex: 1,
						marginRight: '8px',
						border: '1px solid #ccc',
						borderRadius: '4px',
						padding: '8px',
					}}
				/>
				<IconButton>
					<IconClose />
				</IconButton>
			</Box>
		</Box>
	);

	return (
		<Box>
			<Fragment key={'top'}>
				<IconButton
					aria-label='Search'
					onClick={toggleDrawer(true)}
					sx={{ display: { xs: 'none', sm: 'flex' } }}
				>
					<IconSearch />
				</IconButton>
				<Drawer anchor={'top'} open={state} onClose={toggleDrawer(false)}>
					{list()}
				</Drawer>
			</Fragment>
		</Box>
	);
};

const ColeccionMenu = (): JSX.Element => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = (): void => {
		setAnchorEl(null);
	};
	return (
		<>
			<NavButton
				variant='text'
				color='inherit'
				id='basic-button'
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
			>
				COLECCIÓN
			</NavButton>
			<Menu
				id='basic-menu'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
			>
				<MenuItem onClick={handleClose}>
					<span style={{ marginRight: '8px', fontSize: '1.5rem' }}>&bull;</span>
					<Typography variant='body1'>Mujer</Typography>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<span style={{ marginRight: '8px', fontSize: '1.5rem' }}>&bull;</span>
					<Typography variant='body1'>Hombre</Typography>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<span style={{ marginRight: '8px', fontSize: '1.5rem' }}>&bull;</span>
					<Typography variant='body1'>Sets</Typography>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<span style={{ marginRight: '8px', fontSize: '1.5rem' }}>&bull;</span>
					<Typography variant='body1'>Best sellers</Typography>
				</MenuItem>
			</Menu>
		</>
	);
};

const MenuDrawer = (): JSX.Element => {
	const [menuDrawer, setMenuDrawer] = useState({
		right: false,
	});

	const handlerClose = (): void => {
		setMenuDrawer({ right: false });
	};

	const habdleOpen = (): void => {
		setMenuDrawer({ right: true });
	};

	const list = (): JSX.Element => (
		<Box
			sx={{
				width: '100%',
				flexDirection: 'row',
				alignItems: 'center',
			}}
			role='presentation'
		>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					height: '64px',
					marginLeft: '50px',
					marginRight: '50px',
				}}
			>
				<IconButton>
					<IconSearch />
				</IconButton>
				<InputBase
					placeholder='Buscar...'
					sx={{
						flex: 1,
						marginRight: '8px',
						border: '1px solid #ccc',
						borderRadius: '4px',
						padding: '8px',
					}}
				/>
				<IconButton onClick={handlerClose}>
					<IconClose />
				</IconButton>
			</Box>
			<List>
				<ListItem key={'search'} disablePadding>
					<ListItemButton>
						<ListItemText primary={'Search'} />
						<ListItemIcon>
							<IconSearch />
						</ListItemIcon>
					</ListItemButton>
				</ListItem>
			</List>
		</Box>
	);

	return (
		<Box>
			<Fragment key={'right'}>
				<IconButton
					aria-label='Search'
					sx={{ display: { xs: 'flex', sm: 'none' } }}
					onClick={habdleOpen}
				>
					<IconMenu />
				</IconButton>
				<Drawer anchor={'right'} open={menuDrawer.right} onClose={handlerClose}>
					{list()}
				</Drawer>
			</Fragment>
		</Box>
	);
};
