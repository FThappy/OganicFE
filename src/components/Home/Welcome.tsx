import React from 'react';

type Props = {};

const Welcome = (props: Props) => {
  return (
    <section
      className='relative w-screen h-[640px]'
      style={{
        backgroundImage: `url('/bg1.jpg')`,
        backgroundPosition: 'center'
      }}
    ></section>
  );
};

export default Welcome;
