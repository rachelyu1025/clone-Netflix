import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from '@heroicons/react/20/solid';
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menu = [
    {
      name: '홈',
      description: 'Get a better understanding of your traffic',
      href: '#',
      icon: ChartPieIcon,
    },
    // {
    //   name: '시리즈',
    //   description: 'Speak directly to your customers',
    //   href: '#',
    //   icon: CursorArrowRaysIcon,
    // },
    {
      name: '영화',
      description: "Your customers' data will be safe and secure",
      href: '#',
      icon: FingerPrintIcon,
    },
  ];

  const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
  ];

  const handleToggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Popover className='relative hidden sm:block md:hidden'>
      <PopoverButton
        onClick={handleToggleMenu}
        className='inline-flex items-center text-sm font-semibold leading-6 text-white text-gray-900 gap-x-1 focus:outline-none'
      >
        <span>메뉴</span>
        <ChevronDownIcon aria-hidden='true' className='w-5 h-5' />
      </PopoverButton>

      <PopoverPanel
        transition
        className={`absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition ${
          !isOpen
            ? 'translate-y-1 opacity-0 duration-150 ease-in'
            : 'data-[enter]:duration-200 data-[enter]:ease-out'
        }`}
      >
        <div className='flex-auto w-screen max-w-md overflow-hidden text-sm leading-6 bg-white shadow-lg rounded-3xl ring-1 ring-gray-900/5'>
          <div className='p-4'>
            {menu.map((item) => (
              <div
                key={item.name}
                className='relative flex p-4 rounded-lg group gap-x-6 hover:bg-gray-50'
              >
                <div className='flex items-center justify-center flex-none mt-1 rounded-lg h-11 w-11 bg-gray-50 group-hover:bg-white'>
                  <item.icon
                    aria-hidden='true'
                    className='w-6 h-6 text-gray-600 group-hover:text-indigo-600'
                  />
                </div>
                <div>
                  <a href={item.href} className='font-semibold text-gray-900'>
                    {item.name}
                    <span className='absolute inset-0' />
                  </a>
                  <p className='mt-1 text-gray-600'>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className='grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50'>
            {callsToAction.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className='flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100'
              >
                <item.icon
                  aria-hidden='true'
                  className='flex-none w-5 h-5 text-gray-400'
                />
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  );
};

export default Dropdown;
