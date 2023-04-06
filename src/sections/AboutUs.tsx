import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import Typography from '@/components/Typography';

import Poster from '@/sections/Poster';
import { fadeIn, staggerContainer } from '@/utils/motion';

const AboutUs = () => {
  return (
    <section id='About' className='mt-6 bg-primary-500'>
      <Poster />
      <div className='container mx-auto w-11/12'>
        <Typography
          sizeVariant='h4'
          colorVariant='primary'
          className='pb-4 text-center font-extrabold'
        >
          Reliable Partner
          <span style={{ fontWeight: 'normal' }}>that Delivers More.</span>
        </Typography>
        <Typography sizeVariant='c2' className='text-center'>
          Tabana is the Agriculture Technology startup that focuses on
          empowering farmers & traders in the livestock<br></br> sector. We
          drive transformation in the livestock ecosystem through innovative
          digital solutions & operational<br></br> excellence, ensuring
          profitable and sustainable solutions for everyone in the ecosystem.
        </Typography>
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.25 }}
        >
          <motion.div
            variants={fadeIn('up', 'tween', 0.1, 0.8)}
            className='flex'
          >
            <Image
              src='/svg/Location.svg'
              alt='location-icon'
              width={58}
              height={60}
              className='absolute ml-4 mt-10'
            />
          </motion.div>
          <motion.div
            variants={fadeIn('up', 'tween', 0.6, 0.8)}
            className='flex justify-center'
          >
            <Image
              src='/svg/Location.svg'
              alt='location-icon'
              width={58}
              height={60}
              className='absolute mr-[31rem] mt-44'
            />
          </motion.div>
          <Image
            src='/images/Peta.svg'
            alt='peta'
            width={450}
            height={300}
            className='h-full w-full pb-[120px] pt-[64px]'
          />
          <motion.div
            variants={fadeIn('up', 'tween', 1.2, 0.8)}
            className='flex justify-center'
          >
            <Image
              src='/svg/Location.svg'
              alt='location-icon'
              width={58}
              height={60}
              className='absolute -mt-64 mr-28'
            />
          </motion.div>
          <motion.div
            variants={fadeIn('up', 'tween', 1.8, 0.8)}
            className='flex justify-end'
          >
            <Image
              src='/svg/Location.svg'
              alt='location-icon'
              width={58}
              height={60}
              className='absolute -mt-56 mr-24'
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
