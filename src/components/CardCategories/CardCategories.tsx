import React from 'react';
import Image from 'next/image';
import { formatCurrencyByNation } from '@/utils/formmatMoney';
import RatingStart from '../RatingStart/RatingStart';
import Icons from '@/constants/svgIcon';

type Props = {
  classNames?: string;
  src: string;
  title: string;
};

const CardCategories = (props: Props) => {
  const { classNames, src, title } = props;
  return (
    <section
      className={`w-full h-[213px] bg-white relative group/all cursor-pointer flex flex-col justify-center gap-4 rounded-[8px] border border-gray-1 hover:ring-1 hover:ring-green  hover:shadow-green hover:shadow  ${classNames}`}
    >
      <div className='w-full h-[130px] relative p-[5px]'>
        <Image src={src} alt='product image' fill quality={100} priority sizes='100%' />
      </div>
      <div className=' w-full flex items-center justify-center text-center text-gray-9 font-medium text-[18px]'>
        {title}
      </div>
    </section>
  );
};

export default CardCategories;
