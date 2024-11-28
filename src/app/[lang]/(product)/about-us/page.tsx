import React from 'react';

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <section className='flex flex-col'>
      <section className='container'>
        <div className='flex flex-col w-[607px]'>
          <p className='text-gray-9 text-[56px] font-semibold'>100% Trusted Organic Food Store</p>
          <p className='text-gray-6 text-[18px]'>
            Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros.
            Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non
            massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.
          </p>
        </div>
      </section>
    </section>
  );
};

export default AboutPage;
