import React from "react";
import { checkSVGProp } from "../../PriusMenu/assets/typeSVG";

export const WarningSVG = ({
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
      <rect width={width} height={height} rx="2" fill="#FBC02D" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 3L8.83138 10H7.16257L7 3H9Z"
        fill="white"
      />
      <rect x="7" y="11" width="2" height="2" rx="1" fill="white" />
    </svg>
  );
};
