import BillingAddressCard from '@/components/UserDetail/DashBoard/BillingAddressCard';
import RecetOrderHistory from '@/components/UserDetail/DashBoard/RecetOrderHistory';
import UserDetailCard from '@/components/UserDetail/DashBoard/UserDetailCard';
import React from 'react';

const DashBoardPage = () => {
  return (
    <section className='w-full flex flex-col gap-6'>
      <section className='flex w-full justify-between items-center'>
        <UserDetailCard />
        <BillingAddressCard />
      </section>
      <RecetOrderHistory />
    </section>
  );
};

export default DashBoardPage;
