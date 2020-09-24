import React from 'react';
import { checkSVGProp } from './typeSVG';

export default function WebsiteSVG({
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
        <g id="sidemenu" transform="translate(-21.000000, -505.000000)">
          <g>
            <g id="menu" transform="translate(9.000000, 60.000000)">
              <g id="website" transform="translate(12.000000, 445.000000)">
                <g id="Icon_Discover">
                  <path
                    id="Shape"
                    style={{ fill: fill }}
                    d="M17.9,6.6l0.7,3.9H2.4l0.7-3.9H17.9L17.9,6.6z M19.8,0H1.2v2.6h18.7V0z M19.8,3.9H1.2L0,10.5
							v2.6h1.2V21h11.7v-7.9h4.7V21h2.3v-7.9H21v-2.6L19.8,3.9z M3.5,18.4v-5.2h7v5.2H3.5z"
                  />
                  <path
                    id="Shape_1_"
                    style={{ opacity: 0.4, fill: fill }}
                    d="M17.9,6.6l0.7,3.9H2.4l0.7-3.9H17.9L17.9,6.6z M3.5,18.4v-5.2h7v5.2H3.5z"
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
