import Image from 'next/image';

import Typography from '@/components/Typography';

interface HistoryProps {
  id: string;
  imgUrl: string;
  title: string;
  desc: string;
}

function HistoryProps({ id, imgUrl, title, desc }: HistoryProps) {
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
          <div className='flex justify-center'>
            <Image
              src='/images/icon_right.png'
              alt='icon-right'
              width={34}
              height={34}
              id={id}
              className='absolute bottom-7 pt-[1.5rem]'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistoryProps;
