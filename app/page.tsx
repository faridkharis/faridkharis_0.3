import About from '@/components/About';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Intro from '@/components/Intro';
import Project from '@/components/Project';

export default function Home() {
  return (
    <main>
      <Intro />
      <About />
      <Experience />
      <Project />
      <Contact />
    </main>
  );
}
