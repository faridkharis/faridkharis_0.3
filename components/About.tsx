'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-[3rem] w-[90%] max-w-[62.5rem] lg:w-[80%] mx-auto" id="about">
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
        About Me
      </motion.h2>
      <div className="flex flex-col mt-[3rem] gap-20 justify-center items-center text-center lg:text-left lg:flex-row">
        <div className="relative">
          <motion.div
            className="-z-20 absolute top-5 bg-slate-600 w-[15rem] h-[18.75rem] rounded-2xl -rotate-12"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{
              x: 0,
              rotate: -10,
              opacity: 1,
              transition: {
                type: 'spring',
                bounce: 0.4,
                duration: 0.5,
              },
            }}
          />
          <motion.div
            className="-z-10 absolute top-5 bg-amber-300 w-[15rem] h-[18.75rem] rounded-2xl"
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
          />
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                type: 'spring',
                bounce: 0.4,
                duration: 0.8,
                delay: 0.2,
              },
            }}
            viewport={{ once: true }}
          >
            <Image
              src="/about-photo.png"
              alt="about-photo"
              width={240}
              height={320}
              quality={95}
              className=""
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 0.3,
                delay: 0.4,
              },
            }}
          >
            <div className="z-10 absolute top-24 -left-16 bg-slate-100 px-4 py-2 rounded-lg shadow-sm shadow-slate-800">
              <p className="font-medium text-slate-800 text-sm">Hi, I&apos;m Farid</p>
            </div>
            <div className="z-10 absolute top-40 left-24 bg-slate-100 px-4 py-2 rounded-lg shadow-sm shadow-slate-800">
              <p className="font-medium text-slate-800 text-sm whitespace-nowrap">Frontend Developer</p>
            </div>
            <div className="z-10 absolute bottom-8 -left-10 bg-slate-100 px-4 py-2 rounded-lg shadow-sm shadow-slate-800">
              <p className="font-medium text-slate-800 text-sm">React.js</p>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="max-w-lg lg:max-w-md"
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
        >
          <p className="font-medium text-base text-slate-700 mb-3">
            Hello, my name is Farid Kharismawan. I am a fresh graduate from UPN Veteran Yogyakarta
            majoring in Informatics with a great passion for working in software engineering.
          </p>
          <p className="font-medium text-base text-slate-700 mb-3">
            In college, I was active in the Muslim student community as a leader at the
            department level.I could do this by staying focused on studying, so I could graduate
            with a 3.62 GPA. I also attended several trainings and certifications related to
            web programming using HTML, CSS, JavaScript, and React.js.
          </p>
          <p className="font-medium text-base text-slate-700 mb-3">
            I am looking for opportunities to contribute further to the field of software
            engineering and to apply my knowledge and interests.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
