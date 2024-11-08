import React from 'react';
import Image from 'next/image';
import Icons from '@/constants/svgIcon';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

const Footer = () => {
  const t = useTranslations('Footer');

  return (
    <footer className='relative w-screen h-[400px]'>
      <div className='absolute top-0 w-full z-[10] h-full bg-black opacity-90 ' />
      <Image src='/bg-footer.png' alt='Background Footer' fill className='absolute top-0 z-[60] ' loading='lazy' />
      <section className='relative z-[100] text-white flex flex-col items-center pt-[40px] w-full h-full'>
        <div className='flex container items-start justify-between w-full '>
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
          <section className='flex items-start gap-24'>
            <nav className='flex flex-col gap-3'>
              <Link href={'/'} className='text-white font-medium text-[18px]'>
                My Account
              </Link>
              <div className='w-full h-[1px] border border-green'></div>
              <Link href={'/'} className='text-gray-4 hover:text-white font-normal text-[14px]'>
                My Account
              </Link>
              <Link href={'/'} className='text-gray-4 hover:text-white font-normal text-[14px]'>
                Order History
              </Link>
              <Link href={'/'} className='text-gray-4 hover:text-white font-normal text-[14px]'>
                Shoping Cart
              </Link>
              <Link href={'/'} className='text-gray-4 hover:text-white font-normal text-[14px]'>
                Wishlist
              </Link>
            </nav>
            <nav className='flex flex-col gap-3'>
              <Link href={'/'} className='text-white font-medium text-[18px]'>
                Helps
              </Link>
              <div className='w-full h-[1px] border border-green'></div>
              <Link href={'/'} className='text-gray-4 hover:text-white font-normal text-[14px]'>
                Contact
              </Link>
              <Link href={'/'} className='text-gray-4 hover:text-white font-normal text-[14px]'>
                Faqs
              </Link>
              <Link href={'/'} className='text-gray-4 hover:text-white font-normal text-[14px]'>
                Terms & Condition
              </Link>
              <Link href={'/'} className='text-gray-4 hover:text-white font-normal text-[14px]'>
                Privacy Policy
              </Link>
            </nav>
            <nav className='flex flex-col gap-3'>
              <Link href={'/'} className='text-white font-medium text-[18px]'>
                Proxy
              </Link>
              <div className='w-full h-[1px] border border-green'></div>
              <Link href={'/'} className='text-gray-4 hover:text-white font-normal text-[14px]'>
                About
              </Link>
              <Link href={'/'} className='text-gray-4 hover:text-white font-normal text-[14px]'>
                Shop
              </Link>
              <Link href={'/'} className='text-gray-4 hover:text-white font-normal text-[14px]'>
                Product
              </Link>
              <Link href={'/'} className='text-gray-4 hover:text-white font-normal text-[14px]'>
                Track Order
              </Link>
            </nav>
          </section>
          <section className='flex'>
            <nav className='flex flex-col gap-3'>
              <h3 className='text-white font-medium text-[18px]'>Download Mobile App</h3>
              <div className='w-full h-[1px] border border-green'></div>
              <section className='flex gap-2 items-center pt-2'>
                <Link href={'/'} className='flex items-center p-2.5 gap-1.5 rounded-[4px] bg-gray-8'>
                  <Icons.Apple />
                  <div className='flex flex-col'>
                    <p className='text-gray-3 leading-[130%] text-[11px]'>Download on </p>
                    <p className='text-white font-medium text-[16px]'>Apple Store</p>
                  </div>
                </Link>
                <Link href={'/'} className='flex items-center p-2.5 gap-1.5 rounded-[4px] bg-gray-8'>
                  <Icons.GooglePlay />
                  <div className='flex flex-col'>
                    <p className='text-gray-3 leading-[130%] text-[11px]'>Download on </p>
                    <p className='text-white font-medium text-[16px]'>Google Play</p>
                  </div>
                </Link>
              </section>
            </nav>
          </section>
        </div>
        <section className='flex  mt-[7rem]  items-center justify-center w-full pt-6 border-t border-t-slate-100/25 '>
          <section className='container flex items-center justify-between w-full'>
            <p className='text-[14px] text-gray-5'>Ecobazar eCommerce © 2024. All Rights Reserved.</p>
            <div className='flex items-center gap-2'>
              <Icons.ApplePay />
              <Icons.Visa />
              <Icons.Discover />
              <Icons.Mastercard />
              <Icons.Cart />
            </div>
          </section>
        </section>
      </section>
      <Image
        src='/leaf2.png'
        alt='Leaf 1'
        className='absolute top-[300px] left-[142.5px] z-[100] rotate-[0deg] animate-icon-move w-auto h-auto'
        loading='lazy'
        width={48}
        height={71}
        quality={100}
        style={{ width: 'auto', height: 'auto' }}
      />
    </footer>
  );
};

export default Footer;
