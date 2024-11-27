import { LinkGlobal } from '@/components/LinkGlobal/LinkGlobal';
import { formatCurrencyByNation } from '@/utils/formmatMoney';
import React from 'react';

type Props = {};

const TotalProduct = (props: Props) => {
  return (
    <section className='flex flex-col w-full gap-3 p-6 rounded-[8px] border border-gray-1'>
      <p className='text-[20px] font-medium text-gray-9'>Cart Total</p>
      <div className='flex justify-between items-center'>
        <p className='text-gray-7 text-[14px]'>Subtotal:</p>
        <p className='text-gray-9 text-[14px] font-medium'>{formatCurrencyByNation(18, 'en-US', 'USD', 'symbol', 2)}</p>
      </div>
      <div className='h-1 w-full border-t border-t-gray-200'></div>

      <div className='flex justify-between items-center'>
        <p className='text-gray-7 text-[14px]'>Shipping:</p>
        <p className='text-gray-9 text-[14px] font-medium'>Free</p>
      </div>
      <div className='h-1 w-full border-t border-t-gray-200'></div>

      <div className='flex justify-between items-center'>
        <p className='text-gray-7 text-[14px]'>Total:</p>
        <p className='text-gray-9 text-[14px] font-medium'>{formatCurrencyByNation(18, 'en-US', 'USD', 'symbol', 2)}</p>
      </div>
      <div className='h-1 w-full border-t border-t-gray-200'></div>

      <LinkGlobal link={'/'} size='small' className='group z-50 w-full' animation='middle' coverage='660%'>
        <div className='py-[2.5px] flex items-center group-hover:animate-white-to-green animate-green-to-white gap-2'>
          <p className='font-semibold group-hover:animate-white-to-green animate-green-to-white z-50'>
            Proceed to checkout
          </p>
        </div>
      </LinkGlobal>
    </section>
  );
};

export default TotalProduct;
