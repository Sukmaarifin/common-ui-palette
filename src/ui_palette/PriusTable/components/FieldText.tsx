import React, { ReactElement } from "react";
import get from "lodash/get";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";

import PriusTooltip from "../../PriusTooltip/PriusTooltip";
import PriusBackdrop from "../../PriusBackdrop";
import PriusLabel from "../../PriusLabel";
import { FieldProps } from "../types";
import { getByMaxIndex } from "../../../../helpers/getByMaxHelpers";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    alignSelf: "center",
    padding: "0 0.8rem",
    "&.publish": {
      zIndex: 1,
    },
  },
  link: {
    color: theme.colors.primary,
    textDecoration: "underline",
    cursor: "pointer",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  textWithDescription: {
    display: "grid",
    textAlign: "start",
    zIndex: 1,
    position: "relative",
  },
  description: {
    fontFamily: "Metropolis",
    fontSize: "10px",
    color: "#898989",
  },
}));

type NotesBadgeProperties = {
  text: string;
  theme?: "light" | "dark";
  type?: "primary" | "error" | "success" | "warning";
  size?: "small" | "normal";
  backdropData?: ReactElement | string;
};

export type FieldText = {
  autoCapitalize?: boolean;
  description?: string;
  hrefSource?: string;
  hrefSourceParent?: string;
  hrefPrefix?: string;
  id?: string;
  notesBadge?: NotesBadgeProperties;
  tooltipText?: string;
  maxIndex?: number;
} & FieldProps;

const TextField = ({
  autoCapitalize = true,
  description,
  fixedWidth,
  hrefPrefix,
  hrefSource = "",
  hrefSourceParent = "",
  id,
  notesBadge,
  record,
  source,
  style,
  tooltipText,
  width,
  maxIndex,
}: FieldText) => {
  const text = get(record, source);
  const href = get(record, hrefSource);
  const hrefParent = get(record, hrefSourceParent);
  const tooltip = tooltipText ? get(record, tooltipText) : null;
  const descriptionText = description ? get(record, description) : null;
  const classes = useStyles();

  const isSimpleText = source && !description;
  const isTextWithDescription = source && description;

  /**
   * render component text only
   */
  const convertText = () => {
    const shownText: string = Array.isArray(text)
      ? getByMaxIndex(text, maxIndex || text.length).text
      : text;

    return hrefPrefix && href ? (
      <Link
        data-identity={id && `${id}-link-${href}`}
        to={{
          pathname: hrefParent
            ? `${hrefPrefix}/${hrefParent.toLowerCase()}/${href}`
            : `${hrefPrefix}/${href}`,
          state: { record },
        }}
        className={classes.link}
      >
        {shownText}
      </Link>
    ) : (
      <span
        style={{
          textTransform: autoCapitalize ? "capitalize" : "none",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {shownText}
      </span>
    );
  };

  /**
   * render component PriusLabel if only received notesBadge props
   */
  const isNotesBadge = () => {
    if (notesBadge) {
      if (!notesBadge.backdropData)
        return (
          <PriusLabel
            text={notesBadge.text}
            theme={notesBadge.theme ? notesBadge.theme : undefined}
            type={notesBadge.type ? notesBadge.type : undefined}
            size={notesBadge.size ? notesBadge.size : undefined}
          />
        );
      else
        return (
          <PriusBackdrop
            placement="right-start"
            popperId="prius-backdrop"
            renderTrigger={(anchorRef: any, handleToggle: () => void) => (
              <span
                data-identity={id && `${id}-span-openBackdrop`}
                ref={anchorRef}
                onClick={handleToggle}
              >
                <PriusLabel
                  text={notesBadge.text}
                  theme={notesBadge.theme ? notesBadge.theme : undefined}
                  type={notesBadge.type ? notesBadge.type : undefined}
                  size={notesBadge.size ? notesBadge.size : undefined}
                  style={{ cursor: "pointer" }}
                />
              </span>
            )}
          >
            {notesBadge.backdropData}
          </PriusBackdrop>
        );
    }
  };

  /**
   * render component if only received text and/or notesBadge props
   */
  const renderSimpleText = () => {
    if (isSimpleText && !notesBadge) return convertText();
    else if (isSimpleText && notesBadge)
      return (
        <div style={{ zIndex: 1 }}>
          {convertText()}

          {isNotesBadge()}
        </div>
      );
  };

  /**
   * render component if only received text, description, and/or notesBadge props
   */
  const renderTextWithDescription = () => {
    if (isTextWithDescription && !notesBadge)
      return (
        <div className={classes.textWithDescription}>
          {convertText()}
          <span className={classes.description}>{descriptionText}</span>
        </div>
      );
    else if (isTextWithDescription && notesBadge)
      return (
        <div className={classes.textWithDescription}>
          <div style={{ zIndex: 1 }}>
            {convertText()}

            {isNotesBadge()}
          </div>

          <span className={classes.description}>{descriptionText}</span>
        </div>
      );
  };

  return (
    <Grid
      item
      className={clsx(classes.container, hrefPrefix && href ? "publish" : null)}
      style={{
        ...style,
        flexBasis: fixedWidth ? fixedWidth : width,
        flexShrink: fixedWidth ? 0 : 1,
        maxWidth: fixedWidth ? fixedWidth : width,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
    >
      {tooltipText ? (
        <PriusTooltip
          placement="top"
          title={
            Array.isArray(tooltip)
              ? getByMaxIndex(tooltip, maxIndex || tooltip.length).tooltipText
              : tooltip
          }
        >
          <div style={{ display: "inline-flex" }}>
            {renderSimpleText()}

            {renderTextWithDescription()}
          </div>
        </PriusTooltip>
      ) : (
        <>
          {renderSimpleText()}

          {renderTextWithDescription()}
        </>
      )}
    </Grid>
  );
};

export default TextField;
