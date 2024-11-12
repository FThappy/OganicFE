'use client';
import Icons from '@/constants/svgIcon';
import React, { useState } from 'react';
import { Checkbox, CheckboxCustom } from '../ui/checkbox';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import RangeInput from '../Form/InputCustom/RangeInput';
import RatingStart from '../RatingStart/RatingStart';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import RatingStartLarge from '../RatingStart/RatingStartLarge';
type Props = {
  setMinValue: React.Dispatch<React.SetStateAction<number>>;
  setMaxValue: React.Dispatch<React.SetStateAction<number>>;
};

const FilterProduct = (props: Props) => {
  const { setMinValue, setMaxValue } = props;
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleValueChange = (value: string) => {
    console.log(value);
    setSelectedValue((prevValue: string) => (prevValue === value ? '' : value));
  };
  console.log(selectedValue);
  return (
    <aside className='flex flex-col w-[312px]'>
      <div className='flex  border-b border-b-gray-5 items-center justify-between'>
        <p className='text-gray-9 text-[24px] font-medium'>Filter</p>
        <Icons.Filter />
      </div>
      <Accordion type='multiple' defaultValue={['categories', 'priceRange', 'rating', 'tag']}>
        <AccordionItem value='categories'>
          <AccordionTrigger className='font-medium text-[20px] text-gray-9 h-[50px] no-underline hover:no-underline '>
            All Categories
          </AccordionTrigger>
          <AccordionContent>
            {Array.from({ length: 7 }).map((_, index) => (
              <div key={index} className='flex items-center py-2.5 gap-2'>
                <CheckboxCustom id={`terms-${index}`} aria-label='Checkbox' />
                <label htmlFor={`terms-${index}`} className='font-medium text-[14px]'>
                  Vegetables <span className='text-gray-5'>(150)</span>
                </label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='priceRange'>
          <AccordionTrigger className='font-medium text-[20px] text-gray-9 h-[50px] no-underline hover:no-underline'>
            Price
          </AccordionTrigger>
          <AccordionContent className='py-2 flex flex-col gap-4'>
            <RangeInput maxValue={2500} setMaxValue={setMaxValue} setMinValue={setMinValue} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='rating'>
          <AccordionTrigger className='font-medium text-[20px] text-gray-9 h-[50px] no-underline hover:no-underline'>
            Rating
          </AccordionTrigger>
          <AccordionContent className='py-2 flex flex-col gap-4'>
            <RadioGroup
              value={selectedValue}
              onValueChange={(value: string) => {
                handleValueChange(value);
              }}
              required={false}
            >
              <div className='flex items-center py-2.5 gap-2'>
                <RadioGroupItem value={`5start`} aria-label='Radio' />
                <Label htmlFor={`5start`} className='font-medium text-[14px] flex items-center gap-2'>
                  <RatingStartLarge rate={5} />
                  <span className='text-[14px] text-gray-9 font-medium'> 5.0</span>
                </Label>
              </div>
              <div className='flex items-center py-2.5 gap-2'>
                <RadioGroupItem
                  value={`4start`}
                  aria-label='Radio'
                  onClick={e => {
                    console.log(e.target);
                  }}
                />
                <Label htmlFor={`4start`} className='font-medium text-[14px] flex items-center gap-2'>
                  <RatingStartLarge rate={4} />
                  <span className='text-[14px] text-gray-9 font-medium'>4.0 & up</span>
                </Label>
              </div>
              <div className='flex items-center py-2.5 gap-2'>
                <RadioGroupItem value={`3start`} aria-label='Radio' />
                <Label htmlFor={`3start`} className='font-medium text-[14px] flex items-center gap-2'>
                  <RatingStartLarge rate={3} />
                  <span className='text-[14px] text-gray-9 font-medium'>3.0 & up</span>
                </Label>
              </div>
              <div className='flex items-center py-2.5 gap-2'>
                <RadioGroupItem value={`2start`} aria-label='Radio' />
                <Label htmlFor={`2start`} className='font-medium text-[14px] flex items-center gap-2'>
                  <RatingStartLarge rate={2} />
                  <span className='text-[14px] text-gray-9 font-medium'>2.0 & up</span>
                </Label>
              </div>
              <div className='flex items-center py-2.5 gap-2'>
                <RadioGroupItem value={`1start`} aria-label='Checkbox' />
                <Label htmlFor={`1start`} className='font-medium text-[14px] flex items-center gap-2'>
                  <RatingStartLarge rate={1} />
                  <span className='text-[14px] text-gray-9 font-medium'>1.0 & up</span>
                </Label>
              </div>
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='tag'>
          <AccordionTrigger className='font-medium text-[20px] text-gray-9 h-[50px] no-underline hover:no-underline'>
            Price
          </AccordionTrigger>
          <AccordionContent className='py-2 flex flex-col gap-4'>
            <RangeInput maxValue={2500} setMaxValue={setMaxValue} setMinValue={setMinValue} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <section></section>
      <section></section>
    </aside>
  );
};

export default FilterProduct;
