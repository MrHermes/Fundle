import Input from '@/components/forms/Input';
import InputNominal from '@/components/forms/InputNominal';
import Layout from '@/components/layout/Layout';
import PopUpBank from '@/components/popUp/bankList';
import ProgressBar from '@/components/progressbars/progressBar';
import Seo from '@/components/Seo';
import Typography from '@/components/Typography';
import UpperPart from '@/components/upperDetailDonation/upperPart';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

function Payment(){
  const [isOpen, setOpen] = useState(false)

  const methods = useForm({
    mode: "onTouched"
  })

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const {
    formState: { errors },
  } = useForm();

  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)

  const { handleSubmit } = methods;

  const onSubmit = (data: any) => {
    // console.log{ data.nama_bank };
    console.log(errors);
    console.log({ data });
  };

  return(
    <Layout>
      <Seo />
      <div className='absolute top-0 min-h-[96px] w-full bg-primary-100 lg:min-h-[72px]'></div>
      <main className='layout mt-14 rounded-2xl bg-primary-200 px-20 pt-20 pb-10'>
        <UpperPart 
          namaEvent={''} 
          fotoEvent={''} 
          jumlahDonasi={0} 
          targetDonasi={0} 
          sisaHari={12} 
          jumlahDonatur={4517} 
          desc={''} 
        />

        <div className='my-6 h-2 w-full'>
          <ProgressBar progress={10} />
        </div>

        <div className='bg-primary-500 rounded-xl mt-5 p-5'>
          <Typography
            sizeVariant='h6'
            colorVariant='primary'
            className='font-bold'
          >
            Masukkan Nominal Donasi
          </Typography>
          <FormProvider {...methods}>
            <form 
              onSubmit={handleSubmit(onSubmit)}
              className="w-full mt-2"
            >
              <InputNominal/>
              {/* Pop Up Window */}
              <PopUpBank isOpen={isOpen} onClose={closeModal} />
            </form>
          </FormProvider>
          
          <div className='flex justify-center'>
            <button className='w-25 rounded-xl bg-secondary-100 py-3 px-5 mt-5' onClick={openModal}>
              <Typography sizeVariant='c2' colorVariant='secondary'>
                Lanjutkan Pembayaran
              </Typography>
            </button>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Payment