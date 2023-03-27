import React, { HTMLInputTypeAttribute } from 'react';
import { BiSearch } from 'react-icons/bi';

import Typography from '@/components/Typography';

interface SearchBarProps {
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  className?: string;
}

function SearchBar({
  placeholder,
  type = 'search',
  className,
}: SearchBarProps) {
  // const [showSearch, setShowSearch] = useState(true);

  // const handleClick = () => setShowSearch(!showSearch);

  return (
    <div className='flex justify-center'>
      <input
        // onClick={handleClick}
        type={type}
        placeholder={placeholder}
        className={`${className} absolute -mt-8 w-1/2 rounded-3xl
        border-none bg-primary-500 p-3 px-5 text-lg shadow-[4px_6px_10px_rgba(147,217,195,1)]`}
      />
      <button className='w-1/2'>
        <Typography
          sizeVariant='c1'
          colorVariant='tertiary'
          className='flex items-center justify-end'
        >
          <BiSearch className='absolute mb-3' />
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
