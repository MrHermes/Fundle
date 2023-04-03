import Image from 'next/image';
import React from 'react';

import ButtonLink from '@/components/buttons/ButtonLink';
import Typography from '@/components/Typography';

const Cta = () => {
  return (
    <section
      className='container mx-auto w-11/12 rounded-[58px]'
      style={{
        backgroundImage: 'linear-gradient(135deg, #5DFCA4 0%, #A1DAED 100%)',
      }}
    >
      <div className='flex flex-col items-center lg:flex-row lg:gap-x-[100px]'>
        <div className='order-1 ml-[70px] flex-1 lg:-order-1'>
          <Typography
            sizeVariant='c1'
            colorVariant='primary'
            className='pb-6 text-start font-bold leading-tight'
          >
            Join our community and be a part of the transformation journey
          </Typography>
          <Typography
            sizeVariant='c3'
            colorVariant='primary'
            className='mb-[2px] pb-5 pt-[2px] text-start font-normal leading-relaxed'
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make.
          </Typography>
          <div className='flex'>
            <ButtonLink
              href='/uploadDonation'
              className='py-[15px] px-[30px] text-center font-semibold hover:bg-secondary-200'
            >
              BUAT SEKARANG
            </ButtonLink>
          </div>
        </div>

        <div className='flex flex-1 justify-end '>
          <Image
            src='/images/cta_img.svg'
            alt='poster'
            width={400}
            height={250}
            className='w-[25rem] object-cover'
          />
        </div>
      </div>
    </section>
  );
};

export default Cta;
