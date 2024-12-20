'use client';

import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { cn } from '@/lib/utils';
import { CheckIcon } from '@radix-ui/react-icons';

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return <RadioGroupPrimitive.Root className={cn('grid gap-2', className)} {...props} ref={ref} />;
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        'aspect-square h-[20px] w-[20px] p-0 rounded-[2px] overflow-hidden border border-green text-primary shadow ring-inset focus:outline-none focus-visible:ring-1 focus-visible:ring-green disabled:cursor-not-allowed disabled:border-gray-2',
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className='flex items-center  justify-center bg-green '>
        <CheckIcon className='h-5 w-5 text-white' />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

const RadioGroupCustom = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        'peer h-5 w-5  rounded-full flex items-center justify-center border border-gray-2 shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-white data-[state=checked]:border-green data-[state=checked]:text-primary-foreground',
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        className={cn(' flex h-3 w-3 rounded-full bg-green items-center justify-center text-current')}
      ></RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupCustom.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem, RadioGroupCustom };
