import React from 'react';

import Layout from '@/components/layout/Layout';
import Stepper from '@/components/multistep/Stepper';
import StepperController from '@/components/multistep/StepperController';
import Seo from '@/components/Seo';
import Typography from '@/components/Typography';

export default function HomePage() {
  return (
    <Layout withFooter={false}>
      <Seo />
      <main>
        <div className='absolute top-0 w-full bg-primary-100 p-9' />
        <div className='mx-auto w-3/5 rounded-2xl bg-primary-500 pb-2 shadow-xl'>
          <Stepper />
          <div className='py-12'>
            <Typography sizeVariant='c2' className='text-center font-semibold'>
              Biodata Pembuat Donasi
            </Typography>
            <div></div>
          </div>
        </div>
        <StepperController />
      </main>
    </Layout>
  );
}
