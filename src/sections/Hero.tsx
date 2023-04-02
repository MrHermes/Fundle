import Image from 'next/image';

import Typography from '../components/Typography';

function Hero() {
  return (
    <div>
      <div className='relative -top-24 z-0 h-screen lg:-top-20'>
        <Image
          src='/images/hero.jpg'
          alt='Hero'
          fill
          className='absolute top-0'
        />
        <div className='absolute left-1/4 right-1/4 top-28 text-center lg:left-1/3 lg:right-1/3 lg:top-1/4'>
          <Typography
            sizeVariant='h1'
            colorVariant='secondary'
            className='font-bold'
          >
            Let's Bring More Smile !
          </Typography>
          <Typography
            sizeVariant='c3'
            colorVariant='secondary'
            className='mt-1 lg:mt-3'
          >
            Millions of people are trying everyday. <br />
            Every step they take, might get harder each day. Every penny we
            dump, might be a treasure for them.
          </Typography>
          <button className='mt-2 rounded-2xl border px-3 py-3 lg:mt-6'>
            <Typography sizeVariant='c3' colorVariant='secondary'>
              Donasi Sekarang
            </Typography>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
