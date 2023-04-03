/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { API_BaseUrl } from '@/constant/env';
import { GetMeType } from '@/pages/api/profile';
import Cta from '@/sections/Cta';
import History from '@/sections/History';
import User from '@/sections/User';

export default function ProfilePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState<GetMeType>();

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
        const getMe = meResponse.data.data;
        setUserData(getMe);
        // console.log(getMe);

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
    <Layout>
      <Seo />
      <main>
        <div className='relative -top-24 h-[32vh] bg-primary-100'></div>
        {userData && <User nama={userData.nama} email={userData.email} />}
        <div className='pt-24'>
          <Cta />
        </div>
        <History />
      </main>
    </Layout>
  );
}
