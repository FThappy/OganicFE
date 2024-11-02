'use client';
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react';
import { FieldValues, Path, UseFormReturn } from 'react-hook-form';

type Props<T extends FieldValues> = {
  form: UseFormReturn<T>;
  type?: string;
  fieldName: string;
  name: string;
  placeholder: string;
  required?: boolean;
  max?: number;
};

const InputString = <T extends FieldValues>({
  form,
  type,
  fieldName,
  name,
  placeholder,
  max,
  required = true
}: Props<T>) => {
  return (
    <FormField
      control={form.control}
      name={fieldName as Path<T>}
      render={({ field }) => (
        <FormItem className='w-full flex flex-col'>
          <Label className='text-sm '>
            {name} {required && <span className='text-red-500'>*</span>}
          </Label>
          <FormControl>
            <Input
              className={`rounded-[8px] px-[14px] py-[10px] h-[52px] bg-white ${form.formState.errors[fieldName] ? 'border border-red-500 focus-visible:outline-none focus-visible:border-red-500' : ''}`}
              placeholder={placeholder}
              {...field}
              maxLength={max}
              disabled={type === 'info'}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default InputString;
