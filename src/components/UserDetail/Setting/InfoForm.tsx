'use client';
import React from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { checkValidGmail } from '@/utils/utlilsEmail';
import { checkValidPhoneNumber } from '@/utils/utilsPhone';

type Props = {};

const formSchema = z.object({
  username: z
    .string({
      required_error: 'This field is required'
    })
    .min(1, {
      message: 'This field is required'
    })
    .max(250, {
      message: 'Value at least 250 characters'
    }),
  email: z
    .string({
      required_error: 'This field is required'
    })
    .min(1, {
      message: 'This field is required'
    })
    .max(250, {
      message: 'Value at least 250 characters'
    })
    .refine(val => checkValidGmail(val), {
      message: 'Email is not valid'
    }),
  phone: z
    .string({
      required_error: 'This field is required'
    })
    .min(1, {
      message: 'This field is required'
    })
    .max(250, {
      message: 'Value at least 250 characters'
    })
    .refine(val => checkValidPhoneNumber(val), {
      message: 'Phone is not valid'
    })
});
const InfoForm = (props: Props) => {
  return (
    <section className='shadow-md rounded-lg w-full border border-gray-1 '>
      <div className='flex justify-between items-center px-6 py-3 border-b-gray-1 border-b-1 rounded-t-lg'>
        <p className='text-gray-9 font-medium text-[20px]'>Account Settings</p>
      </div>
    </section>
  );
};

export default InfoForm;
