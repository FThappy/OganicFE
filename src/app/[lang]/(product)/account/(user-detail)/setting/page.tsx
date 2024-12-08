import BillingForm from '@/components/UserDetail/Setting/BillingForm';
import ChangePassForm from '@/components/UserDetail/Setting/ChangePassForm';
import InfoForm from '@/components/UserDetail/Setting/InfoForm';
import React from 'react';

const SettingPage = () => {
  return (
    <section className='flex flex-col gap-4 w-full'>
      <InfoForm />
      <BillingForm />
      <ChangePassForm />
    </section>
  );
};

export default SettingPage;
