/* <ButtonGlobal size='small' className='group  z-50' animation='middle' backgroundColor={greenDefault}>
        <p className='font-semibold group-hover:animate-white-to-green animate-green-to-white z-50'>Normal</p>
      </ButtonGlobal>
      <ButtonGlobal
        size='small'
        className='group z-50'
        animation='middle'
        backgroundColor={greenDefault}
        primary={false}
      >
        <p className='font-semibold group-hover:animate-green-to-white animate-white-to-green  z-50'>
          Normal ádasd ádasd aaaaaaaaaaaaaaaaaaaaaaa aaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaa
        </p>
      </ButtonGlobal>
      <LinkGlobal link='/' size='small' className='group  z-50' animation='middle'>
        <p className='font-semibold group-hover:animate-white-to-green animate-green-to-white z-50'>Normal</p>
      </LinkGlobal>
      <LinkGlobal link='/' size='small' className='group  z-50' animation='middle' primary={false}>
        <p className='font-semibold group-hover:animate-green-to-white animate-white-to-green  z-50'>Normal</p>
      </LinkGlobal>
      <Icons.IconHeaderRight /> */

/* <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit, errorFunc)} className='space-y-8'>
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem className='w-full flex flex-col'>
                <Label className='text-sm '>
                  Name <span className='text-red-500'>*</span>
                </Label>
                <FormControl>
                  <InputNumber
                    placeholder='Number'
                    min={0}
                    max={100}
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
            name='description'
            render={({ field }) => (
              <FormItem className='w-full flex flex-col'>
                <Label className='text-sm '>
                  Name <span className='text-red-500'>*</span>
                </Label>
                <FormControl>
                  <InputString
                    placeholder='Description'
                    max={250}
                    error={form.formState.errors.description}
                    field={field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='optionResults'
            render={({ field }) => (
              <FormItem className='w-full flex flex-col'>
                <Label className='text-sm '>
                  Name <span className='text-red-500'>*</span>
                </Label>
                <FormControl>
                  <SelectMultiOptions<z.infer<typeof formSchema>>
                    data={options}
                    field={field}
                    handleGetValue={handleGetValue}
                    handleSetValue={handleSetValue}
                    error={form.formState.errors.optionResults}
                    placeholder='Select'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='status'
            render={({ field }) => (
              <FormItem className='w-full flex flex-col'>
                <Label className='text-sm '>
                  Name <span className='text-red-500'>*</span>
                </Label>
                <FormControl>
                  <SelectLongOptions<z.infer<typeof formSchema>>
                    data={options}
                    field={field}
                    handleGetValue={handleGetValueType}
                    error={form.formState.errors.status}
                    placeholder='Select'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='type'
            render={({ field }) => (
              <FormItem className='w-full flex flex-col'>
                <Label className='text-sm '>
                  Name <span className='text-red-500'>*</span>
                </Label>
                <FormControl>
                  <SelectShortOptions
                    data={options}
                    field={field}
                    error={form.formState.errors.type}
                    placeholder='Select'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit'>Submit</Button>
        </form>
      </Form>
      <h1>{t('title')}</h1>
      <Link href='/vi-VN/abc'>AVC</Link> */
// }
// const form = useForm<z.infer<typeof formSchema>>({
//   resolver: zodResolver(formSchema),
//   defaultValues: {
//     username: 0,
//     description: '',
//     optionResults: [],
//     type: ''
//   }
// });
// function onSubmit(values: z.infer<typeof formSchema>) {
//   console.log(values);
//   toastifyUtils('error', 'Lỗi server');
// }
// const t = useTranslations('HomePage');
// const handleGetValue = (
//   field: ControllerRenderProps<z.infer<typeof formSchema>, Path<z.infer<typeof formSchema>>>,
//   data: Option[]
// ) => {
//   const optionField = field as unknown as ControllerRenderProps<
//     { optionResults: { result: string; id?: string }[] },
//     'optionResults'
//   >;

//   return optionField.value?.map(item => ({
//     value: item.result,
//     label: data.find(itemRole => itemRole.value === item.result)?.label
//   }));
// };
// const handleSetValue = (
//   val: MultiValue<unknown>,
//   field: ControllerRenderProps<z.infer<typeof formSchema>, Path<z.infer<typeof formSchema>>>
// ) => {
//   const result = (val as MultiValue<Option>).map(item => ({ result: item.value }));
//   field.onChange(result);
// };
// const handleGetValueType = (
//   field: ControllerRenderProps<z.infer<typeof formSchema>, Path<z.infer<typeof formSchema>>>,
//   data: Option[]
// ) => {
//   return data.find(item => item.value === field.value);
// };
// const errorFunc = (err: unknown) => {
//   console.log('err', err);
// };

// import dynamic from 'next/dynamic';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { ControllerRenderProps, FieldValues, Path, useForm, UseFormReturn } from 'react-hook-form';
// import { ButtonGlobal } from '@/components/ButtonGlobal/Button';
// import { LinkGlobal } from '@/components/LinkGlobal/LinkGlobal';
// import Icons from '@/constants/svgIcon';
// import { greenDefault } from '@/lib/content';
// import { z } from 'zod';
// import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
// import { Button } from '@/components/ui/button';
// import { useTranslations } from 'next-intl';
// import Link from 'next/link';
// import toastifyUtils from '@/utils/toastify';
// import { Label } from '@/components/ui/label';
// import { Input } from '@/components/ui/input';
// import InputNumber from '@/components/Form/InputCustom/InputNumber';
// import InputString from '@/components/Form/InputCustom/InputString';
// import { MultiValue } from 'react-select';
// const SelectLongOptions = dynamic(() => import('@/components/Form/InputCustom/SelectLongOptions'), { ssr: false }) as <
//   DataType extends Record<string, unknown>
// >(
//   props: PropsLong<DataType & z.infer<typeof formSchema>>
// ) => JSX.Element;
// const SelectMultiOptions = dynamic(() => import('@/components/Form/InputCustom/SelectMultiOptions'), {
//   ssr: false
// }) as <DataType extends Record<string, unknown>>(
//   props: PropsMulti<DataType & z.infer<typeof formSchema>>
// ) => JSX.Element;
// import { Option } from '@/types/constants';
// import { PropsMulti } from '@/components/Form/InputCustom/SelectMultiOptions';
// import { PropsLong } from '@/components/Form/InputCustom/SelectLongOptions';
// import SelectShortOptions from '@/components/Form/InputCustom/SelectShortOptions';

// const optionResult = z.object({
//   id: z.string().optional(),
//   result: z.string({
//     required_error: 'This field is required'
//   })
// });
// const formSchema = z.object({
//   username: z.number(),
//   description: z.string().optional(),
//   optionResults: z.array(optionResult),
//   status: z
//     .string({
//       required_error: 'This field is required'
//     })
//     .min(1, {
//       message: 'This field is required'
//     }),
//   type: z
//     .string({
//       required_error: 'This field is required'
//     })
//     .min(1, {
//       message: 'This field is required'
//     })
// });
// const options = [
//   { value: 'admin', label: 'Admin' },
//   { value: 'user', label: 'User' },
//   { value: 'client', label: 'Client' }
// ];

// font-[family-name:var(--font-geist-sans)

//   <Form {...form}>
//     <form onSubmit={form.handleSubmit(onSubmit, errorFunc)} className='space-y-8'>
//       <InputNumber<z.infer<typeof formSchema>>
//         form={form}
//         fieldName='username'
//         placeholder='User Name'
//         name='Username'
//         required={true}
//         max={20}
//       />
//       <InputString<z.infer<typeof formSchema>>
//         form={form}
//         fieldName='description'
//         placeholder='Description'
//         name='Description'
//         required={true}
//         max={250}
//       />
//       <SelectMultiOptions<z.infer<typeof formSchema>>
//         form={form}
//         fieldName='optionResults'
//         placeholder='optionResults'
//         name='optionResults'
//         required={true}
//         data={options}
//         handleGetValue={handleGetValue}
//         handleSetValue={handleSetValue}
//       />
//       <SelectLongOptions<z.infer<typeof formSchema>>
//         form={form}
//         fieldName='type'
//         placeholder='type'
//         name='type'
//         required={true}
//         data={options}
//         handleGetValue={handleGetValueType}
//       />
//       <SelectShortOptions<z.infer<typeof formSchema>>
//         form={form}
//         fieldName='status'
//         placeholder='status'
//         name='status'
//         required={true}
//         data={options}
//       />
//       <Button type='submit'>Submit</Button>
//     </form>
//   </Form>\

// const SelectLongOptions = dynamic(() => import('@/components/Form/InputCustom/SelectLongOptions'), { ssr: false }) as <
//   DataType extends Record<string, unknown>
// >(
//   props: PropsLong<DataType & z.infer<typeof formSchema>>
// ) => JSX.Element;
// const SelectMultiOptions = dynamic(() => import('@/components/Form/InputCustom/SelectMultiOptions'), {
//   ssr: false
// }) as <DataType extends Record<string, unknown>>(
//   props: PropsMulti<DataType & z.infer<typeof formSchema>>
// ) => JSX.Element;
