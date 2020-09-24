import React from 'react';
import { checkSVGProp } from './typeSVG';

export default function CustomerSVG({
  className = '',
  fill = '#FFFFFF',
  width = '21',
  height = '21',
}: checkSVGProp) {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 19 19"
      xmlSpace="preserve"
      className={className}
      width={width}
      height={height}
    >
      <g id="proses-massal">
        <g id="sidemenu" transform="translate(-21.000000, -267.000000)">
          <g>
            <g id="menu" transform="translate(9.000000, 60.000000)">
              <g id="customers" transform="translate(12.000000, 207.000000)">
                <g id="icon">
                  <path
                    id="Shape"
                    style={{ fill: fill }}
                    d="M9.5,11C6.3,11,0,12.4,0,15.3V19h19v-3.7C19,12.4,11.3,11,9.5,11z M17,17H2v-1.7
							C2,14.6,5.8,13,9.5,13s7.5,1.6,7.5,2.3V17z M9,10c2.8,0,5-2.2,5-5s-2.2-5-5-5S4,2.2,4,5S6.2,10,9,10z M9,2c1.6,0,3,1.3,3,3
							s-1.4,3-3,3S6,6.7,6,5S7.3,2,9,2z"
                  />
                  <path
                    id="Shape_1_"
                    style={{ opacity: 0.4, fill: fill }}
                    d="M9.5,11C6.3,11,0,12.4,0,15.3V19h19v-3.7C19,12.4,11.3,11,9.5,11z M9,2c1.6,0,3,1.3,3,3
							s-1.4,3-3,3S6,6.7,6,5S7.3,2,9,2z"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
