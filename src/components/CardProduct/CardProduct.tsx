'use client';
import React from 'react';
import Image from 'next/image';
import { formatCurrencyByNation } from '@/utils/formmatMoney';
import RatingStart from '../RatingStart/RatingStart';
import Icons from '@/constants/svgIcon';
import { Link, useRouter } from '@/i18n/routing';

type Props = {
  classNames?: string;
  src: string;
  title: string;
  price: number;
  rate: number;
};

const CardProduct = (props: Props) => {
  const { classNames, src, title, price, rate } = props;
  const router = useRouter();
  return (
    <section
      className={`w-full h-[407px] relative group/all cursor-pointer flex flex-col rounded-[8px] border border-gray-1 hover:ring-1 hover:ring-green  hover:shadow-green hover:shadow  ${classNames}`}
    >
      <div className='w-full h-full relative p-[5px]'>
        <Image src={src} alt='product image' fill quality={100} priority sizes='100%' />
      </div>
      <div className='p-4 w-full flex items-center justify-between'>
        <section className='flex flex-col gap-2'>
          <p className='font-normal text-[14px] group-hover/all:text-green text-gray-7'>{title}</p>
          <p className='text-gray-9 font-medium'>{formatCurrencyByNation(price, 'en-US', 'USD', 'symbol', 2)}</p>
          <RatingStart rate={rate} />
        </section>
        <section className='w-10 h-10 group/bag rounded-full flex items-center justify-center hover:bg-green bg-gray-0'>
          <Icons.Bag className={`group-hover/bag:[&_path]:stroke-white`} />
        </section>
      </div>
      <div className='absolute z-[60] bg-danger px-2 py-[3px] top-4 left-4 text-[14px] text-white font-normal rounded-[4px] flex items-center justify-center'>
        Sale 50%
      </div>
      <div className='absolute z-[60] invisible group-hover/all:visible right-4 top-4 gap-1 flex flex-col'>
        <div className='w-10 h-10 group/heart rounded-full flex items-center justify-center bg-gray-0 hover:bg-[#ffb3c8] group-hover/all:animate-dropdownIcon'>
          <Icons.Heart className={`group-hover/heart:[&_path]:stroke-white `} />
        </div>
        <div className='w-10 h-10 group/eye rounded-full flex items-center justify-center bg-gray-0 hover:bg-green  group-hover/all:animate-dropdownIcon '>
          <Link href={`/shop/${1}`}>
            <Icons.Eye className={`group-hover/eye:[&_path]:stroke-white`} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CardProduct;
