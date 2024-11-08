import { useTranslations } from 'next-intl';
import React from 'react';
import LinkViewAll from '../LinkViewAll/LinkViewAll';
import Image from 'next/image';
import CardCategories from '../CardCategories/CardCategories';

const Categories = () => {
  const t = useTranslations('HomePage');

  const categories = [
    {
      title: t('freshFruit'),
      src: '/categories2.png'
    },
    {
      title: t('freshVegetable'),
      src: '/categories4.png'
    },
    {
      title: t('meatafish'),
      src: '/categories6.png'
    },
    {
      title: t('snack'),
      src: '/categories8.png'
    },
    {
      title: t('beverages'),
      src: '/categories9.png'
    },
    {
      title: t('beautyahealth'),
      src: '/categories12.png'
    },
    {
      title: t('breadbakery'),
      src: '/categories3.png'
    },
    {
      title: t('baking'),
      src: '/categories9.png'
    },
    {
      title: t('cooking'),
      src: '/categories7.png'
    },
    {
      title: t('diabetic'),
      src: '/categories1.png'
    },
    {
      title: t('dish'),
      src: '/categories10.png'
    },
    {
      title: t('oil'),
      src: '/categories11.png'
    }
  ];

  return (
    <section className='relative w-screen h-[540px] items-center justify-center'>
      <Image
        src='/bg3.png'
        alt='Background Categories'
        fill
        className='absolute top-0 z-[60] '
        quality={100}
        priority
      />
      <section className='relative container h-full w-full flex flex-col items-center justify-center gap-4 z-[100]'>
        <section className='flex w-full items-center justify-between'>
          <p className='text-gray-9 text-[40px] font-semibold'>{t('categories')}</p>
          <LinkViewAll href='/' />
        </section>
        <section className='grid gap-6 grid-cols-6 items-center w-full'>
          {categories.map((category, index) => (
            <CardCategories key={index} src={category.src} title={category.title} />
          ))}
        </section>
      </section>
    </section>
  );
};

export default Categories;
