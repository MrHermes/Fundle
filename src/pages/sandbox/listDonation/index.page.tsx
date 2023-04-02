import Image from 'next/image';
import * as React from 'react';

import ListDonationCard from '@/components/donationList/ListDonationCard';
import SearchBar from '@/components/donationList/SearchBar';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Typography from '@/components/Typography';

import Link from 'next/link';
import { DonationListType, get3Event } from '@/pages/api/event';
import { useEffect, useState } from 'react';

export default function HomePage() {

  const [donationList, setDonationList] = useState<DonationListType[]>([]);

  useEffect(() => {
    const fetchEventData = async () => {
      try{
        const data = await get3Event();
        // console.log("++");
        // console.log(typeof data.data);
        // console.log(data.data);
        setDonationList(data.data);
      }catch(error){
        // console.log("ERROR -> ListDonation")
        // console.log(error)
        throw new Error ("Error in ListDonation")
      }
      
    };
    fetchEventData();
  }, [])

  // console.log("--");
  // console.log(donationList);
  
  return (
    <Layout>
      <Seo />
      <main>
        <div className='relative'>
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
        </div>
        <div className='layout'>
          <SearchBar placeholder='Ketik Sesuatu' />
          <div className='pt-16'>
            {donationList && donationList.map(( donationList, index ) => (
              <Link key={index} href={`/sandbox/listDonation/${donationList.id}`}>
                <ListDonationCard
                  index={index+1}
                  id={donationList.id}
                  title={donationList.judul_event}
                  imgUrl={donationList.foto_event && donationList.foto_event != "https://example.com/foto.jpg" ? donationList.foto_event : "/images/dummy-poster.svg"}
                  desc={donationList.deskripsi_event}
                />
              </Link>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
