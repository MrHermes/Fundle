import Image from 'next/image';
import * as React from 'react';

import ListDonationCard from '@/components/donationList/ListDonationCard';
import SearchBar from '@/components/donationList/SearchBar';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Typography from '@/components/Typography';

import { listPhotos } from '@/constant/listPhotos';

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <main>
        <Image
          src='/svg/ListDonation-Poster.svg'
          alt='List Donation Poster'
          width={500}
          height={500}
          className='-mt-20 w-full'
        />
        <div className='flex justify-center'>
          <Typography
            sizeVariant='h1'
            colorVariant='secondary'
            className='absolute top-1/3 mr-24 font-bold'
          >
            Daftar
          </Typography>
          <Typography
            sizeVariant='h1'
            colorVariant='secondary'
            className='absolute top-1/3 mt-16 ml-24'
          >
            Donasi
          </Typography>
        </div>
        <div className='layout'>
          <SearchBar placeholder='Ketik Sesuatu' />
          <div className='pt-16'>
            {listPhotos.map((photo, index) => (
              <ListDonationCard
                index={index}
                id={photo.id}
                key={photo.id}
                title={photo.title}
                imgUrl={photo.imgUrl}
                desc={photo.desc}
              />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
