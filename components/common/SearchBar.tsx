'use client';
import { Dispatch, KeyboardEvent, SetStateAction, useState } from 'react';

interface SearchBarProps {
  setSearchTerm: Dispatch<SetStateAction<string>>;
}

const SearchBar = ({ setSearchTerm }: SearchBarProps) => {
  const [searchInput, setSearchInput] = useState('');

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setSearchTerm(searchInput);
    }
  };

  return (
    <div className="flex w-full justify-center items-center mt-10">
      <input
        type="text"
        className="border border-gray-300 rounded-2xl px-3 py-1 mr-2 text-black"
        placeholder="Search posts"
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button
        className="bg-primary-selection text-white rounded-2xl px-4 py-1 category trasition-shadow"
        onClick={() => setSearchTerm(searchInput)}
      >
        검색
      </button>
    </div>
  );
};

export default SearchBar;
