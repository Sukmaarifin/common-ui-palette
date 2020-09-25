import React from "react";

import CustomerSVG from "./assets/CustomerSVG";
import OrderSVG from "./assets/OrderSVG";
import ProductSVG from "./assets/ProductSVG";
import PromotionSVG from "./assets/PromotionSVG";
import FeedbackSVG from "./assets/FeedbackSVG";
// import AnalyticsSVG from "./assets/AnalyticsSVG";
import { checkSVGProp } from "./assets/typeSVG";

export const menuConnexi = [
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
    icon: function (props: checkSVGProp) {
      return <ProductSVG {...props} />;
    },
    base: "3001",
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
      // {
      //   label: "Proses Massal",
      //   url: "/product/upload"
      // }
    ],
  },
  {
    label: "Pesanan",
    url: "/order",
    icon: function (props: checkSVGProp) {
      return <OrderSVG {...props} />;
    },
    submenu: [],
    base: "3002",
  },
  {
    label: "Promosi",
    url: "#",
    icon: function (props: checkSVGProp) {
      return <PromotionSVG {...props} />;
    },
    base: "",
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
    icon: function (props: checkSVGProp) {
      return <CustomerSVG {...props} />;
    },
    base: "",
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
    icon: function (props: checkSVGProp) {
      return <FeedbackSVG {...props} />;
    },
    base: "",
    submenu: [
      {
        label: "Testimonial",
        url: "/testimonial",
      },
    ],
  },
];

export const menuConnexiBasic = [
  {
    label: "Produk",
    url: "#",
    base: "",
    icon: function (props: checkSVGProp) {
      return <ProductSVG {...props} />;
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
    icon: function (props: checkSVGProp) {
      return <OrderSVG {...props} />;
    },
    base: "",
    submenu: [],
  },
  {
    label: "Promosi",
    url: "#",
    icon: function (props: checkSVGProp) {
      return <PromotionSVG {...props} />;
    },
    base: "",
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
    icon: function (props: checkSVGProp) {
      return <CustomerSVG {...props} />;
    },
    base: "",
    submenu: [],
  },
];
