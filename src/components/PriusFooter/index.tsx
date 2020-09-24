import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    position: "fixed",
    left: 0,
    bottom: 0,
    justifyContent: "flex-end",
    textAlignLast: "right",
    width: "100%",
    padding: "1rem 3rem",
    zIndex: 10,
    backgroundColor: theme.colors.grey,
  },
  content: {
    "& > *:not(:last-child)": {
      marginRight: "1rem",
    },
  },
}));

type PriusFooterProps = {
  children?: React.ReactElement;
};

function PriusFooter({ children }: PriusFooterProps) {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid item className={classes.content}>
        {children}
      </Grid>
    </Grid>
  );
}

export default PriusFooter;
