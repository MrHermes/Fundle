import React from 'react';

const Stepper = () => {
  return (
    <div className='mx-4 flex items-center justify-between p-4'>
      <div className='relative flex flex-col items-center text-teal-600'>
        <div
          className='flex h-12 w-12 items-center 
        justify-center rounded-full border-2 border-gray-300 py-3 transition
        duration-500 ease-in-out'
        >
          1
        </div>
        <div
          className='absolute top-0 mt-16 w-32 text-center text-xs 
        font-medium uppercase'
        >
          Biodata
        </div>
        <div
          className='flex-auto border-t-2 border-gray-300 transition 
        duration-500 ease-in-out'
        >
          {/* Display line */}
        </div>
      </div>
    </div>
  );
};

export default Stepper;
