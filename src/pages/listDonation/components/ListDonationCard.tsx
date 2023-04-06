import Image from 'next/image';
import React from 'react';

import Typography from '@/components/Typography';

interface ListDonationProps {
  index: number;
  id: string;
  title: string;
  imgUrl: string;
  desc: string;
  max_donasi: number;
  jumlah_donasi: number;
}

function ListDonationCard({
  index,
  id,
  title,
  imgUrl,
  desc,
  max_donasi,
  jumlah_donasi,
}: ListDonationProps) {
  return (
    <div className='pb-10'>
      {index % 2 === 0 ? (
        <div className='flex px-10 transition duration-500 hover:scale-105'>
          <Image
            src={imgUrl}
            id={id}
            alt='Donation 1'
            width={611}
            height={450}
            className='h-[450px] w-1/2 rounded-l-[36px] object-cover shadow-2xl'
          />
          <div className='flex w-1/2 flex-col gap-5 rounded-r-[36px] p-16 shadow-2xl'>
            <Typography sizeVariant='h4' className='font-bold line-clamp-2'>
              {title}
            </Typography>
            <hr className='h-1 rounded-md bg-primary-100' />
            <div>
              <Typography sizeVariant='c2' className='pb-2 font-semibold'>
                Deskripsi
              </Typography>
              <Typography className='line-clamp-2'>{desc}</Typography>
            </div>
            <div>
              <Typography sizeVariant='c2' className='pb-2 font-semibold'>
                Donasi
              </Typography>
              <Typography>Rp {jumlah_donasi}</Typography>
              <Typography>Terkumpul dari Rp {max_donasi}</Typography>
            </div>
          </div>
        </div>
      ) : (
        <div className='flex h-max px-10 transition duration-500 hover:scale-105'>
          <Image
            src={imgUrl}
            id={id}
            alt='Donation 1'
            width={611}
            height={450}
            className='order-2 h-[450px] w-1/2 rounded-r-[36px] object-cover shadow-2xl'
          />
          <div className='flex w-1/2 flex-col gap-5 rounded-l-[36px] p-16 shadow-2xl'>
            <Typography sizeVariant='h4' className='font-bold line-clamp-2'>
              {title}
            </Typography>
            <hr className='h-1 rounded-md bg-primary-100' />
            <div>
              <Typography sizeVariant='c2' className='pb-2 font-semibold'>
                Deskripsi
              </Typography>
              <Typography className='line-clamp-2'>{desc}</Typography>
            </div>
            <div>
              <Typography sizeVariant='c2' className='pb-2 font-semibold'>
                Donasi
              </Typography>
              <Typography>Rp {jumlah_donasi}</Typography>
              <Typography>Terkumpul dari Rp {max_donasi}</Typography>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListDonationCard;
