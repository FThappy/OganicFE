import React from 'react';
import Image from 'next/image';
import Icons from '@/constants/svgIcon';
import { useTranslations } from 'next-intl';

type Props = {};

const Footer = (props: Props) => {
  const t = useTranslations('Footer');

  return (
    <footer className='relative w-screen h-[400px]'>
      <div className='absolute top-0 w-full z-[10] h-full bg-black opacity-90 ' />
      <Image
        src='/bg-footer.png'
        alt='Background Footer'
        layout='fill'
        objectFit='cover'
        className='absolute top-0 z-[60]'
      />
      <div className='relative container z-[100] text-white flex items-center  h-full'>
        <section className='flex flex-col gap-4 w-[300px]'>
          <section className='flex gap-2 items-center cursor-pointer'>
            <Icons.Logo />
            <p className='text-white font-medium leading-[38px] text-[32px] tracking-[-3%]'>Ecobazar</p>
          </section>
          <p className='text-gray-4 text-[14px]'>{t('title')}</p>
          <section className='flex gap-4 items-center cursor-pointer'>
            <div className='rounded-full hover:bg-green p-2'>
              <Icons.Facebook />
            </div>
            <div className='rounded-full hover:bg-green p-2'>
              <Icons.Twitter />
            </div>
            <div className='rounded-full hover:bg-green p-2'>
              <Icons.Pinterest />
            </div>
            <div className='rounded-full hover:bg-green p-2'>
              <Icons.Instagram />
            </div>
          </section>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
