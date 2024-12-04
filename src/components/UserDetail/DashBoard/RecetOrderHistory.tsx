'use client';
import React from 'react';
import CustomTable from '@/components/Table/CustomTable';
import { ColumnDef } from '@tanstack/react-table';
import { formatCurrencyByNation } from '@/utils/formmatMoney';
import { URL_PATHS } from '@/constants/url-path';
import { Link } from '@/i18n/routing';
import { format } from 'date-fns';
type Props = {};
type OrderHistoryType = {
  id: string;
  date: string;
  total: number;
  status: string;
};
const FAKE_DATA: OrderHistoryType[] = [
  {
    id: '#738',
    date: '2022-07-15',
    total: 135,
    status: 'Completed'
  },
  {
    id: '#738',
    date: '2022-07-15',
    total: 135,
    status: 'Completed'
  },
  {
    id: '#738',
    date: '2022-07-15',
    total: 135,
    status: 'Completed'
  },
  {
    id: '#738',
    date: '2022-07-15',
    total: 135,
    status: 'Completed'
  },
  {
    id: '#738',
    date: '2022-07-15',
    total: 135,
    status: 'Completed'
  },
  {
    id: '#738',
    date: '2022-07-15',
    total: 135,
    status: 'Completed'
  },
  {
    id: '#738',
    date: '2022-07-15',
    total: 135,
    status: 'Completed'
  },
  {
    id: '#738',
    date: '2022-07-15',
    total: 135,
    status: 'Completed'
  },
  {
    id: '#738',
    date: '2022-07-15',
    total: 135,
    status: 'Completed'
  },
  {
    id: '#738',
    date: '2022-07-15',
    total: 135,
    status: 'Completed'
  }
];
const RecetOrderHistory = (props: Props) => {
  const columns: ColumnDef<OrderHistoryType>[] = [
    {
      id: 'id',
      accessorKey: 'id',
      meta: {
        headerClassName: '',
        cellClassName: 'text-[14px] font-normal'
      },
      header: () => {
        return <p className='text-[14px] text-gray-8 font-semibold'>ORDER ID</p>;
      },
      cell: ({ row }) => {
        return <p className='text-[14px] font-medium text-gray-8'>{row.getValue('id')}</p>;
      }
    },
    {
      id: 'date',
      accessorKey: 'date',
      meta: {
        headerClassName: '',
        cellClassName: 'text-[14px] font-normal'
      },
      header: () => {
        return <p className='text-[14px] text-gray-8 font-semibold'>DATE</p>;
      },
      cell: ({ row }) => {
        return (
          <p className='text-gray-8 font-medium' style={{ whiteSpace: 'pre-wrap' }}>
            {format(new Date(row.getValue('date')), 'dd/MM/yyyy')}
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
        return <p className='text-[14px] text-gray-8 font-semibold'>TOTAL</p>;
      },
      cell: ({ row }) => {
        console.log(row);
        return (
          <p className='text-gray-9 font-semibold' style={{ whiteSpace: 'pre-wrap' }}>
            {formatCurrencyByNation(row.getValue('total'), 'en-US', 'USD', 'symbol', 2)}
            <span> (5 Products)</span>
          </p>
        );
      }
    },
    {
      id: 'status',
      accessorKey: 'status',
      meta: {
        headerClassName: '',
        cellClassName: 'text-[14px] font-normal'
      },
      header: () => {
        return <p className='text-[14px] text-gray-8 font-semibold'>STATUS</p>;
      },
      cell: ({ row }) => {
        return (
          <p className='text-gray-9 font-semibold' style={{ whiteSpace: 'pre-wrap' }}>
            {row.getValue('status')}
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
        return <p className='text-[14px] text-gray-8 font-semibold'></p>;
      },
      cell: () => {
        return (
          <div className='flex gap-6 items-center'>
            <Link href={URL_PATHS.setting} className='text-green hover:text-green-hard font-medium '>
              View Details
            </Link>
          </div>
        );
      }
    }
  ];
  return (
    <section className='shadow-md rounded-[8px] w-full '>
      <div className='flex justify-between items-center px-6 py-3 border border-gray-1 border-b-0 rounded-t-lg'>
        <p className='text-gray-9 font-medium text-[20px]'>Recet Order History</p>
        <Link href={URL_PATHS.orderHistory} className='text-green hover:text-green-hard font-medium '>
          View All
        </Link>
      </div>
      <CustomTable
        columns={columns}
        data={FAKE_DATA}
        isLoading={false}
        wrapperClassName='border-gray-1 rounded-t-none '
        tableHeaderClass='bg-gray-0 h-12'
      />
    </section>
  );
};

export default RecetOrderHistory;
