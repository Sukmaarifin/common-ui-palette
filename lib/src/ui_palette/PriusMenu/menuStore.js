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
import React from "react";
import StoreSVG from "./assets/StoreSVG";
import SettingSVG from "./assets/SettingSVG";
import SalesChannelSVG from "./assets/SalesChannelSVG";
export var menuStore = [
    {
        label: "Webstore",
        url: "#",
        icon: function (props) {
            return React.createElement(StoreSVG, __assign({}, props));
        },
        submenu: [
            {
                label: "Slideshow",
                url: "/slideshow",
            },
            {
                label: "Kategori",
                url: "/category",
            },
            {
                label: "Navigasi",
                url: "/navigation",
            },
            {
                label: "Widget",
                url: "/widget",
            },
            // {
            //   label: "Slide"
            // },
            {
                label: "Artikel",
                url: "/article-category",
            },
            {
                label: "Lookbook",
                url: "/lookbook",
            },
            {
                label: "Filter & Sort",
                url: "/custom",
            },
            {
                label: "Varian",
                url: "/variant",
            },
        ],
    },
    {
        label: "Sales Channel",
        url: "/sales-channel",
        icon: function (props) {
            return React.createElement(SalesChannelSVG, __assign({}, props));
        },
        submenu: [],
    },
    {
        label: "Pengaturan",
        url: "#",
        icon: function (props) {
            return React.createElement(SettingSVG, __assign({}, props));
        },
        submenu: [
            {
                label: "Profile Toko",
                url: "/profile",
            },
            {
                label: "Pengiriman",
                url: "/shipping",
            },
            {
                label: "Pembayaran",
                url: "/payment",
            },
            {
                label: "Website",
                url: "/website",
            },
            {
                label: "Notifikasi",
                url: "/notification",
            },
            {
                label: "Marketing Analitik",
                url: "/marketing",
            },
        ],
    },
];
export var menuStoreBasic = [
    {
        label: "Webstore",
        url: "#",
        icon: function (props) {
            return React.createElement(StoreSVG, __assign({}, props));
        },
        submenu: [
            {
                label: "Slideshow",
                url: "/slideshow",
            },
            {
                label: "Kategori",
                url: "/category",
            },
            {
                label: "Navigasi",
                url: "/navigation",
            },
            {
                label: "Widget",
                url: "/widget",
            },
            {
                label: "Artikel",
                url: "/article-category",
            },
            {
                label: "Lookbook",
                url: "/lookbook",
            },
            {
                label: "Varian",
                url: "/variant",
            },
        ],
    },
    {
        label: "Pengaturan",
        url: "#",
        icon: function (props) {
            return React.createElement(SettingSVG, __assign({}, props));
        },
        submenu: [
            {
                label: "Profile Toko",
                url: "/profile",
            },
            {
                label: "Pengiriman",
                url: "/shipping",
            },
            {
                label: "Pembayaran",
                url: "/payment",
            },
            {
                label: "Website",
                url: "/website",
            },
        ],
    },
];
