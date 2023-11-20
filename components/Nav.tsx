import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { links } from '@/lib/data';
import Button from './Button';

export default function Nav() {
  return (
    <motion.nav
      className="hidden md:flex fixed justify-between items-center left-1/2 -translate-x-1/2 h-[3.75rem] w-[100%] max-w-[62.5rem] py-4 px-8"
      initial={{ y: -100, x: '-50%', opacity: 0 }}
      animate={{ y: 0, x: '-50%', opacity: 1 }}
    >
      <Link href="/#home">
        <Image src="/logo-faridkharis.svg" alt="logo" width={130} height={24} />
      </Link>
      <div className="flex items-center justify-center">
        <ul className="flex font-medium text-gray-700">
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
        <Link href="/#contact">
          <Button type="button" title="Contact Me" variant="btn_amber" />
        </Link>
      </div>
    </motion.nav>
  );
}
