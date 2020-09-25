import React from "react";
import { Link } from "react-router-dom";

import { camelize } from "../../helpers";
import { fieldMenu } from "./MainMenu";
import { fieldSubMenu } from "./SubMenu";


type MenuProps = {
  route: fieldMenu | fieldSubMenu;
  children: any,
  index: number,
  pathname: string;
  className?: any;
  base: string;
}

const Menu = ({ route, children, index, pathname, className, base }: MenuProps) => {
  const tmpUrl = route?.url ? route.url.split("/").filter((x) => x) : "";

  if(route.url !== "#" && tmpUrl[0] !== pathname) {
    return (
      <a href={`http://${window.location.hostname}:${base}${route.url}`} key={index}>
        {children}
      </a>
    )
  }

  return (
    <Link
      id={camelize(route.label)}
      data-identity={`menu-anchor-${camelize(route.label)}`}
      to={route?.url ? `${route.url}` : "#"}
      key={index}
      className={className}
    >
        {children}
    </Link>
  )
}

export default Menu;