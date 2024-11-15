'use client';
import React from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import ProductContent from '../ProductDetail/ProductContent';

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const QuickViewProduct = (props: Props) => {
  const { open, setOpen } = props;
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger></DialogTrigger>
      <DialogContent className='container w-screen h-[636px]  m-0'>
        <VisuallyHidden>
          <DialogTitle>My Dialog Title</DialogTitle>
          <DialogDescription>This is a brief description of the dialog content for screen readers.</DialogDescription>
        </VisuallyHidden>
        <DialogClose className='absolute cursor-pointer right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground'>
          <Cross2Icon className='h-4 w-4' />
          <span className='sr-only'>Close</span>
        </DialogClose>
        <ProductContent />
      </DialogContent>
    </Dialog>
  );
};

export default QuickViewProduct;
