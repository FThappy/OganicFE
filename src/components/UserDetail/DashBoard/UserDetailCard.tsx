import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { URL_PATHS } from '@/constants/url-path';
import { Link } from '@/i18n/routing';
import React from 'react';

type Props = {};

const UserDetailCard = (props: Props) => {
  return (
    <section className='shadow-md rounded-[8px] border border-gray-0 w-[536px] min-w-[536px] h-[278px] flex flex-col items-center justify-center gap-1'>
      <Avatar className='h-[120px] w-[120px]'>
        <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <p className='text-gray-9 font-medium text-[20px]'>Dianne Russell</p>
      <p className='text-gray-5 text-[14px]'>Customer</p>
      <Link href={URL_PATHS.setting} className='text-green hover:text-green-hard font-medium mt-3'>
        Edit Profile
      </Link>
    </section>
  );
};

export default UserDetailCard;
