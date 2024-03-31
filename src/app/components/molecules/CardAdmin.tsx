'use client';
import { Box, Card, Typography, useTheme } from '@mui/material';
import { type MouseEventHandler } from 'react';
interface CardAdminProps {
	colorBorder?: string;
	colorTitle?: string;
	captionColor?: string;
	backgroundColor?: string;
	dashboardText: string;
	captionText?: string;
	width?: string;
	onClick?:
		| (() => void)
		| ((event: React.ChangeEvent<HTMLInputElement>) => Promise<void>);
}

export const CardAdmin: React.FC<CardAdminProps> = ({
	colorBorder,
	colorTitle,
	captionColor = '#000',
	backgroundColor = '#fff',
	dashboardText = '',
	captionText = '',
	width = '100%',
	onClick,
}: CardAdminProps): JSX.Element => {
	const primaryColor = useTheme().palette.primary.main;
	return (
		<Card
			component='div' // Add the missing component property
			onPointerDown={(e: { preventDefault: () => void }) => {
				e.preventDefault();
			}}
			onClick={onClick as MouseEventHandler<HTMLDivElement>} // Ensure that onClick is of type MouseEventHandler<HTMLDivElement>
			sx={{
				borderLeft: `15px solid ${colorBorder ?? primaryColor}`,
				width,
				height: '197px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				textAlign: 'center',
				backgroundColor,
				cursor: 'pointer',
			}}
		>
			<Box p={1}>
				<Typography variant='h2' color={colorTitle ?? primaryColor}>
					{dashboardText}
				</Typography>
				<Typography variant='caption' color={captionColor}>
					{captionText}
				</Typography>
			</Box>
		</Card>
	);
};
