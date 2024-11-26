'use client';
import { Minus, Plus } from 'lucide-react';
import React from 'react';

type Props = {
  handleChange: (quantity: number) => void;
  quantity: number;
};

const InputQuantityProduct = (props: Props) => {
  const { handleChange, quantity } = props;
  return (
    <div className='flex p-2 border border-gray-0 rounded-[170px] min-w-[124px] '>
      <button
        onClick={e => {
          e.preventDefault();
          if (quantity > 1) {
            handleChange(quantity - 1);
          }
        }}
        className='w-[34px] h-[34px] bg-gray-0 flex items-center justify-center rounded-full p-2 hover:opacity-50'
      >
        <Minus className='w-[14px] h-[14px]' />
      </button>
      <div className='px-2 flex justify-center items-center'>
        <input
          className={`rounded-[8px] w-auto text-gray-9 font-medium flex justify-center items-center text-center bg-white border-none shadow-none ring-0 focus-visible:outline-none focus-visible:border-none focus-visible:ring-0`}
          type='number'
          min={1}
          value={quantity}
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
              handleChange(newValue === '' ? 1 : parseFloat(newValue));
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
              handleChange(newValue === '' ? 1 : parseFloat(newValue));
            }
          }}
          max={999999}
        />
      </div>
      <button
        onClick={e => {
          e.preventDefault();
          if (quantity <= 999999) {
            handleChange(quantity + 1);
          }
        }}
        className='w-[34px] h-[34px] bg-gray-0 flex items-center justify-center rounded-full p-2 hover:opacity-50'
      >
        <Plus className='w-[14px] h-[14px]' />
      </button>
    </div>
  );
};
export default InputQuantityProduct;
