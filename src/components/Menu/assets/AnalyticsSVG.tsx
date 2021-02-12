import React from "react";
import { checkSVGProp } from "./typeSVG";

export default function AnalyticsSVG({
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
      viewBox="0 0 21 21"
      xmlSpace="preserve"
      className={className}
      width={width}
      height={height}
    >
      <g id="CRM">
        <g id="Detail-Customers" transform="translate(-20.000000, -60.000000)">
          <g id="sidemenu">
            <g id="menu" transform="translate(2.000000, 60.000000)">
              <g id="dashboard" transform="translate(18.000000, 0.000000)">
                <g id="icon_dashboard">
                  <path
                    id="XMLID_83_"
                    style={{
                      opacity: 0.5,
                      fill: fill,
                    }}
                    d="M18,11H9.5V2C4.8,2,1,6,1,11s3.8,9,8.5,9S18,16,18,11z"
                  />
                  <path
                    fill={fill}
                    id="Shape"
                    style={{ fill: fill }}
                    d="M9.5,21c5.2,0,9.5-4.3,9.5-9.5c0-0.4-0.4-0.8-0.8-0.8h-7.9V2.8C10.3,2.4,9.9,2,9.5,2
							C4.3,2,0,6.3,0,11.5S4.3,21,9.5,21z M8.7,3.7v7.8c0,0.4,0.4,0.8,0.8,0.8h7.8c-0.4,4-3.8,7.1-7.8,7.1c-4.3,0-7.9-3.5-7.9-7.9
							C1.6,7.4,4.7,4.1,8.7,3.7z"
                  />
                  <path
                    fill={fill}
                    id="Shape_1_"
                    style={{ fill: fill }}
                    d="M13.8,8h6.5C20.7,8,21,7.7,21,7.2c0-1.8-0.6-3.5-1.8-4.8C17.8,0.9,15.8,0,13.8,0
							C13.3,0,13,0.3,13,0.8v6.5C13,7.7,13.3,8,13.8,8z"
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
