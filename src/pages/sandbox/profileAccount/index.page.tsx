import React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import Cta from '@/sections/Cta';
import History from '@/sections/History';
import User from '@/sections/User';

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <main className='relative'>
        <User />
        <div className='absolute top-1/2 left-0 z-10 mt-[5vh] flex h-full w-full items-center justify-center'>
          <Cta />
        </div>
      </main>
      <History />
    </Layout>
  );
}
