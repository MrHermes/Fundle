import React from 'react';

import Typography from '@/components/Typography';

const StepperController = () => {
  return (
    <div className='container mt-4 mb-8 flex justify-around'>
      <Typography
        sizeVariant='c3'
        className='cursor-pointer rounded-xl border-2 bg-secondary-100 py-2 px-4 
          font-semibold uppercase text-primary-500 transition duration-200 ease-in-out hover:bg-secondary-200
          hover:text-primary-500'
      >
        {' '}
        Back{' '}
      </Typography>

      <Typography
        sizeVariant='c3'
        className='cursor-pointer rounded-xl border-2 bg-secondary-100 py-2 px-4 
          font-semibold uppercase text-primary-500 transition duration-200 ease-in-out hover:bg-secondary-200
          hover:text-primary-500'
      >
        {' '}
        Next{' '}
      </Typography>
    </div>
  );
};

export default StepperController;
