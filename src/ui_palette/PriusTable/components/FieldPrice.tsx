import React from "react";
import get from "lodash/get";
import { Grid, Theme, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { FieldProps } from "../types";
import { MoneyType } from "../../../../typings/common";
import { convertToPrice } from "../../../../helpers/convertToPrice";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    alignSelf: "center",
    padding: "0 0.8rem",
    whiteSpace: "nowrap",
  },
}));

const FieldPrice = ({
  fixedWidth,
  record,
  source,
  style,
  width,
  textAlign,
}: FieldProps) => {
  const num: MoneyType = get(record, source);
  const classes = useStyles();

  return (
    <Grid
      item
      style={{
        ...style,
        flexBasis: fixedWidth ? fixedWidth : width,
        flexShrink: fixedWidth ? 0 : 1,
        maxWidth: fixedWidth ? fixedWidth : width,
        textAlign: textAlign,
      }}
      className={classes.container}
    >
      <Typography>{convertToPrice(num?.value, num?.code) || "-"}</Typography>
    </Grid>
  );
};

export default FieldPrice;
