'use client';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icons from '@/constants/svgIcon';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import React from 'react';

type Props = {};

const DescriptionHeader = (props: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  return (
    <section className='bg-[#1A1A1A] w-full'>
      <div className='container text-gray-3 py-3 flex justify-between items-center'>
        <div className='flex items-center gap-2'>
          <Icons.MapPin />
          <p>Store Location : Hanoi ,VietNam</p>
        </div>
        <div className='flex items-center gap-[20px]'>
          <Select value={locale} onValueChange={value => router.replace(pathname, { locale: value })}>
            <SelectTrigger className='gap-[6px] border-none w-auto focus:ring-0' aria-label='Select language'>
              <SelectValue placeholder='Select' />
            </SelectTrigger>
            <SelectContent className='min-w-[1rem] w-[5rem]'>
              <SelectGroup>
                <SelectItem className='cursor-pointer' value='en-US'>
                  ENG
                </SelectItem>
                <SelectItem className='cursor-pointer' value='vi-VN'>
                  VN
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select value={locale}>
            <SelectTrigger className='gap-[6px] border-none w-auto focus:ring-0' aria-label='Select language'>
              <SelectValue placeholder='Select' />
            </SelectTrigger>
            <SelectContent className='min-w-[1rem] w-[5rem]'>
              <SelectGroup>
                <SelectItem className='cursor-pointer' value='en-US'>
                  ENG
                </SelectItem>
                <SelectItem className='cursor-pointer' value='vi-VN'>
                  VN
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <span className='text-[rgba(255, 255, 255, 0.9)]'>|</span>
          <div className='flex gap-2'>
            <Link href='/sign-in'>Sign In</Link>
            <span>/</span>
            <Link href='/sign-up'>Sign Up</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DescriptionHeader;
