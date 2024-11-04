'use client';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import React from 'react';
import { ControllerRenderProps, FieldValues, Path } from 'react-hook-form';
type Option = {
  value: string;
  label: string;
};
type Props<T extends FieldValues> = {
  type?: string;
  data: Option[];
  placeholder: string;
  error: unknown;
  field: ControllerRenderProps<T, Path<T>>;
};

const SeclectShortOption = <T extends FieldValues>({ type, placeholder, data, error, field }: Props<T>) => {
  return (
    <Select value={field.value} disabled={type === 'info'} onValueChange={value => field.onChange(value)}>
      <SelectTrigger
        className={`rounded-[8px] px-[14px] py-[10px] h-[52px] bg-white ${error ? 'border border-red-500 ' : ''}`}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {data.map((value, index) => (
          <SelectItem key={index} value={value.value}>
            {value.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SeclectShortOption;
