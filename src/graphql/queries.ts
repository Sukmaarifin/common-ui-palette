import gql from 'graphql-tag';

import { FeatureTypeStrings } from '../components/Router/types';

export type AccessSpecType = {
  action: string;
  resource?: string;
};

export type GetAccessParamType = {
  IDs: Array<string>;
  isAdmin: boolean;
  specs: Array<AccessSpecType>;
};

export type GetAllowedActionsParamType = {
  accountID: string;
};

export type GetAllowedActionsResponseType = {
  actions: Array<FeatureTypeStrings>;
};

export const GET_ACCESS_TO = gql`
  query members($IDs: [ID!]!, $isAdmin: Boolean!, $specs: [AccessSpec!]!) {
    members(IDs: $IDs, isAdmin: $isAdmin) {
      haveAccessTo(specs: $specs)
    }
  }
`;

export const GET_ALLOWED_ACTIONS = gql`
  query getAllowedActions($accountID: [ID!]!) {
    getAllowedActions(accountID: $accountID) {
      allowedActions
    }
  }
`;
