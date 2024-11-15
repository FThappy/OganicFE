'use client';
import React, { useState } from 'react';
import DescriptionDetail from './DescriptionDetail';
import Information from './Information';

type Props = {};

const TabbarProductDetail = (props: Props) => {
  const [activeTab, setActiveTab] = useState<'description' | 'infomation' | 'feedback'>('description');
  return (
    <section className='flex flex-col w-full'>
      <div className='h-[56px] w-full flex items-center justify-center border-b border-b-gray-2'>
        <button
          onClick={e => {
            e.preventDefault();
            setActiveTab('description');
          }}
          className={`h-full flex items-center justify-center text-gray-9 font-medium px-4 cursor-pointer ${
            activeTab === 'description' && 'border-b-4 border-b-green'
          }  hover:bg-slate-100`}
        >
          Description
        </button>
        <button
          onClick={e => {
            e.preventDefault();
            setActiveTab('infomation');
          }}
          className={`h-full flex items-center justify-center font-medium text-gray-5 px-4 cursor-pointer hover:bg-slate-100 ${
            activeTab === 'infomation' && 'border-b-4 border-b-green'
          }`}
        >
          Additional Information
        </button>
        <button
          onClick={e => {
            e.preventDefault();
            setActiveTab('feedback');
          }}
          className={`h-full flex items-center justify-center font-medium text-gray-5 px-4 cursor-pointer hover:bg-slate-100 ${
            activeTab === 'feedback' && 'border-b-4 border-b-green'
          }`}
        >
          Customer Feedback
        </button>
      </div>
      <div className='mt-6 container w-full'>
        {activeTab === 'description' && <DescriptionDetail />}
        {activeTab === 'infomation' && <Information />}
        {activeTab === 'feedback' && <p>Customer Feedback</p>}
      </div>
    </section>
  );
};

export default TabbarProductDetail;
