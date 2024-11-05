'use client';
import Icons from '@/constants/svgIcon';
import { URL_PATHS } from '@/constants/url-path';
import { Link, usePathname } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import React from 'react';

type Props = {};

const NavLink = (props: Props) => {
  const t = useTranslations('HomePage');
  const link_nav = [
    { label: t('home'), to: URL_PATHS.home },
    { label: t('shop'), to: URL_PATHS.shop },
    { label: t('faq'), to: URL_PATHS.faq },
    { label: t('blog'), to: URL_PATHS.blog },
    { label: t('about'), to: URL_PATHS.about },
    { label: t('contact'), to: URL_PATHS.contact }
  ];
  const path = usePathname();
  return (
    <section className='bg-gray-8 w-full text-[14px]'>
      <section className='container flex items-center justify-between'>
        <nav className=' py-3 flex gap-8 items-center font-medium '>
          {link_nav.map((item, index) => (
            <Link
              className={`${path === item.to ? 'text-white' : 'text-gray-4'} hover:text-white`}
              href={item.to}
              key={index}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <section className='flex items-center gap-2'>
          <Icons.PhoneCall />
          <a className='text-white' href='tel:(219) 555-0114'>
            (219) 555-0114
          </a>
        </section>
      </section>
    </section>
  );
};

export default NavLink;
