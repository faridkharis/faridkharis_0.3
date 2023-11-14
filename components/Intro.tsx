'use client';

import { motion } from 'framer-motion';
import Button from './Button';

export default function Intro() {
  return (
    <section className="flex">
      <div className="h-screen w-screen bg-slate-900">
        <motion.div
          className="h-full max-w-[80%] mx-auto flex flex-col items-center justify-center"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <p className="text-amber-400 font-semibold tracking-widest mb-8">Hi, my name is</p>
          <h1 className="text-slate-200 font-extrabold text-7xl">
            Farid Kharismawan,
          </h1>
          <h3 className="text-slate-400 font-bold text-[3.5rem]">I write code for the web.</h3>
          <p className="text-slate-400 font-medium max-w-[37.5rem] text-center mb-8">
            I am a software engineer specializing in web development. Currently, I often use
            Javascript (React.js, Next.js, Vue.js, Node.js). I just graduated from Informatics at
            UPN &quote;Veteran&quote; Yogyakarta with a great passion for working as
            software engineer.
          </p>
          <div className="flex gap-3">
            <Button type="button" title="Contact Me" variant="btn_amber" />
            <Button type="button" title="Download My CV" variant="btn_amber_outline" />
            <Button type="button" icon="/icon-github.svg" variant="btn_amber_outline" />
            <Button type="button" icon="/icon-linkedin.svg" variant="btn_amber_outline" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
