import React from "react";
import { checkSVGProp } from "../../PriusMenu/assets/typeSVG";

export const SuccessSVG = ({
  className = "",
  width = "16",
  height = "16",
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
      <rect width={width} height={height} rx="2" fill="#00B969" />
      <path
        d="M3 8.32956L5.93835 11.2679L13.2063 4"
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  );
};
