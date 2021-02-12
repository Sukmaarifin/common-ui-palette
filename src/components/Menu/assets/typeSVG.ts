type inactiveColor = "#FFFFFF";
type activeColor = "#1c9aea";

export type checkSVGProp = {
  className?: string;
  fill?: inactiveColor | activeColor; // To enable autocomplete
  width?: string;
  height?: string;
};
