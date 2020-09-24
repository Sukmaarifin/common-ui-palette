import React from 'react';

import StoreSVG from './assets/StoreSVG';
import SettingSVG from './assets/SettingSVG';
import SalesChannelSVG from './assets/SalesChannelSVG';
import { checkSVGProp } from './assets/typeSVG';

export const menuStore = [
  {
    label: 'Webstore',
    url: '#',
    icon: function (props: checkSVGProp) {
      return <StoreSVG {...props} />;
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
    icon: function (props: checkSVGProp) {
      return <SalesChannelSVG {...props} />;
    },
    submenu: [],
  },
  {
    label: 'Pengaturan',
    url: '#',
    icon: function (props: checkSVGProp) {
      return <SettingSVG {...props} />;
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

export const menuStoreBasic = [
  {
    label: 'Webstore',
    url: '#',
    icon: function (props: checkSVGProp) {
      return <StoreSVG {...props} />;
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
    icon: function (props: checkSVGProp) {
      return <SettingSVG {...props} />;
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
