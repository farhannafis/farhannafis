import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import DarkSwitch from './DarkSwitch';

const Header = () => {
  return(
    <div>
      <div class="relative p-4 sm:p-6 lg:p-8 bg-gray-50 dark:bg-coolGray-900">
        <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
          <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div class="flex items-center justify-end w-full md:w-auto">
              <div class="mr-4 flex items-center text-white md:hidden">
                <DarkSwitch />
              </div>
              <div class="-mr-2 flex items-center md:hidden">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="bg-gray-200 dark:bg-coolGray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-500 dark:text-primary-500 focus:outline-none focus:ring-inset focus:ring-0">
                      <span class="sr-only">Open main menu</span>
                      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
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
                    <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white dark:bg-coolGray-800 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="px-1 py-1 ">
                        <Menu.Item>
                          {({ active }) => (
                            <a href="/projects"
                              className={`${
                                active ? 'bg-primary-500 text-white' : 'text-gray-900 dark:text-white'
                              } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                            >
                              Projects
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          <div class="hidden w-full md:flex md:items-center md:justify-between md:space-x-8">
            <div class="md:space-x-8">
              <a href="/projects" class="font-medium text-gray-500 hover:text-primary-500">Projects</a>
              {/* <a href="/articles" class="font-medium text-gray-500 hover:text-primary-500">Articles</a> */}
              {/* <a href="#" class="font-medium text-primary-600 hover:text-primary-500">Resume</a> */}
            </div>
            <div class="ml-auto flex items-center text-white">
              <DarkSwitch />
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header;