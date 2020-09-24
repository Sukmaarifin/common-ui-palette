export type GetBrandsResponseType = {
  tenant: Pick<BrandType, 'ID'> & {
    brands: ListBrandType;
  };
};

export type ListBrandType = {
  items?: Array<BrandType>;
};

export type BrandType = {
  ID: string;
  name: string;
  logoURL: string;
};

export type GetBrandsParamType = Pick<BrandType, 'ID'>;
