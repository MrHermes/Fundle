/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { useEffect, useState } from 'react';

import Layout from '@/components/layout/Layout';
import Loader from '@/components/loader/Loader';
import Seo from '@/components/Seo';
import Typography from '@/components/Typography';

import { API_BaseUrl } from '@/constant/env';
import { DonationListType, get3Event, getAllEvent } from '@/pages/api/event';
import ListDonationCard from '@/pages/listDonation/components/ListDonationCard';
import SearchBar from '@/pages/listDonation/components/SearchBar';

export default function HomePage() {
  const [loading, setLoading] = useState(false);
  const [dataLength, setDataLength] = useState(0);
  const [original, setOriginal] = useState(true);
  const [pagination, setPagination] = useState(2);
  const [searchTimeout, setSearchTimeout] = useState<any | null>(null);
  const [donationList, setDonationList] = useState<DonationListType[]>([]);
  const [filteredDonasiList, setFilteredDonasiList] = useState<
    DonationListType[]
  >([]);
  const [AllDonasiList, setAllDonasiList] = useState<DonationListType[]>([]);

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

  useEffect(() => {
    const assignPagination = async () => {
      try {
        await fetch(`${API_BaseUrl}api/event/post3event`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            page_number: 1,
          }),
        });
      } catch (error) {
        throw new Error('Error Pagination');
      }
    };
    assignPagination();
  }, []);

  useEffect(() => {
    setLoading(true);
    const fetchAllEventData = async () => {
      try {
        const data = await getAllEvent();
        // console.log("++");
        // console.log(data.data);
        setAllDonasiList(data.data);
        setDataLength(data.data.length);
      } catch (error) {
        throw new Error('Error in ListDonation');
      } finally {
        setLoading(false);
      }
    };
    fetchAllEventData();
  }, []);

  const handleSearch = (query: string) => {
    setLoading(true);
    clearTimeout(searchTimeout);
    if (query === '') {
      setFilteredDonasiList(donationList);
      setOriginal(true);
    } else {
      setOriginal(false);
      setSearchTimeout(
        setTimeout(() => {
          const filtered = AllDonasiList.filter((item) =>
            item.judul_event.toLowerCase().includes(query.toLowerCase())
          );
          setFilteredDonasiList(filtered);
        }, 500)
      );
    }
    setLoading(false);
  };
  //console.log(filteredDonasiList.length)
  const handleSubmit = async (e: any) => {
    setPagination(pagination + 1);
    // console.log("pagination :")
    // console.log(pagination);
    e.preventDefault();
    try {
      await fetch(`${API_BaseUrl}api/event/post3event`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          page_number: pagination,
        }),
      });
      // const data = await response.json();
      // console.log(data.data);
      try {
        const data = await get3Event();
        setDonationList(data.data);
        setFilteredDonasiList(data.data);
      } catch {
        throw new Error('Error pagination');
      }
    } catch (error) {
      throw new Error('Error Pagination');
    }
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
                  <div>
                    {filteredDonasiList.map((item, index) => (
                      <Link key={index} href={`/listDonation/${item.id}`}>
                        <ListDonationCard
                          index={index + 1}
                          id={item.id}
                          title={item.judul_event}
                          imgUrl={
                            item.foto_event.startsWith('https:') &&
                            item.foto_event != 'https://example.com/foto.jpg'
                              ? item.foto_event
                              : '/images/dummy-poster.svg'
                          }
                          desc={item.deskripsi_event}
                          jumlah_donasi={item.jumlah_donasi}
                          max_donasi={item.max_donasi}
                        />
                      </Link>
                    ))}
                    <form
                      className='flex justify-center'
                      onSubmit={handleSubmit}
                    >
                      {donationList.length != dataLength && original ? (
                        <button
                          className='rounded-xl bg-primary-100 px-4 py-3 transition hover:bg-primary-600'
                          type='submit'
                        >
                          <Typography
                            colorVariant='secondary'
                            sizeVariant='c4'
                            className='text-center'
                          >
                            Load More
                          </Typography>
                        </button>
                      ) : null}
                    </form>
                  </div>
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
