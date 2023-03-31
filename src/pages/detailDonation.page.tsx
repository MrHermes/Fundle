import { floor } from 'lodash';
import Image from 'next/image';
import React from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { RiHandHeartLine } from 'react-icons/ri';

import ButtonLink from '@/components/buttons/ButtonLink';
import Layout from '@/components/layout/Layout';
import ProgressBar from '@/components/progressbars/progressBar';
import Seo from '@/components/Seo';
import Typography from '@/components/Typography';

import { listDonatur } from '@/constant/listDonatur';
import UpperPart from '@/components/upperDetailDonation/upperPart';

function detailDonation() {
  const data = floor(0.1 * 100);

  return (
    <Layout>
      <Seo />
      <div className='absolute top-0 min-h-[96px] w-full bg-primary-100 lg:min-h-[72px]'></div>
      <main className='layout mt-14 rounded-2xl bg-primary-200 px-20 pt-20 pb-10'>
        <UpperPart 
          namaEvent={''} 
          fotoEvent={''} 
          jumlahDonasi={0} 
          targetDonasi={0} 
          sisaHari={0} 
          jumlahDonatur={0} 
          desc={''} 
        />

        {/* Bar progress uang */}
        <div className='my-6 h-2 w-full'>
          <ProgressBar progress={data} />
        </div>

        <div className='rounded-xl bg-primary-500 p-5 transition duration-500 hover:scale-105'>
          {/* Deskripsi Donasi */}
          <Typography
            sizeVariant='h4'
            colorVariant='primary'
            className='font-bold'
          >
            Tentang Donasi
          </Typography>
          <Typography
            sizeVariant='c4'
            colorVariant='primary'
            className='mt-2 text-justify'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            reprehenderit dolorem repellat fugiat debitis nobis cupiditate
            adipisci! Praesentium dicta rerum at laudantium perferendis, sint
            iste, aspernatur est, distinctio ab veniam? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Sit ratione impedit voluptates
            ullam quae obcaecati odit, non ab facilis eum delectus temporibus
            perspiciatis nisi nam eveniet minima, ut corrupti accusamus. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            reprehenderit dolorem repellat fugiat debitis nobis cupiditate
            adipisci! Praesentium dicta rerum at laudantium perferendis, sint
            iste, aspernatur est, distinctio ab veniam? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Sit ratione impedit voluptates
            ullam quae obcaecati odit, non ab facilis eum delectus temporibus
            perspiciatis nisi nam eveniet minima, ut corrupti accusamus. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            reprehenderit dolorem repellat fugiat debitis nobis cupiditate
            adipisci! Praesentium dicta rerum at laudantium perferendis, sint
            iste, aspernatur est, distinctio ab veniam? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Sit ratione impedit voluptates
            ullam quae obcaecati odit, non ab facilis eum delectus temporibus
            perspiciatis nisi nam eveniet minima, ut corrupti accusamus. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            reprehenderit dolorem repellat fugiat debitis nobis cupiditate
            adipisci! Praesentium dicta rerum at laudantium perferendis, sint
            iste, aspernatur est, distinctio ab veniam? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Sit ratione impedit voluptates
            ullam quae obcaecati odit, non ab facilis eum delectus temporibus
            perspiciatis nisi nam eveniet minima, ut corrupti accusamus. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            reprehenderit dolorem repellat fugiat debitis nobis cupiditate
            adipisci! Praesentium dicta rerum at laudantium perferendis, sint
            iste, aspernatur est, distinctio ab veniam? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Sit ratione impedit voluptates
            ullam quae obcaecati odit, non ab facilis eum delectus temporibus
            perspiciatis nisi nam eveniet minima, ut corrupti accusamus. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            reprehenderit dolorem repellat fugiat debitis nobis cupiditate
            adipisci! Praesentium dicta rerum at laudantium perferendis, sint
            iste, aspernatur est, distinctio ab veniam? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Sit ratione impedit voluptates
            ullam quae obcaecati odit, non ab facilis eum delectus temporibus
            perspiciatis nisi nam eveniet minima, ut corrupti accusamus.
          </Typography>
        </div>

        <div className='mt-6 rounded-xl bg-primary-500 p-10'>
          <Typography
            sizeVariant='h6'
            colorVariant='primary'
            className='font-bold'
          >
            Donasi
          </Typography>
          {listDonatur.map(({ id, name, money }) => (
            <div
              key={id}
              className='my-3 rounded-xl bg-primary-200 p-5 shadow-xl'
            >
              <Typography
                sizeVariant='c1'
                colorVariant='primary'
                className='font-bold'
              >
                {name}
              </Typography>
              <Typography sizeVariant='c2' colorVariant='primary'>
                Berhasil melakukan donasi sebesar Rp{money}
              </Typography>
            </div>
          ))}
        </div>

        <ButtonLink
          href='/'
          className='mx-auto mt-10 w-max py-4 px-5 text-2xl font-extrabold hover:bg-secondary-100/60'
        >
          Donasi Sekarang
        </ButtonLink>
      </main>
    </Layout>
  );
}

export default detailDonation;
