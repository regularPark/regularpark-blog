import React from 'react';
import MailIcon from './MailIcon';
import GithubIcon from './GithubIcon';
import Link from 'next/link';

const ContactLinks = () => {
  return (
    <div className="flex flex-row items-end gap-3">
      <Link href="mailto:regularpark0110@gmail.com">
        <MailIcon />
      </Link>
      <Link href="https://github.com/regularPark">
        <GithubIcon />
      </Link>
      <Link
        className="text-xl hover:text-blue-400 transition"
        href="https://drive.google.com/file/u/1/d/17nAWFCg8m-0aUzw3GQgb5WlbHC91_6gJ/view"
      >
        Resume
      </Link>
      <Link
        className="text-xl hover:text-blue-400 transition"
        href="https://drive.google.com/file/u/1/d/17nAWFCg8m-0aUzw3GQgb5WlbHC91_6gJ/view"
      >
        Portfolio
      </Link>
    </div>
  );
};

export default ContactLinks;
