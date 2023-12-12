import { PropsWithChildren } from 'react';
import Header from './Header';
import Footer from './Footer';

const Template = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main className="flex flex-col lg:flex-row justify-between w-screen h-full">
        {children}
      </main>
    </>
  );
};

export default Template;
