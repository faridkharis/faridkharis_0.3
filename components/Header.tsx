'use client';

import Image from 'next/image';
import Link from 'next/link';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { useState } from 'react';
import { links } from '@/lib/data';

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <header className="">
      <nav
        className="fixed left-1/2 -translate-x-1/2 top-4 z-50 flex justify-between items-center bg-slate-100 h-14 w-[90%] max-w-[62.5rem] px-8 py-4 rounded-lg"
      >
        <Link href="/#home">
          <Image src="/logo-faridkharis.svg" alt="logo" width={130} height={24} />
        </Link>
        <div
          className="md:hidden"
          onClick={() => { setMenuActive(!menuActive); }}
          aria-hidden="true"
        >
          {
            menuActive
              ? <HiX className="w-6 h-6 text-slate-900" />
              : <HiMenuAlt3 className="w-6 h-6 text-slate-900" />
          }
        </div>
        <ul
          className={`flex flex-col justify-center items-center gap-y-10 w-full h-[70vh] absolute left-0 -z-10 rounded-b-lg py-12 font-medium text-slate-800 bg-slate-100 duration-300 ${menuActive ? 'top-[2.5rem]' : '-top-[50rem]'} md:flex-row md:top-0 md:relative md:py-0 md:h-auto md:w-auto`}
        >
          {
            links.map((link, index) => {
              return (
                <li key={index}>
                  <Link
                    href={link.hash}
                    className="px-3 py-2 rounded-md hover:bg-slate-200"
                    onClick={() => { setMenuActive(!menuActive); }}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })
          }
        </ul>
      </nav>
    </header>
  );
}
