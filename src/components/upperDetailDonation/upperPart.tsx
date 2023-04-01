import Image from 'next/image';
import React from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { RiHandHeartLine } from 'react-icons/ri';

import Typography from '@/components/Typography';

interface upperPartProp {
  namaEvent: string;
  fotoEvent: string;
  jumlahDonasi: number;
  targetDonasi: number;
  sisaHari: number;
  jumlahDonatur: number;
}

function UpperPart({
  namaEvent,
  fotoEvent,
  jumlahDonasi,
  targetDonasi,
  sisaHari,
  jumlahDonatur,
}: upperPartProp) {
  return (
    <div>
      <Image
        src={fotoEvent} //Foto_Event
        alt='Poster Image'
        width={640}
        height={480}
        className='static w-full'
      />
      {/* Nama_Event */}
      <Typography
        sizeVariant='h2'
        colorVariant='primary'
        className='text-wrap my-5 font-bold'
      >
        {namaEvent}
      </Typography>
      <div className='flex flex-col justify-between gap-y-4 lg:flex-row lg:gap-y-0'>
        <div>
          {/* Jumlah_Donasi */}
          <Typography
            sizeVariant='h4'
            colorVariant='tertiary'
            className='font-bold'
          >
            Rp. {jumlahDonasi}
          </Typography>
          {/* Target_Donasi */}
          <Typography sizeVariant='c2' colorVariant='primary' className=''>
            Terkumpul dari Rp. {targetDonasi}
          </Typography>
        </div>
        <div className='flex flex-row justify-center lg:justify-end'>
          <div className='mx-2 flex min-w-[10rem] flex-row justify-center gap-x-5 rounded-xl bg-primary-500 font-semibold shadow-xl transition duration-500 hover:scale-110'>
            <div className='my-auto text-3xl text-primary-100'>
              <RiHandHeartLine />
            </div>
            <div className='my-auto'>
              {/* Jumlah_Donatur */}
              <Typography sizeVariant='c1' colorVariant='primary'>
                {jumlahDonatur}
              </Typography>
              <Typography sizeVariant='c3' colorVariant='primary'>
                Donasi
              </Typography>
            </div>
          </div>
          <div className='mx-2 flex min-w-[10rem] flex-row justify-center gap-x-5 rounded-xl bg-primary-500 font-semibold shadow-xl transition duration-500 hover:scale-110'>
            <div className='my-auto text-3xl text-primary-100'>
              <BiTimeFive />
            </div>
            <div className='my-auto'>
              {/* Sisa_hari -> integer*/}
              <Typography sizeVariant='c1' colorVariant='primary'>
                {sisaHari} Hari
              </Typography>
              <Typography sizeVariant='c3' colorVariant='primary'>
                Tersisa
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpperPart;
