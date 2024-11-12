'use client';
import FilterProduct from '@/components/Shop/FilterProduct';
import ListProduct from '@/components/Shop/ListProduct';
import React, { useState } from 'react';

const Shop = () => {
  const [minValue, setMinValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(0);
  return (
    <section className='container flex gap-6 mt-6'>
      <FilterProduct setMinValue={setMinValue} setMaxValue={setMaxValue} />
      <ListProduct />
    </section>
  );
};

export default Shop;
