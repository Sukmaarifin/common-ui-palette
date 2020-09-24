"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var PriusTable_1 = __importDefault(require("../PriusTable"));
var index_1 = require("../index");
exports.basic = function () {
    return (react_1.default.createElement(PriusTable_1.default, { fields: [
            react_1.default.createElement(index_1.FieldImage, { source: "imageURLs[0]", width: "6rem", size: "small", altText: "Image of product" }),
            react_1.default.createElement(index_1.FieldText, { description: "variants[0].sku", source: "details[0].name", width: "15rem", title: "Nama" }),
            react_1.default.createElement(index_1.FieldText, { source: "brand.name", width: "12rem", title: "Toko" }),
            react_1.default.createElement(index_1.FieldNumber, { source: "stock", width: "7rem", title: "Stok" }),
            react_1.default.createElement(index_1.FieldText, { source: "publishStatus", width: "7rem", title: "Status" }),
        ], filterPublishedRow: "published", isSelectable: true, records: [
            {
                ID: "300511313229165833",
                imageURLs: [
                    "https://storage.googleapis.com/sirclo-1152-storefront/products/e5c025ea-8848-442b-8fc6-051380dc7bca-air-max-red.jpeg",
                ],
                published: true,
                brand: {
                    ID: "shopwithus2",
                    name: "Shop With Us",
                },
                variants: [
                    {
                        SKU: "AIRMAX201",
                        basePrices: [
                            {
                                code: "IDR",
                                value: 0,
                            },
                        ],
                        stocks: {
                            total: 0,
                        },
                    },
                ],
                details: [
                    {
                        name: "AIR MAX RED",
                    },
                ],
                publishStatus: "Aktif",
                stock: 0,
            },
            {
                ID: "302547611129263623",
                imageURLs: [
                    "https://storage.googleapis.com/sirclo-1152-storefront/products/e4b4cc55-65b3-4df6-8301-ac56328ffd5f-air-max-silver.jpeg",
                ],
                published: true,
                brand: {
                    ID: "shopwithus2",
                    name: "Shop With Us",
                },
                variants: [
                    {
                        SKU: "SLVR41",
                        basePrices: [
                            {
                                code: "IDR",
                                value: 1250000,
                            },
                        ],
                        stocks: {
                            total: 0,
                        },
                    },
                ],
                details: [
                    {
                        name: "AIRMAX SILVERS",
                    },
                ],
                publishStatus: "Aktif",
                stock: 0,
            },
            {
                ID: "297792123699386634",
                imageURLs: [
                    "https://storage.googleapis.com/sirclo-1152-storefront/products/58a0adaa-07fd-4cde-9aeb-eaab7991ef1d-ALLIE CROPPED_2.jpg",
                    "https://storage.googleapis.com/sirclo-1152-storefront/products/a9c3a932-19e9-4084-87a5-3eed8b603278-ALLIE CROPPED_1.jpg",
                ],
                published: true,
                brand: {
                    ID: "shopwithus2",
                    name: "Shop With Us",
                },
                variants: [
                    {
                        SKU: "tank_blue",
                        basePrices: [
                            {
                                code: "IDR",
                                value: 200000,
                            },
                        ],
                        stocks: {
                            total: 118,
                        },
                    },
                ],
                details: [
                    {
                        name: "Allie Cropped Tank",
                    },
                ],
                publishStatus: "Aktif",
                stock: 118,
            },
        ], type: "card" }));
};
exports.basicCode = "\n<PriusTable\n  fields={[\n    <FieldImage\n      source=\"imageURLs[0]\"\n      width=\"6rem\"\n      size=\"small\"\n      altText=\"Image of product\"\n    />,\n    <FieldText\n      description=\"variants[0].sku\"\n      source=\"details[0].name\"\n      width=\"15rem\"\n      title=\"Nama\"\n    />,\n    <FieldText source=\"brand.name\" width=\"12rem\" title=\"Toko\" />,\n    <FieldNumber source=\"stock\" width=\"7rem\" title=\"Stok\" />,\n    <FieldText source=\"publishStatus\" width=\"7rem\" title=\"Status\" />,\n  ]}\n  filterPublishedRow=\"published\"\n  isSelectable\n  records={[\n    {\n      ID: \"300511313229165833\",\n      imageURLs: [\n        \"https://storage.googleapis.com/sirclo-1152-storefront/products/e5c025ea-8848-442b-8fc6-051380dc7bca-air-max-red.jpeg\",\n      ],\n      published: true,\n      brand: {\n        ID: \"shopwithus2\",\n        name: \"Shop With Us\",\n      },\n      variants: [\n        {\n          SKU: \"AIRMAX201\",\n          basePrices: [\n            {\n              code: \"IDR\",\n              value: 0,\n            },\n          ],\n          stocks: {\n            total: 0,\n          },\n        },\n      ],\n      details: [\n        {\n          name: \"AIR MAX RED\",\n        },\n      ],\n      publishStatus: \"Aktif\",\n      stock: 0,\n    },\n    {\n      ID: \"302547611129263623\",\n      imageURLs: [\n        \"https://storage.googleapis.com/sirclo-1152-storefront/products/e4b4cc55-65b3-4df6-8301-ac56328ffd5f-air-max-silver.jpeg\",\n      ],\n      published: true,\n      brand: {\n        ID: \"shopwithus2\",\n        name: \"Shop With Us\",\n      },\n      variants: [\n        {\n          SKU: \"SLVR41\",\n          basePrices: [\n            {\n              code: \"IDR\",\n              value: 1250000,\n            },\n          ],\n          stocks: {\n            total: 0,\n          },\n        },\n      ],\n      details: [\n        {\n          name: \"AIRMAX SILVERS\",\n        },\n      ],\n      publishStatus: \"Aktif\",\n      stock: 0,\n    },\n    {\n      ID: \"297792123699386634\",\n      imageURLs: [\n        \"https://storage.googleapis.com/sirclo-1152-storefront/products/58a0adaa-07fd-4cde-9aeb-eaab7991ef1d-ALLIE CROPPED_2.jpg\",\n        \"https://storage.googleapis.com/sirclo-1152-storefront/products/a9c3a932-19e9-4084-87a5-3eed8b603278-ALLIE CROPPED_1.jpg\",\n      ],\n      published: true,\n      brand: {\n        ID: \"shopwithus2\",\n        name: \"Shop With Us\",\n      },\n      variants: [\n        {\n          SKU: \"tank_blue\",\n          basePrices: [\n            {\n              code: \"IDR\",\n              value: 200000,\n            },\n          ],\n          stocks: {\n            total: 118,\n          },\n        },\n      ],\n      details: [\n        {\n          name: \"Allie Cropped Tank\",\n        },\n      ],\n      publishStatus: \"Aktif\",\n      stock: 118,\n    },\n  ]}\n  type=\"card\"\n/>";
exports.default = {
    title: "PriusTable",
};
