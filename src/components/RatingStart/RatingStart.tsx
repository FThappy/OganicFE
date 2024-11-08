import Icons from '@/constants/svgIcon';
import React from 'react';

type Props = {
  rate: number;
};

const RatingStart = (props: Props) => {
  const { rate } = props;
  return (
    <div className='flex'>
      {[...Array(5)].map((_, index) => {
        const currentRating = index + 1;
        return (
          <Icons.Start
            key={index}
            className={`${currentRating <= Math.round(rate) ? '[&_path]:fill-warning' : '[&_path]:fill-gray-2'}`}
          />
        );
      })}
    </div>
  );
};

export default RatingStart;
