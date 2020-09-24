import React from 'react';
import { checkSVGProp } from './typeSVG';

export default function SettingSVG({
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
      <g id="CRM">
        <g id="Customers-All" transform="translate(-20.000000, -652.000000)">
          <g id="sidemenu">
            <g id="menu" transform="translate(2.000000, 60.000000)">
              <g id="pengaturan" transform="translate(18.000000, 592.000000)">
                <g id="icon_pengaturan">
                  <path
                    id="Shape"
                    style={{ fill: fill }}
                    d="M18.5,11.5c0-0.3,0.1-0.7,0.1-1s0-0.7-0.1-1l2.3-1.7c0.2-0.2,0.3-0.4,0.1-0.7l-2.2-3.6
							c-0.1-0.2-0.4-0.3-0.7-0.2l-2.7,1c-0.6-0.4-1.2-0.8-1.8-1l-0.4-2.8c0-0.3-0.3-0.4-0.5-0.4H8.3C8.1,0,7.9,0.2,7.8,0.4L7.4,3.2
							c-0.7,0.3-1.3,0.6-1.8,1l-2.7-1c-0.2-0.1-0.5,0-0.7,0.2L0.1,7.1C-0.1,7.3,0,7.6,0.2,7.7l2.3,1.7c-0.1,0.3-0.1,0.7-0.1,1
							s0,0.7,0.1,1l-2.3,1.7c-0.2,0.2-0.3,0.4-0.1,0.7l2.2,3.6c0.1,0.2,0.4,0.3,0.7,0.2l2.7-1.1c0.6,0.4,1.2,0.8,1.8,1l0.4,2.8
							C7.9,20.8,8.1,21,8.3,21h4.3c0.3,0,0.5-0.2,0.5-0.4l0.4-2.8c0.7-0.3,1.3-0.6,1.8-1l2.7,1.1c0.2,0.1,0.5,0,0.7-0.2l2.2-3.6
							c0.1-0.2,0.1-0.5-0.1-0.7L18.5,11.5L18.5,11.5z M10.5,14c-2.3,0-4.2-1.8-4.2-4s1.9-4,4.2-4s4.2,1.8,4.2,4S12.8,14,10.5,14z"
                  />
                  <path
                    id="Path"
                    style={{ opacity: 0.4, fill: fill }}
                    d="M10.5,14c-2.3,0-4.2-1.8-4.2-4s1.9-4,4.2-4s4.2,1.8,4.2,4S12.8,14,10.5,14z"
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
