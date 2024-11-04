'use client';
import { Input } from '@/components/ui/input';
import React from 'react';
import { ControllerRenderProps, FieldValues, Path } from 'react-hook-form';

type Props<T extends FieldValues> = {
  type?: string;
  placeholder: string;
  max?: number;
  error: unknown;
  field: ControllerRenderProps<T, Path<T>>;
};

const InputString = <T extends FieldValues>({ type, placeholder, max, error, field }: Props<T>) => {
  return (
    <Input
      className={`rounded-[8px] px-[14px] py-[10px] h-[52px] bg-white ${error ? 'border border-red-500 focus-visible:outline-none focus-visible:border-red-500' : ''}`}
      placeholder={placeholder}
      {...field}
      maxLength={max}
      disabled={type === 'info'}
    />
  );
};

export default InputString;
