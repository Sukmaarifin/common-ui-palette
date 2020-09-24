var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import gql from "graphql-tag";
export var GET_ACCESS_TO = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query members($IDs: [ID!]!, $isAdmin: Boolean!, $specs: [AccessSpec!]!) {\n    members(IDs: $IDs, isAdmin: $isAdmin) {\n      haveAccessTo(specs: $specs)\n    }\n  }\n"], ["\n  query members($IDs: [ID!]!, $isAdmin: Boolean!, $specs: [AccessSpec!]!) {\n    members(IDs: $IDs, isAdmin: $isAdmin) {\n      haveAccessTo(specs: $specs)\n    }\n  }\n"])));
export var GET_ALLOWED_ACTIONS = gql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  query getAllowedActions($accountID: [ID!]!) {\n    getAllowedActions(accountID: $accountID) {\n      allowedActions\n    }\n  }\n"], ["\n  query getAllowedActions($accountID: [ID!]!) {\n    getAllowedActions(accountID: $accountID) {\n      allowedActions\n    }\n  }\n"])));
var templateObject_1, templateObject_2;
