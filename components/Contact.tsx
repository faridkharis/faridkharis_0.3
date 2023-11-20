'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from './Button';

export default function Contact() {
  return (
    <section id="contact" className="py-[3rem] w-[100%] mx-auto">
      <motion.h2
        className="text-center font-extrabold text-7xl mt-[3rem] text-slate-600"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: {
            type: 'spring',
            bounce: 0.4,
            duration: 0.5,
            delay: 0.1,
          },
        }}
        viewport={{ once: true }}
      >
        Connect with Me
      </motion.h2>
      <div className="flex justify-center h-[20rem] mt-[3rem] mx-auto xl:w-[90%]">
        <div className="flex flex-col justify-center items-center gap-10 bg-amber-50 rounded-3xl w-full max-w-5xl p-10 md:p-20">
          <p className="max-w-lg text-center text-slate-600 font-medium">
            I am looking for opportunities to contribute further to the field of
            software engineering and apply my knowledge and interests.
            Do you have an interesting project or just want to say hello?
            Feel free to message me!
          </p>
          <Link href="mailto:faridkharismawan@gmail.com" target="_blank">
            <Button type="button" title="Contact Me" variant="btn_navy" />
          </Link>
        </div>
      </div>
    </section>
  );
}
