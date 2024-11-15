import React from 'react';
import InputComments from '../Comments/InputComments';

type Props = {};

const FeedBackProduct = (props: Props) => {
  return (
    <section className='flex flex-col w-full'>
      <InputComments />
    </section>
  );
};

export default FeedBackProduct;
