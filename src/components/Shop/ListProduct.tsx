'use client';
import React, { useState } from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { productDTO1 } from '@/lib/content';
import CardProduct from '../CardProduct/CardProduct';
import PaginationPage from '../Pagination/Pagination';
type Props = {};

const ListProduct = (props: Props) => {
  const [inPage, setInPage] = useState<number>(2);

  const handlePageChange = (page: number) => {
    setInPage(page);
  };

  return (
    <section className='flex flex-col w-full '>
      <div className='flex w-full justify-between items-center'>
        <div className='flex gap-2 items-center'>
          <p className='text-gray-5 text-[14px]'>Sort by:</p>
          <Select value='latest'>
            <SelectTrigger className='w-[166px]'>
              <SelectValue placeholder='Choose an option' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value='latest'>Latest</SelectItem>
                <SelectItem value='newest'>Newest</SelectItem>
                <SelectItem value='high-price'>High Price</SelectItem>
                <SelectItem value='low-price'>Low Price</SelectItem>
                <SelectItem value='best-sell'>Best Sell</SelectItem>
                <SelectItem value='sale'>Sale</SelectItem>
                <SelectItem value='in-stock'>In Stock</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <p className='font-medium text-gray-6'>
          <span className='font-semibold text-gray-9'>52</span> Result Found
        </p>
      </div>
      <section className='grid grid-cols-3 gap-6 mt-6 mb-6'>
        {productDTO1.map((item, index) => (
          <CardProduct key={index} src={item.src} title={item.title} price={item.price} rate={item.rate} />
        ))}
        {productDTO1.map((item, index) => (
          <CardProduct key={index} src={item.src} title={item.title} price={item.price} rate={item.rate} />
        ))}
        {productDTO1.map((item, index) => (
          <CardProduct key={index} src={item.src} title={item.title} price={item.price} rate={item.rate} />
        ))}
      </section>
      <section className='w-full flex items-center justify-center'>
        <PaginationPage totalPage={15} inPage={inPage} handleChangePage={handlePageChange} />
      </section>
    </section>
  );
};

export default ListProduct;
