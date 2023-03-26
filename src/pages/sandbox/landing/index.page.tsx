import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import AboutUs from '@/sections/AboutUs';
import Service from '@/sections/Service';
import Hero from '@/sections/Hero';

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <Hero />
      <main className='layout'>
        <AboutUs />
        <Service />
      </main>
    </Layout>
  );
}
