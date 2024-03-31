'use-client';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
} from '@mui/material';
import { IconArrowDown } from '.';

interface AccordionFAQProps {
	title: string;
	description: string;
}

export const AccordionFAQ = ({
	title,
	description,
}: AccordionFAQProps): JSX.Element => {
	return (
		<Accordion sx={{ border: 'black solid 1px' }}>
			<AccordionSummary
				expandIcon={<IconArrowDown />}
				aria-controls='panel1-content'
				id='panel1-header'
			>
				<Typography variant='body2'>{title}</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography variant='caption'>{description}</Typography>
			</AccordionDetails>
		</Accordion>
	);
};
