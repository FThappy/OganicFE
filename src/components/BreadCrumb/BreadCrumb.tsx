'use client';
import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import Icons from '@/constants/svgIcon';
import { usePathname } from '@/i18n/routing';
import { useSearchParams } from 'next/navigation';
const URL_NAME = {
  shop: 'Shop',
  vegetable: 'Vegetable'
} as const;
type URLNameKey = keyof typeof URL_NAME;

const BreadCrumb = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <section className='relative w-screen h-[120px]'>
      <Image
        src='/Breadcrumbs.png'
        alt='Background Breadcrumbs'
        fill
        className='absolute top-0 z-[60] '
        quality={100}
        priority
        sizes='100%'
      />
      <Breadcrumb className='z-[100] relative container flex items-center h-full w-full'>
        <BreadcrumbList>
          {/* Home icon link */}
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href='/' aria-label='Home'>
                <Icons.Home className='hover:[&_path]:fill-green hover:[&_path]:stroke-green' />
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {pathname
            .split('/')
            .slice(1)
            .map((item, index) => (
              <React.Fragment key={index}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink className='text-[16px] font-normal hover:text-green text-gray-4' asChild>
                    <Link href={`/${item}`}>{URL_NAME[item as URLNameKey]}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {item === 'shop' &&
                  searchParams.get('category') &&
                  URL_NAME[searchParams.get('category') as URLNameKey] && (
                    <>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbLink className='text-[16px] font-normal hover:text-green text-gray-4' asChild>
                          <Link href={`/${item}?category=${searchParams.get('category')}`}>
                            {URL_NAME[searchParams.get('category') as URLNameKey]}
                          </Link>
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                    </>
                  )}
              </React.Fragment>
            ))}
        </BreadcrumbList>
      </Breadcrumb>
    </section>
  );
};

export default BreadCrumb;