import React from 'react';

type Props = {};

const BillDetail = (props: Props) => {
  return (
    <section className='shadow-md rounded-lg col-span-2 border border-gray-1 '>
      <section className='flex w-full'>
        <section className='w-full border-r border-r-gray-2'>
          <div className='flex items-center px-6 py-3 border-b border-b-gray-2  rounded-t-lg gap-4'>
            <p className='text-gray-4 font-medium text-[14px]'>Billing Address</p>
          </div>
          <div className='flex flex-col gap-4 p-3  pl-6 font-medium'>
            <div className='flex flex-col gap-2'>
              <p className='text-gray-9 '>Dainne Russell</p>
              <p className='text-gray-4 text-[14px]'>4140 Parker Rd. Allentown, New Mexico 31134</p>
            </div>
            <div className='flex flex-col gap-2'>
              <div>
                <p className='text-gray-4 text-[14px]'>Email</p>
                <p className='text-gray-9 text-[14px]'>dainne.ressell@gmail.com</p>
              </div>
              <div>
                <p className='text-gray-4 text-[14px]'>Phone</p>
                <p className='text-gray-9 text-[14px]'>(671) 555-0110</p>
              </div>
            </div>
          </div>
        </section>
        <section className='w-full'>
          <div className='flex items-center px-6 py-3 border-b  border-b-gray-2 rounded-t-lg gap-4'>
            <p className='text-gray-4 font-medium text-[14px]'>Shipping Address</p>
          </div>
          <div className='flex flex-col gap-4 p-3  pl-6 font-medium'>
            <div className='flex flex-col gap-2'>
              <p className='text-gray-9 '>Dainne Russell</p>
              <p className='text-gray-4 text-[14px]'>4140 Parker Rd. Allentown, New Mexico 31134</p>
            </div>
            <div className='flex flex-col gap-2'>
              <div>
                <p className='text-gray-4 text-[14px]'>Email</p>
                <p className='text-gray-9 text-[14px]'>dainne.ressell@gmail.com</p>
              </div>
              <div>
                <p className='text-gray-4 text-[14px]'>Phone</p>
                <p className='text-gray-9 text-[14px]'>(671) 555-0110</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default BillDetail;
