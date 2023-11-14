'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { RiAlignRight } from 'react-icons/ri';
import { links } from '@/lib/data';

export default function Header() {
  return (
    <header className="z-[999] relative">
      <motion.div
        className="hidden md:block fixed left-1/2 -translate-x-1/2 h-[3.75rem] border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] top-4 w-[90%] max-w-[62.5rem] lg:w-[80%] rounded-lg"
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      />
      <motion.div
        className="fixed flex justify-center items-center right-6 top-4 h-[2.5rem] w-[2.5rem] border border-white border-opacity-40 bg-amber-400 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] rounded-lg md:hidden"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <button className="text-gray-800">
          <RiAlignRight size="2rem" />
        </button>
      </motion.div>

      <motion.nav
        className="hidden md:flex fixed justify-between items-center top-4 left-1/2 -translate-x-1/2 h-[3.75rem] w-[90%] max-w-[62.5rem] lg:w-[80%] py-4 px-8"
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      >
        <Link href="/">
          <Image src="/logo-faridkharis.svg" alt="logo" width={130} height={24} />
        </Link>
        <div className="flex items-center justify-center">
          <ul className="flex font-medium text-gray-600">
            {
              links.map((link) => {
                return (
                  <li key={link.hash}>
                    <Link href={link.hash} className="px-3 py-2 hover:text-gray-900">
                      {link.name}
                    </Link>
                  </li>
                );
              })
            }
          </ul>
          <Link href="#contact" className="py-2 px-5 ml-3 bg-amber-400 rounded-lg text-gray-800 font-semibold">
            Contact
          </Link>
        </div>
      </motion.nav>
    </header>
  );
}
