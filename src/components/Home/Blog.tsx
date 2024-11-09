import React from 'react';
import Image from 'next/image';
import Icons from '@/constants/svgIcon';
import LinkViewAll from '../LinkViewAll/LinkViewAll';

const Blog = () => {
  return (
    <section className='relative w-screen h-[764px] items-center justify-center mt-4 bg-gray-0'>
      <Image
        src='/bg8.png'
        alt='Background Blog'
        fill
        className='absolute top-0 z-[60] '
        quality={100}
        priority
        sizes='100%'
      />
      <section className='relative container h-full w-full flex flex-col items-center justify-center gap-1 z-[100]'>
        <p className='text-green font-medium'>Blog</p>
        <p className='text-gray-9 text-[40px] font-semibold'>Latest News</p>
        <section className='grid w-full grid-cols-3 gap-4'>
          <section className='relative w-full h-[494px] rounded-[8px] group/all bg-white shadow-lg cursor-pointer hover:-translate-y-2'>
            <div className='w-full h-[324px] relative '>
              <Image src='/blog1.png' alt='blog image' fill quality={100} priority sizes='100%' />
            </div>
            <section className='flex flex-col gap-2 p-6  justify-center'>
              <section className='flex items-center justify-between'>
                <section className='flex gap-2'>
                  <Icons.Tag />
                  <p className='text-[14px] font-normal text-gray-7'>Food</p>
                </section>
                <section className='flex gap-2'>
                  <Icons.User />
                  <p className='text-[14px] font-normal text-gray-7'>By Admin</p>
                </section>
                <section className='flex gap-2'>
                  <Icons.Message />
                  <p className='text-[14px] font-normal text-gray-7'>65 Comments</p>
                </section>
              </section>
              <p className='group-hover/all:text-green-hard text-[18px] font-medium'>
                Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.
              </p>
              <LinkViewAll href='/' title='Read More' />
            </section>
            <section className='absolute z-[60px] w-[58px] h-[58px] top-[50%] left-[15px] rounded-[4px] flex flex-col items-center justify-center bg-white'>
              <p className='text-[20px] font-medium text-gray-9'>18</p>
              <p className='text-[12px] font-medium text-gray-5'>Nov</p>
            </section>
          </section>
          <section className='relative w-full h-[494px] rounded-[8px] group/all bg-white shadow-lg cursor-pointer hover:-translate-y-2'>
            <div className='w-full h-[324px] relative '>
              <Image src='/blog2.png' alt='blog image' fill quality={100} priority sizes='100%' />
            </div>
            <section className='flex flex-col gap-2 p-6  justify-center'>
              <section className='flex items-center justify-between'>
                <section className='flex gap-2'>
                  <Icons.Tag />
                  <p className='text-[14px] font-normal text-gray-7'>Food</p>
                </section>
                <section className='flex gap-2'>
                  <Icons.User />
                  <p className='text-[14px] font-normal text-gray-7'>By Admin</p>
                </section>
                <section className='flex gap-2'>
                  <Icons.Message />
                  <p className='text-[14px] font-normal text-gray-7'>65 Comments</p>
                </section>
              </section>
              <p className='group-hover/all:text-green-hard text-[18px] font-medium'>
                Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.
              </p>
              <LinkViewAll href='/' title='Read More' />
            </section>
            <section className='absolute z-[60px] w-[58px] h-[58px] top-[50%] left-[15px] rounded-[4px] flex flex-col items-center justify-center bg-white'>
              <p className='text-[20px] font-medium text-gray-9'>18</p>
              <p className='text-[12px] font-medium text-gray-5'>Nov</p>
            </section>
          </section>
          <section className='relative w-full h-[494px] rounded-[8px] group/all bg-white shadow-lg cursor-pointer hover:-translate-y-2'>
            <div className='w-full h-[324px] relative '>
              <Image src='/blog3.png' alt='blog image' fill quality={100} priority sizes='100%' />
            </div>
            <section className='flex flex-col gap-2 p-6  justify-center'>
              <section className='flex items-center justify-between'>
                <section className='flex gap-2'>
                  <Icons.Tag />
                  <p className='text-[14px] font-normal text-gray-7'>Food</p>
                </section>
                <section className='flex gap-2'>
                  <Icons.User />
                  <p className='text-[14px] font-normal text-gray-7'>By Admin</p>
                </section>
                <section className='flex gap-2'>
                  <Icons.Message />
                  <p className='text-[14px] font-normal text-gray-7'>65 Comments</p>
                </section>
              </section>
              <p className='group-hover/all:text-green-hard text-[18px] font-medium'>
                Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.
              </p>
              <LinkViewAll href='/' title='Read More' />
            </section>
            <section className='absolute z-[60px] w-[58px] h-[58px] top-[50%] left-[15px] rounded-[4px] flex flex-col items-center justify-center bg-white'>
              <p className='text-[20px] font-medium text-gray-9'>18</p>
              <p className='text-[12px] font-medium text-gray-5'>Nov</p>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Blog;
