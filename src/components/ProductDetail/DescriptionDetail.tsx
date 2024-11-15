import Icons from '@/constants/svgIcon';
import React from 'react';

type Props = {};

const DescriptionDetail = (props: Props) => {
  return (
    <div className='flex justify-between items-center'>
      <div className='break-words whitespace-pre-line w-[648px]'>
        <p className='text-[14px] text-gray-5'>
          Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac, viverra at mauris. Maecenas
          tincidunt ligula a sem vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi porttitor vel.
          Etiam tincidunt metus vel dui interdum sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam
          mollis lacus. Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a
          convallis. Morbi urna ipsum, placerat quis commodo quis, egestas elementum leo. Donec convallis mollis enim.
          Aliquam id mi quam. Phasellus nec fringilla elit.
        </p>
        <p className='text-[14px] text-gray-5'>
          Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus elementum
          tincidunt, turpis mi viverra velit, pellentesque tristique neque mi eget nulla. Proin luctus elementum neque
          et pharetra.{' '}
        </p>
        <p className='text-[14px] text-gray-5'>
          Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus elementum
          tincidunt, turpis mi viverra velit, pellentesque tristique neque mi eget nulla. Proin luctus elementum neque
          et pharetra.{' '}
        </p>
        <p className='text-[14px] text-gray-5'>
          Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus elementum
          tincidunt, turpis mi viverra velit, pellentesque tristique neque mi eget nulla. Proin luctus elementum neque
          et pharetra.{' '}
        </p>
      </div>
      <div className='flex flex-col w-[536px] gap-4'>
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

export default DescriptionDetail;
