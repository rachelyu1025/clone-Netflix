import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import Dropdown from '../components/Dropdown';
import { Link, Outlet } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';

const AppLayout = () => {
  const [isSearch, setIsSearch] = useState(false);

  const menu = [
    { name: '홈', path: '/' },
    { name: '영화', path: '/movies' },
  ];
  return (
    <div>
      <div className='flex items-center justify-between w-full h-16 px-5 py-4 bg-bg_black h-26'>
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
          <div className='hidden md:block'>
            {menu.map((li) => (
              <Link
                to={li.path}
                className='m-3 text-txt_white hover:cursor-pointer'
              >
                {li.name}
              </Link>
            ))}
          </div>
          <Dropdown />
        </div>

        {/* Search */}
        <div
          className={`flex items-center px-2 ${
            isSearch && 'border-2 border-white'
          }`}
        >
          <MagnifyingGlassIcon
            onClick={() => setIsSearch((prev) => !prev)}
            className='w-6 h-6 text-white hover:cursor-pointer'
          />
          <label htmlFor='search' />
          <input
            type='text'
            id='search'
            placeholder='제목,사람,장르'
            className={`${
              isSearch ? 'visible' : 'hidden'
            } w-32 h-9  px-2 text-txt_white bg-bg_black sm:w-48 md:w-64 focus:outline-none`}
          />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default AppLayout;
