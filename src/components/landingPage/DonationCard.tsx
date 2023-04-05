import Image from 'next/image';
import React from 'react';

import Typography from '@/components/Typography';

interface DonationCardProps {
  id: string;
  imgUrl: string;
  title: string;
  desc: string;
  progress: number;
}

function DonationCard({
  id,
  imgUrl,
  title,
  desc,
  progress,
}: DonationCardProps) {
  return (
    <div className='max-w-[450px] drop-shadow-lg'>
      <Image
        src={imgUrl}
        alt={title}
        width={450}
        height={300}
        id={id}
        className='h-[300px] rounded-t-[2rem] object-cover'
      />

      <div className='h-52 rounded-b-[2rem] bg-primary-500 p-8 text-start'>
        <div className='h-2 w-full rounded-xl bg-primary-200'>
          <div
            style={{ width: `${progress}%` }}
            className='h-full rounded-xl bg-primary-100'
          ></div>
        </div>
        <Typography sizeVariant='c2' className='py-4 font-bold'>
          {title}
        </Typography>
        <Typography sizeVariant='c3' className='line-clamp-2'>
          {desc}
        </Typography>
      </div>
    </div>
  );
}

export default DonationCard;
