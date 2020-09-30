/**
 * @todo Request mode from gql when ready
 */

import * as React from 'react';
import {
  Button,
  Breadcrumbs,
  Link,
  MenuItem,
  MenuList,
  Paper,
  Tooltip,
  ClickAwayListener,
  Typography,
} from '@material-ui/core';
import { LinkProps } from '@material-ui/core/Link';
import { KeyboardArrowDown } from '@material-ui/icons';
import { Route } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';

import { TenantContext } from '../SSSO';

import { camelize } from '../../helpers';

import './NavigationBar.css';
import { RouteType } from '../../typings';

type FlagCardType = 'success' | 'alert';

type NotifType = {
  messages: string;
  flagStatus: FlagCardType;
  time: Date;
};

export type NavigationBarProps = {
  routes: Array<RouteType>;
  name: string;
  userClick: () => void;
  notifClick: () => void;
  notifStatus: boolean;
  notif: Array<NotifType>;
  toggleDropdown: () => void;
  toggleStatus: boolean;
  syncClick: Array<any>;
};

const LinkRouter = (props: LinkRouterProps) => (
  <Link {...props} component={RouterLink as any} />
);

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

const NavigationBar = (props: NavigationBarProps) => {
  const { mode } = React.useContext(TenantContext);
  const { routes, name, userClick, toggleDropdown, toggleStatus } = props;

  return (
    <div>
      <div className="prius__navbar__container">
        <div className="prius__navbar__left-side">
          <Breadcrumbs aria-label="Breadcrumb">
            <Route>
              {({ location }) => {
                const pathnames = location.pathname.split('/').filter((x) => x);
                const getValidPath = handlerPathname(routes, pathnames);

                // find URL and check is user has mode to access the URL
                let isAuthenticated = routes.find(
                  (item: RouteType) =>
                    item.url === getValidPath && item.modes.includes(mode)
                );

                // if unauthorized, just skip
                if (!isAuthenticated) return null;

                const currentPathnames =
                  getValidPath.charAt(0) === '/'
                    ? getValidPath.substring(1).split('/')
                    : getValidPath.split('/');

                return (
                  <Breadcrumbs aria-label="breadcrumb">
                    {currentPathnames.map((_, index) => {
                      // check is last iteration
                      const last = index === currentPathnames.length - 1;
                      // get URL
                      const to = `/${currentPathnames
                        .slice(0, index + 1)
                        .join('/')}`;
                      // find route object from given URL
                      const url = routes.find(
                        (item: RouteType) => item.url === to
                      );
                      // if route object found, get breadcrumbs data
                      const page = url ? url.breadcrumb : null;
                      // if page doesn't exist, just skip
                      if (!page) return null;

                      return last ? (
                        <Typography className="prius__link" key={to}>
                          {page}
                        </Typography>
                      ) : (
                        <Typography className="prius__link-disable" key={to}>
                          <LinkRouter
                            to={to}
                            key={to}
                            color="inherit"
                            data-identity={`navigation-link-${camelize(page)}`}
                          >
                            {page}
                          </LinkRouter>
                        </Typography>
                      );
                    })}
                  </Breadcrumbs>
                );
              }}
            </Route>
          </Breadcrumbs>
        </div>
        <div className="prius__navbar__right-side">
          <div className="prius__navbar__user">
            <Tooltip title="Keluar" enterDelay={1000} leaveDelay={200}>
              <div className="dropdown-container" onClick={toggleDropdown}>
                <Button
                  data-identity="navigation-button-toggleDropdown"
                  style={{
                    textTransform: 'none',
                    fontFamily: 'Metropolis',
                    fontSize: 13,
                    marginTop: 3,
                    fontWeight: 'normal',
                  }}
                >
                  {name}
                  <KeyboardArrowDown />
                </Button>
                {toggleStatus === true ? (
                  <Paper
                    style={{
                      zIndex: 9,
                      position: 'relative',
                    }}
                  >
                    <ClickAwayListener onClickAway={toggleDropdown}>
                      <MenuList>
                        <MenuItem
                          onClick={userClick}
                          data-identity="navigation-button-logout"
                        >
                          <span
                            style={{
                              fontFamily: 'Metropolis',
                              fontSize: 13,
                            }}
                          >
                            Keluar
                          </span>
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                ) : null}
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;

export const handlerPathname = (
  routes: Array<RouteType>,
  pathnames: Array<string>
) => {
  const initialPaths: Array<string> = pathnames?.length
    ? pathnames
    : ['product'];
  const similarPath: Array<RouteType> = routes.filter((tmpRoute: RouteType) =>
    tmpRoute.url.includes(initialPaths[0])
  );

  const tempPaths: Array<string> = initialPaths.reduce(
    (items: Array<string>, path: string, idx: number) => {
      if (idx > 0) {
        if (similarPath.length) {
          const futurePath:
            | RouteType
            | undefined = similarPath.find((tmpPath: RouteType) =>
            tmpPath.url.includes(`/${items.join('/')}/${path}`)
          );
          if (futurePath) {
            items.push(path);
          } else {
            items[idx - 1] === ':id' ? items.push(':subid') : items.push(':id');
          }
        }
      } else {
        items.push(path);
      }
      return items;
    },
    []
  );

  return `/${tempPaths.join('/')}`;
};
