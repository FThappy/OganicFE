'use client';
import React from 'react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { LinkGlobal } from '../LinkGlobal/LinkGlobal';
import { FaArrowRight } from 'react-icons/fa6';
import Autoplay from 'embla-carousel-autoplay';

const Welcome = () => {
  return (
    <section className='relative w-screen h-[640px] items-center justify-center'>
      <Image src='/bg1.jpg' alt='Background Footer' fill className='absolute top-0 z-[60] ' quality={100} priority />
      <Carousel
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            stopOnInteraction: false,
            stopOnFocusIn: false,
            stopOnMouseEnter: false,
            delay: 6000
          })
        ]}
        className='z-[100] container h-full'
      >
        <CarouselContent className='h-full'>
          <CarouselItem className='h-full flex items-center gap-8'>
            <div className=' relative h-[498px] w-full'>
              <Image src='/banner1.png' alt='Background Footer' fill quality={100} priority />
            </div>
            <div className='flex flex-col w-full gap-4'>
              <p className='font-medium text-[14px] text-green tracking-[2%]'>WELCOME TO SHOPERY</p>
              <p className='font-semibold text-[72px] text-gray-9 leading-[1.2]'>
                Fresh & Healthy <br></br> Organic Food{' '}
              </p>
              <p className='font-semibold text-[32px] text-gray-9 '>
                Sale up to <span className='text-warning'>30% OFF</span>
              </p>
              <p className='font-normal text-[14px] text-gray-5'>
                Free shipping on all your order we deliver, you enjoy
              </p>
              <LinkGlobal link='/' size='small' className='group z-50' animation='middle'>
                <div className='py-[2.5px] flex items-center group-hover:animate-white-to-green animate-green-to-white gap-2'>
                  <p className='font-semibold group-hover:animate-white-to-green animate-green-to-white z-50'>
                    Shop now
                  </p>
                  <FaArrowRight />
                </div>
              </LinkGlobal>
            </div>
          </CarouselItem>
          <CarouselItem className='h-full flex items-center gap-8'>
            <div className=' relative h-[498px] w-full'>
              <Image src='/banner1.png' alt='Background Footer' fill quality={100} priority />
            </div>
            <div className='flex flex-col w-full gap-4'>
              <p className='font-medium text-[14px] text-green tracking-[2%]'>WELCOME TO SHOPERY2</p>
              <p className='font-semibold text-[72px] text-gray-9 leading-[1.2]'>
                Fresh & Healthy <br></br> Organic Food{' '}
              </p>
              <p className='font-semibold text-[32px] text-gray-9 '>
                Sale up to <span className='text-warning'>30% OFF</span>
              </p>
              <p className='font-normal text-[14px] text-gray-5'>
                Free shipping on all your order we deliver, you enjoy
              </p>
              <LinkGlobal link='/' size='small' className='group z-50' animation='middle'>
                <div className='py-[2.5px] flex items-center group-hover:animate-white-to-green animate-green-to-white gap-2'>
                  <p className='font-semibold group-hover:animate-white-to-green animate-green-to-white z-50'>
                    Shop now
                  </p>
                  <FaArrowRight />
                </div>
              </LinkGlobal>
            </div>
          </CarouselItem>
          <CarouselItem className='h-full flex items-center gap-8'>
            <div className=' relative h-[498px] w-full'>
              <Image src='/banner1.png' alt='Background Footer' fill quality={100} priority />
            </div>
            <div className='flex flex-col w-full gap-4'>
              <p className='font-medium text-[14px] text-green tracking-[2%]'>WELCOME TO SHOPERY3</p>
              <p className='font-semibold text-[72px] text-gray-9 leading-[1.2]'>
                Fresh & Healthy <br></br> Organic Food{' '}
              </p>
              <p className='font-semibold text-[32px] text-gray-9 '>
                Sale up to <span className='text-warning'>30% OFF</span>
              </p>
              <p className='font-normal text-[14px] text-gray-5'>
                Free shipping on all your order we deliver, you enjoy
              </p>
              <LinkGlobal link='/' size='small' className='group z-50' animation='middle'>
                <div className='py-[2.5px] flex items-center group-hover:animate-white-to-green animate-green-to-white gap-2'>
                  <p className='font-semibold group-hover:animate-white-to-green animate-green-to-white z-50'>
                    Shop now
                  </p>
                  <FaArrowRight />
                </div>
              </LinkGlobal>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Image
        src='/leaf1.png'
        alt='Leaf 1'
        className='absolute top-[580px] left-[90%] z-[100] rotate-[0deg] animate-icon-move w-auto h-auto'
        loading='lazy'
        width={72}
        height={107}
        quality={100}
        style={{ width: 'auto', height: 'auto' }}
      />
    </section>
  );
};

export default Welcome;
