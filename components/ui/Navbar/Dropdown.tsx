import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function Example() {
  return (
    <div className="text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center bg-black px-8 py-4 text-sm font-medium text-white ">
            Contactanos
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-80 origin-top-right divide-y divide-white bg-black shadow-lg">
            <div className="px-1 py-1 ">
              <Menu.Item>
                <a
                  className="group flex w-full items-center rounded-md px-2 py-2 text-sm text-white"
                  href="tel:02964 61-4077"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tel: 02964 61-4077
                </a>
              </Menu.Item>
            </div>
            <div className="px-1 py-1 ">
              <Menu.Item>
                <a
                  className="group flex w-full items-center rounded-md px-2 py-2 text-sm text-white"
                  href="https://wa.me/5492964467465"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tel (solo empresas): +54 9 2964 46-7465
                </a>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
