import Typography from "@/components/Typography";
import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { RiHandHeartLine } from "react-icons/ri";

interface InformationProp {
  jumlahDonatur: number;
  sisaHari: number;
}

function Information(
  {jumlahDonatur,
  sisaHari} : InformationProp
){
  return(
    <div className='flex flex-row justify-center lg:justify-end'>
      <div className='mx-2 flex min-w-[10rem] flex-row justify-center gap-x-5 rounded-xl bg-primary-500 font-semibold shadow-xl transition duration-500 hover:scale-110'>
        <div className='my-auto text-3xl text-primary-100'>
          <RiHandHeartLine />
        </div>
        <div className='my-auto'>
          {/* Jumlah_Donatur */}
          <Typography
            sizeVariant='c1'
            colorVariant='primary'
          >
            {jumlahDonatur}
          </Typography>
          <Typography
            sizeVariant='c3'
            colorVariant='primary'
          >
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
          <Typography
            sizeVariant='c1'
            colorVariant='primary'
          >
            {sisaHari} Hari
          </Typography>
          <Typography
            sizeVariant='c3'
            colorVariant='primary'
          >
            Tersisa
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Information