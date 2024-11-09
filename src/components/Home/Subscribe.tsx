'use client';
import Icons from '@/constants/svgIcon';
import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const Subscribe = () => {
  return (
    <section className='relative container w-screen  h-[185px] mt-4 mb-12 grid grid-cols-4 gap-4'>
      <section className='w-full h-full border border-[#20B526]/20 rounded-[8px] flex flex-col p-5 gap-4 cursor-pointer'>
        <Icons.LocalSub />
        <p className='font-medium text-[14px] text-gray-9'>Our Location</p>
        <p className='font-medium text-[14px] text-gray-6'>
          1901 Thornridge Cir. Shiloh, Washington DC 20020, United States
        </p>
      </section>
      <section className='w-full h-full border border-[#20B526]/20 rounded-[8px] flex flex-col p-5 gap-4 cursor-pointer '>
        <Icons.PhoneSub />
        <p className='font-medium text-[14px] text-gray-9'>Call Us 24/7</p>
        <p className='leading-6 text-[24px] font-normal text-green'>
          <a href='tel:+(303) 555-0105'>(303) 555-0105</a>
        </p>
      </section>
      <section className='col-span-2 w-full h-full border border-[#20B526]/20 rounded-[8px] flex flex-col p-5 gap-4 cursor-pointer'>
        <Icons.MailSub />
        <p className='font-medium text-[14px] text-gray-9'>Subscribe Newsletter</p>
        <div className='relative'>
          <Input
            type='text'
            placeholder='Your email address'
            className='text-[14px] pr-[144px] leading-6 rounded-[43px] border border-gray-1 pl-6 py-2.5 h-[45px] focus-visible:outline-none focus-visible:ring-0 focus-visible:border-green'
          />
          <Button className='absolute top-0 right-0 bg-green text-white font-medium rounded-[43px] px-[32px] py-[14px] h-[45px] hover:bg-[#20B526]/80'>
            Subscribe
          </Button>
        </div>
      </section>
    </section>
  );
};

export default Subscribe;
