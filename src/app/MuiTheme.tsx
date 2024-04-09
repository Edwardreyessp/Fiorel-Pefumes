'use client';

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Barlow_Condensed, Inter } from 'next/font/google';
import { useContext } from 'react';
import { ColorContext } from './components/organisms/ColorProvider';

interface MuiThemeProps {
	children: React.ReactNode;
}

const barlow = Barlow_Condensed({
	weight: ['500'],
	subsets: ['latin'],
	display: 'swap',
});

const inter = Inter({ subsets: ['latin'] });

const MuiTheme = ({ children }: MuiThemeProps): JSX.Element => {
	const { Color } = useContext(ColorContext);

	const theme = createTheme({
		palette: {
			primary: {
				main: Color,
			},
			secondary: {
				main: '#000000',
			},
			success: {
				main: '#45D053',
			},
			info: {
				main: '#FFFFFF',
			},
		},
		typography: {
			fontFamily: [
				'Gothic A1',
				barlow.style.fontFamily,
				inter.style.fontFamily,
			].join(','),
			h1: {
				fontFamily: barlow.style.fontFamily,
				fontSize: '2.063rem',
			},
			// Dashboard title
			h2: {
				fontFamily: barlow.style.fontFamily,
				fontSize: '4rem',
			},
			subtitle1: {
				fontFamily: barlow.style.fontFamily,
				fontSize: '2rem',
			},
			// Title of the cards
			subtitle2: {
				fontFamily: 'Gothic A1',
				fontWeight: 700,
				fontSize: '1.063rem',
			},
			body1: {
				fontFamily: 'Gothic A1',
				fontSize: '1.188rem',
			},
			// Body bold
			body2: {
				fontFamily: 'Gothic A1',
				fontSize: '1.188rem',
				fontWeight: 700,
			},
			button: {
				fontFamily: 'Gothic A1',
				fontSize: '1rem',
				fontWeight: 600,
				textTransform: 'none',
			},
			caption: {
				fontFamily: 'Gothic A1',
				fontSize: '0.875rem',
			},
		},
		components: {
			MuiTypography: {
				styleOverrides: {
					root: {
						marginBottom: '-4px',
					},
				},
			},
		},
		breakpoints: {
			values: {
				xs: 0,
				sm: 600,
				md: 900,
				lg: 1200,
				xl: 1427,
			},
		},
	});

	return (
		<AppRouterCacheProvider>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</AppRouterCacheProvider>
	);
};

export default MuiTheme;
