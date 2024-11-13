import React from 'react';
import Image from 'next/image';
import { formatCurrencyByNation } from '@/utils/formmatMoney';
import RatingStart from '../RatingStart/RatingStart';
import Icons from '@/constants/svgIcon';

type Props = {
  classNames?: string;
  src: string;
  title: string;
  price: number;
  rate: number;
};

const CardProductHorizontal = (props: Props) => {
  const { classNames, src, title, price, rate } = props;
  return (
    <section
      className={`w-full h-[116px] bg-white relative group/all cursor-pointer flex rounded-[8px] border border-gray-1 hover:ring-1 hover:ring-green  hover:shadow-green hover:shadow  ${classNames}`}
    >
      <div className='w-[112px] h-[112px] relative p-[5px]'>
        <Image src={src} alt='product image' fill quality={100} priority sizes='100%' />
      </div>
      <div className='p-4 w-full flex items-center justify-between'>
        <section className='flex flex-col gap-2'>
          <p className='font-normal text-[14px] group-hover/all:text-green text-gray-7'>{title}</p>
          <p className='text-gray-9 font-medium group-hover/all:invisible'>
            {formatCurrencyByNation(price, 'en-US', 'USD', 'symbol', 2)}
          </p>
          <div className='group-hover/all:invisible'>
            <RatingStart rate={rate} />
          </div>
        </section>
      </div>
      <div className='absolute z-[60] bg-danger px-2 py-[3px] top-4 right-4 text-[14px] text-white font-normal rounded-[4px] flex items-center justify-center'>
        Sale 50%
      </div>
      <div className='absolute z-[60] invisible group-hover/all:visible right-24 top-12 gap-1 flex '>
        <div className='w-10 h-10 group/bag rounded-full flex items-center justify-center hover:bg-green bg-gray-0 group-hover/all:animate-dropdownHorizontalIcon'>
          <Icons.Bag className={`group-hover/bag:[&_path]:stroke-white`} />
        </div>
        <div className='w-10 h-10 group/eye rounded-full flex items-center justify-center bg-gray-0 hover:bg-green group-hover/all:animate-dropdownHorizontalIcon'>
          <Icons.Eye className={`group-hover/eye:[&_path]:stroke-white`} />
        </div>
        <div className='w-10 h-10 group/heart rounded-full flex items-center justify-center bg-gray-0 hover:bg-[#ffb3c8] group-hover/all:animate-dropdownHorizontalIcon'>
          <Icons.Heart className={`group-hover/heart:[&_path]:stroke-white `} />
        </div>
      </div>
    </section>
  );
};

export default CardProductHorizontal;
