'use client';
import React from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { checkValidGmail } from '@/utils/utlilsEmail';
import { Label } from '@/components/ui/label';
import InputString from '@/components/Form/InputCustom/InputString';
import { Textarea } from '@/components/ui/textarea';
import { ButtonGlobal } from '@/components/ButtonGlobal/Button';
import Icons from '@/constants/svgIcon';

type Props = {};

const formSchema = z.object({
  title: z
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
  description: z
    .string({
      required_error: 'This field is required'
    })
    .min(1, {
      message: 'This field is required'
    })
    .max(250, {
      message: 'Value at least 250 characters'
    }),
  subject: z
    .string({
      required_error: 'This field is required'
    })
    .min(1, {
      message: 'This field is required'
    })
    .max(250, {
      message: 'Value at least 250 characters'
    })
});
const ContactUs = (props: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {}
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className='flex flex-col w-full'>
      <div className='flex items-center justify-between container  py-16'>
        <div className='h-[525px] w-[312px] bg-white shadow-lg border rounded-[8px] flex flex-col px-5 py-4'>
          <div className='flex flex-col items-center gap-4 py-6'>
            <Icons.LocalContact />
            <p className='w-[272px] text-center text-gray-8'>2715 Ash Dr. San Jose, South Dakota 83475</p>
          </div>
          <div className='h-1 w-full border-t border-t-gray-400'></div>
          <div className='flex flex-col items-center gap-4 py-6'>
            <Icons.MailContact />
            <p className='w-[272px] text-center text-gray-8'>
              <a href='mailto:Proxy@gmail.com'>Proxy@gmail.com</a>
            </p>
            <p className='w-[272px] text-center text-gray-8'>
              <a href='mailto:Help.proxy@gmail.com'>Help.proxy@gmail.com</a>
            </p>
          </div>
          <div className='h-1 w-full border-t border-t-gray-400'></div>
          <div className='flex flex-col items-center gap-4 py-6'>
            <Icons.PhoneContact />
            <p className='w-[272px] text-center text-gray-8'>
              <a href='tel:+(219) 555-0114'>(219) 555-0114</a>
            </p>
            <p className='w-[272px] text-center text-gray-8'>
              <a href='tel:+(164) 333-0487'>(164) 333-0487</a>
            </p>
          </div>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='h-[525px] w-[984px] bg-white shadow-lg border rounded-[8px] px-[50px] py-4'
          >
            <p className='text-gray-9 font-semibold text-[24px]'>Just Say Hello!</p>
            <p className='w-[486px] text-gray-5 text-[14px]'>
              Do you fancy saying hi to me or you want to get started with your project and you need my help? Feel free
              to contact me.
            </p>
            <div className='grid grid-cols-2 gap-4 mt-4'>
              <FormField
                control={form.control}
                name='title'
                render={({ field }) => (
                  <FormItem className='w-full'>
                    <Label className='text-sm '>
                      Title <span className='text-red-500'>*</span>
                    </Label>
                    <FormControl>
                      <InputString
                        placeholder='Your title'
                        max={250}
                        error={form.formState.errors.title}
                        field={field}
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
                      <InputString
                        placeholder='Your Email'
                        max={250}
                        error={form.formState.errors.email}
                        field={field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className='col-span-2'>
                <FormField
                  control={form.control}
                  name='description'
                  render={({ field }) => (
                    <FormItem className='w-full'>
                      <Label className='text-sm '>
                        Description <span className='text-red-500'>*</span>
                      </Label>
                      <FormControl>
                        <InputString
                          placeholder='Your description'
                          max={250}
                          error={form.formState.errors.description}
                          field={field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='col-span-2'>
                <FormField
                  control={form.control}
                  name='subject'
                  render={({ field }) => (
                    <FormItem className='w-full'>
                      <Label className='text-sm '>
                        Subject <span className='text-red-500'>*</span>
                      </Label>
                      <FormControl>
                        <Textarea
                          placeholder='Subjects'
                          {...field}
                          maxLength={255}
                          className={`resize-none	h-[100px] ${form.formState.errors.subject ? 'border border-red-500 focus-visible:outline-none focus-visible:border-red-500' : ''}`}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <ButtonGlobal
              size='small'
              className='group z-50 w-[200px] mt-4'
              animation='middle'
              coverage='360%'
              type='submit'
            >
              <div
                className={`py-[2.5px] flex items-center   group-hover:animate-white-to-green animate-green-to-white  gap-2`}
              >
                <p className={`font-semibold   group-hover:animate-white-to-green animate-green-to-white   z-50`}>
                  Send Message
                </p>
              </div>
            </ButtonGlobal>
          </form>
        </Form>
      </div>
      <div className='w-full h-[400px]'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.634176901266!2d105.8400686759928!3d21.007296380636788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad5569f4fbf1%3A0x5bf30cadcd91e2c3!2zQ-G7lW5nIFRy4bqnbiDEkOG6oWkgTmdoxKlhIC0gxJDhuqFpIEjhu41jIELDoWNoIEtob2EgSMOgIE7hu5lp!5e0!3m2!1svi!2s!4v1732862366615!5m2!1svi!2s'
          className='w-full h-full'
          loading='lazy'
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
