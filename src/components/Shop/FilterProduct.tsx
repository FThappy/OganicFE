'use client';
import Icons from '@/constants/svgIcon';
import React, { useState } from 'react';
import { CheckboxCustom } from '../ui/checkbox';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import RangeInput from '../Form/InputCustom/RangeInput';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import RatingStartLarge from '../RatingStart/RatingStartLarge';
import Image from 'next/image';

import { productBestSell, tagName } from '@/lib/content';
import LinkViewAll from '../LinkViewAll/LinkViewAll';
import CardProductHorizontal from '../CardProduct/CardProductHorizontal';
type Props = {
  setMinValue: React.Dispatch<React.SetStateAction<number>>;
  setMaxValue: React.Dispatch<React.SetStateAction<number>>;
};

const FilterProduct = (props: Props) => {
  const { setMinValue, setMaxValue } = props;
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleValueChange = (value: string) => {
    setSelectedValue((prevValue: string) => (prevValue === value ? '' : value));
  };
  return (
    <aside className='flex flex-col min-w-[312px] w-[312px]'>
      <div className='flex  border-b border-b-gray-2 items-center justify-between pb-6'>
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
            <RadioGroup value={selectedValue} required={false}>
              <div className='flex items-center py-2.5 gap-2'>
                <RadioGroupItem
                  value={`5start`}
                  aria-label='Radio'
                  onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                    const target = e.currentTarget as HTMLButtonElement;
                    if (target.value) {
                      handleValueChange(target.value);
                    }
                  }}
                />
                <Label htmlFor={`5start`} className='font-medium text-[14px] flex items-center gap-2'>
                  <RatingStartLarge rate={5} />
                  <span className='text-[14px] text-gray-9 font-medium'> 5.0</span>
                </Label>
              </div>
              <div className='flex items-center py-2.5 gap-2'>
                <RadioGroupItem
                  value={`4start`}
                  aria-label='Radio'
                  onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                    const target = e.currentTarget as HTMLButtonElement;
                    if (target.value) {
                      handleValueChange(target.value);
                    }
                  }}
                />
                <Label htmlFor={`4start`} className='font-medium text-[14px] flex items-center gap-2'>
                  <RatingStartLarge rate={4} />
                  <span className='text-[14px] text-gray-9 font-medium'>4.0 & up</span>
                </Label>
              </div>
              <div className='flex items-center py-2.5 gap-2'>
                <RadioGroupItem
                  value={`3start`}
                  aria-label='Radio'
                  onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                    const target = e.currentTarget as HTMLButtonElement;
                    if (target.value) {
                      handleValueChange(target.value);
                    }
                  }}
                />
                <Label htmlFor={`3start`} className='font-medium text-[14px] flex items-center gap-2'>
                  <RatingStartLarge rate={3} />
                  <span className='text-[14px] text-gray-9 font-medium'>3.0 & up</span>
                </Label>
              </div>
              <div className='flex items-center py-2.5 gap-2'>
                <RadioGroupItem
                  value={`2start`}
                  aria-label='Radio'
                  onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                    const target = e.currentTarget as HTMLButtonElement;
                    if (target.value) {
                      handleValueChange(target.value);
                    }
                  }}
                />
                <Label htmlFor={`2start`} className='font-medium text-[14px] flex items-center gap-2'>
                  <RatingStartLarge rate={2} />
                  <span className='text-[14px] text-gray-9 font-medium'>2.0 & up</span>
                </Label>
              </div>
              <div className='flex items-center py-2.5 gap-2'>
                <RadioGroupItem
                  value={`1start`}
                  aria-label='Radio'
                  onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                    const target = e.currentTarget as HTMLButtonElement;
                    if (target.value) {
                      handleValueChange(target.value);
                    }
                  }}
                />
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
            Popular Tag
          </AccordionTrigger>
          <AccordionContent className='py-2 flex flex-wrap gap-2'>
            {tagName.map((item, index) => (
              <div
                key={index}
                className={`py-1.5 px-4 rounded-[30px] text-[14px] cursor-pointer ${item ? 'bg-green text-white' : 'bg-gray-0 text-gray-9'}  `}
              >
                {item}
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <section className='relative w-full h-[312px] mt-2'>
        <Image
          src='/Bannar.png'
          alt='Background Bannar'
          fill
          className='absolute top-0 z-[60] '
          quality={100}
          priority
          sizes='100%'
        />
        <section className='relative container h-full w-full flex flex-col items-center gap-0.5 pt-5  z-[100]'>
          <p className='text-gray-9 text-[24px]'>
            <span className='text-warning text-[32px] font-semibold'>79%</span> Discount
          </p>
          <p className='text-gray-7 mb-4'>on your first order</p>
          <LinkViewAll href='/' title='Shop Now' />
        </section>
      </section>
      <section className='flex flex-col gap-3 mt-5 mb-5'>
        <p className='text-gray-9 text-[20px] font-medium'>Sale Products</p>
        {productBestSell.map((item, index) => (
          <CardProductHorizontal key={index} src={item.src} title={item.title} price={item.price} rate={item.rate} />
        ))}
      </section>
    </aside>
  );
};

export default FilterProduct;
