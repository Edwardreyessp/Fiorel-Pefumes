import { Grid, Typography } from '@mui/material';

interface StatProps {
	startIcon: JSX.Element;
	text: string;
	valueShown: string;
}

export const Stats = ({
	text,
	startIcon,
	valueShown,
}: StatProps): JSX.Element => {
	return (
		<Grid
			container
			display={'flex'}
			justifyContent={'center'}
			alignItems={'center'}
			maxWidth={'207px'}
		>
			<Grid xs={12}>
				<Typography align='center' variant='h2'>
					{valueShown}
				</Typography>
			</Grid>

			<Grid
				display={'flex'}
				alignItems={'center'}
				justifyContent={'center'}
				textAlign={'center'}
				xs={2}
				pt={2}
				pl={1}
			>
				{startIcon}
			</Grid>
			<Grid alignItems={'center'} xs={10} pt={2} pl={1}>
				<Typography width={"190px"}>
					{text}
				</Typography>
			</Grid>
		</Grid>
	);
};
