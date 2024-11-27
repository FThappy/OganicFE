'use client';
import CheckoutForm from '@/components/Checkout/CheckoutForm';
import React from 'react';

type Props = {};

const CheckOut = (props: Props) => {
  return (
    <section className='container flex flex-col items-cente pt-8'>
      <section className='flex gap-[22px] items-start'>
        <section className='flex flex-col w-[872px] gap-6'>
          <CheckoutForm />
        </section>
        <section className='flex flex-col w-[424px]'></section>
      </section>
    </section>
  );
};

export default CheckOut;
