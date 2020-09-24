import React from 'react';
import { checkSVGProp } from './typeSVG';

export default function FeedbackSVG({
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
      viewBox="0 0 20 20"
      xmlSpace="preserve"
      className={className}
      width={width}
      height={height}
    >
      <g id="proses-massal">
        <g id="sidemenu" transform="translate(-21.000000, -316.000000)">
          <g>
            <g id="menu" transform="translate(9.000000, 60.000000)">
              <g id="feedback" transform="translate(12.000000, 256.000000)">
                <g id="chat">
                  <path
                    id="Shape"
                    style={{ opacity: 0.4, fill: fill }}
                    d="M18,2H2v13.2L3.2,14H18V2z M12,12H4v-2h8V12z M16,9H4V7h12V9z M16,6H4V4h12V6z"
                  />
                  <path
                    id="Shape_1_"
                    style={{ fill: fill }}
                    d="M18,16c1.1,0,2-0.9,2-2V2c0-1.1-0.9-2-2-2H2C0.9,0,0,0.9,0,2l0,18l4-4H18z M2,15.2V2h16v12
							H3.2L2,15.2z M4,10h8v2H4V10z M4,7h12v2H4V7z M4,4h12v2H4V4z"
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
