import React, { useRef, useState } from 'react';
import clsx from 'clsx';
import {
  ClickAwayListener,
  Grow,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { MoreHoriz } from '@material-ui/icons';

import PriusTooltip from '../PriusTooltip';
import { OptionIcon } from '../../icons';

const useStyles = makeStyles((theme: Theme) => ({
  menuItem: {
    fontWeight: 'bold',
  },
  iconLeft: {
    marginRight: '0.625rem',
  },
  iconRight: {
    marginLeft: '0.625rem',
  },
  itemIcon: {
    minWidth: 'auto',
  },
  itemInner: {
    display: 'flex',
    alignItems: 'center',
  },
  itemText: {
    '& > *': {
      fontWeight: 'bold',
    },
  },
  paper: {
    boxShadow: theme.customShadows[1],
  },
}));

type IconPosition = 'default' | 'vertical';

export type ItemType = {
  // disable menu item
  disabled?: boolean;
  // left icon
  iconLeft?: React.ReactElement;
  // right icon
  iconRight?: React.ReactElement;
  // id attribute that will be passed to MenuItem
  itemId?: string;
  // text for menu item
  title: string;
  // tooltip text if disabled
  tooltipText?: string;
  // onClick handler, will be applied to all items
  onClick?: () => void;
};

export type OptionProps = {
  // icon position
  icon?: IconPosition;
  // menu items
  items: Array<ItemType>;
};

function Option({ icon, items }: OptionProps) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        data-identity="option-button-toggle"
      >
        {icon === 'vertical' ? <OptionIcon /> : <MoreHoriz />}
      </IconButton>

      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        placement="bottom-end"
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper className={classes.paper}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow">
                  {items.map((item: ItemType, index: number) => (
                    <Item key={index} data={item} classes={classes} />
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}

function Item({ data, classes }: { data: ItemType; classes: any }) {
  return (
    <MenuItem
      data-identity={data.itemId && `option-item-${data.itemId}`}
      disabled={data.disabled}
      id={data.itemId}
      onClick={() => data.onClick && !data.disabled && data.onClick()}
    >
      {data.tooltipText ? (
        <PriusTooltip title={data.tooltipText} placement="top">
          <div className={classes.itemInner}>
            {data.iconLeft && (
              <ListItemIcon
                className={clsx(classes.itemIcon, classes.iconLeft)}
              >
                {data.iconLeft}
              </ListItemIcon>
            )}
            <ListItemText
              data-identity={data.itemId && `option-item-${data.itemId}`}
              primary={data.title}
              className={classes.itemText}
            />
            {data.iconRight && (
              <ListItemIcon
                className={clsx(classes.itemIcon, classes.iconRight)}
              >
                {data.iconRight}
              </ListItemIcon>
            )}
          </div>
        </PriusTooltip>
      ) : (
        <React.Fragment>
          {data.iconLeft && (
            <ListItemIcon className={clsx(classes.itemIcon, classes.iconLeft)}>
              {data.iconLeft}
            </ListItemIcon>
          )}
          <ListItemText
            data-identity={data.itemId && `option-item-${data.itemId}`}
            primary={data.title}
            className={classes.itemText}
          />
          {data.iconRight && (
            <ListItemIcon className={clsx(classes.itemIcon, classes.iconRight)}>
              {data.iconRight}
            </ListItemIcon>
          )}
        </React.Fragment>
      )}
    </MenuItem>
  );
}

export default Option;
