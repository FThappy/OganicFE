import React from 'react';
import DescriptionHeader from './components/DescriptionHeader';
import MiddleHeader from './components/MiddleHeader';
import NavLink from './components/NavLink';

const Header = () => {
  return (
    <header className='w-screen fixed top-0 z-[99]'>
      <DescriptionHeader />
      <MiddleHeader />
      <NavLink />
    </header>
  );
};

export default Header;
