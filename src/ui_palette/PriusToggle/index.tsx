import React from "react";
import { SwitchProps } from "@material-ui/core";

import RegularToggle from "./RegularToggle";
import TableToggle from "./TableToggle";

export type ToggleProps = Pick<
  SwitchProps,
  | "id"
  | "onChange"
  | "checked"
  | "style"
  | "className"
  | "disabled"
  | "name"
  | "value"
> & {
  /**
   * label above the toggle, only appear on regular type toggle
   */
  label?: string;
};

type PriusToggleProps = ToggleProps & {
  /**
   * toggle appearance type, "regular" or "table"
   */
  type?: "regular" | "table";
  checked: boolean;
};

const PriusToggle = ({ type = "table", ...props }: PriusToggleProps) => {
  if (type === "regular") {
    return <RegularToggle {...props} />;
  } else {
    return <TableToggle {...props} />;
  }
};

export default PriusToggle;
