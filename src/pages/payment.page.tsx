/* eslint-disable no-console */
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import InputNominal from '@/components/forms/InputNominal';
import Layout from '@/components/layout/Layout';
import PopUpBank from '@/components/popUp/bankList';
import ProgressBar from '@/components/progressbars/progressBar';
import Seo from '@/components/Seo';
import Typography from '@/components/Typography';
import UpperPart from '@/components/upperDetailDonation/upperPart';

function Payment() {
  const [isOpen, setOpen] = useState(false);

  const methods = useForm({
    mode: 'onTouched',
  });

  const {
    formState: { errors },
  } = useForm();

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const { handleSubmit } = methods;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    // console.log{ data.nama_bank };
    console.log(errors);
    console.log({ data });
  };

  return (
    <Layout>
      <Seo />
      <div className='absolute top-0 min-h-[96px] w-full bg-primary-100 lg:min-h-[72px]'></div>
      <main className='mx-auto mt-14 w-2/3 rounded-2xl bg-primary-200 px-[10vh] pb-10 pt-20'>
        <UpperPart
          namaEvent='Save Malta Children From Hunger'
          fotoEvent='/images/dummy-poster.svg'
          jumlahDonasi={1000000000}
          targetDonasi={1000000000000}
          sisaHari={12}
          jumlahDonatur={4517}
        />

        <div className='my-6 h-2 w-full'>
          <ProgressBar progress={10} />
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
            <button
              className='w-25 mt-5 rounded-xl bg-secondary-100 px-5 py-3'
              onClick={openModal}
            >
              <Typography sizeVariant='c3' colorVariant='secondary'>
                Lanjutkan Pembayaran
              </Typography>
            </button>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Payment;