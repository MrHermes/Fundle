import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { useEffect, useState } from 'react';

import ListDonationCard from '@/components/donationList/ListDonationCard';
import SearchBar from '@/components/donationList/SearchBar';
import Layout from '@/components/layout/Layout';
import Loader from '@/components/loader/Loader';
import Seo from '@/components/Seo';
import Typography from '@/components/Typography';

import { DonationListType, get3Event } from '@/pages/api/event';

export default function HomePage() {
  const [loading, setLoading] = useState(false);
  const [searchTimeout, setSearchTimeout] = useState<any | null>(null);
  const [donationList, setDonationList] = useState<DonationListType[]>([]);
  const [filteredDonasiList, setFilteredDonasiList] = useState<
    DonationListType[]
  >([]);

  useEffect(() => {
    setLoading(true);
    const fetchEventData = async () => {
      try {
        const data = await get3Event();

        setDonationList(data.data);
        setFilteredDonasiList(data.data);
      } catch (error) {
        throw new Error('Error in ListDonation');
      } finally {
        setLoading(false);
      }
    };
    fetchEventData();
  }, []);

  const handleSearch = (query: string) => {
    setLoading(true);

    clearTimeout(searchTimeout);

    setSearchTimeout(
      setTimeout(() => {
        const filtered = donationList.filter((item) =>
          item.judul_event.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredDonasiList(filtered);
        setLoading(false);
      }, 500)
    );
  };

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
              className='absolute top-1/3 ml-24 mt-16'
            >
              Donasi
            </Typography>
          </div>
        </div>
        <div className='layout'>
          <SearchBar placeholder='Ketik Sesuatu' onChange={handleSearch} />
          <div className='pt-16'>
            {loading ? (
              <div className='text-center'>
                <Loader />
              </div>
            ) : (
              <>
                {filteredDonasiList.length > 0 ? (
                  filteredDonasiList.map((item, index) => (
                    <Link key={index} href={`/sandbox/listDonation/${item.id}`}>
                      <ListDonationCard
                        index={index + 1}
                        id={item.id}
                        title={item.judul_event}
                        imgUrl={
                          item.foto_event.startsWith('/') &&
                          item.foto_event !== 'https://example.com/foto.jpg'
                            ? item.foto_event
                            : '/images/dummy-poster.svg'
                        }
                        desc={item.deskripsi_event}
                      />
                    </Link>
                  ))
                ) : (
                  <Typography
                    colorVariant='primary'
                    sizeVariant='h4'
                    className='text-center'
                  >
                    Tidak ada hasil yang ditemukan
                  </Typography>
                )}
              </>
            )}
          </div>
        </div>
      </main>
    </Layout>
  );
}
