'use client';
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { useRouter } from '@/i18n/routing';

const page = () => {
  const router = useRouter();
  return (
    <Dialog open={true}>
      <DialogTrigger></DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your data from our
            servers.
          </DialogDescription>
          <div
            onClick={() => {
              router.back();
            }}
            className='absolute cursor-pointer right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground'
          >
            <Cross2Icon className='h-4 w-4' />
            <span className='sr-only'>Close</span>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default page;
