import Image from 'next/image';
import React from 'react';

import Typography from '@/components/Typography';

interface DonationCardProps {
  id: string;
  imgUrl: string;
  title: string;
  desc: string;
}

function DonationCard({ id, imgUrl, title, desc }: DonationCardProps) {
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

      <div className='h-44 rounded-b-[2rem] bg-primary-500 p-7 text-start'>
        <Typography sizeVariant='c2' className='pb-4 font-bold'>
          {title}
        </Typography>
        <Typography sizeVariant='c3'>{desc}</Typography>
      </div>
    </div>
  );
}

export default DonationCard;
