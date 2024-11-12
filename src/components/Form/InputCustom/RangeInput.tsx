'use client';
import { SliderLeft, SliderRight } from '@/components/ui/slider';
import { formatCurrencyByNation } from '@/utils/formmatMoney';
import React, { useState } from 'react';

type Props = {
  maxValue: number;
  setMinValue: React.Dispatch<React.SetStateAction<number>>;
  setMaxValue: React.Dispatch<React.SetStateAction<number>>;
};

const RangeInput = (props: Props) => {
  const { maxValue, setMinValue, setMaxValue } = props;
  const [valueLeft, setValueLeft] = useState<number>(0);
  const [valueRight, setValueRight] = useState<number>(maxValue);
  return (
    <section className='flex flex-col gap-4'>
      <div className='flex items-center relative'>
        <SliderLeft
          aria-label='Range Left'
          max={maxValue / 2}
          name='left'
          defaultValue={[0]}
          onValueChange={(value: number[]) => setValueLeft(value[0])}
          onValueCommit={(value: number[]) => setMinValue(value[0])}
          step={1}
          className='absolute top-0 z-[60]'
        />
        <SliderRight
          aria-label='Range Right'
          max={maxValue}
          defaultValue={[maxValue]}
          min={maxValue / 2}
          name='right'
          onValueChange={(value: number[]) => setValueRight(value[0])}
          onValueCommit={(value: number[]) => setMaxValue(value[0])}
          step={1}
          className='absolute top-0'
        />
      </div>
      <p className='text-gray-7 font-normal text-[14px]'>
        Price:{' '}
        <span className='font-medium text-[14px]'>
          {formatCurrencyByNation(valueLeft, 'en-US', 'USD', 'symbol', 0)} -{' '}
          {formatCurrencyByNation(valueRight, 'en-US', 'USD', 'symbol', 0)}
        </span>
      </p>
    </section>
  );
};

export default RangeInput;
