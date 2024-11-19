'use client';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import InputRating from '../Form/InputCustom/InputRating';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Textarea } from '../ui/textarea';
import Emoji from './Emoji';
import { PiPaperPlaneRightFill } from 'react-icons/pi';

type Props = {};
const formSchema = z.object({
  comment: z
    .string()
    .min(2, {
      message: 'Comment must be at least 2 characters.'
    })
    .max(255, {
      message: 'Comment must not exceed 255 characters.'
    }),
  rate: z
    .number()
    .min(0, {
      message: 'Rating must be at least 0.'
    })
    .max(5, {
      message: 'Rating must not exceed 5.'
    })
});
const InputComments = (props: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      comment: '',
      rate: 5
    }
  });
  const { watch, setValue } = form;
  const handleChangeComment = (value: string) => {
    setValue('comment', watch('comment') + value);
  };
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='border border-slate-300 rounded-[8px] p-2  pb-4 h-36 relative'
      >
        <FormField
          control={form.control}
          name='rate'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className='flex justify-between'>
                  <Avatar>
                    <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <InputRating field={field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='comment'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder='Write your comment here...'
                  className='resize-none mt-2 border-none ring-none shadow-none focus-visible:border-none focus-visible:ring-0'
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <div className='flex justify-end items-center gap-4'>
          <Emoji handleChangeComment={handleChangeComment} />
          <button type='submit'>
            <PiPaperPlaneRightFill color={watch('comment') ? '#1E90FF' : '#E8E5ED'} size={24} />
          </button>
        </div>
      </form>
    </Form>
  );
};

export default InputComments;
