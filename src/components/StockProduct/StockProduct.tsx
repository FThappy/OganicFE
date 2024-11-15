import React from 'react';

type Props = {
  state: 'sale' | 'new' | 'bestSale' | 'outStock' | 'inStock' | 'off';
  discount?: number;
  classNames?: string;
};

const StockProduct = (props: Props) => {
  const { state, discount, classNames } = props;

  switch (state) {
    case 'sale':
      return (
        <div
          className={`gap-4 flex items-center justify-center px-2 py-1 rounded-[4px] font-normal text-[14px] text-white bg-danger ${classNames}`}
        >
          Sale
        </div>
      );
    case 'new':
      return (
        <div
          className={`gap-4 flex items-center justify-center px-2 py-1 rounded-[4px] font-normal text-[14px] text-white bg-warning ${classNames}`}
        >
          New
        </div>
      );
    case 'bestSale':
      return (
        <div
          className={`gap-4 flex items-center justify-center px-2 py-1 rounded-[4px] font-normal text-[14px] text-white bg-[#2388FF] ${classNames}`}
        >
          Best Sale
        </div>
      );
    case 'outStock':
      return (
        <div
          className={`gap-4 flex items-center justify-center px-2 py-1 rounded-[4px] font-normal text-[14px] text-white bg-gray-9 ${classNames}`}
        >
          Out of Stock
        </div>
      );
    case 'off':
      return (
        <div
          className={`gap-4 flex items-center justify-center px-2 py-1 font-semibold text-[14px] text-danger  bg-[#EA4B48]/10 ${classNames}`}
        >
          {discount}% Off
        </div>
      );
    default:
      return (
        <div
          className={`gap-4 flex items-center justify-center px-2 py-1 rounded-[4px] font-semibold text-[14px] text-green-hard bg-[#20B526]/20 ${classNames}`}
        >
          In Stock
        </div>
      );
  }
};

export default StockProduct;
