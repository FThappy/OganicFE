'use client';
import React from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNextCustom,
  PaginationPreviousCustom
} from '@/components/ui/pagination';

type Props = {
  totalPage: number;
  inPage: number;
  handleChangePage: (page: number) => void;
};

const PaginationPage = (props: Props) => {
  const { totalPage, inPage, handleChangePage } = props;
  if (totalPage <= 6) {
    return (
      <Pagination>
        <PaginationContent>
          <PaginationPreviousCustom
            onClick={e => {
              e.preventDefault();
              if (inPage > 1) {
                handleChangePage(inPage - 1);
              }
            }}
            className={`rounded-full  p-2 ${inPage === 1 ? 'bg-gray-0 text-gray-3' : 'bg-white border border-gray-2 cursor-pointer text-gray-9 hover:bg-slate-100'}`}
          />
          {Array.from({ length: totalPage }).map((_, index) => (
            <PaginationItem
              key={index}
              className={`w-9 h-9 rounded-full font-medium text-[16px] 
                        ${inPage === index + 1 ? 'text-white bg-green' : 'text-gray-6 hover:bg-gray-0'}  
                        flex items-center justify-center cursor-pointer`}
              onClick={e => {
                e.preventDefault();
                handleChangePage(index + 1);
              }}
            >
              {index + 1}
            </PaginationItem>
          ))}
          <PaginationNextCustom
            onClick={e => {
              e.preventDefault();
              if (inPage < totalPage) {
                handleChangePage(inPage + 1);
              }
            }}
            className={`rounded-full  p-2 ${inPage === totalPage ? 'bg-gray-0 text-gray-3' : 'bg-white border border-gray-2 cursor-pointer text-gray-9 hover:bg-slate-100'}`}
          />
        </PaginationContent>
      </Pagination>
    );
  }
  return (
    <Pagination>
      <PaginationContent>
        <PaginationPreviousCustom
          onClick={e => {
            e.preventDefault();
            if (inPage > 1) {
              handleChangePage(inPage - 1);
            }
          }}
          className={`rounded-full  p-2 ${inPage === 1 ? 'bg-gray-0 text-gray-3' : 'bg-white border border-gray-2 cursor-pointer text-gray-9 hover:bg-slate-100'}`}
        />
        <PaginationItem
          className={`w-9 h-9 rounded-full font-medium text-[16px] 
                        ${inPage === 1 ? 'text-white bg-green' : 'text-gray-6 hover:bg-gray-0'}  
                        flex items-center justify-center cursor-pointer`}
          onClick={e => {
            e.preventDefault();
            handleChangePage(1);
          }}
        >
          1
        </PaginationItem>
        {inPage <= 3 && (
          <>
            <PaginationItem
              className={`w-9 h-9 rounded-full font-medium text-[16px] 
                        ${inPage === 2 ? 'text-white bg-green' : 'text-gray-6 hover:bg-gray-0'}  
                        flex items-center justify-center cursor-pointer`}
              onClick={e => {
                e.preventDefault();
                handleChangePage(2);
              }}
            >
              2
            </PaginationItem>
            <PaginationItem
              className={`w-9 h-9 rounded-full font-medium text-[16px] 
                        ${inPage === 3 ? 'text-white bg-green' : 'text-gray-6 hover:bg-gray-0'}  
                        flex items-center justify-center cursor-pointer`}
              onClick={e => {
                e.preventDefault();
                handleChangePage(3);
              }}
            >
              3
            </PaginationItem>
          </>
        )}
        {inPage === 3 && (
          <PaginationItem
            className={`w-9 h-9 rounded-full font-medium text-[16px] 
'text-gray-6 hover:bg-gray-0'
                                        flex items-center justify-center cursor-pointer`}
            onClick={e => {
              e.preventDefault();
              handleChangePage(4);
            }}
          >
            4
          </PaginationItem>
        )}

        {inPage > 3 && inPage < totalPage - 2 && (
          <>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem
              className={`w-9 h-9 rounded-full font-medium text-[16px] 
                        ${inPage === inPage + 1 - (inPage % 3 === 0 ? 3 : inPage % 3) ? 'text-white bg-green' : 'text-gray-6 hover:bg-gray-0'}  
                        flex items-center justify-center cursor-pointer`}
              onClick={e => {
                e.preventDefault();
                handleChangePage(inPage + 1 - (inPage % 3 === 0 ? 3 : inPage % 3));
              }}
            >
              {inPage + 1 - (inPage % 3 === 0 ? 3 : inPage % 3)}
            </PaginationItem>
            <PaginationItem
              className={`w-9 h-9 rounded-full font-medium text-[16px] 
                        ${inPage === inPage + 1 + 1 - (inPage % 3 === 0 ? 3 : inPage % 3) ? 'text-white bg-green' : 'text-gray-6 hover:bg-gray-0'}  
                        flex items-center justify-center cursor-pointer`}
              onClick={e => {
                e.preventDefault();
                handleChangePage(inPage + 1 + 1 - (inPage % 3 === 0 ? 3 : inPage % 3));
              }}
            >
              {inPage + 1 + 1 - (inPage % 3 === 0 ? 3 : inPage % 3)}
            </PaginationItem>
            <PaginationItem
              className={`w-9 h-9 rounded-full font-medium text-[16px] 
                        ${inPage === inPage + 2 + 1 - (inPage % 3 === 0 ? 3 : inPage % 3) ? 'text-white bg-green' : 'text-gray-6 hover:bg-gray-0'}  
                        flex items-center justify-center cursor-pointer`}
              onClick={e => {
                e.preventDefault();
                handleChangePage(inPage + 2 + 1 - (inPage % 3 === 0 ? 3 : inPage % 3));
              }}
            >
              {inPage + 2 + 1 - (inPage % 3 === 0 ? 3 : inPage % 3)}
            </PaginationItem>
            {inPage === inPage + 2 + 1 - (inPage % 3 === 0 ? 3 : inPage % 3) && (
              <PaginationItem
                className={`w-9 h-9 rounded-full font-medium text-[16px] 
'text-gray-6 hover:bg-gray-0'
                                        flex items-center justify-center cursor-pointer`}
                onClick={e => {
                  e.preventDefault();
                  handleChangePage(inPage + 2 + 1 - (inPage % 3 === 0 ? 3 : inPage % 3) + 1);
                }}
              >
                {inPage + 2 + 1 - (inPage % 3 === 0 ? 3 : inPage % 3) + 1}
              </PaginationItem>
            )}
          </>
        )}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        {inPage >= totalPage - 2 && (
          <>
            <PaginationItem
              className={`w-9 h-9 rounded-full font-medium text-[16px] 
                        ${inPage === totalPage - 2 ? 'text-white bg-green' : 'text-gray-6 hover:bg-gray-0'}  
                        flex items-center justify-center cursor-pointer`}
              onClick={e => {
                e.preventDefault();
                handleChangePage(totalPage - 2);
              }}
            >
              {totalPage - 2}
            </PaginationItem>
            <PaginationItem
              className={`w-9 h-9 rounded-full font-medium text-[16px] 
                        ${inPage === totalPage - 1 ? 'text-white bg-green' : 'text-gray-6 hover:bg-gray-0'}  
                        flex items-center justify-center cursor-pointer`}
              onClick={e => {
                e.preventDefault();
                handleChangePage(totalPage - 1);
              }}
            >
              {totalPage - 1}
            </PaginationItem>
          </>
        )}
        <PaginationItem
          className={`w-9 h-9 rounded-full font-medium text-[16px] 
                        ${inPage === totalPage ? 'text-white bg-green' : 'text-gray-6 hover:bg-gray-0'}  
                        flex items-center justify-center cursor-pointer`}
          onClick={e => {
            e.preventDefault();
            handleChangePage(totalPage);
          }}
        >
          {totalPage}
        </PaginationItem>
        <PaginationNextCustom
          onClick={e => {
            e.preventDefault();
            if (inPage < totalPage) {
              handleChangePage(inPage + 1);
            }
          }}
          className={`rounded-full  p-2 ${inPage === totalPage ? 'bg-gray-0 text-gray-3' : 'bg-white border border-gray-2 cursor-pointer text-gray-9 hover:bg-slate-100'}`}
        />
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationPage;
