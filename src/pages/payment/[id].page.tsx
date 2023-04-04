/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { floor } from 'lodash';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import InputNominal from '@/components/forms/InputNominal';
import Layout from '@/components/layout/Layout';
import FailedModal from '@/components/modal/failedModal';
import SuccessModal from '@/components/modal/successModal';
import ProgressBar from '@/components/progressbars/progressBar';
import Seo from '@/components/Seo';
import Typography from '@/components/Typography';
import UpperPart from '@/components/upperDetailDonation/upperPart';

import { API_BaseUrl } from '@/constant/env';
import { DataType, getEventData } from '@/pages/api/event';
import PopUpBank from '@/pages/listDonation/components/bankList';

function Payment() {
  const router = useRouter();
  const { id } = router.query;
  const [isOpen, setOpen] = useState(false);
  const [donation, setDonation] = useState<DataType>();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailedModal, setShowFailedModal] = useState(false);

  const methods = useForm({
    mode: 'onTouched',
  });

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  const closeConfirmation = () => {
    setOpen(false);
    setShowSuccessModal(false);
  } 

  const { handleSubmit } = methods;

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

  let data = 0;
  if (
    typeof donation?.jumlah_donasi === 'number' &&
    typeof donation?.max_donasi === 'number'
  ) {
    data = floor((donation?.jumlah_donasi / donation?.max_donasi) * 100);
  }

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch(`${API_BaseUrl}api/user/transaksi/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${window.localStorage.getItem("token")}`
        },
        body: JSON.stringify({
          jumlah : parseInt(data.nominal),
          list_bank_id : parseInt(data.bank)
        }),
      });
      if (response.ok) {
        setShowSuccessModal(true);
      } else {
        setShowFailedModal(true);
      }
    } catch (error) {
      throw new Error("Error Payment");
    }
  };

  return (
    <Layout>
      <Seo />
      <div className='absolute top-0 min-h-[96px] w-full bg-primary-100 lg:min-h-[72px]'></div>
      <main className='mx-auto mt-14 w-2/3 rounded-2xl bg-primary-200 px-[10vh] pb-10 pt-20'>
        <UpperPart
          namaEvent={donation?.judul_event ? donation.judul_event : ''}
          fotoEvent={
            donation?.foto_event &&
            donation.foto_event != 'https://example.com/foto.jpg'
              ? donation?.foto_event
              : '/images/dummy-poster.svg'
          }
          jumlahDonasi={donation?.jumlah_donasi ? donation.jumlah_donasi : 0}
          targetDonasi={donation?.max_donasi ? donation.max_donasi : 0}
          sisaHari={donation?.time_left ? donation.time_left : '0'}
          jumlahDonatur={donation?.is_done ? donation.is_done : 0}
        />

        <div className='my-6 h-2 w-full'>
          <ProgressBar progress={data} />
        </div>

        <div className='mt-5 w-full rounded-xl bg-primary-500 p-5'>
          <Typography
            sizeVariant='c2'
            colorVariant='primary'
            className='font-bold'
          >
            Masukkan Nominal Donasi
          </Typography>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className='mt-2 w-full'>
              <InputNominal />
              {/* Pop Up Window */}
              <PopUpBank isOpen={isOpen} onClose={closeModal} />
            </form>
          </FormProvider>

          <div className='flex justify-center'>
            {donation?.is_target_full || donation?.is_expired ? 
              <div className='w-25 mt-5 rounded-xl bg-secondary-500 px-5 py-3 border-solid border-2'>
                <Typography sizeVariant='c3' colorVariant='primary'>
                  Donasi Ditutup
                </Typography>
              </div> 
              :
              <button
                className='w-25 mt-5 rounded-xl bg-secondary-100 px-5 py-3'
                onClick={openModal}
              >
                <Typography sizeVariant='c3' colorVariant='secondary'>
                  Lanjutkan Pembayaran
                </Typography>
              </button>
            }
          </div>
        </div>
        {showSuccessModal && (
          <SuccessModal
            href={`/payment/${id}`}
            message='Berhasil menyalurkan donasi'
            onClose={closeConfirmation}
          />
        )}
        {showFailedModal && (
          <FailedModal
            href={`/payment/${id}`}
            onClick={() => setShowFailedModal(false)}
            message='Lakukan Login terlebih dahulu'
          />
        )}
      </main>
    </Layout>
  );
}

export default Payment;
