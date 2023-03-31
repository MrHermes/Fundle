import React from 'react';

import Stepper from '@/components/multistep/Stepper';
import StepperController from '@/components/multistep/StepperController';

export default function HomePage() {
  return (
    <main>
      <div className='mx-auto rounded-2xl bg-primary-500 pb-2 shadow-xl md:w-1/2'>
        <div className='horizontal container mt-5'>
          <Stepper />
        </div>
        <StepperController />
      </div>
    </main>
  );
}
