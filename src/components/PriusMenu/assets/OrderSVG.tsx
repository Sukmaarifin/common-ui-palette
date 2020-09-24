import React from 'react';
import { checkSVGProp } from './typeSVG';

export default function OrderSVG({
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
      viewBox="0 0 21 21"
      xmlSpace="preserve"
      className={className}
      width={width}
      height={height}
    >
      <g id="proses-massal">
        <g id="sidemenu" transform="translate(-20.000000, -161.000000)">
          <g>
            <g id="menu" transform="translate(9.000000, 60.000000)">
              <g id="pesanan" transform="translate(11.000000, 101.000000)">
                <g id="inactive_pesanan">
                  <polygon
                    id="Path"
                    style={{ opacity: 0.5, fill: fill }}
                    points="15.2,9 18.1,4 5,4 7.6,9 						"
                  />
                  <path
                    id="Shape"
                    style={{ fill: fill }}
                    d="M15.3,11.7c0.8,0,1.5-0.4,1.8-1.1l3.8-6.9C21.3,3,20.8,2.1,20,2.1H4.4L3.4,0H0v2.1h2.1
         l3.8,8.1l-1.4,2.6C3.7,14.3,4.7,16,6.3,16h12.6v-2.1H6.3l1.2-2.1H15.3z M5,4h13l-3,5H7.5L5,4z M6,17c-1.1,0-2,0.9-2,2
         s0.9,2,2,2s2-0.9,2-2S7.1,17,6,17z M17,17c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S18.1,17,17,17z"
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
