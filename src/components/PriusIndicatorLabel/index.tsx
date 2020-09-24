import React from "react";
import { IconButton, LinearProgress } from "@material-ui/core";
import { Refresh } from "@material-ui/icons";
import cslx from "clsx";

import { CloseIcon } from "../../icons";

import { PriusIdicatorLabelCss } from "./PriusIndicatorLabelCss";

export enum StatusUploadType {
  UPLOAD = "UPLOAD",
  FAILED = "FAILED",
  DONE = "DONE",
  EMPTY = "EMPTY",
}

type PriusIndicatorLabelProps = {
  status: StatusUploadType;
  name: string;
  size?: number;
  onRetry?: () => void;
  onDelete?: () => void;
  id?: string;
};

const PriusIndicatorLabel: React.FC<PriusIndicatorLabelProps> = ({
  status,
  name,
  size,
  onRetry,
  onDelete,
  id,
}) => {
  const classes = PriusIdicatorLabelCss();

  const isError = status === StatusUploadType.FAILED;
  const isUploading = status === StatusUploadType.UPLOAD;

  return (
    <div className={cslx(classes.container, isError ? classes.failed : null)}>
      <div className={classes.content}>
        {name}

        <span
          className={isError ? classes.errrorDescription : classes.description}
        >
          {isError
            ? `Upload Gagal`
            : `${size && (size / 1024 / 1024).toPrecision(1)} MB`}
        </span>

        <span className={classes.icon}>
          {isError && (
            <Refresh
              onClick={() => !!onRetry && onRetry()}
              className={classes.refreshIcon}
              data-identity={id && `${id}-button-retry}`}
            />
          )}
          <IconButton
            onClick={() => !!onDelete && onDelete()}
            className={classes.closeIcon}
            data-identity={id && `${id}-button-delete}`}
          >
            <CloseIcon color="disabled" />
          </IconButton>
        </span>
      </div>
      {isUploading && (
        <div style={{ width: "100%" }}>
          <LinearProgress style={{ width: "100%" }} />
        </div>
      )}
    </div>
  );
};

export default PriusIndicatorLabel;
