import React, { HTMLInputTypeAttribute, useState } from 'react';
import { BiSearch } from 'react-icons/bi';

import Typography from '@/components/Typography';

interface SearchBarProps {
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  className?: string;
}

function SearchBar({ placeholder, type = 'text', className }: SearchBarProps) {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchValue(event.target.value);
  };

  const handleEnterSearch = (event: { key: string }) => {
    if (event.key === 'Enter') {
      setSearchValue('');
    }
  };
  const handleButtonSearch = () => {
    setSearchValue('');
  };

  // const [showSearch, setShowSearch] = useState(true);

  // const handleClick = () => setShowSearch(!showSearch);

  return (
    <div className='layout flex w-full justify-center'>
      <div className='w-full'>
        <input
          // onClick={handleClick}
          type={type}
          value={searchValue}
          placeholder={placeholder}
          onChange={handleInputChange}
          onKeyDown={handleEnterSearch}
          className={`${className} layout absolute -mt-7 w-11/12 rounded-3xl
        border-none bg-primary-500 p-3 px-5 text-lg shadow-[4px_6px_10px_rgba(147,217,195,1)]`}
        />
      </div>
      <button onClick={handleButtonSearch}>
        <Typography
          sizeVariant='c1'
          colorVariant='tertiary'
          className='flex items-center justify-end'
        >
          <BiSearch className='absolute mr-5 mb-2 hover:text-primary-600' />
        </Typography>
      </button>

      {/* {showSearch && (
        <button className='w-1/2'>
          <Typography
            sizeVariant='c1'
            colorVariant='tertiary'
            className='flex items-center justify-end'
          >
            <BiSearch className='absolute mr-6 mb-3' />
          </Typography>
        </button>
      )} */}
    </div>
  );
}

export default SearchBar;
