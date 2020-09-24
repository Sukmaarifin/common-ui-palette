import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";

const CustomTextbox = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      fontSize: "13px",
      lineHeight: 1.38,
      color: "#d0c9d6",
      backgroundColor: theme.colors.white,
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: theme.colors.grey3,
        },
        "&:hover fieldset": {
          borderColor: theme.colors.grey3,
        },
        "&.Mui-focused fieldset": {
          borderColor: theme.colors.grey3,
          "&:hover fieldset": {
            borderColor: theme.colors.grey3,
          },
        },
      },
    },
  })
)(TextField);

export type PriusTextboxProps = {
  id?: string;
  placeholder?: string;
  multiline?: boolean;
  name?: string;
  rows?: number;
  rowsMax?: number;
  value: string;
  isError?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const PriusTextbox: React.FunctionComponent<PriusTextboxProps> = ({
  id,
  placeholder,
  multiline = false,
  name,
  rows,
  rowsMax,
  value,
  isError = false,
  onChange,
}) => {
  return (
    <CustomTextbox
      inputProps={{ "data-identity": id && `${id}` }}
      value={value}
      id={id}
      placeholder={placeholder}
      variant="outlined"
      margin="dense"
      multiline={multiline}
      name={name}
      rows={rows}
      rowsMax={rowsMax}
      onChange={onChange}
      error={isError}
    />
  );
};

export default PriusTextbox;
