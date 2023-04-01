import Image from 'next/image';
import React from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { RiHandHeartLine } from 'react-icons/ri';

import ButtonLink from '@/components/buttons/ButtonLink';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Typography from '@/components/Typography';

function Withdrawal() {
  return (
    <Layout>
      <Seo />
      <div className='absolute top-0 min-h-[96px] w-full bg-primary-100 lg:min-h-[72px]'></div>
      <main className='layout my-14 w-2/3 rounded-xl bg-primary-200 p-20'>
        <div className='rounded-xl bg-primary-500'>
          <Image
            src='/images/dummy-poster.svg' //Foto_Event
            alt='Poster Image'
            width={640}
            height={480}
            className='h-40 w-full rounded-xl object-cover'
          />
          <Typography
            sizeVariant='h4'
            colorVariant='primary'
            className='text-wrap my-5 text-center font-bold'
          >
            Save Malta Children From Hunger
          </Typography>
          <Typography
            sizeVariant='c3'
            colorVariant='primary'
            className='text-center font-bold opacity-50'
          >
            Jumlah Donasi Terkumpul
          </Typography>
          <div className='flex flex-row flex-wrap justify-center'>
            {/* Jumlah_Donasi */}
            <Typography
              sizeVariant='h6'
              colorVariant='tertiary'
              className='font-bold'
            >
              Rp. 1000000000
            </Typography>
            {/* Target_Donasi */}
            <Typography
              sizeVariant='c3'
              colorVariant='primary'
              className='mt-auto font-bold opacity-50'
            >
              /Rp. 1000000000000
            </Typography>
          </div>
          <div className='flex flex-row flex-wrap justify-center py-5'>
            <div className='mx-2 flex min-w-[10rem] flex-row justify-center gap-x-5 rounded-xl bg-primary-500 font-semibold shadow-xl transition duration-500 hover:scale-110'>
              <div className='my-auto text-3xl text-primary-100'>
                <RiHandHeartLine />
              </div>
              <div className='my-auto'>
                {/* Jumlah_Donatur */}
                <Typography
                  sizeVariant='c1'
                  colorVariant='primary'
                  className=''
                >
                  4517
                </Typography>
                <Typography
                  sizeVariant='c3'
                  colorVariant='primary'
                  className=''
                >
                  Donasi
                </Typography>
              </div>
            </div>
            <div className='mx-2 flex min-w-[10rem] flex-row justify-center gap-x-5 rounded-xl bg-primary-500 font-semibold shadow-xl transition duration-500 hover:scale-110'>
              <div className='my-auto text-3xl text-primary-100'>
                <BiTimeFive />
              </div>
              <div className='my-auto'>
                {/* Sisa_hari -> integer*/}
                <Typography
                  sizeVariant='c1'
                  colorVariant='primary'
                  className=''
                >
                  12 Hari
                </Typography>
                <Typography
                  sizeVariant='c3'
                  colorVariant='primary'
                  className=''
                >
                  Tersisa
                </Typography>
              </div>
            </div>
          </div>
          <div className='py-5'>
            <ButtonLink
              href='/'
              className='mx-auto w-max px-5 py-4 text-2xl font-extrabold hover:bg-secondary-100/60'
            >
              Tarik dana sekarang
            </ButtonLink>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Withdrawal;
