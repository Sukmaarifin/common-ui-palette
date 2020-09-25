/** @todo
 * complete all common typings based on schema
 */

export type MoneyType = {
  code: string;
  value: number;
};

export type DateRangeType = {
  from: Date;
  to: Date;
};

export type TimestampRangeType = {
  from: number;
  to: number;
};

export type TranslationType = {
  language: string;
  text: string;
};

export type FreeTranslationType = {
  language: string;
  [key: string]: any;
};

export type ProductVariantType = {
  channelIDs: Array<string>;
  options: Array<VariantOptionType>;
  basePrices: Array<MoneyType>;
};

export type VariantOptionType = {
  key: string;
  value: string;
};

export type TenantType = {
  ID: string;
  name: string;
  language: string;
  currencyCode: string;
  logoURL: string;
  warehouses: WarehouseType;
};

export type AddressType = {
  phones: Array<string>;
  districtCode: string;
  formattedAddress: string;
  postalCode: string;
  street: string;
  emails: Array<string>;
  longitude: number;
  latitude: number;
};

export type WarehouseType = {
  ID: string;
  address: AddressType;
};

export type SettingType = {
  logoURL: string;
  socialMediaLink: SocialMediaLinkType;
  bankAccount: BankAccountType;
  faviconURL: string;
  websiteDescription: string;
  hideFromSearchEngine: boolean;
  setAsMaintenance: boolean;
  checkoutAsGuestEnabled: boolean;
};

export type BankAccountType = {
  banks: Array<BankType>;
};

export type BankType = {
  name: string;
  accountNumber: string;
  accountName: string;
  isActive: boolean;
};

export type SocialMediaLinkType = {
  twitter: string;
  facebook: string;
  instagram: string;
};

export type PageInfoType = {
  totalItems: number;
  itemPerPage: number;
  pageNumber: number;
};

export type OrderFilterInputType = {
  channelIDs?: Array<string>;
  accountIDs?: Array<string>;
  startCreationDate?: number;
  endCreationDate?: number;
  shippingMethods?: Array<string>;
  statuses?: Array<string>;
};

export type SortInputType = {
  fieldName: string;
  isAscending: boolean;
};

export const SEVERITY_ERROR = 'error';
export const SEVERITY_SUCCESS = 'success';
export const SEVERITY_INFO = 'info';
export const SEVERITY_WARNING = 'warning';

export type AlertType = {
  severity:
    | typeof SEVERITY_ERROR
    | typeof SEVERITY_SUCCESS
    | typeof SEVERITY_INFO
    | typeof SEVERITY_WARNING;
  message: string;
};

export type TransactionParamsType = {
  transactionID: string;
};

export type ConfigType = {
  name: string;
  value: string;
};
