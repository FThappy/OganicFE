'use client';
import { Input } from '@/components/ui/input';
import React from 'react';
import { ControllerRenderProps, FieldValues, Path } from 'react-hook-form';

type Props<T extends FieldValues> = {
  type?: string;
  placeholder: string;
  min?: number;
  max?: number;
  error: unknown;
  field: ControllerRenderProps<T, Path<T>>;
};

const InputNumber = <T extends FieldValues>({ type, placeholder, min, max, error, field }: Props<T>) => {
  return (
    <Input
      className={`rounded-[8px] px-[14px] py-[10px] h-[52px] bg-white ${error ? 'border border-red-500 focus-visible:outline-none focus-visible:border-red-500' : ''}`}
      type='number'
      min={min}
      placeholder={placeholder}
      disabled={type === 'info'}
      {...field}
      onWheel={e => {
        e.preventDefault();
        (e.target as HTMLInputElement).blur();
      }}
      onKeyDown={e => {
        if (['e', 'E', '+', '-'].includes(e.key)) {
          e.preventDefault();
        }
      }}
      onPaste={e => {
        const pasteContent = e.clipboardData.getData('text');
        if (/[eE+-]/.test(pasteContent)) {
          e.preventDefault();
        } else {
          const currentValue = (e.target as HTMLInputElement).value;
          let newValue = currentValue + '' + pasteContent;
          for (let i = 0; i < newValue.length; i++) {
            if (newValue[i] === '0') {
              newValue = newValue.replace(newValue[i], '');
              i--;
            } else {
              break;
            }
          }
          newValue = newValue.slice(0, 6);
          field.onChange(newValue === '' ? undefined : parseFloat(newValue));
        }
      }}
      onChange={e => {
        const value = e.target.value;
        if (value === '' || (value.length <= 6 && /^[0-9]*$/.test(value))) {
          let newValue = value.toString();
          for (let i = 0; i < newValue.length; i++) {
            if (newValue[i] === '0') {
              newValue = newValue.replace(newValue[i], '');
              i--;
            } else {
              break;
            }
          }
          newValue = newValue.slice(0, 6);
          e.target.value = newValue === '' ? '' : newValue;
          field.onChange(newValue === '' ? undefined : parseFloat(newValue));
        }
      }}
      max={max}
    />
  );
};

export default InputNumber;
