import Link from 'next/link';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo />

      <main className='layout flex flex-col gap-y-2 pt-5'>
        <Link href='/sandbox/typography'>Typography</Link>
        <Link href='/sandbox/colors'>Colors</Link>
      </main>
    </Layout>
  );
}
