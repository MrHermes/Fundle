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
  sisaHari: string;
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
        height={450}
        className='static w-full max-h-[50vh]'
      />
      {/* Nama_Event */}
      <Typography
        sizeVariant='h4'
        colorVariant='primary'
        className='text-wrap my-5 font-bold '
      >
        {namaEvent}
      </Typography>
      <div className='mt-[3vh] flex flex-col justify-between gap-y-4 lg:flex-row lg:gap-y-0 '>
        <div>
          {/* Jumlah_Donasi */}
          <Typography
            sizeVariant='c1'
            colorVariant='tertiary'
            className='font-bold'
          >
            Rp. {jumlahDonasi}
          </Typography>
          {/* Target_Donasi */}
          <Typography sizeVariant='c3' colorVariant='primary' className=''>
            Terkumpul dari Rp. {targetDonasi}
          </Typography>
        </div>
        <div className='flex flex-row justify-center lg:justify-end'>
          <div className='mx-2 flex min-w-[9rem] flex-row justify-center gap-x-3 rounded-xl bg-primary-500 font-semibold shadow-xl transition duration-500 hover:scale-110'>
            <div className='my-auto text-3xl text-primary-100'>
              <RiHandHeartLine />
            </div>
            <div className='my-[1vh]'>
              {/* Jumlah_Donatur */}
              <Typography sizeVariant='c3' colorVariant='primary'>
                {jumlahDonatur}
              </Typography>
              <Typography sizeVariant='c3' colorVariant='primary'>
                Donasi
              </Typography>
            </div>
          </div>
          <div className='mx-2 flex min-w-[9rem] flex-row justify-center gap-x-3 rounded-xl bg-primary-500 font-semibold shadow-xl transition duration-500 hover:scale-110'>
            <div className='my-auto text-3xl text-primary-100'>
              <BiTimeFive />
            </div>
            <div className='my-[1vh]'>
              {/* Sisa_hari -> integer*/}
              <Typography sizeVariant='c3' colorVariant='primary'>
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
