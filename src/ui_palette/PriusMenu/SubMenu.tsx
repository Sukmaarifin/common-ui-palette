import React from "react";
import { Drawer, Icon, List, ListItem, ListItemText } from "@material-ui/core";
import clsx from "clsx";
import { RouteComponentProps } from "react-router";
import { withRouter, Link } from "react-router-dom";

import { camelize } from "../../helpers";

import MainMenuCss from "./MainMenuCss";

export type fieldSubMenu = {
  label: string;
  url?: string;
};

type SubMenuProps = {
  getUrl: (value: string) => void;
  data: fieldSubMenu[];
  parentMenu: string;
} & RouteComponentProps;

const SubMenu = ({ getUrl, data, parentMenu, history }: SubMenuProps) => {
  const classes = MainMenuCss();

  const pathname = history.location.pathname;

  if (data.length > 0) {
    return (
      <Drawer
        variant="permanent"
        className={clsx(classes.drawerSubMenu, classes.drawerOpenSubMenu)}
        classes={{
          paper: clsx(classes.drawerPaperSubMenu, classes.drawerOpenSubMenu),
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <List>
          <ListItem button key="0" onClick={() => getUrl("back")}>
            <Icon className={classes.activeIcon}>keyboard_backspace</Icon>
            <ListItemText
              className={classes.activeSubMenu}
              primary={parentMenu}
            />
          </ListItem>
          {data.map((text: fieldSubMenu, index: string | number) => (
            <Link
              id={camelize(text.label)}
              data-identity={`subMenu-anchor-${camelize(text.label)}`}
              to={`${text?.url}`}
              key={index}
              className={classes.link}
            >
              <ListItem
                button
                key={index}
                onClick={() => getUrl(text.url ? text.url : "")}
              >
                <ListItemText
                  className={clsx(
                    classes.drawerListSubMenu,
                    text.url && pathname === text.url
                      ? classes.activeSubMenu
                      : ""
                  )}
                  primary={text.label}
                />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    );
  }
  return null;
};

export default withRouter(SubMenu);
