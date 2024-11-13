import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const FormSubscribe = () => {
  return (
    <form className='relative w-full'>
      <Input
        name='email'
        type='text'
        placeholder='Your email address'
        className='text-[14px] pr-[144px] leading-6 rounded-[43px] border border-gray-1 pl-6 py-2.5 h-[45px] focus-visible:outline-none focus-visible:ring-0 focus-visible:border-green'
      />
      <Button
        type='submit'
        className='absolute top-0 right-0 bg-green text-white font-medium rounded-[43px] px-[32px] py-[14px] h-[45px] hover:bg-[#20B526]/80'
      >
        Subscribe
      </Button>
    </form>
  );
};

export default FormSubscribe;
