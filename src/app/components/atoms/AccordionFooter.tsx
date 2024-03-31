import {
	Accordion,
	AccordionSummary,
	Typography,
	AccordionDetails,
	Link,
} from '@mui/material';
import { IconAdd } from '.';

// interface for the props it will have a title and the children
interface AccordionFooterProps {
	title: string;
	links: Array<{ name: string; href: string }>;
}

export const AccordionFooter = ({
	title,
	links,
}: AccordionFooterProps): JSX.Element => {
	return (
		<>
			<Accordion
				sx={{
					border: '1px solid black',
				}}
			>
				<AccordionSummary
					expandIcon={<IconAdd color='white' />}
					aria-controls='panel1-content'
					id='panel1-header'
					sx={{
						backgroundColor: 'black',
						color: 'white',
						border: '1px solid black',
					}}
				>
					<Typography variant='subtitle1'>{title}</Typography>
				</AccordionSummary>
				{links.map((link, index) => (
					<AccordionDetails
						key={index}
						sx={{
							backgroundColor: 'black',
							color: 'white',
							border: '1px solid black',
						}}
					>
						<Link
							key={index}
							href={link.href}
							color={'white'}
							underline='hover'
						>
							{link.name}
						</Link>
					</AccordionDetails>
				))}
			</Accordion>
		</>
	);
};
