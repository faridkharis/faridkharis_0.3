'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { projects } from '@/lib/data';

export default function Project() {
  return (
    <section id="project" className="py-[3rem] w-[100%] mx-auto">
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
        Projects I&apos;ve Crafted
      </motion.h2>
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-10 w-full max-w-5xl xl:w-[90%] mt-[3rem]">
          {
            projects.map((project) => {
              return (
                <div key={project.id} className="relative flex flex-col lg:flex-row justify-between items-center gap-8 lg:h-[25rem] bg-slate-200 rounded-2xl py-5 px-5 lg:py-0">
                  <div className="relative lg:absolute lg:z-10 lg:right-5 shadow-slate-400 shadow-md rounded-2xl">
                    <Image
                      src={project.image}
                      alt="image"
                      width={700}
                      height={350}
                      className="rounded-2xl w-full lg:max-w-[43.75rem]"
                    />
                  </div>
                  <div className="z-20 flex flex-col gap-2 p-5 bg-white rounded-2xl shadow-slate-400 shadow-md lg:max-w-sm">
                    <div className="flex justify-between items-center">
                      <p className="text-slate-800 text-2xl font-bold">{project.title}</p>
                      <div className="flex gap-3">
                        <Link href={project.links.github} target="_blank">
                          <Image src="/icon-github-slate.svg" alt="link" width={20} height={20} />
                        </Link>
                        <Link href={project.links.website} target="_blank">
                          <Image src="/icon-link-slate.svg" alt="link" width={20} height={20} />
                        </Link>
                      </div>
                    </div>
                    <p className="text-slate-600 text-base font-normal">{project.description}</p>
                    <div className="flex gap-3">
                      {
                        project.techs.map((tech, index) => {
                          return (
                            <p key={index} className="py-1 px-4 bg-slate-200 rounded-lg text-slate-700 font-medium whitespace-nowrap">
                              {tech}
                            </p>
                          );
                        })
                      }
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </section>
  );
}
