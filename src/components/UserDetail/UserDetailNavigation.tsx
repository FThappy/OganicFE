'use client';
import { URL_PATHS } from '@/constants/url-path';
import { Link, usePathname } from '@/i18n/routing';
import { Heart, LayoutDashboard, LogOut, RefreshCw, Settings } from 'lucide-react';
import React from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi';

const navigation = [
  {
    title: 'Dashboard',
    link: URL_PATHS.dashboard,
    icons: <LayoutDashboard className='w-6 h-6 text-[24px] group-hover:text-gray-9' />
  },
  {
    title: 'Order History',
    link: URL_PATHS.orderHistory,
    icons: <RefreshCw className='w-6 h-6 text-[24px]  group-hover:text-gray-9' />
  },
  {
    title: 'Wishlist',
    link: URL_PATHS.wishList,
    icons: <Heart className='w-6 h-6 text-[24px]  group-hover:text-gray-9' />
  },
  {
    title: 'Shopping Cart',
    link: URL_PATHS.shoppingCart,
    icons: <HiOutlineShoppingBag className='w-6 h-6 text-[24px] group-hover:text-gray-9' />
  },
  {
    title: 'Settings',
    link: URL_PATHS.setting,
    icons: <Settings className='w-6 h-6 text-[24px]  group-hover:text-gray-9' />
  }
];

const UserDetailNavigation = () => {
  const pathname = usePathname();
  return (
    <div className='w-[312px] min-w-[312px] h-[418px] flex flex-col shadow-lg rounded-[8px] border border-gray-0'>
      <p className='pl-5 pt-6 pb-4 text-gray-9 text-[20px] font-medium'>Navigation</p>
      {navigation.map((item, index) => (
        <div
          key={index}
          className={`px-5 py-4 cursor-pointer group 
          hover:bg-greenGray-0 flex items-center gap-2.5 
           hover:border-l-4 
          hover:border-l-green-hard ${pathname === item.link ? 'bg-greenGray-0 border-l-4 border-l-green-hard text-gray-9' : 'border-l-4 border-l-transparent text-gray-6'}`}
        >
          {item.icons}
          <Link href={item.link} className=' group-hover:text-gray-9'>
            {item.title}
          </Link>
        </div>
      ))}
      <div className='px-5 py-4 flex cursor-pointer items-center gap-2.5 group hover:bg-greenGray-0 border-l-4 border-l-transparent hover:border-l-4 hover:border-l-green-hard'>
        <LogOut className='w-6 h-6 text-[24px] text-gray-6 group-hover:text-gray-9' />
        <button className='text-gray-6 group-hover:text-gray-9'>Log-out</button>
      </div>
    </div>
  );
};

export default UserDetailNavigation;
