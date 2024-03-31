'use client';
import { Fragment, useEffect, useState } from 'react';
import {
	AppBar,
	Button,
	Drawer,
	IconButton,
	InputBase,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
	styled,
} from '@mui/material';
import type { ButtonProps } from '@mui/material/Button';
import { Box } from '@mui/system';
import {
	IconArrowRight,
	IconArrrowLeft,
	IconCart,
	IconClose,
	IconMenu,
	IconProfile,
	IconSearch,
} from '../atoms';
import Image from 'next/image';
import Link from 'next/link';
import { DrawerCart } from '../organisms';

const NavButton = styled(Button)<ButtonProps>(({ theme }) => ({
	[theme.breakpoints.down('sm')]: {
		display: 'none',
	},
	fontFamily: ['gothic.style.fontFamily'],
	fontSize: '19px',
	textTransform: 'none',
	color: '#000',

}));

export const Navbar = (): JSX.Element => {
	const [showEnvios, setShowEnvios] = useState(false);
	const [isTop, setIsTop] = useState(true);
	const [lastScrollTop, setLastScrollTop] = useState(0);


	useEffect(() => {
		const handleScroll = (): void => {
			const scrollPosition = window.scrollY;
			setIsTop(scrollPosition === 0 || scrollPosition < lastScrollTop);

			// Actualizar el último valor de desplazamiento al final del handleScroll
			setLastScrollTop(scrollPosition);
		};

		window.addEventListener('scroll', handleScroll);

		// Limpiar el event listener al desmontar el componente
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [lastScrollTop]);

	useEffect(() => {
		const handleScroll = (): void => {
			// Verifica si el usuario ha hecho scroll hasta arriba
			const scrolledToTop = window.scrollY === 0;

			// Actualiza el estado para mostrar u ocultar la segunda Toolbar
			setShowEnvios(!scrolledToTop);
		};

		// Agrega un event listener para el evento scroll
		window.addEventListener('scroll', handleScroll);

		// Elimina el event listener cuando el componente se desmonta
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []); // El array vacío como segundo argumento indica que este efecto solo se ejecuta una vez, similar a componentDidMoun


	return (
		<>
			<AppBar>
				{!showEnvios && (
					<Box sx={{ backgroundColor: "#000" }} display={"flex"} justifyContent={"center"} height={"28px"}>
						<Typography color={"#fff"} variant='caption' display={{ xs: "none", md: "block" }}>
							&quot;Envíos gratis arriba de 799 pesos. ¡Gástalos y no te preocupes por el envío! 🎉📦&quot;
						</Typography>
						<Typography color={"#fff"} variant='caption' display={{ xs: "block", md: "none" }}>
							&quot;¡Envíos gratis arriba de 799 pesos! 🎉📦&quot;
						</Typography>
					</Box>
				)}
				{isTop && (
					<Toolbar sx={{ height: "47px", backgroundColor: "#fff", display: "flex", justifyContent: "space-between" }}  >
						<Box display={{ xs: "block", md: "none" }}>
							<MenuDrawer />
						</Box>
						<Link href='/'>
							<Image
								src='/images/fiorel_perfumes_black.png'
								alt='Logo'
								width={156}
								height={47}
							/>
						</Link>
						<Box display={{ xs: "none", md: "flex" }} justifyContent={"space-evenly"}>
							<Link href='/cuestionario'>
								<NavButton variant='text' color='inherit'>
									MI FRAGANCIA
								</NavButton>
							</Link>
							<ColeccionMenu />
							<Link href='/nosotros'>
								<NavButton variant='text' color='inherit'>
									NOSOTROS
								</NavButton>
							</Link>
						</Box>
						<Box display={"flex"} justifyContent={"space-evenly"} width={"10%"}>
							<CarrritoDrawer />

							<Box display={{ xs: "none", md: "block" }}>
								<SearchDrawer />
							</Box>
							<Box display={{ xs: "none", md: "block" }}>
								<Link href='/auth'>
									<IconButton>
										<IconProfile />
									</IconButton>
								</Link>
							</Box>
						</Box>
					</Toolbar>
				)}
			</AppBar>
		</>
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
				<IconButton onClick={
					(): void => {
						setState(false);
					}

				}>
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

const CarrritoDrawer = (): JSX.Element => {
	const [state, setState] = useState(false);

	const toggleDrawer = (open: boolean) => () => {
		setState(open);
	};


	return (

		<>
			<IconButton
				aria-label='Carrito'
				onClick={toggleDrawer(true)}
			>
				<IconCart />
			</IconButton>
			<DrawerCart open={state} onClose={function (): void {
				setState(false);
			}} items={[]} />
		</>

	);
}


const MenuDrawer = (): JSX.Element => {
	const [DrawerState, setDrawerState] = useState(false)
	const [State, setState] = useState(false)

	const onClose = (): void => {
		setDrawerState(false);
	}

	const ChangeState = (): void => {
		setState(!State)
	}


	return (
		<Fragment key={'right'}>
			<IconButton
				aria-label='Menu'
				onClick={(): void => {
					setDrawerState(true);
				}}
			>
				<IconMenu />
			</IconButton>
			<Drawer
				anchor={'right'}
				open={DrawerState}
				onClose={onClose}
			>
				{!State ? FirstStateDrawer(onClose, ChangeState) : SecondStateDrawer(onClose, ChangeState)}
			</Drawer>
		</Fragment>
	);
};

const FirstStateDrawer = (onClose: () => void, ChangeState: () => void): JSX.Element => {
	return (
		<Box width={"100vw"} py={2}>
			<Box display={"flex"} justifyContent={"space-between"} sx={{ borderBottom: "1px solid #000" }} px={2}>
				<IconButton onClick={onClose}>
					<Link href={'/auth'}>
						<IconProfile />
					</Link>
				</IconButton>
				<IconButton onClick={onClose}>
					<IconClose />
				</IconButton>
			</Box>
			<Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} sx={{ borderBottom: "1px solid #000" }} px={2} height={50}>
				<Typography >Buscar</Typography>
				{/* Agregar buscador */}
			</Box>
			<Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} sx={{ borderBottom: "1px solid #000" }} px={2} height={50} onClick={onClose}>
				<Link href={'/cuestionario'}>
					<Typography sx={{ color: "#000" }}>Mi fragancia</Typography>
				</Link>
			</Box>
			<Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} sx={{ borderBottom: "1px solid #000" }} px={2} height={50} onClick={ChangeState}>
				<Typography>Coleccion</Typography>
				<IconArrowRight />
			</Box>
			<Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} sx={{ borderBottom: "1px solid #000" }} px={2} height={50} onClick={onClose}>
				<Link href={'/nostros'}>
					<Typography sx={{ color: "#000" }}>Nostros</Typography>
				</Link>
			</Box>
		</Box>
	);
};

const SecondStateDrawer = (onClose: () => void, ChangeState: () => void): JSX.Element => {
	return (
		<Box width={"100vw"} py={2}>
			<Box display={"flex"} justifyContent={"space-between"} sx={{ borderBottom: "1px solid #000" }} px={2}>
				<IconButton onClick={ChangeState}>
					<IconArrrowLeft />
				</IconButton>
				<IconButton onClick={onClose}>
					<IconClose />
				</IconButton>
			</Box>
			<Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} sx={{ borderBottom: "1px solid #000" }} px={2} height={50}>
				<Typography >Buscar</Typography>
				{/* Agregar buscador */}
			</Box>
			<Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} sx={{ borderBottom: "1px solid #000" }} px={2} height={50} onClick={onClose}>
				<Link href={'/mujer'}>
					<Typography sx={{ color: "#000" }}>Mujer</Typography>
				</Link>
			</Box>
			<Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} sx={{ borderBottom: "1px solid #000" }} px={2} height={50} onClick={onClose}>
				<Link href={'/hombre'}>
					<Typography sx={{ color: "#000" }}>Hombre</Typography>
				</Link>
			</Box>
			<Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} sx={{ borderBottom: "1px solid #000" }} px={2} height={50} onClick={onClose}>
				<Link href={'/sets'}>
					<Typography sx={{ color: "#000" }}>Sets</Typography>
				</Link>
			</Box>
		</Box>
	);
}