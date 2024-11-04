'use client';
import SelectReact, { SingleValue } from 'react-select';
import makeAnimated from 'react-select/animated';
import React from 'react';
import { ControllerRenderProps, FieldValues, Path } from 'react-hook-form';
const animatedComponents = makeAnimated();
type Option = {
  value: string;
  label: string;
};
export type PropsLong<T extends FieldValues> = {
  type?: string;
  data: Option[];
  placeholder: string;
  error: unknown;
  field: ControllerRenderProps<T, Path<T>>;
  handleGetValue: (field: ControllerRenderProps<T, Path<T>>, data: Option[]) => void;
};

const SelectLongOptions = <T extends FieldValues>({
  type,
  placeholder,
  handleGetValue,
  data,
  error,
  field
}: PropsLong<T>) => {
  return (
    <SelectReact
      closeMenuOnSelect={true}
      components={animatedComponents}
      isDisabled={type === 'info'}
      placeholder={placeholder}
      defaultValue={type === 'create' ? [] : handleGetValue(field, data)}
      styles={{
        control: provided => ({
          ...provided,
          fontSize: '14px',
          borderRadius: '8px',
          borderColor: error ? 'red' : '#687197',
          '&:hover': {
            borderColor: error ? 'red' : '#687197'
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
  );
};

export default SelectLongOptions;
