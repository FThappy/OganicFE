'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { formatCurrencyByNation } from '@/utils/formmatMoney';
import { RadioGroup, RadioGroupCustom, RadioGroupItem } from '../ui/radio-group';
import { Label } from '../ui/label';
import { ButtonGlobal } from '../ButtonGlobal/Button';

type Props = {};

const SubTotal = (props: Props) => {
  const [selectedValue, setSelectedValue] = useState<string>('cashOnDelivery');

  return (
    <section className='w-full flex flex-col gap-4 p-6 border border-gray-1 rounded-[8px] overflow-y-auto max-h-[665px] scroll-beutifull'>
      <p className='text-[20px] font-medium text-gray-9'>Order Summery</p>
      <div className='flex flex-col'>
        <div className='flex items-center justify-between'>
          <div className='flex gap-1 items-center'>
            <div className='relative w-[60px] h-[60px]'>
              <Image src='/product10.png' alt='Product Image' fill quality={100} priority sizes='100%' />
            </div>
            <p className='text-[14px] text-gray-9'>Green Capsicum</p>
            <p className='text-[14px] text-gray-9'>x{5}</p>
          </div>
          <p className='font-medium text-[14px]'>{formatCurrencyByNation(57, 'en-US', 'USD', 'symbol', 2)}</p>
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex gap-1 items-center'>
            <div className='relative w-[60px] h-[60px]'>
              <Image src='/product10.png' alt='Product Image' fill quality={100} priority sizes='100%' />
            </div>
            <p className='text-[14px] text-gray-9'>Green Capsicum</p>
            <p className='text-[14px] text-gray-9'>x{5}</p>
          </div>
          <p className='font-medium text-[14px]'>{formatCurrencyByNation(57, 'en-US', 'USD', 'symbol', 2)}</p>
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex gap-1 items-center'>
            <div className='relative w-[60px] h-[60px]'>
              <Image src='/product10.png' alt='Product Image' fill quality={100} priority sizes='100%' />
            </div>
            <p className='text-[14px] text-gray-9'>Green Capsicum</p>
            <p className='text-[14px] text-gray-9'>x{5}</p>
          </div>
          <p className='font-medium text-[14px]'>{formatCurrencyByNation(57, 'en-US', 'USD', 'symbol', 2)}</p>
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex gap-1 items-center'>
            <div className='relative w-[60px] h-[60px]'>
              <Image src='/product10.png' alt='Product Image' fill quality={100} priority sizes='100%' />
            </div>
            <p className='text-[14px] text-gray-9'>Green Capsicum</p>
            <p className='text-[14px] text-gray-9'>x{5}</p>
          </div>
          <p className='font-medium text-[14px]'>{formatCurrencyByNation(57, 'en-US', 'USD', 'symbol', 2)}</p>
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex gap-1 items-center'>
            <div className='relative w-[60px] h-[60px]'>
              <Image src='/product10.png' alt='Product Image' fill quality={100} priority sizes='100%' />
            </div>
            <p className='text-[14px] text-gray-9'>Green Capsicum</p>
            <p className='text-[14px] text-gray-9'>x{5}</p>
          </div>
          <p className='font-medium text-[14px]'>{formatCurrencyByNation(57, 'en-US', 'USD', 'symbol', 2)}</p>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='flex justify-between items-center'>
          <p className='text-gray-7 text-[14px]'>Subtotal:</p>
          <p className='text-gray-9 text-[14px] font-medium'>
            {formatCurrencyByNation(18, 'en-US', 'USD', 'symbol', 2)}
          </p>
        </div>
        <div className='h-1 w-full border-t border-t-gray-200'></div>

        <div className='flex justify-between items-center'>
          <p className='text-gray-7 text-[14px]'>Shipping:</p>
          <p className='text-gray-9 text-[14px] font-medium'>Free</p>
        </div>
        <div className='h-1 w-full border-t border-t-gray-200'></div>

        <div className='flex justify-between items-center'>
          <p className='text-gray-7 text-[14px]'>Total:</p>
          <p className='text-gray-9 text-[14px] font-medium'>
            {formatCurrencyByNation(18, 'en-US', 'USD', 'symbol', 2)}
          </p>
        </div>
      </div>
      <p className='text-[20px] font-extrabold text-gray-9'>Payment Method</p>
      <RadioGroup value={selectedValue} onValueChange={setSelectedValue} required={true}>
        <div className='flex items-center py-2.5 gap-2'>
          <RadioGroupCustom value={`cashOnDelivery`} aria-label='Radio' />
          <Label htmlFor={`cashOnDelivery`} className='font-medium text-[14px] flex items-center gap-2'>
            <span className='text-[14px] text-gray-9 font-medium'>Cash on Delivery</span>
          </Label>
        </div>
        <div className='flex items-center py-2.5 gap-2'>
          <RadioGroupCustom value={`internationalPayment`} aria-label='Radio' />
          <Label htmlFor={`internationalPayment`} className='font-medium text-[14px] flex items-center gap-2'>
            <span className='text-[14px] text-gray-9 font-medium'>Paypal/Visa/Mastercard</span>
          </Label>
        </div>
        <div className='flex items-center py-2.5 gap-2'>
          <RadioGroupCustom value={`banking`} aria-label='Radio' />
          <Label htmlFor={`banking`} className='font-medium text-[14px] flex items-center gap-2'>
            <span className='text-[14px] text-gray-9 font-medium'>Banking</span>
          </Label>
        </div>
      </RadioGroup>
      <div className='h-[52px] w-full'>
        <ButtonGlobal type='submit' size='small' className='group z-50 w-full ' animation='middle' coverage='660%'>
          <div className='py-[2.5px] flex items-center group-hover:animate-white-to-green animate-green-to-white gap-2'>
            <p className='font-semibold group-hover:animate-white-to-green animate-green-to-white z-50'>Place Order</p>
          </div>
        </ButtonGlobal>
      </div>
    </section>
  );
};

export default SubTotal;
