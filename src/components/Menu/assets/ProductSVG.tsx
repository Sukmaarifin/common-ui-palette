import React from "react";
import { checkSVGProp } from "./typeSVG";

export default function ProductSVG({
  className = "",
  fill = "#FFFFFF",
  width = "21",
  height = "21",
}: checkSVGProp) {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 21 20"
      xmlSpace="preserve"
      className={className}
      width={width}
      height={height}
    >
      <g>
        <g>
          <path
            style={{ fill: fill }}
            d="M19.8,6.5c-0.2-0.1-0.4-0.2-0.6-0.2H1.8c-0.2,0-0.4,0.1-0.6,0.2C1.1,6.7,1,6.9,1,7.1v12.1
			c0,0.2,0.1,0.4,0.2,0.6C1.4,19.9,1.6,20,1.8,20h17.4c0.2,0,0.4-0.1,0.6-0.2c0.2-0.2,0.2-0.3,0.2-0.6V7.1C20,6.9,19.9,6.7,19.8,6.5
			z M12.6,10.4c-0.2,0.2-0.3,0.3-0.6,0.3H8.9c-0.2,0-0.4-0.1-0.6-0.3C8.2,10.2,8.1,10,8.1,9.8s0.1-0.4,0.2-0.6
			C8.5,9,8.7,8.9,8.9,8.9h3.2c0.2,0,0.4,0.1,0.6,0.3c0.2,0.2,0.2,0.4,0.2,0.6S12.8,10.2,12.6,10.4z"
          />
        </g>
        <path
          style={{ fill: fill }}
          d="M20.8,0.3C20.6,0.1,20.4,0,20.2,0H0.8C0.6,0,0.4,0.1,0.2,0.3C0.1,0.4,0,0.6,0,0.9v3.5C0,4.6,0.1,4.8,0.2,5
		c0.2,0.2,0.3,0.3,0.6,0.3h19.4c0.2,0,0.4-0.1,0.6-0.3C20.9,4.8,21,4.6,21,4.4V0.9C21,0.6,20.9,0.4,20.8,0.3z"
        />
      </g>
    </svg>
  );
}
