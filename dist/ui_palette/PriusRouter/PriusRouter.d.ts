/**
 * @todo
 * [ ] Delete mode if no longer used
 */
import React from "react";
import { RouteProps, RouteComponentProps } from "react-router-dom";
export declare type PriusRouterProps = RouteProps & {
    modes: Array<string>;
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
};
declare const PriusRouter: ({ component: Component, modes, ...rest }: PriusRouterProps) => JSX.Element;
export default PriusRouter;
/**
 * @description convert url path to FeatureTypes
 * @param object
 * @param value
 */
export declare const handlerObjectKey: (object: {
    [key: string]: string;
}, value: string) => string | undefined;
