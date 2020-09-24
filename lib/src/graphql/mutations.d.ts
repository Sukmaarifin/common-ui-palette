import { FeatureTypeStrings } from "../ui_palette/PriusRouter/types";
export declare type ExchangeAuthorizationCodeInput = {
    authorizationCode: string;
    redirectURI: string;
    isAdmin: boolean;
};
export declare type GetTokenParamType = {
    input: ExchangeAuthorizationCodeInput;
};
declare type BrandInfoType = {
    ID: string;
    name: string;
};
export declare type GetTokenResponseType = {
    exchangeAuthorizationCode: {
        accessToken: string;
        account: {
            ID: string;
            email: string;
            firstName: string;
            lastName: string;
        };
        tenant: {
            ID: string;
            name: string;
            brands: {
                items: Array<BrandInfoType>;
            };
        };
        allowedActions: Array<FeatureTypeStrings>;
    };
};
export declare const UPLOAD_IMAGE: import("graphql").DocumentNode;
export declare const GET_TOKEN: import("graphql").DocumentNode;
export {};
