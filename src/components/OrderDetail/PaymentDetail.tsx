import { formatCurrencyByNation } from '@/utils/formmatMoney';
import React from 'react';

type Props = {};

const PaymentDetail = (props: Props) => {
  return (
    <section className='shadow-md rounded-lg col-span-1 border border-gray-1  py-3 '>
      <div className='flex items-center px-6 py-2 border-b border-b-gray-2  rounded-t-lg justify-between'>
        <div className='font-medium pr-14 border-r border-r-gray-2'>
          <p className='text-gray-4 text-[12px]'>ORDER ID:</p>
          <p className='text-gray-9 text-[14px]'>#4152</p>
        </div>
        <div className='font-medium '>
          <p className='text-gray-4 text-[12px]'>Payment Method:</p>
          <p className='text-gray-9 text-[14px]'>Paypal</p>
        </div>
      </div>
      <div className='px-6 py-3 flex flex-col gap-2'>
        <div className='flex justify-between items-center text-[14px] font-medium'>
          <p className='text-gray-6'>Subtotal:</p>
          <p className='text-gray-9 font-medium'>{formatCurrencyByNation(365, 'en-US', 'USD', 'symbol', 2)}</p>
        </div>
        <div className='h-1 w-full border-t border-t-gray-200'></div>
        <div className='flex justify-between items-center text-[14px] font-medium'>
          <p className='text-gray-6'>Discount:</p>
          <p className='text-gray-9 font-medium'>20%</p>
        </div>
        <div className='h-1 w-full border-t border-t-gray-200'></div>
        <div className='flex justify-between items-center text-[14px] font-medium'>
          <p className='text-gray-6'>Shipping:</p>
          <p className='text-gray-9 font-medium'>Free</p>
        </div>
        <div className='h-1 w-full border-t border-t-gray-200'></div>
        <div className='flex justify-between items-center font-medium'>
          <p className='text-gray-9 text-[18px]'>Total:</p>
          <p className='text-green-hard font-semibold text-[18px]'>
            {formatCurrencyByNation(84, 'en-US', 'USD', 'symbol', 2)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PaymentDetail;
