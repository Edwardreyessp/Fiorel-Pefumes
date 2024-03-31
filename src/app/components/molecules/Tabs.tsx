'use client';
import { Box, Tab, Tabs } from '@mui/material/';
import { useState } from 'react';

interface TabPanelProps {
	children: React.ReactNode;
	index: number;
	value: number;
	title: string;
}
export interface TabArrayProps {
	children: React.ReactNode;
	title: string;
}

function CustomTabPanel(props: TabPanelProps): JSX.Element {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && <Box sx={{ py: 3 }}>{children}</Box>}
		</div>
	);
}

function a11yProps(index: number): Record<string, string> {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

export const BasicTabs = ({ tabs }: { tabs: TabArrayProps[] }): JSX.Element => {
	const [value, setValue] = useState(0);

	const handleChange = (
		event: React.SyntheticEvent,
		newValue: number,
	): void => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: '100%' }}>
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
				<Tabs
					value={value}
					variant='fullWidth'
					onChange={handleChange}
					indicatorColor='secondary'
					textColor='secondary'
				>
					{tabs.map((tab, index) => (
						<Tab
							key={index}
							label={tab.title}
							{...a11yProps(index)}
							sx={{
								fontWeight: value === index ? 800 : 'inherit',
							}}
						/>
					))}
				</Tabs>
			</Box>
			{tabs.map((tab, index) => (
				<CustomTabPanel
					key={index}
					value={value}
					index={index}
					title={tab.title}
				>
					{tab.children}
				</CustomTabPanel>
			))}
		</Box>
	);
};
