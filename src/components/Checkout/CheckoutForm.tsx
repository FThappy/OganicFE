import React from 'react';
import dynamic from 'next/dynamic';
import { zodResolver } from '@hookform/resolvers/zod';
import { ControllerRenderProps, Path, useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { checkValidGmail } from '@/utils/utlilsEmail';
import { checkValidPhoneNumber } from '@/utils/utilsPhone';
import InputString from '../Form/InputCustom/InputString';
import { Label } from '../ui/label';
import { SingleValue } from 'react-select';
import makeAnimated from 'react-select/animated';
import { phoneCodeCountry } from '@/constants/phoneCodeCountry';
import { Option } from '@/types/constants';
const SelectReact = dynamic(() => import('react-select'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

const animatedComponents = makeAnimated();
type Props = {};
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
  companyName: z.string().optional(),
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
  city: z
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
  notes: z
    .string({
      required_error: 'This field is required'
    })
    .max(255, {
      message: 'Value at least 250 characters'
    })
    .optional()
});
const CheckoutForm = (props: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: ''
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
  console.log(watch('country'));
  return (
    <Form {...form}>
      <p className='text-gray-9 text-[24px]'>Billing Information</p>
      <form onSubmit={form.handleSubmit(onSubmit, errorFunc)} className='grid grid-cols-3 gap-4'>
        <div className='col-span-2'>
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
          name='companyName'
          render={({ field }) => (
            <FormItem>
              <Label className='text-sm '>
                Company Name <span className='text-gray-5'>(optional)</span>
              </Label>
              <FormControl>
                <InputString
                  placeholder='Company name'
                  max={250}
                  error={form.formState.errors.companyName}
                  field={field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='address'
          render={({ field }) => (
            <FormItem className='col-span-3'>
              <Label className='text-sm '>
                Street Address <span className='text-red-500'>*</span>
              </Label>
              <FormControl>
                <InputString placeholder='Your Address' max={250} error={form.formState.errors.address} field={field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='country'
          render={({ field }) => (
            <FormItem className='z-[10000] col-span-2'>
              <Label className='text-sm '>
                Country / Region <span className='text-red-500'>*</span>
              </Label>
              <FormControl>
                <SelectReact
                  closeMenuOnSelect={true}
                  components={animatedComponents}
                  placeholder={'Select Country'}
                  //   defaultValue={type === 'create' ? [] : handleGetValue(field, data)}
                  styles={{
                    control: (provided, state) => ({
                      ...provided,
                      fontSize: '14px',
                      borderRadius: '8px',
                      borderColor: form.formState.errors.country ? 'red' : '#687197',
                      '&:hover': {
                        borderColor: form.formState.errors.country ? 'red' : '#687197'
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
        <div className='col-span-3 flex items-center gap-4'>
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
          <div className=' flex flex-col w-full gap-3'>
            <Label className='text-sm '>
              Phone <span className='text-red-500'>*</span>
            </Label>
            <div className='w-full flex items-center'>
              <div className='box-border p-2   border border-r-0 rounded-l-[8px] h-[52px]'>
                {watch('country') ? (
                  <div className='flex items-center h-full justify-center gap-2'>
                    <img
                      src={`https://flagcdn.com/w40/${watch('country').toLowerCase()}.png`}
                      className='max-w-10 h-4'
                    />
                    ({`${phoneCodeCountry.find(val => val.code === watch('country'))?.dial_code}`})
                  </div>
                ) : (
                  <div className='flex items-center h-full justify-center gap-2'>
                    <img src={`https://flagcdn.com/w40/un.png`} loading='lazy' />
                  </div>
                )}
              </div>
              <FormField
                control={form.control}
                name='phone'
                render={({ field }) => (
                  <FormItem className='w-full'>
                    <FormControl>
                      <InputString
                        placeholder='Your Phone'
                        max={250}
                        error={form.formState.errors.phone}
                        field={field}
                        classNames='rounded-[0px] rounded-r-[8px] '
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
        <div className='col-span-3 flex flex-col gap-4'>
          <p className='text-gray-9 text-[24px]'>Additional Info</p>
        </div>
      </form>
    </Form>
  );
};

export default CheckoutForm;
