import Image from 'next/image';
import React from 'react';

import Typography from '@/components/Typography';

import Poster from '@/sections/Poster';

const AboutUs = () => {
  return (
    <section className='mt-6 bg-primary-500'>
      <Poster />
      <div className='container mx-auto w-11/12'>
        <Typography
          sizeVariant='h4'
          colorVariant='primary'
          className='pb-4 text-center font-extrabold'
        >
          Reliable Partner{' '}
          <span style={{ fontWeight: 'normal' }}>that Delivers More.</span>
        </Typography>
        <Typography sizeVariant='c2' className='text-center'>
          Tabana is the Agriculture Technology startup that focuses on
          empowering farmers & traders in the livestock<br></br> sector. We
          drive transformation in the livestock ecosystem through innovative
          digital solutions & operational<br></br> excellence, ensuring
          profitable and sustainable solutions for everyone in the ecosystem.
        </Typography>
        <Image
          src='/images/Peta.svg'
          alt='peta'
          width={450}
          height={300}
          className='h-full w-full pt-[64px] pb-[120px]'
        />
      </div>
    </section>
  );
};

export default AboutUs;
