import React, { ReactElement } from "react";
import clsx from "clsx";
import { ClickAwayListener, Grow, Paper } from "@material-ui/core";
import Popper, { PopperProps } from "@material-ui/core/Popper";

import { PriusBackdropCss } from "./PriusBackdropCss";

export type PriusBackdropProps = {
  // className forwarded to the Papper element
  paperClassName?: string;
  // placement of the popper
  placement: PopperProps["placement"];
  // id forwarded to the Popper element to improve accessibility
  popperId: string;
  // callback: on backdrop close
  onClose?: () => void;
  // callback: on backdrop open
  onOpen?: () => void;
  // render triggering element
  renderTrigger: (
    anchorRef: any,
    handleToggle: () => void,
    handleClose?: () => void
  ) => ReactElement;
  // render children element
  renderChildren?: (
    handleClose: (event: React.MouseEvent<Document, MouseEvent>) => void
  ) => ReactElement;
  renderOnHover?: boolean;
};

export const PriusBackdropNew: React.FC<PriusBackdropProps> = ({
  paperClassName,
  placement,
  popperId,
  renderTrigger,
  renderChildren,
  onClose,
  onOpen,
  renderOnHover,
  ...props
}) => {
  const classes = PriusBackdropCss();

  const anchorRef = React.useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const [arrowRef, setArrowRef] = React.useState<HTMLSpanElement | null>(null);
  const [open, setOpen] = React.useState(false);

  const handleClickButton = () => {
    if (open && onClose) {
      onClose();
    } else if (!open && onOpen) {
      onOpen();
    }

    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (
    event: React.MouseEvent<
      Document | HTMLAnchorElement | HTMLButtonElement,
      MouseEvent
    >
  ) => {
    if (anchorRef.current && anchorRef.current.contains(event.currentTarget)) {
      return;
    }

    handleToggleClose();
  };

  const handleToggleClose = () => {
    if (onClose) {
      onClose();
    }

    setOpen(false);
  };

  return (
    <>
      {!renderOnHover && renderTrigger(anchorRef, handleClickButton)}

      {renderOnHover &&
        renderTrigger(anchorRef, handleClickButton, handleToggleClose)}

      <Popper
        id={popperId}
        placement={placement}
        open={open}
        className={classes.popper}
        anchorEl={anchorRef.current}
        modifiers={{
          flip: {
            enabled: true,
          },
          arrow: {
            enabled: true,
            element: arrowRef,
          },
        }}
        transition
      >
        {({ TransitionProps, position }: any) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                position === "bottom" ? "center top" : "center bottom",
            }}
          >
            <div>
              <span className={classes.arrow} ref={setArrowRef} />
              <ClickAwayListener onClickAway={handleClose}>
                <Paper
                  className={clsx(
                    classes.paper,
                    paperClassName ? paperClassName : null
                  )}
                >
                  {typeof renderChildren === "function"
                    ? renderChildren(handleClose)
                    : props.children
                    ? props.children
                    : null}
                </Paper>
              </ClickAwayListener>
            </div>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default PriusBackdropNew;
