import React from "react";
import { Drawer, Icon, List, ListItem, ListItemText } from "@material-ui/core";
import clsx from "clsx";
import { RouteComponentProps } from "react-router";
import { withRouter } from "react-router-dom";

import Menu from "./Menu";

import MainMenuCss from "./MainMenuCss";

export type fieldSubMenu = {
  label: string;
  url?: string;
};

type SubMenuProps = {
  getUrl: (value: string) => void;
  data: fieldSubMenu[];
  parentMenu: string;
  base: string;
} & RouteComponentProps;

const SubMenu = ({ getUrl, data, parentMenu, history, base }: SubMenuProps) => {
  const classes = MainMenuCss();

  const pathname = history.location.pathname;
  const pathnames = history.location.pathname.split("/").filter((x) => x);

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
          {data.map((text: fieldSubMenu, index: number) => (
            <Menu 
              route={text} 
              index={index}
              pathname={pathnames[0]}
              className={classes.link}
              base={base}
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
            </Menu>
          ))}
        </List>
      </Drawer>
    );
  }
  return null;
};

export default withRouter(SubMenu);
