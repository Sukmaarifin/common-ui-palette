import React from "react";
import {
  Theme,
  createStyles,
  Switch,
  FormControlLabel,
  makeStyles,
} from "@material-ui/core";
import clsx from "clsx";

import { ToggleProps } from "./index";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // Switch classes
    root: {
      width: 28,
      height: 12,
      padding: 0,
      margin: theme.spacing(1),
      borderRadius: 2,
      overflow: "visible",
    },
    disabled: {},
    switchBase: {
      padding: 0,
      "&$checked": {
        transform: "translateX(18px)",
        color: theme.colors.white,
        "& + $track": {
          backgroundColor: "#1C9AEA",
          opacity: 1,
          borderColor: theme.palette.primary.dark,
        },
      },
      "&$disabled": {
        color: theme.colors.disabled,
        "&$checked": {
          "& + $track": {
            backgroundColor: "#DCDCDC",
            borderColor: theme.colors.disabled,
          },
        },
      },
      "&$focusVisible $thumb": {
        color: theme.colors.white,
        border: `1px solid ${theme.colors.primary}`,
        height: 12,
      },
    },
    thumb: {
      width: 10,
      height: 14,
      borderRadius: 2,
    },
    track: {
      borderRadius: 2,
      border: `1px solid #E8E8E8`,
      backgroundColor: "#EEEEF3",
      opacity: 1,
      transition: theme.transitions.create(["background-color", "border"]),
      "&$disabled": {},
    },
    checked: {},
    focusVisible: {},

    // Custom classes
    rootHover: {
      "&:hover $thumb": {
        color: theme.colors.white,
        border: `1px solid ${theme.colors.primary}`,
        height: 12,
      },
    },
  })
);

const TableToggle = ({
  id,
  onChange,
  className,
  checked,
  style,
  disabled,
  value,
  name,
}: ToggleProps) => {
  const classes = useStyles();
  return (
    <FormControlLabel
      style={style}
      className={className}
      control={
        <Switch
          id={id && `${id}`}
          data-identity={id && `${id}`}
          focusVisibleClassName={classes.focusVisible}
          disableRipple
          classes={{
            root: disabled
              ? classes.root
              : clsx(classes.root, classes.rootHover),
            switchBase: classes.switchBase,
            thumb: classes.thumb,
            track: classes.track,
            checked: classes.checked,
            disabled: classes.disabled,
          }}
          onChange={onChange}
          disabled={disabled}
          checked={checked}
          value={value}
          name={name}
        />
      }
      label={null}
    />
  );
};

export default TableToggle;
