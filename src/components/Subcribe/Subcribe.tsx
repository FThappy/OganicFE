import React from 'react';
import Icons from '@/constants/svgIcon';
import FormSubscribe from '../FormSubscribe/FormSubscribe';

const Subcribe = () => {
  return (
    <div className='h-[162px] w-screen bg-[#F7F7F7]  flex items-center '>
      <div className='container flex items-center justify-between gap-[72px]'>
        <div className='flex flex-col  gap-1 min-w-[448px] w-[448px]'>
          <p className='text-gray-9 font-semibold text-[24px]'>Subcribe our Newsletter</p>
          <p className='text-gray-4 text-[14px]'>
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.
          </p>
        </div>

        <section className='flex gap-4 w-full items-center cursor-pointer'>
          <FormSubscribe />
          <div className='rounded-full hover:bg-green p-2 group'>
            <Icons.Facebook className='[&_path]:fill-gray-7 group-hover:[&_path]:fill-white ' />
          </div>
          <div className='rounded-full hover:bg-green p-2 group'>
            <Icons.Twitter className='[&_path]:fill-gray-7 group-hover:[&_path]:fill-white' />
          </div>
          <div className='rounded-full hover:bg-green p-2 group'>
            <Icons.Pinterest className='[&_path]:fill-gray-7 group-hover:[&_path]:fill-white' />
          </div>
          <div className='rounded-full hover:bg-green p-2 group'>
            <Icons.Instagram className='[&_path]:fill-gray-7 group-hover:[&_path]:fill-white' />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Subcribe;
