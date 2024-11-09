import React from 'react';
import LinkViewAll from '../LinkViewAll/LinkViewAll';
import { productBestSell, productDTOS, productHotDeals, productNew, productRated } from '@/lib/content';
import CardProduct from '../CardProduct/CardProduct';
import CardProductHorizontal from '../CardProduct/CardProductHorizontal';
import Image from 'next/image';
import Icons from '@/constants/svgIcon';

const BestSeller = () => {
  return (
    <section className='relative container w-screen  mt-8 '>
      <div className='absolute top-[520px] left-[-5%] z-[101]  animate-icon-move  w-auto h-auto '>
        <Image
          src='/leaf2.png'
          alt='Leaf 1'
          loading='lazy'
          width={60}
          height={88}
          className='rotate-[5deg]'
          quality={100}
          style={{ width: 'auto', height: 'auto' }}
        />
      </div>
      <div className='absolute top-[450px] right-[-22%]'>
        <Icons.Carrot />
      </div>
      <div className='absolute top-[400px] left-[-22%]'>
        <Icons.Vegetable />
      </div>
      <section className='relative w-full flex flex-col items-center  gap-4 z-[100]'>
        <section className='flex w-full items-center justify-between'>
          <p className='text-gray-9 text-[40px] font-semibold'>Best Seller Products</p>
          <LinkViewAll href='/' />
        </section>
        <section className='grid gap-5 grid-cols-5 items-center w-full'>
          {productDTOS.map((item, index) => (
            <CardProduct
              key={index}
              src={item.src}
              title={item.title}
              price={item.price}
              rate={item.rate}
              classNames='h-[339px]'
            />
          ))}
        </section>
      </section>
      <section className='grid grid-cols-4 mt-4 z-[100] relative w-full gap-4'>
        <section className='flex flex-col gap-4'>
          <p className='font-medium text-[24px] text-gray-9'>Hot Deals</p>
          {productHotDeals.map((item, index) => (
            <CardProductHorizontal key={index} src={item.src} title={item.title} price={item.price} rate={item.rate} />
          ))}
        </section>
        <section className='flex flex-col gap-4'>
          <p className='font-medium text-[24px] text-gray-9'>Best Seller</p>
          {productBestSell.map((item, index) => (
            <CardProductHorizontal key={index} src={item.src} title={item.title} price={item.price} rate={item.rate} />
          ))}
        </section>
        <section className='flex flex-col gap-4'>
          <p className='font-medium text-[24px] text-gray-9'>Top Rated</p>
          {productRated.map((item, index) => (
            <CardProductHorizontal key={index} src={item.src} title={item.title} price={item.price} rate={item.rate} />
          ))}
        </section>
        <section className='flex flex-col gap-4'>
          <p className='font-medium text-[24px] text-gray-9'>News</p>
          {productNew.map((item, index) => (
            <CardProductHorizontal key={index} src={item.src} title={item.title} price={item.price} rate={item.rate} />
          ))}
        </section>
      </section>
    </section>
  );
};

export default BestSeller;
