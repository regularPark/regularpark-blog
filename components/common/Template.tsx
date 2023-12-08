import { PropsWithChildren } from 'react';
import Header from './Header';
import Footer from './Footer';

const Template = ({ children }: PropsWithChildren) => {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Template;
