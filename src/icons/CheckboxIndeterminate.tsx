import React from "react";
import createSvgIcon from "@material-ui/icons/utils/createSvgIcon";

export default createSvgIcon(
  <React.Fragment>
    <rect fill="inherit" x="0" y="0" width="100%" height="100%" rx="2"></rect>
    <rect
      id="Rectangle"
      fill="#444444"
      x="4"
      y="9"
      width="13"
      height="3"
      rx="1"
    ></rect>
  </React.Fragment>,
  "CheckboxIndeterminate"
);
