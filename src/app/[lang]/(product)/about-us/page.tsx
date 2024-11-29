import React from 'react';
import Image from 'next/image';
import Icons from '@/constants/svgIcon';
import { LinkGlobal } from '@/components/LinkGlobal/LinkGlobal';
import Brand from '@/components/Home/Brand';
import Testimonial from '@/components/Home/Testimonial';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <section className='flex flex-col'>
      <section className='container flex items-center py-6'>
        <div className='flex flex-col w-[607px]'>
          <p className='text-gray-9 text-[56px] font-semibold'>100% Trusted Organic Food Store</p>
          <p className='text-gray-6 text-[18px]'>
            Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros.
            Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non
            massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.
          </p>
        </div>
        <div className='relative w-[716px] h-[492px]'>
          <Image
            src='/about-us1.png'
            alt='About Us Image'
            fill
            quality={100}
            priority
            sizes='100%'
            className='rounded-[8px]'
          />
        </div>
      </section>
      <section className='h-[685px]'>
        <div className='relative w-[1129px] h-[685px] '>
          <Image src='/about-us2.png' alt='Background About Us' fill quality={100} priority sizes='100%' />
          <div className='absolute w-[745px] h-[685px] left-[195px] '>
            <Image src='/about-us3.png' alt='Background About Us' fill quality={100} priority sizes='100%' />
          </div>
          <div className='absolute left-[972px] flex flex-col w-[622px] h-full justify-center'>
            <p className='text-gray-9 text-[56px] font-semibold'>
              100% Trusted <br></br> Organic Food Store
            </p>
            <p className='text-gray-6 text-[18px]'>
              Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam
              eget est luctus tincidunt a a mi. Nulla eu eros consequat tortor tincidunt feugiat.
            </p>
            <div className='grid grid-cols-2 gap-2 gap-y-6 mt-4'>
              <div className='flex items-center gap-2 '>
                <div className='flex items-center justify-center w-[72px] h-[72px] bg-[#00B207]/10 rounded-full'>
                  <Icons.Leaf />
                </div>
                <div>
                  <p className='text-gray-9 text-[18px] font-medium '>100% Organic food</p>
                  <p className='text-gray-5 text-[14px]'>100% healthy & Fresh food.</p>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <div className='flex items-center justify-center w-[72px] h-[72px] bg-[#00B207]/10 rounded-full'>
                  <Icons.Support />
                </div>
                <div>
                  <p className='text-gray-9 text-[18px] font-medium '>Great Support 24/7</p>
                  <p className='text-gray-5 text-[14px]'>Instant access to Contact</p>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <div className='flex items-center justify-center w-[72px] h-[72px] bg-[#00B207]/10 rounded-full'>
                  <Icons.SuperStar />
                </div>
                <div>
                  <p className='text-gray-9 text-[18px] font-medium '>Customer Feedback</p>
                  <p className='text-gray-5 text-[14px]'>Our happy customer</p>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <div className='flex items-center justify-center w-[72px] h-[72px] bg-[#00B207]/10 rounded-full'>
                  <Icons.Secure />
                </div>
                <div>
                  <p className='text-gray-9 text-[18px] font-medium '>100% Sucure Payment</p>
                  <p className='text-gray-5 text-[14px]'>We ensure your money is save</p>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <div className='flex items-center justify-center w-[72px] h-[72px] bg-[#00B207]/10 rounded-full'>
                  <Icons.FreeShipping />
                </div>
                <div>
                  <p className='text-gray-9 text-[18px] font-medium '>Free Shipping</p>
                  <p className='text-gray-5 text-[14px]'>Free shipping with discount</p>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <div className='flex items-center justify-center w-[72px] h-[72px] bg-[#00B207]/10 rounded-full'>
                  <Icons.MoneyBack />
                </div>
                <div>
                  <p className='text-gray-9 text-[18px] font-medium '>100% Organic food</p>
                  <p className='text-gray-5 text-[14px]'>100% healthy & Fresh food.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='container flex h-[616px] mt-4 relative'>
        <div className='flex flex-col w-[560px] h-full justify-center'>
          <p className='text-gray-9 text-[48px] font-semibold'>We Delivered, You Enjoy Your Order.</p>
          <p className='text-gray-6 text-[18px]'>
            Ut suscipit egestas suscipit. Sed posuere pellentesque nunc, ultrices consectetur velit dapibus eu. Mauris
            sollicitudin dignissim diam, ac mattis eros accumsan rhoncus. Curabitur auctor bibendum nunc eget elementum.
          </p>
          <div className='flex flex-col gap-4 mt-4'>
            <div className='flex gap-4 items-center'>
              <div className='w-[20px] h-[20px] bg-[#00B207]/10 rounded-full flex items-center justify-center'>
                <Icons.Check />
              </div>
              <p className='text-[14px] text-gray-6'>Sed in metus pellentesque.</p>
            </div>
            <div className='flex gap-4 items-center'>
              <div className='w-[20px] h-[20px] bg-[#00B207]/10 rounded-full flex items-center justify-center'>
                <Icons.Check />
              </div>
              <p className='text-[14px] text-gray-6'>Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.</p>
            </div>
            <div className='flex gap-4 items-center'>
              <div className='w-[20px] h-[20px] bg-[#00B207]/10 rounded-full flex items-center justify-center'>
                <Icons.Check />
              </div>
              <p className='text-[14px] text-gray-6'>Maecenas ut nunc fringilla erat varius.</p>
            </div>
          </div>
          <LinkGlobal link='/' size='small' className='group z-50 w-[192px] mt-4' animation='middle'>
            <div className='py-[2.5px] flex items-center group-hover:animate-white-to-green animate-green-to-white gap-2'>
              <p className='font-semibold group-hover:animate-white-to-green animate-green-to-white z-50'>Shop now</p>
              <Icons.ArrowRight className='[&_path]:animate-green-to-white [&_path]:group-hover:animate-white-to-green z-50 ' />
            </div>
          </LinkGlobal>
        </div>
        <div className='absolute w-[895px] h-[606px] right-[-12%] bottom-[-1px]'>
          <Image
            src='/about-us-4.png'
            alt='About Us Image'
            fill
            quality={100}
            priority
            sizes='100%'
            className='rounded-[8px]'
          />
        </div>
      </section>
      <section className='w-full h-[696px] bg-gray-100 flex flex-col items-center justify-center '>
        <section className='container flex flex-col items-center justify-center gap-4'>
          <p className='text-[48px] text-gray-9 font-semibold'>Our Awesome Team</p>
          <p className='w-[640px] text-center text-gray-6'>
            Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget
            est luctus tincidunt a a mi.
          </p>
          <div className='grid grid-cols-4 gap-6 mt-8'>
            <div className='rounded-[8px] border border-gray-0 bg-white w-[312px] relative group'>
              <div className='relative w-[310px] h-[280px]'>
                <Image
                  src='/about-us-5.png'
                  alt='Background About Us'
                  fill
                  quality={100}
                  priority
                  sizes='100%'
                  className='rounded-t-[8px]'
                />
              </div>
              <div className='px-4 pt-2 pb-4'>
                <p className='text-gray-9 text-[18px] font-medium'>Jane Cooper</p>
                <p className='text-gray-5 text-[14px]'>Worker</p>
              </div>
              <section className='invisible group-hover:visible absolute top-0 bg-black/50 h-full w-full flex gap-4 items-center justify-center cursor-pointer rounded-[8px]'>
                <div className='rounded-full hover:bg-green p-2 text-white'>
                  <FaFacebookF />
                </div>
                <div className='rounded-full hover:bg-green p-2 text-white'>
                  <FaTwitter />
                </div>
                <div className='rounded-full hover:bg-green p-2'>
                  <Icons.Pinterest />
                </div>
                <div className='rounded-full hover:bg-green p-2 text-white'>
                  <FaInstagram />
                </div>
              </section>
            </div>
            <div className='rounded-[8px] border border-gray-0 bg-white w-[312px] relative group'>
              <div className='relative w-[310px] h-[280px]'>
                <Image
                  src='/about-us-5.png'
                  alt='Background About Us'
                  fill
                  quality={100}
                  priority
                  sizes='100%'
                  className='rounded-t-[8px]'
                />
              </div>
              <div className='px-4 pt-2 pb-4'>
                <p className='text-gray-9 text-[18px] font-medium'>Jane Cooper</p>
                <p className='text-gray-5 text-[14px]'>Worker</p>
              </div>
              <section className='invisible group-hover:visible absolute top-0 bg-black/50 h-full w-full flex gap-4 items-center justify-center cursor-pointer rounded-[8px]'>
                <div className='rounded-full hover:bg-green p-2 text-white'>
                  <FaFacebookF />
                </div>
                <div className='rounded-full hover:bg-green p-2 text-white'>
                  <FaTwitter />
                </div>
                <div className='rounded-full hover:bg-green p-2'>
                  <Icons.Pinterest />
                </div>
                <div className='rounded-full hover:bg-green p-2 text-white'>
                  <FaInstagram />
                </div>
              </section>
            </div>
            <div className='rounded-[8px] border border-gray-0 bg-white w-[312px] relative group'>
              <div className='relative w-[310px] h-[280px]'>
                <Image
                  src='/about-us-5.png'
                  alt='Background About Us'
                  fill
                  quality={100}
                  priority
                  sizes='100%'
                  className='rounded-t-[8px]'
                />
              </div>
              <div className='px-4 pt-2 pb-4'>
                <p className='text-gray-9 text-[18px] font-medium'>Jane Cooper</p>
                <p className='text-gray-5 text-[14px]'>Worker</p>
              </div>
              <section className='invisible group-hover:visible absolute top-0 bg-black/50 h-full w-full flex gap-4 items-center justify-center cursor-pointer rounded-[8px]'>
                <div className='rounded-full hover:bg-green p-2 text-white'>
                  <FaFacebookF />
                </div>
                <div className='rounded-full hover:bg-green p-2 text-white'>
                  <FaTwitter />
                </div>
                <div className='rounded-full hover:bg-green p-2'>
                  <Icons.Pinterest />
                </div>
                <div className='rounded-full hover:bg-green p-2 text-white'>
                  <FaInstagram />
                </div>
              </section>
            </div>
            <div className='rounded-[8px] border border-gray-0 bg-white w-[312px] relative group'>
              <div className='relative w-[310px] h-[280px]'>
                <Image
                  src='/about-us-5.png'
                  alt='Background About Us'
                  fill
                  quality={100}
                  priority
                  sizes='100%'
                  className='rounded-t-[8px]'
                />
              </div>
              <div className='px-4 pt-2 pb-4'>
                <p className='text-gray-9 text-[18px] font-medium'>Jane Cooper</p>
                <p className='text-gray-5 text-[14px]'>Worker</p>
              </div>
              <section className='invisible group-hover:visible absolute top-0 bg-black/50 h-full w-full flex gap-4 items-center justify-center cursor-pointer rounded-[8px]'>
                <div className='rounded-full hover:bg-green p-2 text-white'>
                  <FaFacebookF />
                </div>
                <div className='rounded-full hover:bg-green p-2 text-white'>
                  <FaTwitter />
                </div>
                <div className='rounded-full hover:bg-green p-2'>
                  <Icons.Pinterest />
                </div>
                <div className='rounded-full hover:bg-green p-2 text-white'>
                  <FaInstagram />
                </div>
              </section>
            </div>
          </div>
        </section>
      </section>
      <Testimonial />
      <Brand />
    </section>
  );
};

export default AboutPage;
