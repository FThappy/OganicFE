'use client';
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { productDTO1 } from '@/lib/content';
import CardProduct from '../CardProduct/CardProduct';

type Props = {};

const RealatedProduct = (props: Props) => {
  return (
    <Carousel className='container mt-4'>
      <CarouselContent className=''>
        {productDTO1.map((item, index) => (
          <CarouselItem key={index} className='basis-1/3 border-none rounded-none'>
            <div className='p-1'>
              <CardProduct key={index} src={item.src} title={item.title} price={item.price} rate={item.rate} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default RealatedProduct;
