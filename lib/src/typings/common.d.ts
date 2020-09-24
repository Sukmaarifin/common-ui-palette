/** @todo
 * complete all common typings based on schema
 */
export declare type MoneyType = {
    code: string;
    value: number;
};
export declare type DateRangeType = {
    from: Date;
    to: Date;
};
export declare type TimestampRangeType = {
    from: number;
    to: number;
};
export declare type TranslationType = {
    language: string;
    text: string;
};
export declare type FreeTranslationType = {
    language: string;
    [key: string]: any;
};
export declare type ProductVariantType = {
    channelIDs: Array<string>;
    options: Array<VariantOptionType>;
    basePrices: Array<MoneyType>;
};
export declare type VariantOptionType = {
    key: string;
    value: string;
};
export declare type TenantType = {
    ID: string;
    name: string;
    language: string;
    currencyCode: string;
    logoURL: string;
    warehouses: WarehouseType;
};
export declare type AddressType = {
    phones: Array<string>;
    districtCode: string;
    formattedAddress: string;
    postalCode: string;
    street: string;
    emails: Array<string>;
    longitude: number;
    latitude: number;
};
export declare type WarehouseType = {
    ID: string;
    address: AddressType;
};
export declare type SettingType = {
    logoURL: string;
    socialMediaLink: SocialMediaLinkType;
    bankAccount: BankAccountType;
    faviconURL: string;
    websiteDescription: string;
    hideFromSearchEngine: boolean;
    setAsMaintenance: boolean;
    checkoutAsGuestEnabled: boolean;
};
export declare type BankAccountType = {
    banks: Array<BankType>;
};
export declare type BankType = {
    name: string;
    accountNumber: string;
    accountName: string;
    isActive: boolean;
};
export declare type SocialMediaLinkType = {
    twitter: string;
    facebook: string;
    instagram: string;
};
export declare type PageInfoType = {
    totalItems?: number;
    itemPerPage: number;
    pageNumber: number;
};
export declare type OrderFilterInputType = {
    channelIDs?: Array<string>;
    accountIDs?: Array<string>;
    startCreationDate?: number;
    endCreationDate?: number;
    shippingMethods?: Array<string>;
    statuses?: Array<string>;
};
export declare type SortInputType = {
    fieldName: string;
    isAscending: boolean;
};
export declare const SEVERITY_ERROR = "error";
export declare const SEVERITY_SUCCESS = "success";
export declare const SEVERITY_INFO = "info";
export declare const SEVERITY_WARNING = "warning";
export declare type AlertType = {
    severity: typeof SEVERITY_ERROR | typeof SEVERITY_SUCCESS | typeof SEVERITY_INFO | typeof SEVERITY_WARNING;
    message: string;
};
export declare type TransactionParamsType = {
    transactionID: string;
};
export declare type ConfigType = {
    name: string;
    value: string;
};
