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
var StoreSVG_1 = __importDefault(require("./assets/StoreSVG"));
var SettingSVG_1 = __importDefault(require("./assets/SettingSVG"));
var SalesChannelSVG_1 = __importDefault(require("./assets/SalesChannelSVG"));
exports.menuStore = [
    {
        label: 'Webstore',
        url: '#',
        icon: function (props) {
            return react_1.default.createElement(StoreSVG_1.default, __assign({}, props));
        },
        submenu: [
            {
                label: 'Slideshow',
                url: '/slideshow',
            },
            {
                label: 'Kategori',
                url: '/category',
            },
            {
                label: 'Navigasi',
                url: '/navigation',
            },
            {
                label: 'Widget',
                url: '/widget',
            },
            // {
            //   label: "Slide"
            // },
            {
                label: 'Artikel',
                url: '/article-category',
            },
            {
                label: 'Lookbook',
                url: '/lookbook',
            },
            {
                label: 'Filter & Sort',
                url: '/custom',
            },
            {
                label: 'Varian',
                url: '/variant',
            },
        ],
    },
    {
        label: 'Sales Channel',
        url: '/sales-channel',
        icon: function (props) {
            return react_1.default.createElement(SalesChannelSVG_1.default, __assign({}, props));
        },
        submenu: [],
    },
    {
        label: 'Pengaturan',
        url: '#',
        icon: function (props) {
            return react_1.default.createElement(SettingSVG_1.default, __assign({}, props));
        },
        submenu: [
            {
                label: 'Profile Toko',
                url: '/profile',
            },
            {
                label: 'Pengiriman',
                url: '/shipping',
            },
            {
                label: 'Pembayaran',
                url: '/payment',
            },
            {
                label: 'Website',
                url: '/website',
            },
            {
                label: 'Notifikasi',
                url: '/notification',
            },
            {
                label: 'Marketing Analitik',
                url: '/marketing',
            },
        ],
    },
];
exports.menuStoreBasic = [
    {
        label: 'Webstore',
        url: '#',
        icon: function (props) {
            return react_1.default.createElement(StoreSVG_1.default, __assign({}, props));
        },
        submenu: [
            {
                label: 'Slideshow',
                url: '/slideshow',
            },
            {
                label: 'Kategori',
                url: '/category',
            },
            {
                label: 'Navigasi',
                url: '/navigation',
            },
            {
                label: 'Widget',
                url: '/widget',
            },
            {
                label: 'Artikel',
                url: '/article-category',
            },
            {
                label: 'Lookbook',
                url: '/lookbook',
            },
            {
                label: 'Varian',
                url: '/variant',
            },
        ],
    },
    {
        label: 'Pengaturan',
        url: '#',
        icon: function (props) {
            return react_1.default.createElement(SettingSVG_1.default, __assign({}, props));
        },
        submenu: [
            {
                label: 'Profile Toko',
                url: '/profile',
            },
            {
                label: 'Pengiriman',
                url: '/shipping',
            },
            {
                label: 'Pembayaran',
                url: '/payment',
            },
            {
                label: 'Website',
                url: '/website',
            },
        ],
    },
];
