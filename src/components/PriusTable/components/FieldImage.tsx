import React from "react";
import get from "lodash/get";
import { Grid } from "@material-ui/core";

import PriusThumbnail, { ThumbnailSize } from "../../PriusThumbnail";
import { FieldProps } from "../types";

export interface FieldImageProps extends FieldProps {
  altText: string;
  defaultSource?: string;
  size: ThumbnailSize;
}

export function ImageField({
  altText,
  fixedWidth,
  record,
  size,
  source,
  style,
  width,
}: FieldImageProps) {
  const imageSource = get(record, source);

  return (
    <Grid
      item
      style={{
        ...style,
        flexBasis: fixedWidth ? fixedWidth : width,
        flexShrink: fixedWidth ? 0 : 1,
      }}
    >
      <PriusThumbnail imageSource={imageSource} altText={altText} size={size} />
    </Grid>
  );
}

export default ImageField;
