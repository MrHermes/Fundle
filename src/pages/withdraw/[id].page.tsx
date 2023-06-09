/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { BiTimeFive } from 'react-icons/bi';
import { RiHandHeartLine } from 'react-icons/ri';

import Layout from '@/components/layout/Layout';
import SuccessModal from '@/components/modal/successModal';
import Seo from '@/components/Seo';
import Typography from '@/components/Typography';

import { API_BaseUrl } from '@/constant/env';
import { DataType, getEventData, getMe } from '@/pages/api/event';
import PopUpBank from '@/pages/payment/components/bankList';
import InputNominal from '@/pages/payment/components/InputNominal';

function Withdrawal() {
  const router = useRouter();
  const { id } = router.query;
  const [donation, setDonation] = useState<DataType>();
  const [userID, setUserID] = useState('');
  const [isOpen, setOpen] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const methods = useForm();
  const { handleSubmit } = methods;

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  const closeConfirmation = () => {
    setOpen(false);
    setShowSuccessModal(false);
  };

  useEffect(() => {
    const fetchEventData = async () => {
      if (typeof id === 'string') {
        const data = await getEventData(id);
        //console.log(data.data);
        setDonation(data.data);
      }
    };
    fetchEventData();
  }, [id]);

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getMe();
      setUserID(data.data.id);
    };
    fetchUserData();
  }, []);

  // console.log("user ID :");
  // console.log(userID);
  // console.log("donation user ID :");
  // console.log(donation?.user_id);

  const onSubmit = async (data: any) => {
    const bank = parseInt(data.bank);
    const nominal = parseInt(data.nominal);
    // console.log(bank);
    // console.log(id);
    // console.log(nominal);
    try {
      const response = await fetch(`${API_BaseUrl}api/penarikan`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          jumlah_penarikan: nominal,
          bank_id: bank,
          event_id: id,
        }),
      });
      if (response.ok) {
        setShowSuccessModal(true);
      }
    } catch (error) {
      throw new Error('Error Withdraw');
    } finally {
      window.location.reload();
    }
  };

  if (userID == donation?.user_id) {
    return (
      <Layout>
        <Seo />
        <div className='absolute top-0 min-h-[96px] w-full bg-primary-100 lg:min-h-[72px]'></div>
        <main className='layout my-14 w-2/3 rounded-xl bg-primary-200 p-20'>
          <div className='rounded-xl bg-primary-500'>
            <Image
              src={
                donation?.foto_event &&
                donation.foto_event != 'https://example.com/foto.jpg'
                  ? donation?.foto_event
                  : '/images/dummy-poster.svg'
              } //Foto_Event
              alt='Poster Image'
              width={640}
              height={480}
              className=' h-60 w-full rounded-xl object-cover'
            />
            <Typography
              sizeVariant='h4'
              colorVariant='primary'
              className='text-wrap my-5 text-center font-bold'
            >
              {donation?.judul_event ? donation.judul_event : ''}
            </Typography>
            <Typography
              sizeVariant='c2'
              colorVariant='primary'
              className='text-center font-bold opacity-50'
            >
              Jumlah Uang yang dapat ditarik
            </Typography>
            <div className='flex flex-row flex-wrap justify-center'>
              <Typography
                sizeVariant='h6'
                colorVariant='tertiary'
                className='font-bold'
              >
                Rp. {donation?.sisa_donasi ? donation.sisa_donasi : 0}
              </Typography>
            </div>
            <Typography
              sizeVariant='c3'
              colorVariant='primary'
              className='mt-3 text-center font-bold opacity-75'
            >
              Total donasi
            </Typography>
            <div className='flex flex-row flex-wrap justify-center'>
              <Typography
                sizeVariant='c1'
                colorVariant='tertiary'
                className='font-bold'
              >
                Rp. {donation?.jumlah_donasi ? donation.jumlah_donasi : 0}
              </Typography>
              <Typography
                sizeVariant='c3'
                colorVariant='primary'
                className='mt-auto font-bold opacity-50'
              >
                /Rp. {donation?.max_donasi ? donation.max_donasi : 0}
              </Typography>
            </div>
            <div className='flex flex-row flex-wrap justify-center py-5'>
              <div className='mx-2 flex min-w-[10rem] flex-row justify-center gap-x-5 rounded-xl border-2 border-solid bg-primary-500 p-2 font-semibold shadow-xl transition duration-500 hover:scale-110'>
                <div className='my-auto text-3xl text-primary-100'>
                  <RiHandHeartLine />
                </div>
                <div className='my-auto'>
                  {/* Jumlah_Donatur */}
                  <Typography
                    sizeVariant='c1'
                    colorVariant='primary'
                    className=''
                  >
                    {donation?.is_done ? donation.is_done : 0}
                  </Typography>
                  <Typography
                    sizeVariant='c3'
                    colorVariant='primary'
                    className=''
                  >
                    Donasi
                  </Typography>
                </div>
              </div>
              <div className='flex min-w-[10rem] flex-row justify-center gap-x-5 rounded-xl border-2 border-solid bg-primary-500 p-2 font-semibold shadow-xl transition duration-500 hover:scale-110'>
                <div className='my-auto text-3xl text-primary-100'>
                  <BiTimeFive />
                </div>
                <div className='my-auto'>
                  {/* Sisa_hari -> integer*/}
                  <Typography
                    sizeVariant='c1'
                    colorVariant='primary'
                    className=''
                  >
                    {donation?.time_left ? donation.time_left : '0'}
                  </Typography>
                  <Typography
                    sizeVariant='c3'
                    colorVariant='primary'
                    className=''
                  >
                    Tersisa
                  </Typography>
                </div>
              </div>
            </div>
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)} className='mx-auto w-5/6'>
                <InputNominal max_withdraw={donation?.sisa_donasi} />
                {/* Pop Up Window */}
                <PopUpBank isOpen={isOpen} onClose={closeModal} />
              </form>
            </FormProvider>
            <div className='mt-5 flex justify-center pb-5'>
              {donation?.sisa_donasi != 0 || donation?.is_expired ? (
                <button
                  className='w-25 mx-auto rounded-xl bg-secondary-100 px-5 py-3'
                  onClick={openModal}
                >
                  <Typography sizeVariant='c3' colorVariant='secondary'>
                    Lakukan penarikan
                  </Typography>
                </button>
              ) : (
                <div className='w-25 mx-auto rounded-xl border-2 border-solid bg-primary-500 px-5 py-3 shadow-xl'>
                  <Typography sizeVariant='c3' colorVariant='primary'>
                    Belum dapat melakukan penarikan
                  </Typography>
                </div>
              )}
            </div>
          </div>
          {showSuccessModal && (
            <SuccessModal
              href={`/withdraw/${id}`}
              message='Berhasil menarik dana'
              onClose={closeConfirmation}
            />
          )}
        </main>
      </Layout>
    );
  } else {
    if (typeof donation?.user_id != 'undefined') {
      return (
        <div className='flex h-[100vh] items-center justify-center'>
          <Typography
            sizeVariant='h1'
            colorVariant='tertiary'
            className='text-center font-bold'
          >
            Anda tidak dapat mengakses page ini.
          </Typography>
        </div>
      );
    }
  }
}

export default Withdrawal;
