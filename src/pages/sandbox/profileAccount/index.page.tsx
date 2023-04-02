import React, { useEffect, useState } from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import Cta from '@/sections/Cta';
import History from '@/sections/History';
import User from '@/sections/User';

export default function ProfilePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    } else {
      window.location.href = '/login';
    }
  }, []);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <Layout>
      <Seo />
      <main className='relative'>
        <User />
        <div className='absolute left-0 top-1/2 z-10 -mt-12 flex h-full w-full items-center justify-center'>
          <Cta />
        </div>
      </main>
      <History />
    </Layout>
  );
}
