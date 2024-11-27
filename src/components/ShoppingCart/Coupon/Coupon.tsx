import React from 'react';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';

type Props = {};

const Coupon = (props: Props) => {
  return (
    <section className='flex items-center gap-6 p-5 rounded-[8px] border border-gray-1 w-full'>
      <p className='text-gray-9 font-medium text-[20px] w-[180px]'>Coupon Code</p>
      <form className='relative w-full'>
        <Input
          name='coupon'
          type='text'
          placeholder='Enter code'
          className='text-[14px] pr-[144px] leading-6 rounded-[43px] border border-gray-1 pl-6 py-2.5 h-[45px] focus-visible:outline-none focus-visible:ring-0 focus-visible:border-green'
        />
        <Button
          type='submit'
          className='absolute top-0 right-0 bg-gray-8 text-white font-medium rounded-[43px] px-[32px] py-[14px] h-[45px] hover:bg-[#333333]/80'
        >
          Apply Coupon
        </Button>
      </form>
    </section>
  );
};

export default Coupon;
