import InputSearch from '@/components/Form/InputCustom/InputSearch';
import { Button } from '@/components/ui/button';
import Icons from '@/constants/svgIcon';
import { formatCurrencyByNation } from '@/utils/formmatMoney';
import React from 'react';
import { FaRegHeart } from 'react-icons/fa6';
import { HiOutlineShoppingBag } from 'react-icons/hi';

type Props = {};

const MiddleHeader = (props: Props) => {
  return (
    <section className='bg-white'>
      <section className='flex h-[93px] items-center justify-between container '>
        <section className='flex gap-2 items-center cursor-pointer'>
          <Icons.Logo />
          <p className='text-gray-9 font-medium leading-[38px] text-[32px] tracking-[-3%]'>Ecobazar</p>
        </section>
        <section className='flex'>
          <InputSearch
            placeHoderSearch='Search'
            additionalClass='w-[400px]  focus-visible:ring-green-soft rounded-r-[0]'
          />
          <Button className='h-[45px] rounded-[6px] rounded-l-[0] px-6 py-[14px] bg-green text-[14px] font-semibold border border-transparent  hover:bg-green hover:opacity-75'>
            Search
          </Button>
        </section>
        <section className='flex gap-4 items-center'>
          <FaRegHeart size={32} color='#1A1A1A' className='cursor-pointer' />
          <span className='text-gray-2'>|</span>
          <div className='relative'>
            <HiOutlineShoppingBag size={32} color='#1A1A1A' className='cursor-pointer' />
            <div className='absolute top-0 right-[-2px] bg-green-hard rounded-full h-[18px] w-[18px] text-white text-[10px] flex items-center justify-center'>
              2
            </div>
          </div>
          <div className='flex flex-col '>
            <p className='font-normal text-[11px]'>Shopping cart:</p>
            <p className='font-medium text-[14px]'>{formatCurrencyByNation(57, 'en-US', 'USD', 'symbol', 2)}</p>
          </div>
        </section>
      </section>
    </section>
  );
};

export default MiddleHeader;
