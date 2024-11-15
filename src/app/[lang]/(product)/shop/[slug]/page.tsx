import ProductContent from '@/components/ProductDetail/ProductContent';
import TabbarProductDetail from '@/components/ProductDetail/TabbarProductDetail';
import React from 'react';

const ProductDetail = () => {
  return (
    <section>
      <section className='container'>
        <ProductContent />
      </section>
      <TabbarProductDetail />
    </section>
  );
};

export default ProductDetail;
