'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Nav from './Nav';
import NavMobile from './NavMobile';

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <header className="z-50 relative">
      <motion.div
        className="hidden md:block fixed left-1/2 -translate-x-1/2 h-[3.75rem] border border-white border-opacity-40 bg-white bg-opacity-90 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] top-4 w-[90%] max-w-[62.5rem] lg:w-[80%] rounded-lg"
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      >
        <Nav />
      </motion.div>
      <motion.div
        className="fixed flex z-40 justify-center items-center right-6 top-4 h-[3rem] w-[3rem] border border-white border-opacity-40 bg-amber-400 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] rounded-lg cursor-pointer md:hidden"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={() => { setIsActive(!isActive); }}
      >
        <div className={`burger ${isActive ? 'burgerActive' : ''}`} />
      </motion.div>
      {isActive && <NavMobile />}
    </header>
  );
}
