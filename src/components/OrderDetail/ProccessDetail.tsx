import React from 'react';
import { Progress } from '../ui/progress';

type Props = {};

const ProccessDetail = (props: Props) => {
  return (
    <div className='px-[92px] my-6 w-full'>
      <div className='w-full flex justify-between items-center relative'>
        <div className='flex flex-col items-center gap-1 relative z-[50] '>
          <div className='h-[40] w-[40] flex items-center justify-center text-green border border-dashed border-green rounded-full bg-white'>
            01
          </div>
          <p className='text-[14px] font-medium'>Order received</p>
        </div>
        <div className='flex flex-col items-center gap-1 relative z-[50] '>
          <div className='h-[40] w-[40] flex items-center justify-center text-green border border-dashed border-green rounded-full bg-white'>
            02
          </div>
          <p className='text-[14px] font-medium'>Processing</p>
        </div>
        <div className='flex flex-col items-center gap-1 relative z-[50] '>
          <div className='h-[40] w-[40] flex items-center justify-center text-green border border-dashed border-green rounded-full bg-white'>
            03
          </div>
          <p className='text-[14px] font-medium'>On the way</p>
        </div>
        <div className='flex flex-col items-center gap-1 relative z-[50] '>
          <div className='h-[40] w-[40] flex items-center justify-center text-green border border-dashed border-green rounded-full bg-white'>
            04
          </div>
          <p className='text-[14px] font-medium'>Delivered</p>
        </div>
        <Progress value={100} className='w-[33%] absolute top-[25%] left-[5.5%] z-10' />
        <Progress value={100} className='w-[33%] absolute top-[25%] left-[35.5%] z-10' />
        <Progress value={100} className='w-[33%] absolute top-[25%] left-[65.5%] z-10' />
      </div>
    </div>
  );
};

export default ProccessDetail;
