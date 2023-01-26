import React, { useState } from 'react'
import { Link, navigate } from "gatsby"
import { Disclosure } from '@headlessui/react'
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown, GitHub } from 'react-feather';
import { useLocation } from '@reach/router';

const navigation = [
 'Home',
 'Projects',
 'Stack',
 'Setup',
 'Blog'
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  var current = useLocation().pathname.replace('/', '').replace('/', '');
  if (current == '') {
    current = 'home'
  }
  current = current.charAt(0).toUpperCase() + current.slice(1);
  current = navigation.indexOf(current)
  const [selectedTab, setSelectedTab] = useState(navigation[current]);
  return (
    <Disclosure as="nav" className="w-full mt-20">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-16">
            <div className="relative flex h-16 items-center justify-between border-b border-slate-700">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <ChevronUp size={18} className="block" aria-hidden="true" />
                  ) : (
                    <ChevronDown size={18} className="block" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start h-full">
                <div className="hidden sm:block h-full">
                  <div className="flex space-x-4 h-full">
                    {navigation.map((item) => (
                      <Link
                        to={item == "Home" ? (
                          "/"
                        ) : (
                          "/" + item.toLowerCase()
                        )}
                        key={item}
                        onClick={() => setSelectedTab(item)}
                        className={item === selectedTab ? "text-white px-1 font-medium relative flex flex-col items-center justify-center" : "text-gray-500 px-1 font-medium relative flex flex-col items-center justify-center"}
                        >
                        {item}
                        {item === selectedTab ? (
                          <motion.div className="h-px bg-white bottom-0 w-full absolute" layoutId="underline" />
                        ) : null}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
                <button
                    type="button"
                    className="rounded-full p-1 text-white focus:outline-none"
                >
                    <a href="https://github.com/flashybolt" target="_blank">
                      <GitHub className="text-opacity-70 rounded-full hover:text-slate-600 text-slate-200" size={18}/>
                    </a>
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden px-16">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item}
                  onClick={
                    ()=>{navigate(item == "Home" ? (
                      "/"
                    ) : (
                      "/" + item.toLowerCase()
                    ))}
                  }
                  className='text-gray-300 px-1 font-medium relative flex flex-col justify-center mt-2'
                >
                  {item}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
