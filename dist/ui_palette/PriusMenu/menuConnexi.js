"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var CustomerSVG_1 = __importDefault(require("./assets/CustomerSVG"));
var OrderSVG_1 = __importDefault(require("./assets/OrderSVG"));
var ProductSVG_1 = __importDefault(require("./assets/ProductSVG"));
var PromotionSVG_1 = __importDefault(require("./assets/PromotionSVG"));
var FeedbackSVG_1 = __importDefault(require("./assets/FeedbackSVG"));
exports.menuConnexi = [
    // {
    //   label: "Analytics",
    //   url: "#",
    //   icon: function(props: checkSVGProp) {
    //     return <AnalyticsSVG {...props} />;
    //   },
    //   submenu: []
    // },
    {
        label: "Produk",
        url: "#",
        icon: function (props) {
            return react_1.default.createElement(ProductSVG_1.default, __assign({}, props));
        },
        submenu: [
            {
                label: "Daftar Produk",
                url: "/product",
            },
            {
                label: "Tambah Produk",
                url: "/product/add",
            },
            {
                label: "Tambah Massal",
                url: "/product/bulk",
            },
        ],
    },
    {
        label: "Pesanan",
        url: "/order",
        icon: function (props) {
            return react_1.default.createElement(OrderSVG_1.default, __assign({}, props));
        },
        submenu: [],
    },
    {
        label: "Promosi",
        url: "#",
        icon: function (props) {
            return react_1.default.createElement(PromotionSVG_1.default, __assign({}, props));
        },
        submenu: [
            {
                label: "Daftar Promosi",
                url: "/promotion",
            },
            {
                label: "Tambah Promosi",
                url: "/promotion/add",
            },
        ],
    },
    {
        label: "Pelanggan",
        url: "#",
        icon: function (props) {
            return react_1.default.createElement(CustomerSVG_1.default, __assign({}, props));
        },
        submenu: [
            {
                label: "Daftar Pelanggan",
                url: "/member",
            },
            {
                label: "Tipe Pelanggan",
                url: "/member-types",
            },
        ],
    },
    {
        label: "Feedback",
        url: "#",
        icon: function (props) {
            return react_1.default.createElement(FeedbackSVG_1.default, __assign({}, props));
        },
        submenu: [
            {
                label: "Testimonial",
                url: "/testimonial",
            },
        ],
    },
];
exports.menuConnexiBasic = [
    {
        label: "Produk",
        url: "#",
        icon: function (props) {
            return react_1.default.createElement(ProductSVG_1.default, __assign({}, props));
        },
        submenu: [
            {
                label: "Daftar Produk",
                url: "/product",
            },
            {
                label: "Tambah Produk",
                url: "/product/add",
            },
        ],
    },
    {
        label: "Pesanan",
        url: "/order",
        icon: function (props) {
            return react_1.default.createElement(OrderSVG_1.default, __assign({}, props));
        },
        submenu: [],
    },
    {
        label: "Promosi",
        url: "#",
        icon: function (props) {
            return react_1.default.createElement(PromotionSVG_1.default, __assign({}, props));
        },
        submenu: [
            {
                label: "Daftar Promosi",
                url: "/promotion",
            },
            {
                label: "Tambah Promosi",
                url: "/promotion/add",
            },
        ],
    },
    {
        label: "Pelanggan",
        url: "/member",
        icon: function (props) {
            return react_1.default.createElement(CustomerSVG_1.default, __assign({}, props));
        },
        submenu: [],
    },
];
