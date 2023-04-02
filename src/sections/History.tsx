/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import HistoryCard from '@/components/historyList/HistoryCard';
import Typography from '@/components/Typography';

import { API_BaseUrl } from '@/constant/env';
import { HistoryType } from '@/pages/api/history';

function History() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [historyList, setHistoryList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      // console.log(token);
      if (!token) {
        window.location.href = '/login';
        return;
      }

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      try {
        const meResponse = await axios.get(`${API_BaseUrl}api/user/me`, config);
        const user_id = meResponse.data.data.id;
        // console.log(user_id);

        const url = `${API_BaseUrl}api/event/user/${user_id}`;
        const response = await axios.get(url, config);

        setHistoryList(response.data.data);
        // console.log(response.data);
        // console.log(response.data.data.length);
        setIsAuthenticated(true);
      } catch (error: any) {
        // console.error(error);
        if (axios.isAxiosError(error) && error.response?.status === 401) {
          localStorage.removeItem('token');
          setIsAuthenticated(false);
          window.location.href = '/login';
        }
      }
    };
    fetchData();
  }, []);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <section className='mt-[30vh]'>
      <div className='layout'>
        <div className='flex flex-col items-center  text-center'>
          {/* TITLE */}
          <div className='pb-14'>
            <Typography
              sizeVariant='h4'
              colorVariant='tertiary'
              className='pb-4 font-bold'
            >
              Temukan Riwayat Pembuatan Donasimu!
            </Typography>
          </div>

          <div className='group flex flex-wrap justify-center gap-x-3 gap-y-12'>
            {historyList.length > 0 ? (
              historyList.map((historyList: HistoryType) => (
                <HistoryCard
                  key={historyList.id}
                  id={historyList.id}
                  title={historyList.judul_event}
                  imgUrl={historyList.foto_event}
                  desc={historyList.deskripsi_event}
                />
              ))
            ) : (
              <Typography sizeVariant='c1' colorVariant='primary'>
                No history available
              </Typography>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default History;
