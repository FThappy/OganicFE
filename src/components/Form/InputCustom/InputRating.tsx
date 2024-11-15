'use client';
import Icons from '@/constants/svgIcon';
import React from 'react';
import { ControllerRenderProps, FieldValues, Path } from 'react-hook-form';

type Props<T extends FieldValues> = {
  field: ControllerRenderProps<T, Path<T>>;
};

const InputRating = <T extends FieldValues>({ field }: Props<T>) => {
  const [rating, setRating] = React.useState(field.value || 0);
  const [hoverRating, setHoverRating] = React.useState(0);
  return (
    <div className='flex'>
      {[...Array(5)].map((_, index) => {
        const currentRating = index + 1;
        return (
          <label key={index}>
            <input
              type='radio'
              name='rating'
              value={currentRating}
              checked={rating === currentRating}
              onChange={() => {
                if (rating === currentRating) {
                  setRating(0);
                  field.onChange(0);
                } else {
                  setRating(currentRating);
                  field.onChange(currentRating);
                }
              }}
              onClick={() => rating === currentRating && setRating(0)}
              className='hidden'
            />
            <Icons.StarLagre
              className={`${currentRating <= Math.round(hoverRating | rating) ? '[&_path]:fill-warning' : '[&_path]:fill-gray-2'} cursor-pointer `}
              onMouseEnter={() => setHoverRating(currentRating)}
              onMouseLeave={() => setHoverRating(0)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default InputRating;
