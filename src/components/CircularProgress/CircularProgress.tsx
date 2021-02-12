import React from 'react';
import { CircularProgress as CircularProgressUI } from '@material-ui/core';

export type CircularProgressProps = {
  isWithText?: boolean;
  size?: number;
  style?: React.CSSProperties;
  className?: string;
};

export function CircularProgress({
  isWithText = true,
  size = 50,
  style,
  className = '',
}: CircularProgressProps) {
  return (
    <div style={{ textAlign: 'center' }}>
      <CircularProgressUI size={size} style={style} className={className} />
      {isWithText ? <div>Memuat . . .</div> : null}
    </div>
  );
}

export default CircularProgress;
