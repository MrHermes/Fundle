import React from 'react';

// import { useEffect, useState } from 'react';
// import HistoryCard from '@/components/historyList/HistoryCard';
import Typography from '@/components/Typography';

// import { getevent,HistoryType } from '@/pages/api/history';

function History() {
  // const [historyList, setHistoryList] = useState<HistoryType[]>([]);

  // useEffect(() => {
  //   const fetchEventData = async () => {
  //     try{
  //       const data = await getevent();
  //       setHistoryList(data.data);
  //     }catch(error){
  //       throw new Error ("Error")
  //     }

  //   };
  //   fetchEventData();
  // }, [])

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
            {/* {listHistory.map((photo) => (
              // eslint-disable-next-line react/jsx-key
              <HistoryCard
                id={photo.id}
                imgUrl={photo.imgUrl}
                title={photo.title}
                desc={photo.desc}
                icon={photo.icon}
              />
            ))} */}
            {/* {historyList && historyList.map(( historyList ) => (
              <HistoryCard
                id={historyList.id}
                title={historyList.judul_event}
                imgUrl={historyList.foto_event && historyList.foto_event != "https://example.com/foto.jpg"}
                desc={historyList.deskripsi_event}
              />
            ) )} */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default History;
