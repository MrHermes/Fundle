import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import Service from '@/sections/Service';

export default function HomePage() {
  return (
    <Layout>
      <Seo />

      <main className='layout'>
        <Service />
      </main>
    </Layout>
  );
}
