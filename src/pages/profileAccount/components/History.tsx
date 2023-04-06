/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import OptionModal from '@/components/modal/optionModal';
import Typography from '@/components/Typography';

import { API_BaseUrl } from '@/constant/env';
import { HistoryType } from '@/pages/api/history';
import HistoryCard from '@/pages/profileAccount/components/HistoryCard';

function History() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isDelete, setDelete] = useState(false);

  const [historyList, setHistoryList] = useState<HistoryType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
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

        const url = `${API_BaseUrl}api/event/user/${user_id}`;
        const response = await axios.get(url, config);

        setHistoryList(response.data.data);
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

  const handleDeleteEvent = async (eventId: any) => {
    const token = localStorage.getItem('token');

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      const response = await axios.delete(
        `${API_BaseUrl}api/event/${eventId}`,
        config
      );
      toast.success(response.data.message);
      setDelete(false);
      setHistoryList(historyList.filter((history) => history.id !== eventId));
    } catch (error: any) {
      setDelete(false);
      toast.error(error.message);
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <section className='mt-[10vh]'>
      <div className='layout'>
        <div className='flex flex-col items-center text-center'>
          {/* TITLE */}
          <div className='pb-14'>
            <Typography
              sizeVariant='h6'
              colorVariant='tertiary'
              className='pb-4 font-bold'
            >
              Temukan Riwayat Pembuatan Donasimu!
            </Typography>
          </div>

          <div className='group flex flex-wrap justify-center gap-x-3 gap-y-12'>
            {historyList.length > 0 ? (
              historyList.map((historyList) => (
                <div key={historyList.id}>
                  <HistoryCard
                    href={`/withdraw/${historyList.id}`}
                    id={historyList.id}
                    title={historyList.judul_event}
                    imgUrl={historyList.foto_event}
                    desc={historyList.deskripsi_event}
                    handleClick={() => setDelete(true)}
                  />
                  {isDelete && (
                    <OptionModal
                      message='Apakah kamu Yakin?'
                      handleTrue={() => handleDeleteEvent(historyList.id)}
                      handleFalse={() => setDelete(false)}
                    />
                  )}
                </div>
              ))
            ) : (
              <Typography sizeVariant='c2' colorVariant='primary'>
                Belum Ada Galang Dana yang Dibuat
              </Typography>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default History;
