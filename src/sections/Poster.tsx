import Image from 'next/image';
import React from 'react';

import ButtonLink from '@/components/buttons/ButtonLink';
import Typography from '@/components/Typography';

const Poster = () => {
  return (
    <section className='container mx-auto mb-[150px] mt-10 w-11/12 rounded-[58px] bg-primary-100'>
      <div className='flex flex-col items-center lg:flex-row lg:gap-x-[100px]'>
        <div className='order-1 ml-[70px] flex-1 lg:-order-1'>
          <Typography
            sizeVariant='c1'
            colorVariant='secondary'
            className='pb-4 text-start font-bold leading-tight'
          >
            Bersama Membantu Sesama: Galang Dana untuk Kemanusiaan
          </Typography>
          <Typography
            sizeVariant='c3'
            className='mb-[2px] pb-4 pt-[2px] text-start font-normal leading-relaxed text-primary-400'
          >
            Setiap bantuan yang diberikan akan menjadi sinar harapan bagi mereka
            yang membutuhkan. Mari bergabung dalam penggalangan dana Foundation
            kami dan menjadi bagian dari perubahan yang positif.
          </Typography>
          <div className='flex'>
            <ButtonLink
              href='/listDonation'
              className='px-[20px] py-[10px] text-center font-semibold hover:bg-secondary-200'
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
