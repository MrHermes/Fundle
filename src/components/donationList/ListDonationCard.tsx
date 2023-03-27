import Image from 'next/image';
import React from 'react';

import Typography from '@/components/Typography';

interface ListDonationProps {
  index: number;
  id: string;
  title: string;
  imgUrl: string;
  desc: string;
}

function ListDonationCard({
  index,
  id,
  title,
  imgUrl,
  desc,
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
            <Typography sizeVariant='h4' className='font-bold'>
              {title}
            </Typography>
            <hr className='h-1 rounded-md bg-primary-100' />
            <div>
              <Typography sizeVariant='c2' className='pb-2 font-semibold'>
                Deskripsi
              </Typography>
              <Typography>{desc}</Typography>
            </div>
            <div>
              <Typography sizeVariant='c2' className='pb-2 font-semibold'>
                Donasi
              </Typography>
              <Typography>Rp 5.000.000</Typography>
              <Typography>Terkumpul dari Rp 5.000.000</Typography>
            </div>
          </div>
        </div>
      ) : (
        <div className='flex px-10 transition duration-500 hover:scale-105'>
          <Image
            src={imgUrl}
            id={id}
            alt='Donation 1'
            width={611}
            height={450}
            className='order-2 h-[450px] w-1/2 rounded-r-[36px] object-cover shadow-2xl'
          />
          <div className='flex w-1/2 flex-col gap-5 rounded-l-[36px] p-16 shadow-2xl'>
            <Typography sizeVariant='h4' className='font-bold'>
              {title}
            </Typography>
            <hr className='h-1 rounded-md bg-primary-100' />
            <div>
              <Typography sizeVariant='c2' className='pb-2 font-semibold'>
                Deskripsi
              </Typography>
              <Typography>{desc}</Typography>
            </div>
            <div>
              <Typography sizeVariant='c2' className='pb-2 font-semibold'>
                Donasi
              </Typography>
              <Typography>Rp 5.000.000</Typography>
              <Typography>Terkumpul dari Rp 5.000.000</Typography>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListDonationCard;
