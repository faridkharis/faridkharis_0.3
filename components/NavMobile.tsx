import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { links } from '@/lib/data';
import Button from './Button';

export default function NavMobile() {
  const [isActive, setIsActive] = useState(true);

  return (
    <motion.nav
      className="block fixed bg-slate-100 z-30 h-screen w-[30rem] max-w-full right-0 px-5 pt-4 md:hidden"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
    >
      <div className="h-12 flex justify-start items-center">
        <Link href="/">
          <Image src="/logo-faridkharis.svg" alt="logo" width={130} height={24} />
        </Link>
      </div>
      <div className="h-[80%] flex flex-col justify-evenly">
        <ul className="flex flex-col justify-center items-center gap-10 text-gray-700 font-medium">
          {
            links.map((link) => {
              return (
                <li key={link.hash}>
                  <Link href={link.hash} onClick={() => { setIsActive(!isActive); }}>
                    {link.name}
                  </Link>
                </li>
              );
            })
          }
        </ul>
        <Link href="/#contact">
          <Button type="button" title="Contact Me" variant="btn_amber" />
        </Link>
      </div>
    </motion.nav>
  );
}
