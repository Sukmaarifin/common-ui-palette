/**
 * @todo
 * [ ] Delete mode if no longer used
 */

import React, { useContext, useEffect } from "react";
import { Route, RouteProps, RouteComponentProps } from "react-router-dom";
import { useLazyQuery } from "@apollo/react-hooks";
import { ApolloError } from "apollo-boost";

import ErrorPage from "../../error/ErrorPage";

import { handlerPathname } from "../PriusNavigationBar";
import { TenantContext } from "../PriusSSSO";
import { GET_ACCESS_TO, GetAccessParamType } from "../../../graphql";
import { ROUTE_BY_PLAN } from "./types";
import { ENV } from "../../../configs";

export type PriusRouterProps = RouteProps & {
  modes: Array<string>;
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
};

const PriusRouter = ({
  component: Component,
  modes,
  ...rest
}: PriusRouterProps) => {
  const { account, mode } = useContext(TenantContext);

  // check which feature has access to by ID
  const [haveAccessTo, { data: isAllowed }] = useLazyQuery<
    boolean,
    GetAccessParamType
  >(GET_ACCESS_TO, {
    fetchPolicy: "cache-and-network",
    // remove when isAllowed used
    onCompleted() {
      console.log(isAllowed);
    },
    onError(error: ApolloError) {
      console.log(error.message);
    },
  });

  useEffect(() => {
    if (
      ENV !== "development" &&
      ENV !== "staging" &&
      ENV !== "production" &&
      rest.location?.pathname
    ) {
      const currentPath = rest.location.pathname.split("/");
      let tempResource: string | undefined = undefined;

      if (currentPath?.length >= 3) {
        tempResource = currentPath.pop();
      }

      haveAccessTo({
        variables: {
          isAdmin: true, // loginID always considered as an admin
          IDs: [account.ID],
          specs: [
            {
              action:
                handlerObjectKey(
                  ROUTE_BY_PLAN,
                  handlerPathname(currentPath.filter((x) => x))
                ) || "/", // set default if current path doesn't match
              resource: tempResource || "", // optional
            },
          ],
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // check current environment
  // uncoment when ready
  // const isAuthenticated: boolean =
  //   ENV === "development" ? true : Boolean(isAllowed);

  // Remove when ready
  const isAuthenticated: boolean =
    ENV === "development" || ENV === "staging" ? true : modes.includes(mode);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <ErrorPage />
      }
    />
  );
};

export default PriusRouter;

/**
 * @description convert url path to FeatureTypes
 * @param object
 * @param value
 */
export const handlerObjectKey = (
  object: { [key: string]: string },
  value: string
) => {
  return Object.keys(object).find((key) => object[key] === value);
};
