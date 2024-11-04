'use client';
import SelectReact, { MultiValue } from 'react-select';
import makeAnimated from 'react-select/animated';
import React from 'react';
import { ControllerRenderProps, FieldValues, Path } from 'react-hook-form';
const animatedComponents = makeAnimated();
type Option = {
  value: string;
  label: string;
};
export type PropsMulti<T extends FieldValues> = {
  type?: string;
  data: Option[];
  placeholder: string;
  error: unknown;
  field: ControllerRenderProps<T, Path<T>>;
  handleGetValue: (field: ControllerRenderProps<T, Path<T>>, data: Option[]) => void;
  handleSetValue: (val: MultiValue<unknown>, field: ControllerRenderProps<T, Path<T>>) => void;
};

const SelectMultiOptions = <T extends FieldValues>({
  type,
  placeholder,
  handleGetValue,
  handleSetValue,
  data,
  error,
  field
}: PropsMulti<T>) => {
  return (
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
      onChange={(val: MultiValue<unknown>) => {
        handleSetValue(val, field);
      }}
      filterOption={(option, inputValue) => {
        return option.label.toLowerCase().includes(inputValue.toLowerCase());
      }}
      menuPosition='fixed'
      menuPlacement='auto'
    />
  );
};

export default SelectMultiOptions;
