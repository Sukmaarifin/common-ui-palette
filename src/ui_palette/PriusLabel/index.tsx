import React, { ReactElement } from "react";
import clsx from "clsx";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    base: {
      borderRadius: "3px",
      margin: "0 5px",
      whiteSpace: "nowrap",
      alignSelf: "center",
      display: "inline-table",
      textAlign: "center",
      verticalAlign: "middle",
    },
    small: {
      padding: "3px",
      fontFamily: "Metropolis",
      fontSize: "8px",
      fontWeight: "bold",
      color: "#ffffff",
    },
    normal: {
      padding: "5px",
      fontFamily: "Metropolis",
      fontSize: "13px",
      color: "#ffffff",
    },
    default: {
      backgroundColor: "transparent",
      color: theme.colors.text,
      "&.light": {
        backgroundColor: "transparent",
        color: theme.colors.text,
      },
    },
    primary: {
      backgroundColor: "#1c9aea",
      "&.light": {
        backgroundColor: "#c6e6fa",
        color: "#1c9aea",
      },
    },
    error: {
      backgroundColor: "#dd3628",
      "&.light": {
        backgroundColor: "#f6cdc9",
        color: "#dd3628",
      },
    },
    success: {
      backgroundColor: "#00b969",
      "&.light": {
        backgroundColor: "#bfedd9",
        color: "#00b969",
      },
    },
    warning: {
      backgroundColor: "#ffcf5c",
      "&.light": {
        backgroundColor: "#fff8e7",
        color: "#ffcf5c",
      },
    },
  })
);

export type PriusLabelProps = {
  leftIcon?: ReactElement;
  text: string;
  theme?: "light" | "dark";
  type?: "default" | "primary" | "error" | "success" | "warning";
  size?: "small" | "normal";
  style?: React.CSSProperties;
};

export function PriusLabel({
  leftIcon,
  theme = "dark",
  type = "primary",
  size = "small",
  text,
  style,
}: PriusLabelProps) {
  const classes = useStyles();

  return (
    <span
      className={clsx(classes.base, classes[size], classes[type], theme)}
      style={style}
    >
      {leftIcon}
      {text}
    </span>
  );
}

export default PriusLabel;
