import gql from 'graphql-tag';

import { FeatureTypeStrings } from '../components/PriusRouter/types';

export type ExchangeAuthorizationCodeInput = {
  authorizationCode: string;
  redirectURI: string;
  isAdmin: boolean;
};

export type GetTokenParamType = {
  input: ExchangeAuthorizationCodeInput;
};

type BrandInfoType = {
  ID: string;
  name: string;
};

export type GetTokenResponseType = {
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

export const UPLOAD_IMAGE = gql`
  mutation uploadImage($input: SingleUploadInput!) {
    singleUpload(input: $input) {
      url
      filename
      mimetype
      encoding
    }
  }
`;

export const GET_TOKEN = gql`
  mutation ExchangeAuthorizationCode($input: ExchangeAuthorizationCodeInput) {
    exchangeAuthorizationCode(input: $input) {
      accessToken
      account {
        ID
        email
        firstName
        lastName
      }
      tenant {
        ID
        name
        brands {
          items {
            name
            ID
          }
        }
      }
      allowedActions
    }
  }
`;
