import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import RatingStartLarge from '../RatingStart/RatingStartLarge';

const Comment = () => {
  return (
    <div className='flex flex-col gap-3 pb-5 border-b border-b-gray-2'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-2 items-center'>
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' className='w-[41px] h-[41px]' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <p className='font-medium text-[14px] text-gray-9'>Emma Waston</p>
            <RatingStartLarge rate={5} />
          </div>
        </div>
        <p className='text-[14px] text-gray-5'> 2 min ago</p>
      </div>
      <p className='break-words whitespace-pre-line text-gray-5 text-[14px]'>
        Keep the soil evenly moist for the healthiest growth. If the sun gets too hot, Chinese cabbage tends to
        &quot;bolt&quot; or go to seed; in long periods of heat, some kind of shade may be helpful. Watch out for
        snails, as they will harm the plants.
      </p>
    </div>
  );
};

export default Comment;
