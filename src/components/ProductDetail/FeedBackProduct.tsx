import React, { useState } from 'react';
import InputComments from '../Comments/InputComments';
import Comment from '../Comments/Comment';
import PaginationPage from '../Pagination/Pagination';

type Props = {};

const FeedBackProduct = (props: Props) => {
  const [inPage, setInPage] = useState<number>(2);

  const handlePageChange = (page: number) => {
    setInPage(page);
  };
  return (
    <section className='flex flex-col w-full gap-4'>
      <InputComments />
      <div className='flex flex-col gap-5 '>
        <Comment /> <Comment /> <Comment /> <Comment /> <Comment />
      </div>
      <section className='w-full flex items-center justify-center'>
        <PaginationPage totalPage={15} inPage={inPage} handleChangePage={handlePageChange} />
      </section>
    </section>
  );
};

export default FeedBackProduct;
