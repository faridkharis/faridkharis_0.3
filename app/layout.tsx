import type { Metadata } from 'next';
import { Noto_Sans as NotoSans } from 'next/font/google';

import './globals.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const notoSans = NotoSans({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Farid Kharismawan',
  description: 'Portfolio Web of a Frontend Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${notoSans.className} bg-slate-50 text-slate-900 relative scroll-smooth h-[5000px]`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
