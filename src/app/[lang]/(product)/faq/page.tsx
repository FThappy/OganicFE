import React from 'react';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
type Props = {};

const FaqPage = (props: Props) => {
  return (
    <section className='container h-[808px] mt-[100px] w-full flex items-center relative'>
      <div className='flex flex-col w-1/2'>
        <p className='w-[532px] text-gray-9 text-[48px] font-semibold'>Welcome, Let’s Talk About Our Ecobazar</p>
        <Accordion type='single' collapsible className='w-full flex flex-col gap-4'>
          <AccordionItem value='item-1'>
            <AccordionTrigger className='bg-gray-0 h-[56px] px-4 py-3 text-gray-9 font-medium no-underline data-[state=open]:border data-[state=open]:border-green data-[state=open]:rounded-t-[8px] data-[state=open]:rounded-b-[0px]	data-[state=open]:bg-white rounded-[8px]'>
              In elementum est a ante sodales iaculis.
            </AccordionTrigger>
            <AccordionContent className='px-4 py-3 text-gray-6 text-[14px] border-green border border-t-0 rounded-b-[8px]'>
              Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros.
              Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non
              massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger className='bg-gray-0 h-[56px] px-4 py-3 text-gray-9 font-medium no-underline data-[state=open]:border data-[state=open]:border-green data-[state=open]:rounded-t-[8px] data-[state=open]:rounded-b-[0px]	data-[state=open]:bg-white rounded-[8px]'>
              Etiam lobortis massa eu nibh tempor elementum.{' '}
            </AccordionTrigger>
            <AccordionContent className='px-4 py-3 text-gray-6 text-[14px] border-green border border-t-0 rounded-b-[8px]'>
              Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros.
              Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non
              massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3'>
            <AccordionTrigger className='bg-gray-0 h-[56px] px-4 py-3 text-gray-9 font-medium no-underline data-[state=open]:border data-[state=open]:border-green data-[state=open]:rounded-t-[8px] data-[state=open]:rounded-b-[0px]	data-[state=open]:bg-white rounded-[8px]'>
              In elementum est a ante sodales iaculis.
            </AccordionTrigger>
            <AccordionContent className='px-4 py-3 text-gray-6 text-[14px] border-green border border-t-0 rounded-b-[8px]'>
              Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros.
              Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non
              massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-4'>
            <AccordionTrigger className='bg-gray-0 h-[56px] px-4 py-3 text-gray-9 font-medium no-underline data-[state=open]:border data-[state=open]:border-green data-[state=open]:rounded-t-[8px] data-[state=open]:rounded-b-[0px]	data-[state=open]:bg-white rounded-[8px]'>
              Aenean quis quam nec lacus semper dignissim.{' '}
            </AccordionTrigger>
            <AccordionContent className='px-4 py-3 text-gray-6 text-[14px] border-green border border-t-0 rounded-b-[8px]'>
              Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros.
              Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non
              massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-5'>
            <AccordionTrigger className='bg-gray-0 h-[56px] px-4 py-3 text-gray-9 font-medium no-underline data-[state=open]:border data-[state=open]:border-green data-[state=open]:rounded-t-[8px] data-[state=open]:rounded-b-[0px]	data-[state=open]:bg-white rounded-[8px]'>
              Nulla tincidunt eros id tempus accumsan.
            </AccordionTrigger>
            <AccordionContent className='px-4 py-3 text-gray-6 text-[14px] border-green border border-t-0 rounded-b-[8px]'>
              Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros.
              Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non
              massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className='absolute w-[741px] h-[808px] left-[52%] '>
        <Image src='/Faq.png' alt='Background Faq' fill quality={100} priority sizes='100%' />
      </div>
    </section>
  );
};

export default FaqPage;
