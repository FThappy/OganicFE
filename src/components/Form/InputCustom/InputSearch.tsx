'use client';
import { Input } from '@/components/ui/input';
import Icons from '@/constants/svgIcon';
import React, { useRef, useState } from 'react';
import { FaXmark } from 'react-icons/fa6';

type Props = {
  placeHoderSearch: string;
  onChangeSearchValue?: (e: React.ChangeEvent<HTMLInputElement>, type?: string) => void;
  type?: string;
  additionalClass?: string;
};

const InputSearch = (props: Props) => {
  const { placeHoderSearch, onChangeSearchValue, type, additionalClass } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchValue, setSearchValue] = useState<string>('');

  const clearSearchValue = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
      setSearchValue('');
      const event = { target: inputRef.current } as React.ChangeEvent<HTMLInputElement>;
      //   onChangeSearchValue(event, type);
    }
  };
  return (
    <div className='relative'>
      <Icons.Search className='absolute w-6 h-6 top-1/2 transform -translate-y-1/2 left-2' />
      <Input
        placeholder={placeHoderSearch}
        className={`h-[45px] text-sm rounded-[6px] pr-8 pl-8 ${additionalClass}`}
        type='search'
        id='search'
        ref={inputRef}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          e.preventDefault();
          if (inputRef.current) {
            setSearchValue(inputRef.current.value);
          }
          //   onChangeSearchValue(e, type);
        }}
      />
      {searchValue && (
        <div className='p-[4px] hover:bg-slate-200 rounded-full absolute right-[6px] top-1/2 transform -translate-y-1/2 '>
          <FaXmark onClick={clearSearchValue} className='cursor-pointer' color='gray' size={14} />
        </div>
      )}
    </div>
  );
};

export default InputSearch;
