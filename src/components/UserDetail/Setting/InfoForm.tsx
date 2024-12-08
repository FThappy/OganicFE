'use client';
import React from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { checkValidGmail } from '@/utils/utlilsEmail';
import { checkValidPhoneNumber } from '@/utils/utilsPhone';
import { ButtonGlobal } from '@/components/ButtonGlobal/Button';
import { Label } from '@/components/ui/label';
import InputString from '@/components/Form/InputCustom/InputString';
import { DateTimePicker } from '@/components/ui/datetimeInput';
import { PhoneInput } from '@/components/ui/phone-input';
import { ACCEPTED_IMAGE_MIME_TYPES } from '@/constants/common';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

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
  birth: z.date({
    required_error: 'This field is required'
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
    }),
  img: z
    .instanceof(File)
    .refine(file => file.size < 2 * 1024 * 1024, 'File size must be less than 2MB')
    .refine(
      file => ACCEPTED_IMAGE_MIME_TYPES.includes(file.type),
      'Only .jpg, .jpeg, .png and .webp formats are supported.'
    )
});
const InfoForm = (props: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      birth: undefined,
      phone: ''
    }
  });
  const { watch } = form;
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <section className='shadow-md rounded-lg w-full border border-gray-1 '>
      <div className='flex justify-between items-center px-6 py-3 border-b-gray-1 border-b-1 rounded-t-lg'>
        <p className='text-gray-9 font-medium text-[20px]'>Account Settings</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=' w-full  border-t  flex gap-[16px] px-6 pt-6 pb-8'>
          <div className='w-1/2 flex flex-col gap-4'>
            <FormField
              control={form.control}
              name='username'
              render={({ field }) => (
                <FormItem>
                  <Label className='text-sm '>
                    Username <span className='text-red-500'>*</span>
                  </Label>
                  <FormControl>
                    <InputString
                      placeholder='Your User Name'
                      max={250}
                      error={form.formState.errors.username}
                      field={field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='birth'
              render={({ field }) => (
                <FormItem className='col-span-1 w-full'>
                  <Label className='text-sm '>
                    BirthDay <span className='text-red-500'>*</span>
                  </Label>{' '}
                  <FormControl>
                    <DateTimePicker
                      value={field.value}
                      onChange={field.onChange}
                      displayFormat={{ hour24: 'PPP' }}
                      granularity='day'
                      className='rounded-[8px] px-[14px] py-[10px] h-[52px]'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <Label className='text-sm '>
                    Email <span className='text-red-500'>*</span>
                  </Label>
                  <FormControl>
                    <InputString placeholder='Your Email' max={250} error={form.formState.errors.email} field={field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='phone'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <Label className='text-sm '>
                    Phone <span className='text-red-500'>*</span>
                  </Label>
                  <FormControl>
                    <PhoneInput
                      defaultCountry='VN'
                      placeholder='Your phone number'
                      {...field}
                      className={`h-[52px] 
                        ${
                          form.formState.errors.phone
                            ? '[&_input]:border-red-500 ' +
                              '[&_input]:focus-visible:outline-none ' +
                              '[&_input]:focus-visible:border-red-500 ' +
                              '[&_button]:border-red-500 ' +
                              '[&_button]:focus-visible:outline-none ' +
                              '[&_button]:focus-visible:border-red-500 ' +
                              '[&_button]:focus-visible:border-r-0 ' +
                              '[&_button]:border-r-0'
                            : ''
                        }`}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <ButtonGlobal
              size='small'
              className='group z-50 w-[180px] mt-4'
              animation='middle'
              coverage='320%'
              type='submit'
            >
              <div
                className={` py-[2.5px] flex items-center   group-hover:animate-white-to-green animate-green-to-white  gap-2`}
              >
                <p className={`font-semibold   group-hover:animate-white-to-green animate-green-to-white   z-50`}>
                  Save Changes
                </p>
              </div>
            </ButtonGlobal>
          </div>
          <div className='w-1/2 flex gap-4  justify-center'>
            <FormField
              control={form.control}
              name='img'
              render={({ field }) => (
                <FormItem className='flex flex-col gap-4 items-center mt-8'>
                  <Avatar className='h-[224px] w-[224px]'>
                    <AvatarImage
                      src={watch('img') ? URL.createObjectURL(watch('img')) : 'https://github.com/shadcn.png'}
                      alt='@shadcn'
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Label
                    htmlFor='picture'
                    className='border-2 border-green flex 
                  items-center justify-center gap-3 px-8 py-3.5 font-semibold 
                  text-[14px] rounded-[43px] text-green hover:bg-slate-50 cursor-pointer'
                  >
                    Chose Image
                  </Label>
                  <FormControl>
                    <Input
                      className='hidden'
                      id='picture'
                      type='file'
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        const file = e.target.files ? e.target.files[0] : undefined;
                        field.onChange(file);
                        e.target.files = null;
                        e.target.value = '';
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </form>
      </Form>
    </section>
  );
};

export default InfoForm;
