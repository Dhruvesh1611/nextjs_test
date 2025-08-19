"use client";
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item One"  />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </Box>
      <div role="tabpanel" hidden={value !== 0}>
        {value === 0 && (
          <Box sx={{ p: 3 }}>
            <Typography>Item One</Typography>
          </Box>
        )}
      </div>
      <div role="tabpanel" hidden={value !== 1}>
        {value === 1 && (
          <Box sx={{ p: 3 }}>
            <Typography>Item Two</Typography>
          </Box>
        )}
      </div>
      <div role="tabpanel" hidden={value !== 2}>
        {value === 2 && (
          <Box sx={{ p: 3 }}>
            <Typography>Item Three</Typography>
          </Box>
        )}
      </div>
    </Box>
  );
}
