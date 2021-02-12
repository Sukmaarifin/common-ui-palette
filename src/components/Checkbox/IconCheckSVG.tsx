import React from 'react';
import { checkSVGProp } from '../Menu/assets/typeSVG';

export type IconCheckSVGProps = {
  color?: string;
} & checkSVGProp;

export const IconCheckSVG = ({
  className = '',
  width = '14',
  height = '14',
  color = '#444444',
}: IconCheckSVGProps) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="-3 -3 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.64382 5.26654L1.42209 3.9728C1.10968 3.64213 0.588427 3.62745 0.257999 3.93954C-0.0726678 4.25175 -0.0873509 4.77276 0.224739 5.1034L2.0554 7.04186C2.21106 7.20655 2.42768 7.29982 2.65402 7.29982H2.66094C2.88993 7.29786 3.10773 7.20082 3.2622 7.03166L7.78474 2.07835C8.09133 1.74255 8.06752 1.22174 7.73183 0.915151C7.39602 0.608739 6.87522 0.632339 6.5686 0.968058"
        fill={color}
      />
    </svg>
  );
};
