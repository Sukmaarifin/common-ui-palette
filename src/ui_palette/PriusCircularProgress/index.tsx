import React from "react";
import { CircularProgress } from "@material-ui/core";

export type PriusCircularProgressProps = {
  isWithText?: boolean;
  size?: number;
  style?: React.CSSProperties;
  className?: string;
};

export function PriusCircularProgress({
  isWithText = true,
  size = 50,
  style,
  className = "",
}: PriusCircularProgressProps) {
  return (
    <div style={{ textAlign: "center" }}>
      <CircularProgress size={size} style={style} className={className} />
      {isWithText ? <div>Memuat . . .</div> : null}
    </div>
  );
}

export default PriusCircularProgress;
