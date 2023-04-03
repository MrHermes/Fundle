import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai'

import Typography from '@/components/Typography';

interface HistoryProps {
  id: string;
  imgUrl: string;
  title: string;
  desc: string;
  href: string;
}

function HistoryProps({ id, imgUrl, title, desc, href }: HistoryProps) {
  return (
    <div className='max-w-[26rem]'>
      <div className='mr-[4vh] drop-shadow-lg'>
        <Image
          src={imgUrl}
          alt={title}
          width={350}
          height={100}
          id={id}
          className='h-[30vh] w-[26rem] rounded-t-[2rem] object-cover'
        />

        <div className='h-[14rem] rounded-b-[2rem] bg-primary-400 p-7 text-center'>
          <Typography sizeVariant='c2' className='pb-4 font-bold line-clamp-2'>
            {title}
          </Typography>
          <Typography sizeVariant='c3' className='line-clamp-2'>
            {desc}
          </Typography>
          <Link href={href} className='flex justify-center p-4 mr-6'>
            <Typography sizeVariant='h4' colorVariant='tertiary' className='text-center'>
              <AiOutlineRightCircle className='absolute bottom-7 hover:bounce'/>
            </Typography>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HistoryProps;
