import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/common/Footer';
import ToggleDarkMode from '@/components/common/ToggleDarkMode';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';
import localFont from 'next/font/local';

const inter = Inter({ subsets: ['latin'] });

const DEFAULT_TITLE = '박정규의 블로그';

const myFont = localFont({
  src: './fonts/NanumSquareR.ttf',
  display: 'swap',
  variable: '---font-nanum',
});

export const metadata: Metadata = {
  title: { default: DEFAULT_TITLE, template: `%s | ${DEFAULT_TITLE}` },
  description: 'Generated by create next app',
  verification: {
    google: 'QXCt1rHR8GlnfcaX2CeaMmTAyjZnHME4405PEA_aZHE',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={myFont.className}>
      <head></head>
      <body className={myFont.variable}>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE}`}
        />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE}');
        `}
        </Script>
        <ToggleDarkMode />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
