import React from 'react';
import Image from 'next/image';
import Icons from '@/constants/svgIcon';
import { LinkGlobal } from '../LinkGlobal/LinkGlobal';

const WhyChoseUs = () => {
  return (
    <section className='relative w-screen h-[617px]  '>
      <Image
        src='/bg4.png'
        alt='Background Why Chose Us'
        fill
        className='absolute top-0 z-[60] '
        quality={100}
        priority
        sizes='100%'
      />
      <div className='absolute top-[445px] left-[14%] z-[101]  animate-icon-move  w-auto h-auto '>
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
      <section className='relative container h-full w-full flex  pt-24 justify-center gap-4 z-[100]'>
        <div className='w-full flex gap-4 items-starts'>
          <div className='relative w-[276px] h-[400px]'>
            <Image
              src='/Image.png'
              alt='Background Description Why Chose Us'
              fill
              className='absolute top-0 z-[60] '
              quality={100}
              priority
              sizes='100%'
            />
          </div>
          <div className='relative w-[444px] h-[457px]'>
            <Image
              src='/Image1.png'
              alt='Background Description Why Chose Us'
              fill
              className='top-0 z-[60] '
              quality={100}
              priority
              sizes='100%'
            />
          </div>
        </div>
        <div className='w-full h-[540px] flex flex-col gap-4'>
          <p className='text-[40px] text-gray-9 font-semibold'>
            100% Trusted <br></br> Organic Food Store
          </p>
          <div className='flex items-start w-full gap-4'>
            <div className='w-6 h-6 rounded-full flex items-center justify-center bg-green mt-1'>
              <Icons.Accept />
            </div>
            <div className='w-[90%] flex flex-col gap-2 '>
              <p className='font-medium text-[18px] text-gray-9'>Healthy & natural food for lovers of healthy food.</p>
              <p className='font-normal text-[14px] text-gray-5'>
                Ut quis tempus erat. Phasellus euismod bibendum magna non tristique. Pellentesque semper vestibulum elit
                sed condimentum. Nunc pretium fermentum interdum.{' '}
              </p>
            </div>
          </div>
          <div className='flex items-start w-full gap-4'>
            <div className='w-6 h-6 rounded-full flex items-center justify-center bg-green mt-1'>
              <Icons.Accept />
            </div>
            <div className='w-[90%] flex flex-col gap-2 '>
              <p className='font-medium text-[18px] text-gray-9'>Every day fresh and quality products for you.</p>
              <p className='font-normal text-[14px] text-gray-5'>
                Maecenas vehicula a justo quis laoreet. Sed in placerat nibh, a posuere ex. Morbi sem neque, aliquam sed
                orci et, rhoncus lobortis felis. Sed vestibulum nisl sit amet sapien.{' '}
              </p>
            </div>
          </div>
          <LinkGlobal link='/' size='small' className='group z-50' animation='middle'>
            <div className='py-[2.5px] flex items-center group-hover:animate-white-to-green animate-green-to-white gap-2'>
              <p className='font-semibold group-hover:animate-white-to-green animate-green-to-white z-50'>Shop now</p>
              <Icons.ArrowRight className='[&_path]:animate-green-to-white [&_path]:group-hover:animate-white-to-green ' />
            </div>
          </LinkGlobal>
        </div>
      </section>
    </section>
  );
};

export default WhyChoseUs;
