import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import Typography from '@/components/Typography';

const NavbarLink = [
  { link: '/#Hero', title: 'Beranda' },
  { link: '/#About', title: 'Tentang' },
  { link: '/#Service', title: 'Layanan' },
  { link: '/listDonation', title: 'Donasi' },
  { link: '/profileAccount', title: 'Profil' },
];

function Header() {
  const [backgroundTransparacy, setBackgroundTransparacy] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) setBackgroundTransparacy(false);
      else setBackgroundTransparacy(true);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className='sticky top-0 z-30 min-h-[4rem]'>
      <motion.nav
        initial={{ backgroundColor: 'rgba(6,163,113,0)' }}
        animate={{
          backgroundColor: backgroundTransparacy
            ? 'rgba(6,163,113,0)'
            : 'rgba(6,163,113,1)',
        }}
        transition={{ duration: 1, delay: 0.1, ease: 'easeInOut' }}
      >
        <div className='layout flex flex-row flex-wrap justify-between py-6'>
          <Link href='/'>
            <Image
              src='/images/fundle.svg'
              alt='Fundle'
              width={100}
              height={60}
              className='h-6 w-24'
            />
          </Link>
          <ul className='flex flex-row gap-x-4'>
            {NavbarLink.map(({ link, title }) => (
              <li key={`${link}${title}`}>
                <Link href={link}>
                  <Typography sizeVariant='c3' colorVariant='secondary'>
                    {title}
                  </Typography>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.nav>
    </header>
  );
}

export default Header;
