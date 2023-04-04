import Image from 'next/image';
import React from 'react';
import toast from 'react-hot-toast';
import { FiLogOut } from 'react-icons/fi';

import Typography from '@/components/Typography';

interface UserProps {
  nama: string;
  email: string;
}

const User = ({ nama, email }: UserProps) => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    toast.success('Berhasil Logout!')
    window.location.href = '/login';
  };
  return (
    <div className='layout -mt-24'>
      <div className='flex gap-10 justify-between'>
        <Image
          src='/images/profile_img.png'
          alt='profile'
          width={189}
          height={189}
          className='absolute -mt-16 ml-2'
        />
        <div className='ml-[13rem] flex flex-col justify-center gap-3 mt-4'>
          <Typography sizeVariant='h2' className='font-semibold uppercase'>
            {nama}
          </Typography>
          <Typography sizeVariant='c3' className='font-normal ml-1 leading-tight'>
            {email}
          </Typography>
        </div>
        <button
          className='mt-5 cursor-pointer rounded-2xl px-4 flex gap-x-3 items-center hover:scale-105 transition duration-150 shadow-[4px_10px_10px_rgba(0,0,0,0.2)]'
          onClick={handleLogout}
        >
          <Typography sizeVariant='c2' className='font-medium'>Logout</Typography>
          <Typography colorVariant='tertiary' sizeVariant='c2'><FiLogOut /></Typography>
        </button>
      </div>
    </div>
  );
};

export default User;
