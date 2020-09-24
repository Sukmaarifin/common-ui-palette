import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import { camelize } from "../../helpers";

import FallbackImage from "./FallbackImage.svg";

const useStyles = makeStyles(() => ({
  container: {
    cursor: "pointer",
    border: "none",
    background: "transparent",
    "&:hover": {
      opacity: "0.6",
    },
    "&:focus, &:active": {
      outline: "none",
    },
  },
  image: {
    display: "block",
    objectFit: "cover",
  },
  small: {
    width: "2.5rem",
    height: "2.5rem",
  },
  medium: {
    width: "4rem",
    height: "4rem",
  },
  big: {
    width: "5rem",
    height: "5rem",
  },
}));

export type ThumbnailSize = "small" | "medium" | "big";

export type PriusThumbnailProps = {
  defaultSource?: React.ReactNode;
  altText: string;
  className?: string;
  imageSource: string;
  setSize?: string;
  size: ThumbnailSize;
  onError?: () => void;
  onClick?: (event: any) => void;
  id?: string;
};

const PriusThumbnail = ({
  altText,
  className,
  defaultSource,
  imageSource,
  setSize,
  size,
  onError,
  onClick,
  id,
}: PriusThumbnailProps) => {
  const classes = useStyles();

  const [source, setSource] = useState<any>();

  const handleDefaultSrc = (event: any) => {
    event.target.src = FallbackImage;
    if (onError) onError();
  };

  useEffect(() => {
    if (!Boolean(imageSource) && !Boolean(defaultSource)) {
      setSource(FallbackImage);
    } else if (Boolean(defaultSource)) {
      setSource(defaultSource);
    } else {
      setSource(imageSource);
    }
  }, [defaultSource, imageSource]);

  return onClick ? (
    <button
      className={className ? className : classes.container}
      onClick={onClick}
      id={id && `${id}-button-${camelize(altText)}`}
      data-identity={id && `${id}-button-${camelize(altText)}`}
    >
      <img
        onError={handleDefaultSrc}
        alt={altText}
        style={{
          width: setSize,
          height: setSize,
        }}
        className={clsx(classes.image, classes[size])}
        src={source}
      />
    </button>
  ) : (
    <img
      onError={handleDefaultSrc}
      alt={altText}
      className={className ? className : clsx(classes.image, classes[size])}
      src={source}
    />
  );
};

export default PriusThumbnail;
