'use client';

import { useEffect, useState } from 'react';
import TopButton from './TopButton';

interface Props {
  headings: any;
  params: { slug: string };
}

const TOC = ({ headings, params }: Props) => {
  const [selectedId, setSelectedId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setSelectedId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '0px', // Adjust this value based on your requirement
        threshold: 0.1,
      },
    );

    headings.forEach((heading: any) => {
      const element = document.getElementById(heading.slug);
      if (element) observer.observe(element);
    });

    return () => {
      headings.forEach((heading: any) => {
        const element = document.getElementById(heading.slug);
        if (element) observer.unobserve(element);
      });
    };
  }, [headings]);

  return (
    <div className="hidden h-fit lg:sticky top-40 lg:flex flex-col lg:w-60 items-start px-4 gap-1 ml-4">
      {headings.map((heading: any) => {
        return (
          <div key={`#${heading}`}>
            <a
              className={`${
                selectedId === heading.slug
                  ? 'text-primary-selection'
                  : 'text-gray-400'
              } font-bold hover:underline`}
              data-level={heading.level}
              href={`${params.slug}#${heading.slug}`}
            >
              {heading.text}
            </a>
          </div>
        );
      })}
      <div className="border-t border-gray-400 w-full" />
      <TopButton />
    </div>
  );
};

export default TOC;
