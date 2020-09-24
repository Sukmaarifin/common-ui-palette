import { FeatureTypeStrings } from "../ui_palette/PriusRouter/types";
export declare type AccessSpecType = {
    action: string;
    resource?: string;
};
export declare type GetAccessParamType = {
    IDs: Array<string>;
    isAdmin: boolean;
    specs: Array<AccessSpecType>;
};
export declare type GetAllowedActionsParamType = {
    accountID: string;
};
export declare type GetAllowedActionsResponseType = {
    actions: Array<FeatureTypeStrings>;
};
export declare const GET_ACCESS_TO: import("graphql").DocumentNode;
export declare const GET_ALLOWED_ACTIONS: import("graphql").DocumentNode;
