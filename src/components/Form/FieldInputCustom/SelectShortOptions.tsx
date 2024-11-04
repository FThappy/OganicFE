'use client';
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import React from 'react';
import { FieldValues, Path, UseFormReturn } from 'react-hook-form';
type Option = {
  value: string;
  label: string;
};
type Props<T extends FieldValues> = {
  form: UseFormReturn<T>;
  type?: string;
  fieldName: string;
  name: string;
  placeholder: string;
  data: Option[];
  required?: boolean;
};

const SeclectShortOption = <T extends FieldValues>({
  form,
  type,
  fieldName,
  name,
  placeholder,
  data,
  required = false
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
          <Select value={field.value} disabled={type === 'info'} onValueChange={value => field.onChange(value)}>
            <FormControl className='bg-white'>
              <SelectTrigger
                className={`rounded-[8px] px-[14px] py-[10px] h-[52px] bg-white ${form.formState.errors[fieldName] ? 'border border-red-500 ' : ''}`}
              >
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {data.map((value, index) => (
                <SelectItem key={index} value={value.value}>
                  {value.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default SeclectShortOption;
