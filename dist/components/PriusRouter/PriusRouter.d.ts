/**
 * @todo
 * [ ] Delete mode if no longer used
 */
import React from 'react';
import { RouteProps, RouteComponentProps } from 'react-router-dom';
import { RouteType } from '../../typings';
export declare type PriusRouterProps = RouteProps & {
    routes: Array<RouteType>;
    modes: Array<string>;
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
};
declare const PriusRouter: ({ routes, component: Component, modes, ...rest }: PriusRouterProps) => JSX.Element;
export default PriusRouter;
/**
 * @description convert url path to FeatureTypes
 * @param object
 * @param value
 */
export declare const handlerObjectKey: (object: {
    [key: string]: string;
}, value: string) => string | undefined;
