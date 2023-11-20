'use client';

import { motion } from 'framer-motion';
import Button from './Button';

export default function Intro() {
  return (
    <section className="flex">
      <div className="h-screen w-screen bg-slate-900">
        <motion.div
          className="h-full max-w-[80%] mx-auto flex flex-col items-center justify-center text-center gap-2"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <p className="text-amber-400 font-semibold tracking-widest mb-10">Hi, my name is</p>
          <h1 className="text-slate-300 font-extrabold text-4xl sm:text-6xl md:text-7xl whitespace-nowrap">
            Farid Kharismawan,
          </h1>
          <h3 className="text-slate-400 font-bold text-3xl sm:text-5xl md:text-[3.5rem] whitespace-nowrap">I write code for the web.</h3>
          <p className="text-slate-400 font-medium max-w-[37.5rem] text-base text-center mb-10">
            I am a software engineer specializing in web development. Currently, I often use
            Javascript (React.js, Next.js, Vue.js, Node.js). I just graduated from Informatics at
            UPN &quot;Veteran&quot; Yogyakarta with a great passion for working as
            software engineer.
          </p>
          <div className="flex flex-col md:flex-row gap-3 w-full md:w-max">
            <Button type="button" title="Contact Me" variant="btn_amber" />
            <Button type="button" title="Download My CV" variant="btn_amber_outline" />
            <div className="flex items-center justify-between gap-3">
              <Button type="button" icon="/icon-github.svg" variant="btn_amber_outline" />
              <Button type="button" icon="/icon-linkedin.svg" variant="btn_amber_outline" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
