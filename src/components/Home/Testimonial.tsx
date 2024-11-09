'use client';
import React from 'react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import Icons from '@/constants/svgIcon';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import RatingStart from '../RatingStart/RatingStart';

const Testimonial = () => {
  return (
    <section className='relative w-screen h-[504px]  bg-[#20B526]/10'>
      <div className='absolute top-[61px] left-[82%] max-[1547px]:left-[90%]  w-[293px] h-[192px]'>
        <Image
          src='/bg9.png'
          alt='Background Testimonial'
          fill
          className='absolute z-[60] '
          quality={100}
          priority
          sizes='100%'
        />
      </div>
      <section className='relative container h-full w-full flex flex-col  items-center justify-center gap-1 z-[100] pt-[40px]'>
        <div className='w-full h-auto z-[100] mb-[42px]'>
          <p className='text-green font-medium'>Testimonial</p>
          <p className='text-gray-9 text-[40px] font-semibold'>What Our Customer Says</p>
        </div>
        <Carousel opts={{ loop: true }} className='z-[100] container h-full'>
          <CarouselContent className='h-full '>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className='basis-1/3 h-[254px] flex items-center   pl-4 cursor-pointer'>
                <div className='w-full h-full bg-white shadow-lg flex flex-col gap-4 p-6 rounded-[8px]'>
                  <Icons.Testimonial />
                  <p className='text-[14px] text-gray-7'>
                    Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna
                    dictum, bibendum cursus velit sodales. Donec sed neque eget
                  </p>
                  <div className='flex justify-between items-center'>
                    <div className='flex gap-2 items-center'>
                      <Avatar className='h-14 w-14'>
                        <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className='font-medium text-gray-9'>Robert Fox</p>
                        <p className='text-gray-4 text-[14px]'>Customer</p>
                      </div>
                    </div>
                    <RatingStart rate={5} />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='left-[94%] -top-1/3 -translate-y-0 hover:bg-green hover:text-white' />
          <CarouselNext className='right-0 -top-1/3 -translate-y-0 hover:bg-green hover:text-white' />
        </Carousel>
      </section>
    </section>
  );
};

export default Testimonial;
