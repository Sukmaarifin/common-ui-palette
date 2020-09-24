"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.GET_ACCESS_TO = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query members($IDs: [ID!]!, $isAdmin: Boolean!, $specs: [AccessSpec!]!) {\n    members(IDs: $IDs, isAdmin: $isAdmin) {\n      haveAccessTo(specs: $specs)\n    }\n  }\n"], ["\n  query members($IDs: [ID!]!, $isAdmin: Boolean!, $specs: [AccessSpec!]!) {\n    members(IDs: $IDs, isAdmin: $isAdmin) {\n      haveAccessTo(specs: $specs)\n    }\n  }\n"])));
exports.GET_ALLOWED_ACTIONS = graphql_tag_1.default(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  query getAllowedActions($accountID: [ID!]!) {\n    getAllowedActions(accountID: $accountID) {\n      allowedActions\n    }\n  }\n"], ["\n  query getAllowedActions($accountID: [ID!]!) {\n    getAllowedActions(accountID: $accountID) {\n      allowedActions\n    }\n  }\n"])));
var templateObject_1, templateObject_2;
