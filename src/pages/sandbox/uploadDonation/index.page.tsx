import React from 'react';

import Stepper from '@/components/multistep/Stepper';
import StepperController from '@/components/multistep/StepperController';

export default function HomePage() {
  return (
    <main>
      <div className='mx-auto w-3/5 rounded-2xl bg-primary-500 pb-2 shadow-xl'>
        <Stepper />
      </div>
      <StepperController />
    </main>
  );
}
