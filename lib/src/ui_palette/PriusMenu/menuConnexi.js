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
import CustomerSVG from "./assets/CustomerSVG";
import OrderSVG from "./assets/OrderSVG";
import ProductSVG from "./assets/ProductSVG";
import PromotionSVG from "./assets/PromotionSVG";
import FeedbackSVG from "./assets/FeedbackSVG";
export var menuConnexi = [
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
            return React.createElement(ProductSVG, __assign({}, props));
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
            return React.createElement(OrderSVG, __assign({}, props));
        },
        submenu: [],
    },
    {
        label: "Promosi",
        url: "#",
        icon: function (props) {
            return React.createElement(PromotionSVG, __assign({}, props));
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
            return React.createElement(CustomerSVG, __assign({}, props));
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
            return React.createElement(FeedbackSVG, __assign({}, props));
        },
        submenu: [
            {
                label: "Testimonial",
                url: "/testimonial",
            },
        ],
    },
];
export var menuConnexiBasic = [
    {
        label: "Produk",
        url: "#",
        icon: function (props) {
            return React.createElement(ProductSVG, __assign({}, props));
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
            return React.createElement(OrderSVG, __assign({}, props));
        },
        submenu: [],
    },
    {
        label: "Promosi",
        url: "#",
        icon: function (props) {
            return React.createElement(PromotionSVG, __assign({}, props));
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
            return React.createElement(CustomerSVG, __assign({}, props));
        },
        submenu: [],
    },
];
