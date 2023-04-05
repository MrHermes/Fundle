/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { floor } from 'lodash';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import DonationCard from '@/components/landingPage/DonationCard';
import Loader from '@/components/loader/Loader';
import Typography from '@/components/Typography';

import { API_BaseUrl } from '@/constant/env';
import { DonationListType } from '@/pages/api/event';

function Service() {
  SwiperCore.use([Autoplay]);
  SwiperCore.use([Navigation, Pagination]);

  const [isLoading, setIsLoading] = useState(true);
  const [donationList, setDonationList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const listResponse = await axios.get(`${API_BaseUrl}api/event/service`);
        const list = listResponse.data.data;
        // console.log(list);

        setDonationList(list);
        setIsLoading(false);
      } catch (error: any) {
        if (axios.isAxiosError(error) && error.response?.status === 401) {
          localStorage.removeItem('token');
          window.location.href = '/login';
        }
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section id='Service' className='pb-20'>
      <div className='layout rounded-[80px] bg-primary-200'>
        <div className='styles.sliderWrapper flex flex-col items-center p-16 text-center'>
          <div className='pb-14'>
            <Typography
              sizeVariant='h4'
              colorVariant='primary'
              className='pb-4 font-extrabold'
            >
              Our Service
            </Typography>
            <Typography sizeVariant='h4'>Enginered for Your Growth</Typography>
          </div>
          <Swiper
            loop={true}
            spaceBetween={30}
            slidesPerView={2}
            autoplay={{
              delay: 5000,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              type: 'bullets',
              // el: 'swiper-pagination',
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
            // slidesPerGroup={2}
            className='swiper-container'
          >
            <div className='group flex'>
              {isLoading ? (
                <div className='w-full'>
                  <Loader />
                </div>
              ) : (
                <>
                  {donationList &&
                    donationList.map((photo: DonationListType) => (
                      <SwiperSlide key={photo.id} className='m-auto'>
                        <Link href={`/listDonation/${photo.id}`}>
                          <DonationCard
                            id={photo.id}
                            imgUrl={
                              photo.foto_event.startsWith('https:') &&
                              photo.foto_event != 'https://example.com/foto.jpg'
                                ? photo.foto_event
                                : '/images/dummy-poster.svg'
                            }
                            progress={floor(
                              (photo.jumlah_donasi / photo.max_donasi) * 100
                            )}
                            title={photo.judul_event}
                            desc={photo.deskripsi_event}
                          />
                        </Link>
                      </SwiperSlide>
                    ))}
                </>
              )}
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Service;
