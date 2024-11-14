import Icons from '@/constants/svgIcon';
import { useTranslations } from 'next-intl';
import React from 'react';
import LinkViewAll from '../LinkViewAll/LinkViewAll';
import { productDTO } from '@/lib/content';
import CardProduct from '../CardProduct/CardProduct';

const FeatureProduct = () => {
  const t = useTranslations('HomePage');

  return (
    <section className='relative w-screen h-[600px] items-center justify-center z-[90]'>
      <div className='absolute bottom-[1rem] z-[60] left-0'>
        <Icons.Pumkin />
      </div>
      <section className='container h-full w-full flex flex-col items-center justify-center relative gap-4 z-[1005]'>
        <section className='flex w-full items-center justify-between'>
          <p className='text-gray-9 text-[40px] font-semibold'>{t('featuredProduct')}</p>
          <LinkViewAll href='/' />
        </section>
        <section className='flex gap-6 items-center w-full'>
          {productDTO.map((item, index) => (
            <CardProduct key={index} src={item.src} title={item.title} price={item.price} rate={item.rate} />
          ))}
        </section>
      </section>
    </section>
  );
};

export default FeatureProduct;
