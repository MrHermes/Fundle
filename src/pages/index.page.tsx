import * as React from 'react';

import ButtonLink from '@/components/buttons/ButtonLink';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Typography from '@/components/Typography';

const sandboxComponent = [
  {
    title: 'Typography',
    url: '/sandbox/typography',
  },
  {
    title: 'Colors',
    url: '/sandbox/colors',
  },
  {
    title: 'ButtonLink',
    url: '/sandbox/buttonLink',
  },
];

const sandboxPages = [
  {
    title: 'Landing Page',
    url: '/sandbox/landing/',
  },
  {
    title: 'Login',
    url: '/login',
  },
  {
    title: 'Register',
    url: '/register',
  },
  {
    title: 'Donation List',
    url: '/sandbox/listDonation',
  },
  {
    title: 'Detail Donation',
    url: '/detailDonation',
  },
  {
    title: 'Profile Account',
    url: '/sandbox/profileAccount',
  },
  {
    title: 'Payment',
    url: '/payment',
  },
  {
    title: 'Upload Donation',
    url: '/sandbox/uploadDonation',
  },
];

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <main className='layout'>
        <div>
          <div className='flex flex-col items-center'>
            <Typography
              sizeVariant='h2'
              colorVariant='tertiary'
              className='p-24 font-bold'
            >
              Fundle Components
            </Typography>
            <Typography
              sizeVariant='c1'
              colorVariant='primary'
              className='font-semibold'
            >
              Pages
            </Typography>
            <div className='flex flex-wrap justify-center gap-3 pt-3'>
              {sandboxPages.map(({ title, url }) => (
                <ButtonLink
                  key={url}
                  href={url}
                  className='py-2 px-5 font-light hover:bg-secondary-100/60'
                >
                  {title}
                </ButtonLink>
              ))}
            </div>
            <Typography
              sizeVariant='c1'
              colorVariant='primary'
              className='pt-24 font-semibold'
            >
              Components
            </Typography>
            <div className='flex flex-wrap justify-center gap-3 pt-3'>
              {sandboxComponent.map(({ title, url }) => (
                <ButtonLink
                  key={url}
                  href={url}
                  className='py-2 px-5 font-light hover:bg-secondary-100/60'
                >
                  {title}
                </ButtonLink>
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
