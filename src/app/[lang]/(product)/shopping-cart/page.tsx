'use client';
import { X } from 'lucide-react';
import React, { useState } from 'react';
import Image from 'next/image';
import { ColumnDef } from '@tanstack/react-table';
import { formatCurrencyByNation } from '@/utils/formmatMoney';
import CustomTable from '@/components/Table/CustomTable';
import Coupon from '@/components/ShoppingCart/Coupon/Coupon';
import TotalProduct from '@/components/ShoppingCart/TotalProduct/TotalProduct';
import InputQuantityProduct from '@/components/QuantityProduct/InputQuantityProduct';

type Props = {};
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
    status: 'outStock'
  },
  {
    name: 'Green Capsicum',
    price: 14.99,
    status: 'outStock'
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
const ShoppingCart = (props: Props) => {
  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (value: number) => {
    setQuantity(value);
  };
  const columns: ColumnDef<WishListType>[] = [
    {
      id: 'name',
      accessorKey: 'name',
      meta: {
        headerClassName: '',
        cellClassName: 'text-[14px] font-normal'
      },
      header: () => {
        return <p className='text-[14px] text-gray-5 font-semibold'>Product</p>;
      },
      cell: ({ row }) => {
        return (
          <div className='flex gap-5 items-center '>
            <div className='relative w-[100px] h-[100px]'>
              <Image src='/product10.png' alt='Product Image' fill quality={100} priority sizes='100%' />
            </div>
            <p className='text-[16px] font-medium text-gray-9'>{row.getValue('name')}</p>
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
        return <p className='text-[14px] text-gray-5 font-semibold'>Price</p>;
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
        headerClassName: ' font-bold',
        cellClassName: 'text-[14px] font-normal w-[10.5rem]'
      },
      header: () => {
        return <p className='text-[14px] text-gray-5 font-semibold'>QUANTITY</p>;
      },
      cell: ({ row }) => {
        return <InputQuantityProduct handleChange={handleQuantityChange} quantity={quantity} />;
      }
    },
    {
      id: 'subtotal',
      accessorKey: 'subtotal',
      meta: {
        headerClassName: '',
        cellClassName: 'text-[14px] font-normal'
      },
      header: () => {
        return <p className='text-[14px] text-gray-5 font-semibold'>SUBTOTAL</p>;
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
      id: 'action',
      accessorKey: 'id',
      meta: {
        headerClassName: ' font-bold',
        cellClassName: 'text-[14px] font-normal'
      },
      header: () => {
        return <p className='text-[14px] text-gray-5 font-semibold'></p>;
      },
      cell: () => {
        return (
          <div className='flex gap-6 items-center'>
            <button className='w-6 h-6 rounded-full border border-gray-2 flex items-center justify-center cursor-pointer hover:bg-gray-3'>
              <X className='text-gray-6 h-3 w-3' />
            </button>
          </div>
        );
      }
    }
  ];
  return (
    <section className='container flex flex-col items-center'>
      <p className='text-[32px] font-semibold text-gray-9 text-center my-5'>My Shopping Cart</p>
      <section className='flex gap-[22px] items-start'>
        <section className='flex flex-col w-[872px] gap-6'>
          <div className='flex flex-col'>
            <CustomTable
              columns={columns}
              data={FAKE_DATA}
              isLoading={false}
              wrapperClassName='border-gray-1 rounded-b-none '
            />
            <div className='border border-gray-1 rounded-b-lg border-t-0 w-full h-[50px] flex items-center p-8 gap-4'>
              <button className='flex items-center justify-center gap-3 px-8 py-3.5 bg-gray-0 text-gray-7 text-[14px] font-semibold rounded-[43px] hover:opacity-80 '>
                Return to shop
              </button>
            </div>
          </div>
          <Coupon />
        </section>
        <section className='flex flex-col w-[424px]'>
          <TotalProduct />
        </section>
      </section>
    </section>
  );
};

export default ShoppingCart;
