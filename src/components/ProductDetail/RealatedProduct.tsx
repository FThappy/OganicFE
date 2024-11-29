'use client';
import React from 'react';
import { productDTO } from '@/lib/content';
import CardProduct from '../CardProduct/CardProduct';

type Props = {};

const RealatedProduct = (props: Props) => {
  return (
    <section className='container mt-4 mb-12'>
      <p className='text-gray-9 text-[32px] font-semibold text-center my-2 '>Related Products</p>
      <section className='grid grid-cols-4 gap-4 '>
        {productDTO.map((item, index) => (
          <div className='p-1' key={index}>
            <CardProduct src={item.src} title={item.title} price={item.price} rate={item.rate} />
          </div>
        ))}
      </section>
    </section>
  );
};

export default RealatedProduct;
