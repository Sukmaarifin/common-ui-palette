import React from "react";
import { Typography } from "@material-ui/core";

export default function ErrorPage() {
  return (
    <React.Fragment>
      <Typography variant="h1" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="body1">
        Sorry, the page you are looking for is not found.
      </Typography>
    </React.Fragment>
  );
}
