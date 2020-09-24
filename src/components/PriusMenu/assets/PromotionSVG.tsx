import React from 'react';
import { checkSVGProp } from './typeSVG';

export default function PromotionSVG({
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
      viewBox="0 0 24 20"
      xmlSpace="preserve"
      className={className}
      width={width}
      height={height}
    >
      <g id="proses-massal">
        <g id="sidemenu" transform="translate(-20.000000, -215.000000)">
          <g>
            <g id="menu" transform="translate(9.000000, 60.000000)">
              <g id="promosi" transform="translate(11.000000, 152.000000)">
                <g
                  id="tags"
                  transform="translate(12.500000, 12.500000) rotate(350.000000) translate(-12.500000, -12.500000) translate(2.000000, 2.000000)"
                >
                  <path
                    id="Shape"
                    style={{ fill: fill }}
                    d="M17.9,12.8c0-0.5-0.1-0.9-0.4-1.2L9,2.2C8.7,1.9,8.3,1.6,7.8,1.3C7.3,1,6.8,1,6.4,1l-5,0
							C1,1,0.6,1.2,0.4,1.5C0,1.8-0.1,2.2-0.1,2.7l0,5.5c0,0.5,0.1,1,0.3,1.5s0.5,1,0.8,1.3l8.5,9.4c0.3,0.3,0.6,0.5,1.1,0.5
							c0.4,0,0.8-0.2,1.1-0.5l5.8-6.5C17.8,13.6,17.9,13.2,17.9,12.8z M4.8,6.4C4.5,6.7,4.1,6.9,3.7,6.9S2.9,6.7,2.6,6.4
							S2.2,5.7,2.2,5.2c0-0.5,0.1-0.9,0.4-1.2s0.7-0.5,1.1-0.5c0.4,0,0.8,0.2,1.1,0.5c0.3,0.3,0.4,0.7,0.4,1.2
							C5.2,5.7,5.1,6.1,4.8,6.4z"
                  />
                  <path
                    id="Path"
                    style={{ opacity: 0.4, fill: fill }}
                    d="M20.5,11.6l-8.4-9.4c-0.3-0.3-0.7-0.6-1.2-0.8C10.4,1.1,9.9,1,9.5,1L6.9,1
							c0.4,0,0.9,0.1,1.4,0.3s0.9,0.5,1.2,0.8l8.4,9.4c0.3,0.3,0.4,0.7,0.4,1.2s-0.1,0.9-0.4,1.2l-5.5,6.2c0.2,0.3,0.4,0.5,0.6,0.6
							s0.4,0.2,0.7,0.2c0.4,0,0.8-0.2,1.1-0.5l5.8-6.5c0.3-0.3,0.4-0.7,0.4-1.2C20.9,12.3,20.8,11.9,20.5,11.6z"
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
