/**
 * @todo
 * [ ] Unit test
 */

import React, { useContext, useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { makeStyles, Theme, ThemeProvider } from '@material-ui/core/styles';
import { Grid, MenuItem } from '@material-ui/core';

import { TenantContext } from '../PriusSSSO';
import MultipleSelect, { OptionType } from '../MultipleSelect';
import PriusSelect from '../PriusSelect';

import { GetBrandsResponseType, GetBrandsParamType, BrandType } from './types';
import theme from '../../styles/material-ui-theme';

export const GET_BRANDS = gql`
  query Brands($ID: ID!) {
    tenant(ID: $ID) {
      ID
      brands {
        items {
          ID
          name
          logoURL
        }
      }
    }
  }
`;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: '#1C1B1B',
    color: theme.colors.white,
    margin: '0 15px',
    border: `1px solid #1C1B1B`,
  },
  selectedMenuColor: {
    color: theme.colors.white,
  },
}));

export type BrandDropdownProps = {
  id?: string;
  placeholder?: string;
  isMulti?: boolean;
  isClearable?: boolean;
  selectedData?: Array<OptionType>;
  onChangeSelect: (data: Array<OptionType>) => void;
  isWithLogo?: boolean;
};

function BrandDropdown({
  id,
  placeholder,
  isMulti = false,
  isClearable = false,
  selectedData,
  onChangeSelect,
  isWithLogo = false,
}: BrandDropdownProps) {
  const { brandID } = useContext(TenantContext);
  const [brands, setBrands] = useState<Array<OptionType>>([]);
  const [selectedBrands, setSelectedBrands] = useState<Array<OptionType>>([]);

  const classes = useStyles();

  const { data } = useQuery<GetBrandsResponseType, GetBrandsParamType>(
    GET_BRANDS,
    {
      variables: {
        ID: brandID,
      },
    }
  );

  useEffect(() => {
    if (data && data?.tenant?.brands?.items?.length) {
      const tempBrands: Array<BrandType> = data.tenant.brands.items;

      const brandOptions: Array<OptionType> = tempBrands.map(
        (tempBrand: BrandType) => {
          return {
            label: tempBrand.name,
            labelElement: isWithLogo ? (
              <Grid container direction="row" alignItems="center" spacing={2}>
                <Grid item>
                  <img
                    src={tempBrand.logoURL}
                    width="21"
                    height="21"
                    alt="icon"
                  />
                </Grid>
                <Grid item>{tempBrand.name.toLocaleUpperCase()}</Grid>
              </Grid>
            ) : undefined,
            value: tempBrand.ID,
            isDisabled: false,
          };
        }
      );

      setBrands(brandOptions);
    }
  }, [data, isWithLogo]);

  useEffect(() => {
    if (selectedData && selectedData?.length) {
      setSelectedBrands(selectedData);
    }
  }, [selectedData]);

  const handleChange = (value: Array<OptionType>) => {
    let tempBrands: Array<OptionType> = value;

    if (!isMulti) {
      const brand: any = value;
      tempBrands = brand?.value ? [brand] : [];
    }

    setSelectedBrands(value);
    onChangeSelect(tempBrands);
  };

  if (isWithLogo) {
    return (
      <PriusSelect
        id={id && `${id}-select-menuBrand`}
        inputProps={{
          'data-identity': id && `${id}-select-menuBrand`,
        }}
        value={selectedBrands[0]}
        onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
          const dataSelected: Array<OptionType> = [
            {
              isDisabled: false,
              value: event.target.value as string,
              label:
                brands.find((brand) => brand.value === event.target.value)
                  ?.label || (event.target.value as string),
              labelElement: brands.find(
                (brand) => brand.value === event.target.value
              )?.labelElement || <></>,
            },
          ];
          setSelectedBrands(dataSelected);
          onChangeSelect && onChangeSelect(dataSelected);
        }}
        classes={{
          icon: classes.selectedMenuColor,
          selectMenu: classes.selectedMenuColor,
        }}
        className={classes.root}
      >
        {brands.map((brand) => (
          <MenuItem key={brand.value} value={brand.value}>
            {brand.labelElement}
          </MenuItem>
        ))}
      </PriusSelect>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <MultipleSelect
        id={`${id}-select-brand`}
        isClearable={isClearable}
        isMulti={isMulti}
        name="brand"
        options={brands}
        placeholder={placeholder || ''}
        selectedData={selectedBrands}
        onChange={(value: Array<OptionType>) => handleChange(value)}
      />
    </ThemeProvider>
  );
}

export default BrandDropdown;
