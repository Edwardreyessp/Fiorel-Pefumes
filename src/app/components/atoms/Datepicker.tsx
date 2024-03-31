'use client';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import type { Dispatch, SetStateAction } from 'react';
import { Inter } from 'next/font/google';

interface DatepickerProps {
	label?: string;
	value?: Dayjs;
	setValue: Dispatch<SetStateAction<Dayjs>>;
	format?: dateFormat; // Cómo se verá la fecha
	minDate?: Dayjs; // Fecha mínima
	endDate?: Dayjs; // Fecha máxima
}

export type dateFormat =
	| 'DD/MM/YYYY'
	| 'DD/MMM/YYYY'
	| 'DD/MMMM/YYYY'
	| 'MM/YYYY'
	| 'MMM/YYYY'
	| 'MMMM/YYYY'
	| 'MM'
	| 'MMM'
	| 'MMMM'
	| 'YYYY';

type dateViews = 'day' | 'month' | 'year';

const inter = Inter({ subsets: ['latin'] });

export const Datepicker = (props: DatepickerProps): JSX.Element => {
	const {
		value,
		setValue,
		label,
		format = 'DD/MM/YYYY',
		minDate = dayjs('01-02-2024').add(-1, 'year'),
		endDate = dayjs().add(23, 'year'),
	} = props;

	const theme = createTheme({
		typography: {
			fontFamily: [inter.style.fontFamily].join(','),
			subtitle1: {
				fontSize: '1rem',
			},
			body1: {
				fontSize: '1rem',
			},
		},
	});

	const GetViews = (): dateViews[] => {
		const views: dateViews[] = [];

		if (format.includes('YYYY')) views.push('year');
		if (format.includes('MM')) views.push('month');
		if (format.includes('DD')) views.push('day');

		return views;
	};

	return (
		<AppRouterCacheProvider>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<DatePicker
						label={label ?? ''}
						format={format}
						defaultValue={value}
						onChange={newValue => {
							setValue(newValue ?? dayjs);
						}}
						minDate={minDate.add(0, 'day')}
						maxDate={endDate.add(0, 'year')}
						views={GetViews()}
					/>
				</LocalizationProvider>
			</ThemeProvider>
		</AppRouterCacheProvider>
	);
};
