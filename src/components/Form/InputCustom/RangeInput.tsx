'use client';
import { SliderCustom } from '@/components/ui/slider';
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
        <SliderCustom
          aria-label='Range Custom'
          max={maxValue}
          name='left'
          defaultValue={[0, maxValue]}
          onValueChange={(value: number[]) => {
            setValueLeft(value[0]);
            setValueRight(value[1]);
          }}
          onValueCommit={(value: number[]) => {
            setMinValue(value[0]);
            setMaxValue(value[1]);
          }}
          step={1}
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
