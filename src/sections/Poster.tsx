import Image from 'next/image';
import React from 'react';

import ButtonLink from '@/components/buttons/ButtonLink';
import Typography from '@/components/Typography';

const Poster = () => {
  return (
    <section className='container mx-auto mt-10 mb-[150px] w-11/12 rounded-[58px] bg-primary-100'>
      <div className='flex flex-col items-center lg:flex-row lg:gap-x-[100px]'>
        <div className='order-1 ml-[70px] flex-1 lg:-order-1'>
          <Typography
            sizeVariant='c1'
            colorVariant='secondary'
            className='pb-4 text-start font-bold leading-tight'
          >
            Join our community and be a part of the transformation journey
          </Typography>
          <Typography
            sizeVariant='c3'
            className='mb-[2px] pb-4 pt-[2px] text-start font-normal leading-relaxed text-primary-400'
          >
            We're continuously expanding our network of partners. Whether you
            are a logistic provider, input supplier, financing provider, or
            other actors in cattle and beef ecosystem, join our network and help
            us to shape the future of livestock farming.
          </Typography>
          <div className='flex'>
            <ButtonLink
              href='/'
              className='py-[10px] px-[20px] text-center font-semibold hover:bg-secondary-200'
            >
              DONASI SEKARANG
            </ButtonLink>
          </div>
        </div>

        <div className='flex flex-1 justify-end'>
          <Image
            src='/images/poster.svg'
            alt='poster'
            width={450}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default Poster;
