'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselMainContainer,
  CarouselNext,
  CarouselPrevious,
  CarouselThumbsContainer,
  SliderMainItem,
  SliderThumbItem
} from '../ui/carouselThumnail';
import StockProduct from '../StockProduct/StockProduct';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import RatingStartLarge from '../RatingStart/RatingStartLarge';
import { formatCurrencyByNation } from '@/utils/formmatMoney';
import Icons from '@/constants/svgIcon';
import { ButtonGlobal } from '../ButtonGlobal/Button';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import InputQuantityProduct from '../QuantityProduct/InputQuantityProduct';
type Props = {};
const imageSlider = [
  '/product3.png',
  '/ProductImageSlider.png',
  '/ProductImageSlider2.png',
  '/ProductImageSlider3.png'
];
const tag = ['Vegetables', 'Healthy', 'Chinese', 'Cabbage', 'Green Cabbage'];
const ProductContent = (props: Props) => {
  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (value: number) => {
    setQuantity(value);
  };
  return (
    <section className='p-4 flex items-center justify-between w-full'>
      <section className='w-[648px] h-full'>
        <Carousel orientation='vertical' className='flex items-center h-full '>
          <CarouselNext className='bottom-0 left-12 -translate-y-1/3 w-10 h-10 ' />
          <CarouselPrevious className='top-6 left-12 -translate-y-1/3 w-10 h-10 ' />
          <CarouselThumbsContainer className='h-full w-[125px]'>
            {imageSlider.map((src, index) => (
              <SliderThumbItem key={index} index={index} className='rounded-md bg-transparent'>
                <Image src={src} alt='product image' fill quality={100} priority sizes='100%' />
              </SliderThumbItem>
            ))}
          </CarouselThumbsContainer>
          <div className='relative w-full h-full '>
            <CarouselMainContainer className='h-[556px]'>
              {imageSlider.map((src, index) => (
                <SliderMainItem key={index} className=' flex items-center justify-center h-full relative rounded-md'>
                  <Image src={src} alt='product image' fill quality={100} priority sizes='100%' />
                </SliderMainItem>
              ))}
            </CarouselMainContainer>
          </div>
        </Carousel>
      </section>
      <section className='w-[568px] flex flex-col gap-6'>
        <section className='flex flex-col gap-5'>
          <div className='flex items-center gap-2'>
            <p className='text-gray-9 text-[36px] font-semibold'>Chinese Cabbage</p>
            <StockProduct state='inStock' />
          </div>
          <div className='flex gap-2 relative'>
            <RatingStartLarge rate={5} />
            <p className='text-gray-5 text-[14px]'>4 Review</p>
            <p className='text-gray-5 text-[100px] absolute top-[-94px] left-[30%] '>&#46;</p>
            <p className='text-gray-9 font-semibold ml-8'>
              SKU : <span className='text-gray-6'>KS944RUR</span>
            </p>
          </div>
          <div className='flex items-center gap-2.5'>
            <p className='leading-[150%] text-[20px] text-medium text-gray-3 line-through'>
              {formatCurrencyByNation(48, 'en-US', 'USD', 'symbol', 2)}
            </p>
            <p className='text-[24px] text-medium text-green-hard'>
              {formatCurrencyByNation(17.28, 'en-US', 'USD', 'symbol', 2)}
            </p>
            <StockProduct state='off' discount={64} classNames='rounded-[30px]' />
          </div>
        </section>
        <div className='h-1 w-full border-t border-t-gray-400'></div>
        <section className='flex flex-col gap-4'>
          <div className='flex items-center justify-between'>
            <div className='flex gap-2 items-center'>
              <p className='text-gray-9 font-normal text-[14px]'>Brand</p>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div className='relative rounded-[4px] border border-gray-1 w-14 h-14 p-1'>
                      <div className='relative w-full h-full'>
                        <Image src='/agriculture.png' alt='Icon company' fill quality={100} priority sizes='100%' />
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className='bg-black'>Agriculture</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className='flex gap-2.5 items-center'>
              <p className='text-gray-9 text-[14px] font-normal'>Share item:</p>
              <div className='rounded-full hover:bg-green p-2 group cursor-pointer'>
                <Icons.Facebook className='[&_path]:fill-gray-7 group-hover:[&_path]:fill-white' />
              </div>
              <div className='rounded-full hover:bg-green p-2 group cursor-pointer'>
                <Icons.Twitter className='[&_path]:fill-gray-7 group-hover:[&_path]:fill-white' />
              </div>
              <div className='rounded-full hover:bg-green p-2 group cursor-pointer'>
                <Icons.Pinterest className='[&_path]:fill-gray-7 group-hover:[&_path]:fill-white' />
              </div>
              <div className='rounded-full hover:bg-green p-2 group cursor-pointer'>
                <Icons.Instagram className='[&_path]:fill-gray-7 group-hover:[&_path]:fill-white' />
              </div>
            </div>
          </div>
          <p className='text-gray-5 text-[14px]'>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam,
            blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar.{' '}
          </p>
        </section>
        <div className='h-1 w-full border-t border-t-gray-400'></div>
        <section className='flex py-4.5 gap-3 w-full'>
          <InputQuantityProduct handleChange={handleQuantityChange} quantity={quantity} />
          <ButtonGlobal size='small' className='group z-50 w-[320px]' animation='middle' coverage='480%'>
            <div className='py-[2.5px] flex items-center group-hover:animate-white-to-green animate-green-to-white gap-2'>
              <p className='font-semibold group-hover:animate-white-to-green animate-green-to-white z-50'>
                Add to Cart
              </p>
              <HiOutlineShoppingBag size={24} />
            </div>
          </ButtonGlobal>
          <div className='w-[52px] h-[52px] cursor-pointer group/heart rounded-full flex items-center justify-center bg-[#20B526]/10 group-hover/all:animate-dropdownHorizontalIcon'>
            <Icons.Heart className={`[&_path]:stroke-green-hard group-hover/heart:[&_path]:fill-green-hard`} />
          </div>
        </section>
        <div className='h-1 w-full border-t border-t-gray-400'></div>
        <section className='flex flex-col gap-3'>
          <p className='text-gray-9 font-medium'>
            Category: <span className='text-gray-5 hover:underline hover:text-gray-9 cursor-pointer'>VegeTables</span>
          </p>
          <p className='text-gray-9 font-medium'>
            Tag:{' '}
            {tag.map((item, index) => (
              <span className='text-gray-5 hover:underline hover:text-gray-9 cursor-pointer font-normal' key={index}>
                {' '}
                {item}{' '}
              </span>
            ))}
          </p>
        </section>
      </section>
    </section>
  );
};

export default ProductContent;
