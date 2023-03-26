import React from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import DonationCard from '@/components/landingPage/DonationCard';
import Typography from '@/components/Typography';

import { listPhotos } from '@/constant/listPhotos';

function Service() {
  SwiperCore.use([Autoplay]);
  SwiperCore.use([Navigation, Pagination]);

  return (
    <section className='pb-20'>
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
              {listPhotos.map((photo, index) => (
                <SwiperSlide key={index} className='m-auto'>
                  <DonationCard
                    id={photo.id}
                    imgUrl={photo.imgUrl}
                    title={photo.title}
                    desc={photo.desc}
                  />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Service;
