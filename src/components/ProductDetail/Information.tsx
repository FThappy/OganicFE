import Icons from '@/constants/svgIcon';
import React from 'react';
import Vegetable from '@/assets/svgIcon/Vegetable.svg';

type Props = {};
const tag = ['Vegetables', 'Healthy', 'Chinese', 'Cabbage', 'Green Cabbage'];

const Information = (props: Props) => {
  return (
    <div className='flex justify-between items-start'>
      <div className='w-full flex flex-col gap-2'>
        <div className='flex gap-4'>
          <p className='text-gray-9 text-[14px]'>Weight:</p>
          <p className='text-gray-5 text-[14px]'>03</p>
        </div>
        <div className='flex gap-4'>
          <p className='text-gray-9 text-[14px]'>Color:</p>
          <p className='text-gray-5 text-[14px]'>Green</p>
        </div>
        <div className='flex gap-4'>
          <p className='text-gray-9 text-[14px]'>Type:</p>
          <p className='text-gray-5 text-[14px]'>Organic</p>
        </div>
        <div className='flex gap-4'>
          <p className='text-gray-9 text-[14px]'>Category:</p>
          <p className='text-gray-5 text-[14px]'>Vegetable</p>
        </div>
        <div className='flex gap-4'>
          <p className='text-gray-9 text-[14px]'>Stock Status:</p>
          <p className='text-gray-5 text-[14px]'>Available (5,413)</p>
        </div>
        <div className='flex gap-4'>
          <p className='text-gray-9 text-[14px]'>Tags:</p>
          <p className='text-gray-5 text-[14px]'>
            {' '}
            {tag.map((item, index) => (
              <React.Fragment key={index}>
                <span className='text-gray-5 hover:underline hover:text-gray-9 cursor-pointer font-normal px-1'>
                  {item}
                </span>
                {index < tag.length - 1 && <span>, </span>}
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
      <div className='flex flex-col min-w-[536px] w-[536px] gap-4'>
        <video width='536' height='300' controls preload='auto'>
          <source src='/video1.mp4' type='video/mp4' />
          <track src='/path/to/captions.vtt' kind='subtitles' srcLang='en' label='English' />
          Your browser does not support the video tag.
        </video>
        <div className='flex border border-gray-1 w-full py-6 px-5 justify-between items-center gap-4 rounded-[8px] '>
          <div className='flex w-full h-full gap-3 items-center'>
            <Icons.Discount />
            <div className='flex flex-col gap-1.5'>
              <p className='text-gray-9 font-medium text-[14px]'>64% Discount</p>
              <p className='text-gray-5 text-[13px]'>Save your 64% money with us</p>
            </div>
          </div>
          <div className='flex w-full h-full gap-3 items-center'>
            <Icons.Leaf />
            <div className='flex flex-col gap-1.5'>
              <p className='text-gray-9 font-medium text-[14px]'>100% Organic</p>
              <p className='text-gray-5 text-[13px]'>100% Organic Vegetables</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
