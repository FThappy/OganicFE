'use client';
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import SelectReact, { MultiValue } from 'react-select';
import makeAnimated from 'react-select/animated';
import { Label } from '@/components/ui/label';
import React from 'react';
import { ControllerRenderProps, FieldValues, Path, UseFormReturn } from 'react-hook-form';
const animatedComponents = makeAnimated();
type Option = {
  value: string;
  label: string;
};
export type PropsMulti<T extends FieldValues> = {
  form: UseFormReturn<T>;
  type?: string;
  fieldName: string;
  name: string;
  data: Option[];
  placeholder: string;
  required?: boolean;
  handleGetValue: (field: ControllerRenderProps<T, Path<T>>, data: Option[]) => void;
  handleSetValue: (val: MultiValue<unknown>, field: ControllerRenderProps<T, Path<T>>) => void;
};

const SelectMultiOptions = <T extends FieldValues>({
  form,
  type,
  fieldName,
  name,
  placeholder,
  handleGetValue,
  handleSetValue,
  data,
  required = true
}: PropsMulti<T>) => {
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
            <SelectReact
              closeMenuOnSelect={false}
              components={animatedComponents}
              isDisabled={type === 'info'}
              placeholder={placeholder}
              value={handleGetValue(field, data)}
              isMulti
              styles={{
                control: provided => ({
                  ...provided,
                  fontSize: '14px',
                  borderRadius: '8px',
                  borderColor: form.formState.errors[fieldName] ? 'red' : '#687197',
                  '&:hover': {
                    borderColor: form.formState.errors[fieldName] ? 'red' : '#687197'
                  },
                  minHeight: '52px',
                  width: '100%'
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
              options={data}
              onChange={(val: MultiValue<unknown>) => {
                handleSetValue(val, field);
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
  );
};

export default SelectMultiOptions;
