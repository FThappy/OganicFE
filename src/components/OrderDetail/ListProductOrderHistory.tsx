'use client';
import React from 'react';
import CustomTable from '../Table/CustomTable';
import { ColumnDef } from '@tanstack/react-table';
import { formatCurrencyByNation } from '@/utils/formmatMoney';
import Image from 'next/image';

type Props = {};
type OrderHistoryType = {
  id: string;
  productName: string;
  total: number;
  price: number;
  quantity: number;
};
const FAKE_DATA: OrderHistoryType[] = [
  {
    id: '#738',
    total: 135,
    price: 14,
    quantity: 5,
    productName: 'Green Chili'
  },
  {
    id: '#738',
    total: 135,
    price: 14,
    quantity: 5,
    productName: 'Green Chili'
  },
  {
    id: '#738',
    total: 135,
    price: 14,
    quantity: 5,
    productName: 'Green Chili'
  }
];
const ListProductOrderHistory = (props: Props) => {
  const columns: ColumnDef<OrderHistoryType>[] = [
    {
      id: 'productName',
      accessorKey: 'productName',
      meta: {
        headerClassName: '',
        cellClassName: 'text-[14px] font-normal'
      },
      header: () => {
        return <p className='text-[14px] text-gray-8 font-semibold'>PRODUCT</p>;
      },
      cell: ({ row }) => {
        return (
          <div className='text-[14px] font-medium text-gray-8 flex gap-2 items-center'>
            <div className='w-[70px] h-[70px] relative'>
              <Image src='/product8.png' alt='Product Image' fill quality={100} priority sizes='100%' />
            </div>
            <p>{row.getValue('productName')}</p>
          </div>
        );
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
        return <p className='text-[14px] text-gray-8 font-semibold'>PRICE</p>;
      },
      cell: ({ row }) => {
        console.log(row);
        return (
          <p className='text-gray-9 font-semibold' style={{ whiteSpace: 'pre-wrap' }}>
            {formatCurrencyByNation(row.getValue('price'), 'en-US', 'USD', 'symbol', 2)}
          </p>
        );
      }
    },
    {
      id: 'quantity',
      accessorKey: 'quantity',
      meta: {
        headerClassName: '',
        cellClassName: 'text-[14px] font-normal'
      },
      header: () => {
        return <p className='text-[14px] text-gray-8 font-semibold'>QUANTITY</p>;
      },
      cell: ({ row }) => {
        console.log(row);
        return (
          <p className='text-gray-9 font-semibold' style={{ whiteSpace: 'pre-wrap' }}>
            x{row.getValue('quantity')}
          </p>
        );
      }
    },
    {
      id: 'total',
      accessorKey: 'total',
      meta: {
        headerClassName: '',
        cellClassName: 'text-[14px] font-normal'
      },
      header: () => {
        return <p className='text-[14px] text-gray-8 font-semibold'>SUBTOTAL</p>;
      },
      cell: ({ row }) => {
        console.log(row);
        return (
          <p className='text-gray-9 font-semibold' style={{ whiteSpace: 'pre-wrap' }}>
            {formatCurrencyByNation(row.getValue('total'), 'en-US', 'USD', 'symbol', 2)}
          </p>
        );
      }
    }
  ];
  return (
    <>
      <CustomTable
        columns={columns}
        data={FAKE_DATA}
        isLoading={false}
        wrapperClassName='border-0  rounded-b-none  rounded-t-none '
        tableHeaderClass='bg-gray-0 h-12'
      />
    </>
  );
};

export default ListProductOrderHistory;
