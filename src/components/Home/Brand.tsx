'use client';
import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import Autoscroll from 'embla-carousel-auto-scroll';
import Icons from '@/constants/svgIcon';
import Image from 'next/image';

const Brand = () => {
  return (
    <section className='relative w-screen h-auto items-center justify-center overflow-hidden '>
      <div className='absolute top-[-20px] z-[50] w-[146.11px] h-[136.32px] left-[90%]'>
        <Image src='/Mushroom.png' alt='Background Mushroom' fill className=' ' quality={100} priority sizes='100%' />
      </div>
      <Carousel
        opts={{ loop: true }}
        plugins={[
          Autoscroll({
            stopOnInteraction: false,
            stopOnFocusIn: false,
            stopOnMouseEnter: false
          })
        ]}
        className='z-[100] container h-[197px]'
      >
        <CarouselContent className='h-full'>
          <CarouselItem className='basis-1/6 h-full flex items-center justify-center pl-4'>
            <div className='w-full h-full flex items-center justify-center'>
              <Icons.Mango />
            </div>
          </CarouselItem>
          <CarouselItem className='basis-1/6 h-full flex items-center justify-center pl-4'>
            <div className='w-full h-full flex items-center justify-center'>
              <Icons.Food />
            </div>
          </CarouselItem>
          <CarouselItem className='basis-1/6 h-full flex items-center justify-center pl-4'>
            <div className='w-full h-full flex items-center justify-center'>
              <Icons.FoodFm />
            </div>
          </CarouselItem>
          <CarouselItem className='basis-1/6 h-full flex items-center justify-center pl-4'>
            <div className='w-full h-full flex items-center justify-center'>
              <Icons.BookOff />
            </div>
          </CarouselItem>
          <CarouselItem className='basis-1/6 h-full flex items-center justify-center pl-4'>
            <div className='w-full h-full flex items-center justify-center'>
              <Icons.GSeries />
            </div>
          </CarouselItem>
          <CarouselItem className='basis-1/6 h-full flex items-center justify-center pl-4'>
            <div className='w-full h-full flex items-center justify-center'>
              <Icons.FoodFm />
            </div>
          </CarouselItem>
          <CarouselItem className='basis-1/6 h-full flex items-center justify-center pl-4'>
            <div className='w-full h-full flex items-center justify-center'>
              <Icons.BookOff />
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default Brand;
