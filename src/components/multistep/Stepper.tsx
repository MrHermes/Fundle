import React from 'react';

const Stepper = () => {
  return (
    <div className='mx-4 flex items-center justify-center p-4'>
      <div className='relative flex w-2/5 justify-between text-teal-600'>
        <div className='z-20 flex'>
          <div
            className='flex h-10 w-10 items-center justify-center
        rounded-full border-2 border-primary-100 bg-primary-500 py-3 transition
        duration-500 ease-in-out'
          >
            1
          </div>
          <div className='top-0 ml-2 flex items-center justify-center text-center text-xs font-medium uppercase'>
            Biodata
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <hr className='absolute h-1 w-2/5 items-start justify-center rounded-md bg-primary-100 text-center' />
        </div>
        <div className='z-20 flex'>
          <div
            className='flex h-10 w-10 items-center justify-center
        rounded-full border-2 border-primary-100 bg-primary-500 py-3 transition
        duration-500 ease-in-out'
          >
            2
          </div>
          <div className='top-0 ml-2 flex items-center justify-center text-center text-xs font-medium uppercase'>
            Upload
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepper;

{
  /* <div
className='flex-auto border-t-2 border-gray-300 transition 
duration-500 ease-in-out'
>
{/* Display line */
}
// </div>
