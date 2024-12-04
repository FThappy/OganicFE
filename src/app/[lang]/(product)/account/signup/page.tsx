'use client';
import React from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { checkValidGmail } from '@/utils/utlilsEmail';
import { Label } from '@/components/ui/label';
import { ButtonGlobal } from '@/components/ButtonGlobal/Button';
import InputString from '@/components/Form/InputCustom/InputString';
import { Link } from '@/i18n/routing';
import { URL_PATHS } from '@/constants/url-path';
import { checkValidPhoneNumber } from '@/utils/utilsPhone';
import { PhoneInput } from '@/components/ui/phone-input';
import { SingleValue } from 'react-select';
import { Option } from '@/types/constants';
import dynamic from 'next/dynamic';
import makeAnimated from 'react-select/animated';
import { phoneCodeCountry } from '@/constants/phoneCodeCountry';
import { checkValidPassword } from '@/utils/utilisPassword';
import { Checkbox } from '@/components/ui/checkbox';
import PasswordStrengthMeter from '@/components/Signup/PasswordStrengthMeter';

const SelectReact = dynamic(() => import('react-select'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

const animatedComponents = makeAnimated();
const customMenu = (option: any) => {
  return (
    <div className='flex items-center gap-2'>
      <img
        src={`https://flagcdn.com/32x24/${option.value.toLowerCase()}.png`}
        className='max-w-10 h-4'
        loading='lazy'
      />
      {`${option.label}`}
    </div>
  );
};

const SignUpPage = () => {
  const formSchema = z
    .object({
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
      address: z
        .string({
          required_error: 'This field is required'
        })
        .min(1, {
          message: 'This field is required'
        })
        .max(250, {
          message: 'Value at least 250 characters'
        }),
      country: z
        .string({
          required_error: 'This field is required'
        })
        .min(1, {
          message: 'This field is required'
        })
        .max(250, {
          message: 'Value at least 250 characters'
        }),
      zipCode: z
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
        })
        .refine(val => checkValidPassword(val), {
          message: 'Password is not valid'
        }),
      rePassword: z
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
      terms: z.boolean({
        message: 'This field is required'
      })
    })
    .superRefine(({ rePassword, password }, ctx) => {
      if (rePassword !== password) {
        ctx.addIssue({
          code: 'custom',
          message: 'The passwords did not match',
          path: ['confirmPassword']
        });
      }
    });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: ''
    }
  });

  const { watch } = form;
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  const errorFunc = (err: any) => {
    console.log('err', err);
  };
  return (
    <div className='w-full flex py-[80px] items-center justify-center'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit, errorFunc)}
          className=' bg-white shadow-lg border rounded-[8px] grid grid-cols-3 gap-4 px-6 pt-6 pb-8'
        >
          <p className='text-gray-9 font-semibold text-[32px] text-center col-span-3'>Create Account</p>
          <div className='col-span-3'>
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
          </div>
          <FormField
            control={form.control}
            name='address'
            render={({ field }) => (
              <FormItem className='col-span-3'>
                <Label className='text-sm '>
                  Street Address <span className='text-red-500'>*</span>
                </Label>
                <FormControl>
                  <InputString
                    placeholder='Your Address'
                    max={250}
                    error={form.formState.errors.address}
                    field={field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='country'
            render={({ field }) => (
              <FormItem className='z-[100] col-span-2'>
                <Label className='text-sm '>
                  Country / Region <span className='text-red-500'>*</span>
                </Label>
                <FormControl>
                  <SelectReact
                    closeMenuOnSelect={true}
                    components={animatedComponents}
                    placeholder={'Select Country'}
                    styles={{
                      control: (provided, state) => ({
                        ...provided,
                        fontSize: '14px',
                        borderRadius: '8px',
                        borderColor: form.formState.errors.country ? 'red' : '#e5e7eb',
                        '&:hover': {
                          borderColor: form.formState.errors.country ? 'red' : '#e5e7eb'
                        },
                        minHeight: '52px',
                        width: '100%',
                        ...(state.isFocused && {
                          borderColor: form.formState.errors.country ? 'red' : '#00B207',
                          boxShadow: form.formState.errors.country ? '0 0 0 1px red' : '0 0 0 1px #00B207'
                        })
                      }),
                      menu: provided => ({
                        ...provided,
                        fontSize: '14px'
                      }),
                      dropdownIndicator: provided => ({
                        ...provided,
                        padding: '12px',
                        svg: {
                          width: '14px',
                          height: '14px'
                        }
                      })
                    }}
                    formatOptionLabel={customMenu}
                    options={phoneCodeCountry.map(val => {
                      return {
                        label: val.name,
                        value: val.code
                      };
                    })}
                    onChange={(val: SingleValue<unknown>) => {
                      const result = val as Option;
                      field.onChange(result.value);
                    }}
                    filterOption={(option, inputValue) => {
                      return option.label.toLowerCase().includes(inputValue.toLowerCase());
                    }}
                    menuPosition='fixed'
                    menuPlacement='auto'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='zipCode'
            render={({ field }) => (
              <FormItem>
                <Label className='text-sm '>
                  Zip Code <span className='text-red-500'>*</span>
                </Label>
                <FormControl>
                  <InputString placeholder='Zip Code' max={250} error={form.formState.errors.address} field={field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='col-span-3 flex items-start gap-4'>
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
          </div>
          <div className='col-span-3 flex items-center gap-4'>
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <Label className='text-sm '>
                    Password <span className='text-red-500'>*</span>
                  </Label>
                  <FormControl>
                    <InputString
                      type='password'
                      placeholder='Your Comfirm Passowrd'
                      max={250}
                      error={form.formState.errors.password}
                      field={field}
                      att={{ autoComplete: 'new-password' }}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='rePassword'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <Label className='text-sm '>
                    Comfirm Passowrd <span className='text-red-500'>*</span>
                  </Label>
                  <FormControl>
                    <InputString
                      type='password'
                      placeholder='Your Comfirm Passowrd'
                      max={250}
                      error={form.formState.errors.rePassword}
                      field={field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className='w-full flex items-center justify-between col-span-3'>
            <FormField
              control={form.control}
              name='terms'
              render={({ field }) => (
                <FormItem className='flex items-center'>
                  <FormControl>
                    <div className='flex items-center gap-2'>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      <p className='text-gray-6 text-[14px]'>Accept all terms & Conditions</p>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className='col-span-3'>
            <PasswordStrengthMeter password={watch('password')} />
          </div>
          <ButtonGlobal
            size='small'
            className='group z-50 w-full mt-4 col-span-3'
            animation='middle'
            coverage='980%'
            type='submit'
          >
            <div
              className={`py-[2.5px] flex items-center   group-hover:animate-white-to-green animate-green-to-white  gap-2`}
            >
              <p className={`font-semibold   group-hover:animate-white-to-green animate-green-to-white   z-50`}>
                Create Account
              </p>
            </div>
          </ButtonGlobal>
          <p className='text-[14px] text-gray-6 text-center col-span-3'>
            Already have account
            <span>
              {' '}
              <Link href={URL_PATHS.login} className='text-gray-9 font-medium text-[14px] hover:text-green'>
                Login
              </Link>
            </span>
          </p>
        </form>
      </Form>
    </div>
  );
};

export default SignUpPage;
