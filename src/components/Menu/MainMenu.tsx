/**
 * @todo
 * [ ] Revert to menuConnexi and menuStore
 * [ ] get plan from gql when ready
 * [ ] remove DEFAULT_PLAN when ready
 * [ ] remove onComplete when data used
 */

import React, { useState, useContext, useEffect } from "react";
import {
  Drawer,
  Icon,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import { withRouter } from "react-router-dom";
import { useLazyQuery } from "@apollo/react-hooks";
import { ApolloError } from "apollo-boost";
import { RouteComponentProps } from "react-router";

import Menu from "./Menu";

import { useSnackbar } from "../PriusSnackbar";
import { menuConnexi } from "./menuConnexi";
import { menuStore } from "./menuStore";
import SubMenu, { fieldSubMenu } from "./SubMenu";
import { checkSVGProp } from "./assets/typeSVG";

import {
  DEFAULT_PLAN,
  ROUTE_BY_PLAN,
  DEFAULT_PLAN_STAGING,
  FeatureTypeStrings,
} from "../Router/types";
import { TenantContext } from "../SSSO";
import { ENV } from "../../configs";
import {
  GET_ALLOWED_ACTIONS,
  GetAllowedActionsResponseType,
  GetAllowedActionsParamType,
} from "../../graphql";

import MainMenuCss from "./MainMenuCss";

export type fieldMenu = {
  label: string;
  url: string;
  icon: (props: checkSVGProp) => React.ReactNode;
  submenu: fieldSubMenu[];
  base: string;
};

type mainMenuContainerState = {
  isOpenSubMenu: boolean;
  subMenu: fieldSubMenu[];
  activeLabel: string;
  base: string;
};

type MainMenuProps = RouteComponentProps;

const MainMenu = ({ history }: MainMenuProps) => {
  const { account } = useContext(TenantContext);
  const classes = MainMenuCss();
  const snackbar = useSnackbar();
  const [menuState, setMenuState] = useState<mainMenuContainerState>({
    isOpenSubMenu: false,
    subMenu: [],
    activeLabel: "",
    base: "",

  });
  const pathnames = history.location.pathname.split("/").filter((x) => x);

  const [getAllowedActions, { data }] = useLazyQuery<
    GetAllowedActionsResponseType,
    GetAllowedActionsParamType
  >(GET_ALLOWED_ACTIONS, {
    fetchPolicy: "cache-and-network",
    // remove when data already used
    onCompleted() {
      console.log(data);
    },
    onError(error: ApolloError) {
      snackbar.show(`${error}`, "error");
    },
  });

  useEffect(() => {
    // Remove production when ready
    if (ENV !== "development" && ENV !== "staging" && ENV !== "production") {
      getAllowedActions({
        variables: {
          accountID: account.ID,
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const iconSubMenu = (hasSubMenu: number) => {
    if (hasSubMenu && !menuState.isOpenSubMenu) {
      return (
        <Icon style={{ color: "#ffffff", opacity: 0.4 }}>
          keyboard_arrow_right
        </Icon>
      );
    }
  };

  const onClickMenu = (text: fieldMenu) => {
    const submenu = text.submenu;
    if (submenu.length > 0) {
      setMenuState({
        isOpenSubMenu: true,
        subMenu: submenu,
        activeLabel: text.label,
        base: text.base
      });
    } else {
      setMenuState({
        isOpenSubMenu: false,
        subMenu: [],
        activeLabel: text.label,
        base: text.base
      });
    }
  };

  const handlerMenu = (listMenu: Array<fieldMenu>) => {
    if (ENV === "development") return listMenu;

    const defaultPlan = ENV === "staging" ? DEFAULT_PLAN_STAGING : DEFAULT_PLAN;

    const allowedActions: Array<FeatureTypeStrings> =
      data?.actions && Array.isArray(data.actions) ? data.actions : defaultPlan;

    const urls: Array<string> = allowedActions.map(
      (plan: FeatureTypeStrings) => ROUTE_BY_PLAN[plan]
    );

    const convertedMenu: Array<fieldMenu> = listMenu.reduce(
      (tmpMenu: Array<fieldMenu>, menu: fieldMenu) => {
        if (menu?.submenu?.length) {
          const submenu: Array<fieldSubMenu> = menu.submenu.filter(
            (tmpSubMenu: fieldSubMenu) => urls.includes(tmpSubMenu?.url || "")
          );
          if (submenu?.length) {
            tmpMenu.push({ ...menu, submenu: submenu });
          }
        } else {
          if (urls.includes(menu.url)) {
            tmpMenu.push({ ...menu, submenu: [] });
          }
        }

        return tmpMenu;
      },
      []
    );

    return convertedMenu;
  };

  const drawerListMenu = (menu: fieldMenu[]) => {
    return (
      <List>
        {menu.map((text, index) => (     
          <Menu 
            route={text} 
            index={index}
            pathname={pathnames[0]}
            className={classes.link}
            base={text.base}
            key={index}
          >
            <ListItem button key={index} onClick={() => onClickMenu(text)}>
               <Icon classes={{ root: classes.iconRoot }}>
                 {text.icon({
                  className: clsx(
                    classes.imageIcon,
                    menuState.activeLabel !== text.label
                      ? classes.imageIconInactive
                      : null
                  ),
                  fill:
                    menuState.activeLabel === text.label
                      ? "#1c9aea"
                      : "#FFFFFF",
                })}
              </Icon>
              <ListItemText
                primary={
                  <Typography
                    className={classes.menuList}
                    style={{
                      fontWeight:
                        menuState.activeLabel === text.label
                          ? "bold"
                          : "normal",
                      opacity: menuState.activeLabel === text.label ? 1 : 0.4,
                    }}
                  >
                    {text.label}
                  </Typography>
                }
              />
              {iconSubMenu(text.submenu.length)}
            </ListItem>
          </Menu>
          // <Link
          //   id={camelize(text.label)}
          //   data-identity={`menu-anchor-${camelize(text.label)}`}
          //   to={text.url}
          //   key={index}
          //   className={classes.link}
          // >
          //   <ListItem button key={index} onClick={() => onClickMenu(text)}>
          //     <Icon classes={{ root: classes.iconRoot }}>
          //       {text.icon({
          //         className: clsx(
          //           classes.imageIcon,
          //           menuState.activeLabel !== text.label
          //             ? classes.imageIconInactive
          //             : null
          //         ),
          //         fill:
          //           menuState.activeLabel === text.label
          //             ? "#1c9aea"
          //             : "#FFFFFF",
          //       })}
          //     </Icon>
          //     <ListItemText
          //       primary={
          //         <Typography
          //           className={classes.menuList}
          //           style={{
          //             fontWeight:
          //               menuState.activeLabel === text.label
          //                 ? "bold"
          //                 : "normal",
          //             opacity: menuState.activeLabel === text.label ? 1 : 0.4,
          //           }}
          //         >
          //           {text.label}
          //         </Typography>
          //       }
          //     />
          //     {iconSubMenu(text.submenu.length)}
          //   </ListItem>
          // </Link>
        ))}
      </List>
    );
  };

  return (
    <nav className={classes.drawer} aria-label="Mailbox folders">
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: !menuState.isOpenSubMenu,
          [classes.drawerClose]: menuState.isOpenSubMenu,
        })}
        classes={{
          paper: clsx(classes.drawerPaper, {
            [classes.drawerOpen]: !menuState.isOpenSubMenu,
            [classes.drawerClose]: menuState.isOpenSubMenu,
          }),
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        {drawerListMenu(handlerMenu(menuConnexi))}

        <div
          className={clsx(classes.divider, {
            [classes.marginLeftDivider]: !menuState.isOpenSubMenu,
          })}
        >
          <span
            style={{
              display: menuState.isOpenSubMenu ? "none" : "inline",
            }}
          >
            Sales Channel
          </span>
        </div>

        {drawerListMenu(handlerMenu(menuStore))}
      </Drawer>

      <SubMenu
        getUrl={(url: string) =>
          url === "back" &&
          setMenuState({ ...menuState, isOpenSubMenu: false, subMenu: [] })
        }
        data={menuState.subMenu}
        parentMenu={menuState.activeLabel}
        base={menuState.base}
      />
    </nav>
  );
};

export default withRouter(MainMenu);
