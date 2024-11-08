'use client';
import React from 'react';
import Image from 'next/image';
import CountUp from 'react-countup';

const NumberUser = () => {
  return (
    <section className='relative w-screen h-[331px] items-center justify-center '>
      <Image
        src='/bg5.png'
        alt='Background NumberUser'
        fill
        className='absolute top-0 z-[60] '
        quality={100}
        priority
        sizes='100%'
      />
      <section className='relative container h-full w-full flex items-center justify-between gap-4 z-[100]'>
        <div className='bg-white/30 rounded-[8px] flex flex-col items-center justify-center h-[174px] w-full'>
          <p className='text-green leading-[120%] text-[56px] '>
            <CountUp enableScrollSpy={true} end={37} />+
          </p>
          <p className='text-[18px] text-white font-normal'>Years of Hard Work</p>
        </div>
        <div className='bg-white/30 rounded-[8px] flex flex-col items-center justify-center h-[174px] w-full'>
          <p className='text-green leading-[120%] text-[56px] '>
            <CountUp enableScrollSpy={true} end={500} />
            k+
          </p>
          <p className='text-[18px] text-white font-normal'>Happy Customer</p>
        </div>
        <div className='bg-white/30 rounded-[8px] flex flex-col items-center justify-center h-[174px] w-full'>
          <p className='text-green leading-[120%] text-[56px] '>
            <CountUp enableScrollSpy={true} end={28} />+
          </p>
          <p className='text-[18px] text-white font-normal'>Qualified Team Member</p>
        </div>
        <div className='bg-white/30 rounded-[8px] flex flex-col items-center justify-center h-[174px] w-full'>
          <p className='text-green leading-[120%] text-[56px] '>
            <CountUp enableScrollSpy={true} end={750} />
            k+
          </p>
          <p className='text-[18px] text-white font-normal'>Monthly Orders</p>
        </div>
      </section>
    </section>
  );
};

export default NumberUser;
