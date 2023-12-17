import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/common/Footer';
import ToggleDarkMode from '@/components/common/ToggleDarkMode';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '박정규의 블로그',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <ToggleDarkMode />
        {children}
        <Footer />
      </body>
    </html>
  );
}
