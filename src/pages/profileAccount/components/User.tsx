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
    toast.success('Berhasil Logout!');
    window.location.href = '/login';
  };
  return (
    <div className='layout -mt-24'>
      <div className='flex justify-between gap-10'>
        <Image
          src='/images/profile_img.png'
          alt='profile'
          width={189}
          height={189}
          className='absolute -mt-16 ml-2'
        />
        <div className='ml-[13rem] mt-4 flex flex-col justify-center gap-3'>
          <Typography sizeVariant='h2' className='font-semibold uppercase'>
            {nama}
          </Typography>
          <Typography
            sizeVariant='c3'
            className='ml-1 font-normal leading-tight'
          >
            {email}
          </Typography>
        </div>
        <button
          className='mt-5 flex cursor-pointer items-center gap-x-3 rounded-2xl px-4 shadow-xl transition duration-500 hover:scale-105'
          onClick={handleLogout}
        >
          <Typography sizeVariant='c2' className='font-medium'>
            Logout
          </Typography>
          <Typography colorVariant='tertiary' sizeVariant='c2'>
            <FiLogOut />
          </Typography>
        </button>
      </div>
    </div>
  );
};

export default User;
