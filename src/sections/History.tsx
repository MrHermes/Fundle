import React from 'react';

import HistoryCard from '@/components/historyList/HistoryCard';
import Typography from '@/components/Typography';

import { listHistory } from '@/constant/listHistory';

function History() {
  return (
    <section className='mt-[30vh]'>
      <div className='layout'>
        <div className='flex flex-col items-center p-16 text-center'>
          {/* TITLE */}
          <div className='pb-14'>
            <Typography
              sizeVariant='c1'
              colorVariant='primary'
              className='pb-4 font-bold'
            >
              Temukan Riwayat Pembuatan Donasimu!
            </Typography>
          </div>

          {/* LIST */}
          <div className='group flex'>
            {listHistory.map((photo) => (
              // eslint-disable-next-line react/jsx-key
              <HistoryCard
                id={photo.id}
                imgUrl={photo.imgUrl}
                title={photo.title}
                desc={photo.desc}
                icon={photo.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default History;
