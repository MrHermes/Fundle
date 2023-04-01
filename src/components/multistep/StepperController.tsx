/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import Typography from '@/components/Typography';

interface StepperControllerProps {
  steps: string;
  type?: any;
  onClick?: (event: any) => void;
}

const StepperController = ({
  steps,
  onClick,
  type,
}: StepperControllerProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className='container mt-4 mb-8 flex justify-center'
    >
      <Typography
        sizeVariant='c3'
        className='cursor-pointer rounded-xl border-2 bg-secondary-100 py-2 px-4 
          font-semibold uppercase text-primary-500 transition duration-200 ease-in-out hover:bg-secondary-200
          hover:text-primary-500'
      >
        {steps}
      </Typography>
    </button>
  );
};

export default StepperController;
