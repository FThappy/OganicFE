import React from 'react';
import { URL_PATHS } from '@/constants/url-path';
import { Link } from '@/i18n/routing';
type Props = {};

const BillingAddressCard = (props: Props) => {
  return (
    <section className='shadow-md rounded-[8px] border border-gray-0 w-[424px] min-w-[424px] h-[278px] px-8 py-8 flex flex-col gap-4'>
      <p className='text-gray-4 font-medium text-[14px]'>Billing Address</p>
      <p className='text-gray-9 font-medium text-[20px]'>Dianne Russell</p>
      <p className='text-gray-6 text-[14px]'>4140 Parker Rd. Allentown, New Mexico 31134</p>
      <p className='text-gray-9 text-[14px]'>dainne.ressell@gmail.com</p>
      <p className='text-gray-9 text-[14px]'>(671) 555-0110</p>
      <Link href={URL_PATHS.setting} className='text-green hover:text-green-hard font-medium '>
        Edit Profile
      </Link>
    </section>
  );
};

export default BillingAddressCard;
