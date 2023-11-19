'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/lib/data';

export default function Experience() {
  return (
    <section id="experience" className="py-[3rem] w-[100%] mx-auto">
      <div>
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
          Career Journey
        </motion.h2>
        <div className="flex justify-center items-center mt-[3rem]">
          <div className="bg-amber-50 rounded-3xl w-full max-w-5xl xl:w-[90%] p-10 md:p-20">
            {
              experiences.map((experience) => {
                return (
                  <div key={experience.id} className="md:flex justify-center items-start gap-10 pb-10">
                    <div className="md:max-w-[15rem]">
                      <p className="font-bold text-2xl text-slate-700 mb-3">{experience.institution}</p>
                      <p className="font-normal text-base text-slate-600 tracking-wider mb-3">{experience.date}</p>
                    </div>
                    <div className="max-w-lg">
                      <p className="font-bold text-xl md:text-2xl text-slate-700 mb-3">{experience.title}</p>
                      <ul className="list-disc ml-5">
                        {
                          experience.tasks.map((task, index) => {
                            return (
                              <li key={index} className="font-normal text-base text-slate-700 mb-1">
                                {task}
                              </li>
                            );
                          })
                        }
                      </ul>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    </section>
  );
}
