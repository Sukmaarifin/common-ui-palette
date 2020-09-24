import React from "react";
declare type TenantBrandInfoType = {
    ID: string;
    name: string;
};
declare type AccountInfoType = {
    ID: string;
    firstName: string;
    lastName: string;
    email: string;
};
export declare type TTenantContext = {
    account: AccountInfoType;
    brandID: string;
    brands: Array<TenantBrandInfoType>;
    currency: string;
    lang: string;
    mode: string;
    tenant: TenantBrandInfoType;
    token: string;
};
export declare const TenantContext: React.Context<TTenantContext>;
export declare const logoutSSSO: () => void;
export declare const PriusSSSO: (props: any) => JSX.Element;
export {};
