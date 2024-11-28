import CartSideBar from '@/components/Cart/CartSideBar';
import InputSearch from '@/components/Form/InputCustom/InputSearch';
import { Button } from '@/components/ui/button';
import Icons from '@/constants/svgIcon';
import { Link } from '@/i18n/routing';
import React from 'react';
import { FaRegHeart } from 'react-icons/fa6';

type Props = {};

const MiddleHeader = (props: Props) => {
  return (
    <section className='bg-white'>
      <section className='flex h-[93px] items-center justify-between container '>
        <Link href={''} className='flex gap-2 items-center cursor-pointer'>
          <Icons.Logo />
          <p className='text-gray-9 font-medium leading-[38px] text-[32px] tracking-[-3%]'>Ecobazar</p>
        </Link>
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
          <Link href='/wishlist' aria-label='Go to Wishlist'>
            <FaRegHeart size={32} color='#1A1A1A' className='cursor-pointer' />
          </Link>
          <span className='text-gray-2'>|</span>
          <CartSideBar />
        </section>
      </section>
    </section>
  );
};

export default MiddleHeader;
