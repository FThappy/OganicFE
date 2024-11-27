'use client';
import React, { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { formatCurrencyByNation } from '@/utils/formmatMoney';
import Image from 'next/image';
import InputQuantityProduct from '../QuantityProduct/InputQuantityProduct';
import { LinkGlobal } from '../LinkGlobal/LinkGlobal';
import { URL_PATHS } from '@/constants/url-path';
type Props = {};

const CartSideBar = (props: Props) => {
  const [openSheet, setOpenSheet] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (value: number) => {
    setQuantity(value);
  };
  return (
    <Sheet open={openSheet} onOpenChange={setOpenSheet}>
      <SheetTrigger className='flex gap-4'>
        <div className='relative'>
          <HiOutlineShoppingBag size={32} color='#1A1A1A' className='cursor-pointer' />
          <div className='absolute top-0 right-[-2px] bg-green-hard rounded-full h-[18px] w-[18px] text-white text-[10px] flex items-center justify-center'>
            2
          </div>
        </div>
        <div className='flex flex-col items-start '>
          <p className='font-normal text-[11px]'>Shopping cart:</p>
          <p className='font-medium text-[14px]'>{formatCurrencyByNation(57, 'en-US', 'USD', 'symbol', 2)}</p>
        </div>
      </SheetTrigger>
      <SheetContent className='p-10 w-[520px]'>
        <SheetHeader>
          <SheetTitle className='text-gray-9 font-medium text-[20px]'>Shopping Card ({2})</SheetTitle>
        </SheetHeader>
        <section className='flex flex-col justify-between h-full relative'>
          <section className=' flex flex-col gap-4 mt-4  max-h-[calc(100%-200px)] overflow-y-auto	un-scroll'>
            <section className='flex gap-2 items-center'>
              <div className='relative w-[120px] h-[100px]'>
                <Image src='/product10.png' alt='Product Image' fill quality={100} priority sizes='100%' />
              </div>
              <div className=' '>
                <p className='text-[14px] font-normal text-gray-900'>Fresh Indian Orange</p>
                <p className='text-[14px] font-extrabold text-gray-900'>
                  <span className='font-normal text-gray-5'>{1}kg x </span>
                  {formatCurrencyByNation(12, 'en-US', 'USD', 'symbol', 2)}
                </p>
              </div>
              <InputQuantityProduct handleChange={handleQuantityChange} quantity={quantity} />
            </section>
            <div className='h-1 w-full border-t border-t-gray-400'></div>
            <section className='flex gap-2 items-center'>
              <div className='relative w-[120px] h-[100px]'>
                <Image src='/product10.png' alt='Product Image' fill quality={100} priority sizes='100%' />
              </div>
              <div className=' '>
                <p className='text-[14px] font-normal text-gray-900'>Fresh Indian Orange</p>
                <p className='text-[14px] font-extrabold text-gray-900'>
                  <span className='font-normal text-gray-5'>{1}kg x </span>
                  {formatCurrencyByNation(12, 'en-US', 'USD', 'symbol', 2)}
                </p>
              </div>
              <InputQuantityProduct handleChange={handleQuantityChange} quantity={quantity} />
            </section>
            <div className='h-1 w-full border-t border-t-gray-400'></div>
            <section className='flex gap-2 items-center'>
              <div className='relative w-[120px] h-[100px]'>
                <Image src='/product10.png' alt='Product Image' fill quality={100} priority sizes='100%' />
              </div>
              <div className=' '>
                <p className='text-[14px] font-normal text-gray-900'>Fresh Indian Orange</p>
                <p className='text-[14px] font-extrabold text-gray-900'>
                  <span className='font-normal text-gray-5'>{1}kg x </span>
                  {formatCurrencyByNation(12, 'en-US', 'USD', 'symbol', 2)}
                </p>
              </div>
              <InputQuantityProduct handleChange={handleQuantityChange} quantity={quantity} />
            </section>
            <div className='h-1 w-full border-t border-t-gray-400'></div>
            <section className='flex gap-2 items-center'>
              <div className='relative w-[120px] h-[100px]'>
                <Image src='/product10.png' alt='Product Image' fill quality={100} priority sizes='100%' />
              </div>
              <div className=' '>
                <p className='text-[14px] font-normal text-gray-900'>Fresh Indian Orange</p>
                <p className='text-[14px] font-extrabold text-gray-900'>
                  <span className='font-normal text-gray-5'>{1}kg x </span>
                  {formatCurrencyByNation(12, 'en-US', 'USD', 'symbol', 2)}
                </p>
              </div>
              <InputQuantityProduct handleChange={handleQuantityChange} quantity={quantity} />
            </section>
            <div className='h-1 w-full border-t border-t-gray-400'></div>
            <section className='flex gap-2 items-center'>
              <div className='relative w-[120px] h-[100px]'>
                <Image src='/product10.png' alt='Product Image' fill quality={100} priority sizes='100%' />
              </div>
              <div className=' '>
                <p className='text-[14px] font-normal text-gray-900'>Fresh Indian Orange</p>
                <p className='text-[14px] font-extrabold text-gray-900'>
                  <span className='font-normal text-gray-5'>{1}kg x </span>
                  {formatCurrencyByNation(12, 'en-US', 'USD', 'symbol', 2)}
                </p>
              </div>
              <InputQuantityProduct handleChange={handleQuantityChange} quantity={quantity} />
            </section>
            <div className='h-1 w-full border-t border-t-gray-400'></div>
            <section className='flex gap-2 items-center'>
              <div className='relative w-[120px] h-[100px]'>
                <Image src='/product10.png' alt='Product Image' fill quality={100} priority sizes='100%' />
              </div>
              <div className=' '>
                <p className='text-[14px] font-normal text-gray-900'>Fresh Indian Orange</p>
                <p className='text-[14px] font-extrabold text-gray-900'>
                  <span className='font-normal text-gray-5'>{1}kg x </span>
                  {formatCurrencyByNation(12, 'en-US', 'USD', 'symbol', 2)}
                </p>
              </div>
              <InputQuantityProduct handleChange={handleQuantityChange} quantity={quantity} />
            </section>
            <div className='h-1 w-full border-t border-t-gray-400'></div>
            <section className='flex gap-2 items-center'>
              <div className='relative w-[120px] h-[100px]'>
                <Image src='/product10.png' alt='Product Image' fill quality={100} priority sizes='100%' />
              </div>
              <div className=' '>
                <p className='text-[14px] font-normal text-gray-900'>Fresh Indian Orange</p>
                <p className='text-[14px] font-extrabold text-gray-900'>
                  <span className='font-normal text-gray-5'>{1}kg x </span>
                  {formatCurrencyByNation(12, 'en-US', 'USD', 'symbol', 2)}
                </p>
              </div>
              <InputQuantityProduct handleChange={handleQuantityChange} quantity={quantity} />
            </section>
            <div className='h-1 w-full border-t border-t-gray-400'></div>
            <section className='flex gap-2 items-center'>
              <div className='relative w-[120px] h-[100px]'>
                <Image src='/product10.png' alt='Product Image' fill quality={100} priority sizes='100%' />
              </div>
              <div className=' '>
                <p className='text-[14px] font-normal text-gray-900'>Fresh Indian Orange</p>
                <p className='text-[14px] font-extrabold text-gray-900'>
                  <span className='font-normal text-gray-5'>{1}kg x </span>
                  {formatCurrencyByNation(12, 'en-US', 'USD', 'symbol', 2)}
                </p>
              </div>
              <InputQuantityProduct handleChange={handleQuantityChange} quantity={quantity} />
            </section>
          </section>
          <section className='w-[440px] h-[186px] fixed bottom-[-20px] gap-2 flex flex-col '>
            <div className='flex justify-between w-full items-center'>
              <p className='text-[14px] text-gray-9'>{2} Product</p>
              <p className='text-[14px] text-gray-9 font-medium'>
                {formatCurrencyByNation(12, 'en-US', 'USD', 'symbol', 2)}
              </p>
            </div>
            <div
              onClick={e => {
                setOpenSheet(false);
              }}
            >
              <LinkGlobal
                link={URL_PATHS.checkout}
                size='small'
                className='group z-50 w-full'
                animation='middle'
                coverage='660%'
              >
                <div className='py-[2.5px] flex items-center group-hover:animate-white-to-green animate-green-to-white gap-2'>
                  <p className='font-semibold group-hover:animate-white-to-green animate-green-to-white z-50'>
                    Checkout
                  </p>
                </div>
              </LinkGlobal>
            </div>

            <div
              onClick={e => {
                setOpenSheet(false);
              }}
            >
              <LinkGlobal
                link={'/shopping-cart'}
                size='small'
                className='group z-50 w-full'
                animation='middle'
                coverage='660%'
                backgroundColor='#eff7ef'
                textColor='#00B207'
              >
                <div className='py-[2.5px] flex items-center  gap-2'>
                  <p className='font-semibold text-green z-50'>Go To Cart</p>
                </div>
              </LinkGlobal>
            </div>
          </section>
        </section>
      </SheetContent>
    </Sheet>
  );
};

export default CartSideBar;
