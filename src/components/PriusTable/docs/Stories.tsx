import React from 'react';

import PriusTable from '../PriusTable';
import { FieldImage, FieldNumber, FieldText } from '../index';

export const basic = () => {
  return (
    <PriusTable
      fields={[
        <FieldImage
          source="imageURLs[0]"
          width="6rem"
          size="small"
          altText="Image of product"
        />,
        <FieldText
          description="variants[0].sku"
          source="details[0].name"
          width="15rem"
          title="Nama"
        />,
        <FieldText source="brand.name" width="12rem" title="Toko" />,
        <FieldNumber source="stock" width="7rem" title="Stok" />,
        <FieldText source="publishStatus" width="7rem" title="Status" />,
      ]}
      filterPublishedRow="published"
      isSelectable
      records={[
        {
          ID: '300511313229165833',
          imageURLs: [
            'https://storage.googleapis.com/sirclo-1152-storefront/products/e5c025ea-8848-442b-8fc6-051380dc7bca-air-max-red.jpeg',
          ],
          published: true,
          brand: {
            ID: 'shopwithus2',
            name: 'Shop With Us',
          },
          variants: [
            {
              SKU: 'AIRMAX201',
              basePrices: [
                {
                  code: 'IDR',
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
              name: 'AIR MAX RED',
            },
          ],
          publishStatus: 'Aktif',
          stock: 0,
        },
        {
          ID: '302547611129263623',
          imageURLs: [
            'https://storage.googleapis.com/sirclo-1152-storefront/products/e4b4cc55-65b3-4df6-8301-ac56328ffd5f-air-max-silver.jpeg',
          ],
          published: true,
          brand: {
            ID: 'shopwithus2',
            name: 'Shop With Us',
          },
          variants: [
            {
              SKU: 'SLVR41',
              basePrices: [
                {
                  code: 'IDR',
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
              name: 'AIRMAX SILVERS',
            },
          ],
          publishStatus: 'Aktif',
          stock: 0,
        },
        {
          ID: '297792123699386634',
          imageURLs: [
            'https://storage.googleapis.com/sirclo-1152-storefront/products/58a0adaa-07fd-4cde-9aeb-eaab7991ef1d-ALLIE CROPPED_2.jpg',
            'https://storage.googleapis.com/sirclo-1152-storefront/products/a9c3a932-19e9-4084-87a5-3eed8b603278-ALLIE CROPPED_1.jpg',
          ],
          published: true,
          brand: {
            ID: 'shopwithus2',
            name: 'Shop With Us',
          },
          variants: [
            {
              SKU: 'tank_blue',
              basePrices: [
                {
                  code: 'IDR',
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
              name: 'Allie Cropped Tank',
            },
          ],
          publishStatus: 'Aktif',
          stock: 118,
        },
      ]}
      type="card"
    />
  );
};

export const basicCode = `
<PriusTable
  fields={[
    <FieldImage
      source="imageURLs[0]"
      width="6rem"
      size="small"
      altText="Image of product"
    />,
    <FieldText
      description="variants[0].sku"
      source="details[0].name"
      width="15rem"
      title="Nama"
    />,
    <FieldText source="brand.name" width="12rem" title="Toko" />,
    <FieldNumber source="stock" width="7rem" title="Stok" />,
    <FieldText source="publishStatus" width="7rem" title="Status" />,
  ]}
  filterPublishedRow="published"
  isSelectable
  records={[
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
  ]}
  type="card"
/>`;

export default {
  title: 'PriusTable',
};
