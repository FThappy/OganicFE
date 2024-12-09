import BillDetail from '@/components/OrderDetail/BillDetail';
import ListProductOrderHistory from '@/components/OrderDetail/ListProductOrderHistory';
import PaymentDetail from '@/components/OrderDetail/PaymentDetail';
import ProccessDetail from '@/components/OrderDetail/ProccessDetail';
import { format } from 'date-fns';
import React from 'react';

const OrderDetailPage = () => {
  return (
    <section className='shadow-md rounded-lg w-full border border-gray-1 '>
      <div className=' flex items-center px-6 py-3 border-b border-b-gray-2 rounded-t-lg gap-4'>
        <p className='text-gray-9 font-medium text-[20px]'>Order Details</p>
        <div className='size-1.5 rounded-full bg-gray-7'></div>
        <p className='text-gray-7 text-[14px]'>{format(new Date(), 'MMMM d, yyyy')}</p>
        <div className='size-1.5 rounded-full bg-gray-7'></div>
        <p className='text-gray-7 text-[14px]'>3 Product</p>
      </div>
      <section className='mt-2 px-6 py-3 w-full flex flex-col gap-4'>
        <div className='grid grid-cols-3 gap-4 w-full'>
          <BillDetail />
          <PaymentDetail />
        </div>
      </section>
      <ProccessDetail />
      <ListProductOrderHistory />
    </section>
  );
};

export default OrderDetailPage;
