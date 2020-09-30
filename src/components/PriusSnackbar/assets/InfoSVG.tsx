import React from 'react';
import { checkSVGProp } from '../../Menu/assets/typeSVG';

export const InfoSVG = ({
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
      <rect width={width} height={height} rx="2" fill="#0088FF" />
      <path
        transform="translate(5,3)"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.00028 2.71443C3.63146 2.71443 4.14314 2.20275 4.14314 1.57157C4.14314 0.940386 3.63146 0.428711 3.00028 0.428711C2.3691 0.428711 1.85742 0.940386 1.85742 1.57157C1.85742 2.20275 2.3691 2.71443 3.00028 2.71443Z"
        fill="white"
      />
      <path
        transform="translate(5,3)"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.14244 3.85718H0.713867V5.00003H1.85672V8.42861H0.713867V9.57146H5.2853V8.42861H4.14244V3.85718Z"
        fill="white"
      />
    </svg>
  );
};
