import { PropsWithChildren } from 'react';
import Header from './Header';
import Footer from './Footer';

const Template = ({ children }: PropsWithChildren) => {
  return (
    <main className="flex flex-col items-center justify-between w-screen h-full">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Template;
