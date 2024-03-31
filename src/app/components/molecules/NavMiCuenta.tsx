"use client"
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';

interface Tab {
  label: string;
  content: React.ReactNode;
  link?: string;
  isDetails?: boolean;
}

interface NavMiCuentaProps {
  tabs: Tab[];
  startTab?: number;
}

export const NavMiCuenta = ({ tabs,
  startTab = 0
}: NavMiCuentaProps): JSX.Element => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  const [selectedTab, setSelectedTab] = useState<string>(tabs[startTab].label);

  const handleTabChange = (tabId: string): void => {
    setSelectedTab(tabId);
    if ((tabs.find(tab => tab.label === tabId)?.link) != null) {
      window.location.href = tabs.find(tab => tab.label === tabId)?.link ?? '';
    }

    // Enrutamiento

  };

  return (
    <Box>
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={{ sm: 'space-between', xs: 'space-evenly' }}
        borderBottom={'1px solid black'}
        width={"100%"}
        paddingY={2}
      >
        {tabs.map((tab) => (
          <Typography
            key={tab.label}
            onClick={() => { handleTabChange(tab.label) }}
            variant={isDesktop ? "subtitle1" : "body1"}
            style={{
              cursor: 'pointer',
              color: selectedTab === tab.label ? theme.palette.primary.main : 'black',
            }}
          >
            {tab.label}
          </Typography>
        ))}
      </Box>

      <Box>
        {tabs.map((tab) => (
          <CustomTabPanel key={tab.label} value={selectedTab} index={tab.label}>
            {tab.content}
          </CustomTabPanel>
        ))}
      </Box>
    </Box>
  );
};

// CustomTabPanel component
interface CustomTabPanelProps {
  children: React.ReactNode;
  index: string;
  value: string;
}

function CustomTabPanel(props: CustomTabPanelProps): JSX.Element {
  const { children, value, index } = props;

  return (
    <div hidden={value !== index}>
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

