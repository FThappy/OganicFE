'use client';
import Icons from '@/constants/svgIcon';
import React from 'react';
import Image from 'next/image';
import { LinkGlobal } from '../LinkGlobal/LinkGlobal';
import Countdown, { zeroPad } from 'react-countdown';

const SaleTime = () => {
  return (
    <section className='relative w-screen h-auto items-center justify-center'>
      <div className='absolute top-[430px] left-[88%] z-[101]  animate-icon-move  w-auto h-auto '>
        <Image
          src='/leaf2.png'
          alt='Leaf 1'
          loading='lazy'
          width={60}
          height={88}
          className='rotate-[5deg]'
          quality={100}
          style={{ width: 'auto', height: 'auto' }}
        />
      </div>
      <div className='absolute top-[-182px] right-[4%]'>
        <Icons.SaleTimeIcon1 />
      </div>
      <div className='absolute top-[92px] left-[5%]'>
        <Icons.SaleTimeIcon2 />
      </div>
      <div className='absolute top-[420px] left-[0] z-[99]'>
        <Icons.SaleTimeIcon3 />
      </div>
      <section className='container py-8 grid grid-cols-3 gap-4'>
        <section className='relative w-full h-[536px]'>
          <Image
            src='/saletime1.png'
            alt='Image sale time background'
            fill
            className='absolute top-0 z-[60] '
            quality={100}
            priority
            sizes='100%'
          />
          <section className='pt-[35px] w-full flex flex-col items-center relative z-[99] gap-1.5'>
            <p className='text-[14px] font-medium text-white'>Best Deals</p>
            <p className='text-[40px] font-semibold text-white'>Sale of the Month</p>
            <Countdown
              date={Date.now() + 86400000}
              renderer={({ days, hours, minutes, seconds, completed }) => {
                if (completed) {
                  // Render a completed state
                  return <p>AAAAA</p>;
                } else {
                  // Render a countdown
                  return (
                    <div className='flex  gap-2'>
                      <div className='flex flex-col items-center gap-2'>
                        <p className='text-[24px] font-normal text-white'>{zeroPad(days)}</p>
                        <p className='text-[12px] font-normal  text-white'>DAYS</p>
                      </div>
                      <div className='text-white pt-1.5'>:</div>
                      <div className='flex flex-col items-center gap-2'>
                        <p className='text-[24px] font-normal text-white'>{zeroPad(hours)}</p>
                        <p className='text-[12px] font-normal  text-white'>HOURS</p>
                      </div>
                      <div className='text-white pt-1.5'>:</div>
                      <div className='flex flex-col items-center gap-2'>
                        <p className='text-[24px] font-normal text-white'>{zeroPad(minutes)}</p>
                        <p className='text-[12px] font-normal  text-white'>MINS</p>
                      </div>
                      <div className='text-white pt-1.5'>:</div>
                      <div className='flex flex-col items-center gap-2'>
                        <p className='text-[24px] font-normal text-white'>{zeroPad(seconds)}</p>
                        <p className='text-[12px] font-normal  text-white'>SECS</p>
                      </div>
                    </div>
                  );
                }
              }}
            />
            <LinkGlobal
              coverage='400%'
              link='/'
              size='small'
              animation='middle'
              primary={false}
              className='group z-50 px-8 py-3.5 border-none'
            >
              <div className=' flex items-center group-hover:animate-green-to-white animate-white-to-green gap-2'>
                <p className='font-semibold group-hover:animate-green-to-white animate-white-to-green z-50'>Shop now</p>
                <Icons.ArrowRight className='[&_path]:animate-white-to-green [&_path]:group-hover:animate-green-to-white ' />
              </div>
            </LinkGlobal>
          </section>
        </section>
        <section className='relative w-full h-[536px]'>
          <Image
            src='/saletime2.png'
            alt='Image sale time background'
            fill
            className='absolute top-0 z-[60] '
            quality={100}
            priority
            sizes='100%'
          />
          <section className='pt-[35px] w-full flex flex-col items-center relative z-[99] gap-1.5'>
            <p className='text-[14px] font-medium text-white'>85% Fat Free</p>
            <p className='text-[40px] font-semibold text-white'>Low-Fat Meat</p>
            <p className='text-[18px] h-[62px] font-normal text-white'>
              Started at
              <span className=' font-semibold  text-warning rounded-[5px]'> $79.99</span>
            </p>
            <LinkGlobal
              coverage='400%'
              link='/'
              size='small'
              animation='middle'
              primary={false}
              className='group z-50 px-8 py-3.5 border-none'
            >
              <div className=' flex items-center group-hover:animate-green-to-white animate-white-to-green gap-2'>
                <p className='font-semibold group-hover:animate-green-to-white animate-white-to-green z-50'>Shop now</p>
                <Icons.ArrowRight className='[&_path]:animate-white-to-green [&_path]:group-hover:animate-green-to-white ' />
              </div>
            </LinkGlobal>
          </section>
        </section>
        <section className='relative w-full h-[536px]'>
          <Image
            src='/saletime3.png'
            alt='Image sale time background'
            fill
            className='absolute top-0 z-[60] '
            quality={100}
            priority
            sizes='100%'
          />
          <section className='pt-[35px] w-full flex flex-col items-center relative z-[99] gap-1.5'>
            <p className='text-[14px] font-medium text-gray-9'>Summer Sale</p>
            <p className='text-[40px] font-semibold text-gray-9'>100% Fresh Fruit</p>
            <p className='text-[18px] h-[62px] font-normal text-gray-9'>
              Up to <span className='bg-gray-9 font-semibold px-2.5 py-1.5 text-[#FCC900] rounded-[5px]'> 64% OFF</span>
            </p>
            <LinkGlobal
              coverage='400%'
              link='/'
              size='small'
              animation='middle'
              primary={false}
              className='group z-50 px-8 py-3.5 border-none'
            >
              <div className=' flex items-center group-hover:animate-green-to-white animate-white-to-green gap-2'>
                <p className='font-semibold group-hover:animate-green-to-white animate-white-to-green z-50'>Shop now</p>
                <Icons.ArrowRight className='[&_path]:animate-white-to-green [&_path]:group-hover:animate-green-to-white ' />
              </div>
            </LinkGlobal>
          </section>
        </section>
      </section>
    </section>
  );
};

export default SaleTime;
