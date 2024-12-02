'use client';
import React from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { checkValidGmail } from '@/utils/utlilsEmail';
import { Label } from '@/components/ui/label';
import { ButtonGlobal } from '@/components/ButtonGlobal/Button';
import InputString from '@/components/Form/InputCustom/InputString';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Link } from '@/i18n/routing';
import { URL_PATHS } from '@/constants/url-path';
import Icons from '@/constants/svgIcon';

type Props = {};
const formSchema = z.object({
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
  password: z
    .string({
      required_error: 'This field is required'
    })
    .min(1, {
      message: 'This field is required'
    })
    .max(250, {
      message: 'Value at least 250 characters'
    }),
  remember: z.boolean().optional()
});
const LoginPage = (props: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className='w-full flex py-[80px] items-center justify-center'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=' w-[520px] bg-white shadow-lg border rounded-[8px] flex flex-col gap-[16px] px-6 pt-6 pb-8'
        >
          <p className='text-gray-9 font-semibold text-[32px] text-center'>Sign In</p>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className='w-full'>
                <Label className='text-sm '>
                  Email <span className='text-red-500'>*</span>
                </Label>
                <FormControl>
                  <InputString placeholder='Email' max={250} error={form.formState.errors.email} field={field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem className='w-full'>
                <Label className='text-sm '>
                  Password <span className='text-red-500'>*</span>
                </Label>
                <FormControl>
                  <Input
                    className={`rounded-[8px] px-[14px] pr-[64px] py-[10px] h-[52px] bg-white ${form.formState.errors.password ? 'border border-red-500 focus-visible:outline-none focus-visible:border-red-500 focus-visible:ring-red-500 focus-visible:ring-1 ' : ''}`}
                    placeholder='Password'
                    {...field}
                    maxLength={255}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='w-full flex items-center justify-between'>
            <FormField
              control={form.control}
              name='remember'
              render={({ field }) => (
                <FormItem className='flex items-center'>
                  <FormControl>
                    <div className='flex items-center gap-2'>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      <p className='text-gray-6 text-[14px]'>Remember me</p>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            <Link href='/' className='text-gray-6 text-[14px] hover:text-green'>
              Forget Password
            </Link>
          </div>
          <ButtonGlobal
            size='small'
            className='group z-50 w-full mt-4'
            animation='middle'
            coverage='710%'
            type='submit'
          >
            <div
              className={`py-[2.5px] flex items-center   group-hover:animate-white-to-green animate-green-to-white  gap-2`}
            >
              <p className={`font-semibold   group-hover:animate-white-to-green animate-green-to-white   z-50`}>
                Login
              </p>
            </div>
          </ButtonGlobal>
          <div className='w-full relative'>
            <div className=' h-1 w-full border-t border-t-gray-400 z-[50]'></div>
            <p className='absolute top-[25%] left-1/2 transform -translate-y-1/2  text-[18px] text-gray-6  bg-white z-[50] '>
              Or
            </p>
          </div>
          <div className='w-full gap-2 flex items-center'>
            <button
              type='button'
              className='w-full group rounded-[8px] border border-gray-2 h-[52px] flex justify-center items-center hover:bg-slate-100 gap-2'
            >
              <Icons.GoogleIcon />
              <p className='font-semibold group-hover:text-green'>Google</p>
            </button>
            <button
              type='button'
              className='w-full group rounded-[8px] border border-gray-2 h-[52px] flex justify-center items-center hover:bg-slate-100 gap-2'
            >
              <Icons.FacebookIcon />
              <p className='font-semibold group-hover:text-[#17A9FD]'>Facebook</p>
            </button>
          </div>
          <p className='text-[14px] text-gray-6 text-center'>
            Don't have account?
            <span>
              {' '}
              <Link href={URL_PATHS.signup} className='text-gray-9 font-medium text-[14px] hover:text-green'>
                Register
              </Link>
            </span>
          </p>
        </form>
      </Form>
    </div>
  );
};

export default LoginPage;
