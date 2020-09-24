import React from 'react';
import { Box } from '@material-ui/core';

interface PriusTabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  p?: number;
}

export default function PriusTabPanel({
  value,
  index,
  children,
  p = 3,
}: PriusTabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`prius-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <Box p={p}>{children}</Box>}
    </div>
  );
}
