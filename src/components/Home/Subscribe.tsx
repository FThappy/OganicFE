'use client';
import Icons from '@/constants/svgIcon';
import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import FormSubscribe from '../FormSubscribe/FormSubscribe';

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
        <FormSubscribe />
      </section>
    </section>
  );
};

export default Subscribe;
