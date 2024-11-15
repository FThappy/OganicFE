'use client';
import QuickViewProduct from '@/components/QuickViewProduct/QuickViewProduct';
import FilterProduct from '@/components/Shop/FilterProduct';
import ListProduct from '@/components/Shop/ListProduct';
import React, { useState } from 'react';

const Shop = () => {
  const [minValue, setMinValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(0);
  const [activeProduct, setActiveProduct] = useState<number>(0);
  const [openQuickView, setOpenQuickView] = useState<boolean>(true);
  return (
    <section className=' container '>
      <div className='flex gap-6 mt-6 z-[100] relative'>
        <FilterProduct setMinValue={setMinValue} setMaxValue={setMaxValue} />
        <ListProduct setActiveProduct={setActiveProduct} setOpenQuickView={setOpenQuickView} />
      </div>
      {activeProduct && openQuickView && (
        <div className='fixed z-[11] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen h-screen'>
          <QuickViewProduct open={openQuickView} setOpen={setOpenQuickView} />
        </div>
      )}
    </section>
  );
};

export default Shop;
