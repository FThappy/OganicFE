'use client';
import CustomTable from '@/components/Table/CustomTable';
import { ColumnDef } from '@tanstack/react-table';
import React from 'react';

type WishListType = {
  name: string;
  price: number;
  status: string;
};
const FAKE_DATA: WishListType[] = [
  {
    name: 'Green Capsicum',
    price: 14.99,
    status: 'inStock'
  },
  {
    name: 'Green Capsicum',
    price: 14.99,
    status: 'inStock'
  },
  {
    name: 'Green Capsicum',
    price: 14.99,
    status: 'inStock'
  },
  {
    name: 'Green Capsicum',
    price: 14.99,
    status: 'inStock'
  },
  {
    name: 'Green Capsicum',
    price: 14.99,
    status: 'inStock'
  }
];
const WishList = () => {
  const columns: ColumnDef<WishListType>[] = [
    {
      id: 'name',
      accessorKey: 'name',
      meta: {
        headerClassName: '',
        cellClassName: 'text-[14px] font-normal'
      },
      header: () => {
        return <p>Product</p>;
      },
      cell: ({ row }) => {
        return <span style={{ whiteSpace: 'pre-wrap' }}>{row.getValue('name')}</span>;
      }
    },
    {
      id: 'price',
      accessorKey: 'price',
      meta: {
        headerClassName: '',
        cellClassName: 'text-[14px] font-normal'
      },
      header: () => {
        return <p>Price</p>;
      },
      cell: ({ row }) => {
        console.log(row);
        return <span style={{ whiteSpace: 'pre-wrap' }}>{row.getValue('price')}</span>;
      }
    },
    {
      id: 'status',
      accessorKey: 'status',
      meta: {
        headerClassName: ' font-bold',
        cellClassName: 'text-[14px] font-normal'
      },
      header: () => {
        return <p>Status</p>;
      },
      cell: ({ row }) => {
        console.log(row);
        return <span style={{ whiteSpace: 'pre-wrap' }}>{row.getValue('price')}</span>;
      }
    }
  ];
  return (
    <section className=' container '>
      <p className='text-[32px] font-extrabold text-gray-9 text-center my-5'>My Wishlist</p>
      <CustomTable columns={columns} data={FAKE_DATA} isLoading={false} />
    </section>
  );
};

export default WishList;
