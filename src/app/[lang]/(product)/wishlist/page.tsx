'use client';
import CustomTable from '@/components/Table/CustomTable';
import { ColumnDef } from '@tanstack/react-table';
import React from 'react';
import Image from 'next/image';
import { formatCurrencyByNation } from '@/utils/formmatMoney';
import StockProduct from '@/components/StockProduct/StockProduct';
import { ButtonGlobal } from '@/components/ButtonGlobal/Button';
import { X } from 'lucide-react';
import Icons from '@/constants/svgIcon';

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
const WishList = () => {
  const disalbeButton = (status: 'sale' | 'new' | 'bestSale' | 'outStock' | 'inStock' | 'off') => {
    return status === 'outStock';
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
        return (
          <p className='text-gray-9 font-semibold' style={{ whiteSpace: 'pre-wrap' }}>
            {formatCurrencyByNation(row.getValue('price'), 'en-US', 'USD', 'symbol', 2)}
          </p>
        );
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
        return <p className='text-[14px] text-gray-5 font-semibold'>STOCK STATUS</p>;
      },
      cell: ({ row }) => {
        return <StockProduct state={row.getValue('status')} />;
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
      cell: ({ row }) => {
        return (
          <div className='flex gap-6 items-center'>
            <ButtonGlobal
              size='small'
              className='group z-50 w-[146px]'
              animation='middle'
              coverage='360%'
              disabled={disalbeButton(row.getValue('status'))}
            >
              <div
                className={`py-[2.5px] flex items-center ${!disalbeButton(row.getValue('status')) ? 'group-hover:animate-white-to-green animate-green-to-white' : ''}  gap-2`}
              >
                <p
                  className={`font-semibold ${!disalbeButton(row.getValue('status')) ? 'group-hover:animate-white-to-green animate-green-to-white' : ''}  z-50`}
                >
                  Add to Cart
                </p>
              </div>
            </ButtonGlobal>
            <div className='w-6 h-6 rounded-full border border-gray-2 flex items-center justify-center cursor-pointer hover:bg-gray-3'>
              <X className='text-gray-6 h-3 w-3' />
            </div>
          </div>
        );
      }
    }
  ];
  return (
    <section className=' container '>
      <p className='text-[32px] font-semibold text-gray-9 text-center my-5'>My Wishlist</p>
      <div className='flex flex-col'>
        <CustomTable
          columns={columns}
          data={FAKE_DATA}
          isLoading={false}
          wrapperClassName='border-gray-1 rounded-b-none '
        />
        <div className='border border-gray-1 rounded-b-lg border-t-0 w-full h-[50px] flex items-center py-3 px-6 gap-4'>
          <p className='text-[14px] text-gray-9'>Share : </p>

          <div className='rounded-full hover:bg-green p-2 group  cursor-pointer'>
            <Icons.Facebook className='[&_path]:fill-gray-7 group-hover:[&_path]:fill-white ' />
          </div>
          <div className='rounded-full hover:bg-green p-2 group cursor-pointer'>
            <Icons.Twitter className='[&_path]:fill-gray-7 group-hover:[&_path]:fill-white' />
          </div>
          <div className='rounded-full hover:bg-green p-2 group cursor-pointer'>
            <Icons.Pinterest className='[&_path]:fill-gray-7 group-hover:[&_path]:fill-white' />
          </div>
          <div className='rounded-full hover:bg-green p-2 group cursor-pointer'>
            <Icons.Instagram className='[&_path]:fill-gray-7 group-hover:[&_path]:fill-white' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WishList;
