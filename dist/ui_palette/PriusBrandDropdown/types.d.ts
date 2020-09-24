export declare type GetBrandsResponseType = {
    tenant: Pick<BrandType, "ID"> & {
        brands: ListBrandType;
    };
};
export declare type ListBrandType = {
    items?: Array<BrandType>;
};
export declare type BrandType = {
    ID: string;
    name: string;
    logoURL: string;
};
export declare type GetBrandsParamType = Pick<BrandType, "ID">;
