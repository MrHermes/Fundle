/* eslint-disable unused-imports/no-unused-vars */
import Image from 'next/image';
import React, { ChangeEvent, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { IoCaretBackCircleOutline } from 'react-icons/io5';

import Typography from '@/components/Typography';

const BankList = [
  { value: 'OVO', icon: '/images/ovo.svg' },
  { value: 'GO-PAY', icon: '/images/gopay.svg' },
  { value: 'Mandiri', icon: '/images/mandiri.svg' },
  { value: 'BRI', icon: '/images/bri.svg' },
  { value: 'BSI', icon: '/images/bsi.svg' },
  { value: 'BCA', icon: '/images/bca.svg' },
];

interface PopUpBankProp {
  isOpen: boolean;
  onClose: () => void;
}

function PopUpBank({ isOpen, onClose }: PopUpBankProp) {
  const [selected, setSelected] = useState('null');
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useFormContext();

  const handleRadio = (event: ChangeEvent<HTMLInputElement>) => {
    setSelected(event.target.value);
  };

  if (!isOpen) return null;

  return (
    <div
      className='
    p-auto fixed
    left-1/2 top-1/2 z-40 h-screen w-screen -translate-x-1/2 -translate-y-1/2
    transform duration-300'
    >
      <div className=' h-full w-full bg-primary-500 opacity-50'></div>
      <div className='layout fixed left-10 right-10 top-14 h-max w-max rounded-xl bg-primary-500 p-6 lg:left-1/4 lg:right-1/4'>
        <div className='mx-auto flex w-[20rem] flex-row'>
          <button onClick={onClose} className='text-2xl'>
            <IoCaretBackCircleOutline />
          </button>
          <Typography
            sizeVariant='c3'
            colorVariant='primary'
            className='mx-auto text-center font-bold'
          >
            Pilih Metode Pembayaran
          </Typography>
        </div>
        {BankList.map(({ value, icon }) => (
          <div
            key={value}
            style={
              selected === value
                ? { outline: '2px solid' }
                : { outline: '2px solid transparent' }
            }
            className='m-3 flex min-w-[20rem] flex-row rounded-xl bg-primary-200 px-3 py-2 shadow-xl hover:shadow-2xl'
          >
            <div className='min-w-40 px-auto'>
              <Image
                src={icon}
                alt={value}
                width={70}
                height={40}
                className='h-10 w-20'
              />
            </div>
            <input
              {...register('nama_bank')}
              type='radio'
              id={value}
              name='nama_bank'
              value={value}
              checked={selected == value}
              onChange={handleRadio}
              className='-x absolute -top-1/2 cursor-pointer'
            />
            <label
              htmlFor={value}
              className='my-auto ml-3 h-full w-full cursor-pointer'
            >
              <Typography sizeVariant='c3' colorVariant='primary'>
                {value}
              </Typography>
            </label>
          </div>
        ))}
        <div className='flex justify-center'>
          <button
            type='submit'
            className='w-25 mt-5 rounded-xl bg-secondary-100 px-5 py-3'
          >
            <Typography sizeVariant='c4' colorVariant='secondary'>
              Lanjut
            </Typography>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopUpBank;
