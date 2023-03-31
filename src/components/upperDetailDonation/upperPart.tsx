import React from "react";
import Typography from "@/components/Typography";
import Image from "next/image";
import Information from "@/components/upperDetailDonation/information";

interface upperPartProp {
  namaEvent: string;
  fotoEvent: string;
  jumlahDonasi: number;
  targetDonasi: number;
  sisaHari: number;
  jumlahDonatur: number;
  desc: string;
}

function UpperPart(
  {namaEvent,
  fotoEvent,
  jumlahDonasi,
  targetDonasi,
  sisaHari,
  jumlahDonatur,
  desc} : upperPartProp
){
  return(
    <div>
      <Image
        src='/images/dummy-poster.svg' //Foto_Event
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
        Save Malta Children From Hunger
      </Typography>
      <div className='flex flex-col justify-between gap-y-4 lg:flex-row lg:gap-y-0'>
        <div>
          {/* Jumlah_Donasi */}
          <Typography
            sizeVariant='h4'
            colorVariant='tertiary'
            className='font-bold'
          >
            Rp. 1000000000
          </Typography>
          {/* Target_Donasi */}
          <Typography sizeVariant='c2' colorVariant='primary' className=''>
            Terkumpul dari Rp. 1000000000000
          </Typography>
        </div>
        <Information jumlahDonatur={4517} sisaHari={12} />
      </div>
    </div>
  );
}

export default UpperPart