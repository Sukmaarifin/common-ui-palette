import React from "react";
import InputBase, { InputBaseProps } from "@material-ui/core/InputBase";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: "0.1875rem",
      backgroundColor: theme.colors.white,
      border: `1px solid ${theme.colors.grey3}`,
    },
    input: {
      padding: "0.75rem 0.9375rem",
      fontSize: "0.8125rem",
      color: theme.colors.text,
      "&::placeholder": {
        color: `${theme.colors.placeholder} !important`,
        opacity: "1 !important",
      },
    },
    error: {
      "& input": {
        borderColor: theme.colors.failed,
        "&:focus": {
          borderColor: theme.colors.failed,
        },
      },
    },
    disabled: {
      background: theme.colors.grey2,
      "& input": {
        background: "hsl(0,0%,95%)",
        color: "hsl(0,0%,60%)",
        borderColor: theme.colors.failed,
        "&:focus": {
          borderColor: theme.colors.failed,
        },
      },
    },
    adornedStart: {
      paddingLeft: "0.9375rem",
      fontSize: "1em",
      "& > *:first-child": {
        borderRight: `solid 1.1px ${theme.colors.grey3}`,
        paddingRight: "1rem",
        color: theme.colors.disabled,
      },
    },
    adornedEnd: {
      paddingRight: "0.9375rem",
      fontSize: "1em",
      "& > *:last-child": {
        borderLeft: `solid 1.1px ${theme.colors.grey3}`,
        paddingLeft: "1rem",
        color: theme.colors.info,
      },
    },
    // inputAdornedStart: {
    //   paddingLeft: "0"
    // },
    // inputAdornedEnd: {
    //   paddingRight: "0"
    // },
    multiline: {
      padding: "0",
    },
  })
);

export const PriusInput: React.FunctionComponent<InputBaseProps> = React.forwardRef(
  ({ ...props }, ref) => {
    const classes = useStyles();

    return <InputBase classes={classes} ref={ref} {...props} />;
  }
);

export default PriusInput;
