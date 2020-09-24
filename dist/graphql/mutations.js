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
exports.UPLOAD_IMAGE = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  mutation uploadImage($input: SingleUploadInput!) {\n    singleUpload(input: $input) {\n      url\n      filename\n      mimetype\n      encoding\n    }\n  }\n"], ["\n  mutation uploadImage($input: SingleUploadInput!) {\n    singleUpload(input: $input) {\n      url\n      filename\n      mimetype\n      encoding\n    }\n  }\n"])));
exports.GET_TOKEN = graphql_tag_1.default(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  mutation ExchangeAuthorizationCode($input: ExchangeAuthorizationCodeInput) {\n    exchangeAuthorizationCode(input: $input) {\n      accessToken\n      account {\n        ID\n        email\n        firstName\n        lastName\n      }\n      tenant {\n        ID\n        name\n        brands {\n          items {\n            name\n            ID\n          }\n        }\n      }\n      allowedActions\n    }\n  }\n"], ["\n  mutation ExchangeAuthorizationCode($input: ExchangeAuthorizationCodeInput) {\n    exchangeAuthorizationCode(input: $input) {\n      accessToken\n      account {\n        ID\n        email\n        firstName\n        lastName\n      }\n      tenant {\n        ID\n        name\n        brands {\n          items {\n            name\n            ID\n          }\n        }\n      }\n      allowedActions\n    }\n  }\n"])));
var templateObject_1, templateObject_2;
