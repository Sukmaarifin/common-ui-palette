import React, { createContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useMutation } from '@apollo/react-hooks';
import CryptoJS from 'crypto-js';

import PriusCircularProgress from '../PriusCircularProgress';
import usePersistedState from '../../helpers/usePersistedState';
import {
  PRIUS_NAME,
  PRIUS_URL,
  RADEN_URL,
  MODE,
  SECRET_KEY,
} from '../../configs';
import {
  GET_TOKEN,
  GetTokenParamType,
  GetTokenResponseType,
} from '../../graphql';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    fontSize: '50px',
  },
}));

export type TenantBrandInfoType = {
  ID: string;
  name: string;
};

type AccountInfoType = {
  ID: string;
  firstName: string;
  lastName: string;
  email: string;
};

export type TTenantContext = {
  account: AccountInfoType;
  brandID: string;
  brands: Array<TenantBrandInfoType>;
  currency: string;
  lang: string;
  mode: string;
  tenant: TenantBrandInfoType;
  token: string;
};

//TODO: get active language and currency from current user information
const DEFAULT_LANGUAGE = 'ID';
const DEFAULT_CURRENCY = 'IDR';

export const TenantContext = createContext<TTenantContext>({
  account: {
    ID: '',
    email: '',
    firstName: '',
    lastName: '',
  },
  brandID: '',
  brands: [],
  currency: '',
  lang: '',
  mode: '',
  tenant: {
    ID: '',
    name: '',
  },
  token: '',
});

const redirectToPriusSSSO = () => {
  const state = Math.random().toString(36).substring(7).toUpperCase(); // GENERATE 15 RANDOM STRING
  const url = `${RADEN_URL}/authorize?client_id=${PRIUS_NAME}&redirect_uri=${encodeURIComponent(
    PRIUS_URL
  )}&response_type=code&scope=open&state=${state}`;

  window.location.replace(url);
};

export const logoutSSSO = () => {
  window.localStorage.clear();
  redirectToPriusSSSO();
};

export const PriusSSSO = (props: any) => {
  const classes = useStyles();

  // BRAND_ID is an active or a selected brand
  const [brandId, setBrandId] = usePersistedState('BRAND_ID', '');
  const [tenant, setTenant] = usePersistedState('TENANT', '');
  const [brands, setBrands] = usePersistedState('BRANDS', '');
  const [account, setAccount] = usePersistedState('ACCOUNT', '');
  const [token, setToken] = usePersistedState('TOKEN', '');

  const [getToken] = useMutation<GetTokenResponseType, GetTokenParamType>(
    GET_TOKEN,
    {
      onCompleted: (data: GetTokenResponseType) => {
        if (data?.exchangeAuthorizationCode?.accessToken) {
          const brandsInfo = data.exchangeAuthorizationCode.tenant.brands.items.map(
            (brand: any) => ({
              ID: brand.ID,
              name: brand.name,
            })
          );

          setBrands(brandsInfo);

          setBrandId(data.exchangeAuthorizationCode.tenant.brands.items[0].ID);

          setAccount({
            ID: data.exchangeAuthorizationCode.account.ID,
            email: data.exchangeAuthorizationCode.account.email,
            firstName: data.exchangeAuthorizationCode.account.firstName,
            lastName: data.exchangeAuthorizationCode.account.lastName,
          });

          setTenant({
            ID: data.exchangeAuthorizationCode.tenant.ID,
            name: data.exchangeAuthorizationCode.tenant.name,
          });

          const accessToken = data.exchangeAuthorizationCode.accessToken;
          const encryptedToken = CryptoJS.AES.encrypt(
            JSON.stringify({ accessToken }),
            SECRET_KEY
          ).toString();
          setToken(encryptedToken);
        }
      },
      onError: () => {
        // console.log(`Error: ${error.message}`);
      },
    }
  );

  useEffect(() => {
    if (!brandId || brandId === '') {
      if (new URL(window.location.href).href.includes('?code=')) {
        // if user is authenticated and set local storage
        const hrefData = window.location.href.split('?')[1].split('&');
        const access_token = hrefData[0].split('=')[1];

        getToken({
          variables: {
            input: {
              authorizationCode: access_token,
              redirectURI: PRIUS_URL,
              isAdmin: true,
            },
          },
        });
      } else {
        // if user not logged in
        redirectToPriusSSSO();
      }
    }
  }, [brandId, getToken]);

  return (
    <TenantContext.Provider
      value={{
        account,
        brandID: brandId,
        currency: DEFAULT_CURRENCY,
        lang: DEFAULT_LANGUAGE,
        mode: MODE,
        brands,
        tenant,
        token,
      }}
    >
      {brandId !== '' ? (
        props.children
      ) : (
        <div className={classes.container}>
          <PriusCircularProgress size={80} />
        </div>
      )}
    </TenantContext.Provider>
  );
};
