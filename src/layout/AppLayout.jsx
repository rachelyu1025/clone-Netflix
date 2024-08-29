import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import Dropdown from '../components/Dropdown';

const AppLayout = () => {
  return (
    <div className='flex items-center justify-between w-full px-2 py-3 bg-black h-26'>
      <div className='flex items-center'>
        {/* Menu - mobile */}
        <Bars3Icon className='w-10 h-10 text-white sm:hidden' />

        {/* LOGO */}
        <img
          src='https://assets.nflxext.com/en_us/layout/ecweb/common/logo-shadow2x.png'
          alt='netflix logo'
          className='mx-5 h-7 sm:h-8'
        />

        {/* Menu */}
        <Dropdown />
      </div>

      {/* Search */}
      <div className='border-white '>
        <label htmlFor='search' />
        <input
          type='text'
          id='search'
          placeholder='검색'
          className='w-32 px-2 py-1 text-black sm:w-48 md:w-80 focus:outline-none'
        />
      </div>
    </div>
  );
};

export default AppLayout;
