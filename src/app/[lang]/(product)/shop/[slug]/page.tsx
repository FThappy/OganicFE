import ProductContent from '@/components/ProductDetail/ProductContent';
import RealatedProduct from '@/components/ProductDetail/RealatedProduct';
import TabbarProductDetail from '@/components/ProductDetail/TabbarProductDetail';
import React from 'react';

const ProductDetail = () => {
  return (
    <section className=''>
      <section className='container'>
        <ProductContent />
      </section>
      <TabbarProductDetail />
      <RealatedProduct />
    </section>
  );
};

export default ProductDetail;
