import React from 'react';
import { checkSVGProp } from '../../PriusMenu/assets/typeSVG';

export const ErrorSVG = ({
  className = '',
  width = '16',
  height = '16',
}: checkSVGProp) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={width} height={height} rx="2" fill="#DD3628" />
      <path d="M3 8H13" stroke="white" strokeWidth="2" />
    </svg>
  );
};
