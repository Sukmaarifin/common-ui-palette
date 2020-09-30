import React, { useState, useContext } from "react";
import { Grid } from "@material-ui/core";
import Backend from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

import NavigationBar from "../NavigationBar";
import Menu from "../Menu";
import Title from "../Title";

import { logoutSSSO, TenantContext } from "../SSSO";

export type RouteType = {
  url: string;
  breadcrumb: string;
  component: any;
  modes: Array<string>;
};

export type MainContainerPropType = {
  children: React.ReactElement;
  route: Array<RouteType>;
};


export const MainContainer = (props: MainContainerPropType) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [notif, setNotif] = useState<boolean>(false);
  const [sync, setSync] = useState<boolean>(false);
  const { account } = useContext(TenantContext);

  const { children, route } = props;
  const firstName = account?.firstName ? account.firstName : "";
  const lastName = account?.lastName ? account.lastName : "";

  return (
    <DndProvider backend={Backend}>
      <Grid
        container
        style={{
          width: "calc(100% - 230px)",
          marginLeft: "230px",
          top: "0",
        }}
      >
        <Title />
        <Menu />
        <Grid item md={12} style={{ width: "-webkit-fill-available" }}>
          <NavigationBar
            routes={route}
            name={`${firstName} ${lastName}`}
            userClick={logoutSSSO}
            notifClick={() => setNotif((prevState) => !prevState)}
            notifStatus={notif}
            notif={[]}
            toggleDropdown={() => setToggle((prevState) => !prevState)}
            toggleStatus={toggle}
            syncClick={[sync, () => setSync((prevState) => !prevState)]}
          />
        </Grid>
        <Grid item md={12} style={{ padding: "40px 70px 10px", zIndex: 0 }}>
          {children}
        </Grid>
      </Grid>
    </DndProvider>
  );
};

export default MainContainer;