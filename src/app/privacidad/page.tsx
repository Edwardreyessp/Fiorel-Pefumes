import { Stack, Typography } from '@mui/material';
import { privacityText } from '../components/utils'; // TODO: get from API
import { Layout } from '../components/organisms';

export default function PrivacityPage(): JSX.Element {
	const date = '05/03/2024'; // TODO: get from API

	return (
		<Layout>
			<Stack spacing={4} p={4}>
				<Stack spacing={1}>
					<Typography variant='h1'>Aviso de privacidad</Typography>
					<Typography variant='caption'>
						Última actualización: {date}
					</Typography>
				</Stack>
				<Typography style={{ whiteSpace: 'pre-line' }}>
					{privacityText}
				</Typography>
			</Stack>
		</Layout>
	);
}
