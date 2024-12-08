'use client';
import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitErrorHandler, useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';

import { z } from 'zod';
import { checkValidPassword } from '@/utils/utilisPassword';
import { ButtonGlobal } from '@/components/ButtonGlobal/Button';
import { Label } from '@/components/ui/label';
import InputString from '@/components/Form/InputCustom/InputString';
import { Eye, EyeOff } from 'lucide-react';
const formSchema = z
  .object({
    currentPassword: z
      .string({
        required_error: 'This field is required'
      })
      .min(1, {
        message: 'This field is required'
      })
      .max(250, {
        message: 'Value at least 250 characters'
      }),
    newPassword: z
      .string({
        required_error: 'This field is required'
      })
      .min(1, {
        message: 'This field is required'
      })
      .max(250, {
        message: 'Value at least 250 characters'
      })
      .refine(val => checkValidPassword(val), {
        message: 'Password is not valid'
      }),
    confirmPassword: z
      .string({
        required_error: 'This field is required'
      })
      .min(1, {
        message: 'This field is required'
      })
      .max(250, {
        message: 'Value at least 250 characters'
      })
      .refine(val => checkValidPassword(val), {
        message: 'Password is not valid'
      })
  })
  .superRefine(({ confirmPassword, newPassword }, ctx) => {
    if (confirmPassword !== newPassword) {
      ctx.addIssue({
        code: 'custom',
        message: 'The passwords did not match',
        path: ['confirmPassword']
      });
    }
  });
type ViewPassType = {
  currentPass: boolean;
  newPass: boolean;
  comfirmPass: boolean;
};
const ChangePassForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {}
  });
  const [viewPass, setViewPass] = useState<ViewPassType>({
    currentPass: false,
    newPass: false,
    comfirmPass: false
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  const errorFunc: SubmitErrorHandler<z.infer<typeof formSchema>> = err => {
    console.log('err', err);
  };
  return (
    <section className='shadow-md rounded-lg w-full border border-gray-1 '>
      <div className='flex justify-between items-center px-6 py-3 border-b-gray-1 border-b-1 rounded-t-lg'>
        <p className='text-gray-9 font-medium text-[20px]'>Change Password</p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit, errorFunc)}
          className=' w-full  border-t  flex flex-col gap-[16px] px-6 pt-6 pb-8'
        >
          <FormField
            control={form.control}
            name='currentPassword'
            render={({ field }) => (
              <FormItem className='w-full'>
                <Label className='text-sm '>
                  Current Password <span className='text-red-500'>*</span>
                </Label>
                <FormControl>
                  <div className='relative'>
                    <InputString
                      type={viewPass.currentPass ? 'text' : 'password'}
                      placeholder='Your Comfirm Passowrd'
                      classNames='pr-12'
                      max={250}
                      error={form.formState.errors.currentPassword}
                      field={field}
                      att={{ autoComplete: 'new-password' }}
                    />
                    {viewPass.currentPass ? (
                      <EyeOff
                        className='absolute right-2 top-[1rem] cursor-pointer'
                        onClick={e => {
                          e.preventDefault();
                          setViewPass(prev => ({ ...prev, currentPass: false }));
                        }}
                      />
                    ) : (
                      <Eye
                        className='absolute right-2 top-[1rem] cursor-pointer'
                        onClick={e => {
                          e.preventDefault();
                          setViewPass(prev => ({ ...prev, currentPass: true }));
                        }}
                      />
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='flex gap-4'>
            <FormField
              control={form.control}
              name='newPassword'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <Label className='text-sm '>
                    New Password <span className='text-red-500'>*</span>
                  </Label>
                  <FormControl>
                    <div className='relative'>
                      <InputString
                        type={viewPass.newPass ? 'text' : 'password'}
                        placeholder='Your Comfirm Passowrd'
                        classNames='pr-12'
                        max={250}
                        error={form.formState.errors.newPassword}
                        field={field}
                        att={{ autoComplete: 'new-password' }}
                      />
                      {viewPass.newPass ? (
                        <EyeOff
                          className='absolute right-2 top-[1rem] cursor-pointer'
                          onClick={e => {
                            e.preventDefault();
                            setViewPass(prev => ({ ...prev, newPass: false }));
                          }}
                        />
                      ) : (
                        <Eye
                          className='absolute right-2 top-[1rem] cursor-pointer'
                          onClick={e => {
                            e.preventDefault();
                            setViewPass(prev => ({ ...prev, newPass: true }));
                          }}
                        />
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='confirmPassword'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <Label className='text-sm '>
                    Confirm Password <span className='text-red-500'>*</span>
                  </Label>
                  <FormControl>
                    <div className='relative'>
                      <InputString
                        type={viewPass.comfirmPass ? 'text' : 'password'}
                        placeholder='Your Comfirm Passowrd'
                        classNames='pr-12'
                        max={250}
                        error={form.formState.errors.confirmPassword}
                        field={field}
                        att={{ autoComplete: 'new-password' }}
                      />
                      {viewPass.comfirmPass ? (
                        <EyeOff
                          className='absolute right-2 top-[1rem] cursor-pointer'
                          onClick={e => {
                            e.preventDefault();
                            setViewPass(prev => ({ ...prev, comfirmPass: false }));
                          }}
                        />
                      ) : (
                        <Eye
                          className='absolute right-2 top-[1rem] cursor-pointer'
                          onClick={e => {
                            e.preventDefault();
                            setViewPass(prev => ({ ...prev, comfirmPass: true }));
                          }}
                        />
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <ButtonGlobal
            size='small'
            className='group z-50 w-[200px] mt-4'
            animation='middle'
            coverage='320%'
            type='submit'
          >
            <div
              className={` py-[2.5px] flex items-center   group-hover:animate-white-to-green animate-green-to-white  gap-2`}
            >
              <p className={`font-semibold   group-hover:animate-white-to-green animate-green-to-white   z-50`}>
                Change Password
              </p>
            </div>
          </ButtonGlobal>
        </form>
      </Form>
    </section>
  );
};

export default ChangePassForm;
