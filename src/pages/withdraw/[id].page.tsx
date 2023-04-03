import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { RiHandHeartLine } from 'react-icons/ri';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Typography from '@/components/Typography';
import { DataType, getEventData } from '@/pages/api/event';
import { useRouter } from 'next/router';
import PopUpBank from '@/components/popUp/bankList';
import { FormProvider, useForm } from 'react-hook-form';
import { API_BaseUrl } from '@/constant/env';
import FailedModal from '@/components/modal/failedModal';
import SuccessModal from '@/components/modal/successModal';

type FormData = {
  bank: number;
}

function Withdrawal() {
  
  const router = useRouter();
  const { id } = router.query;
  const [donation, setDonation] = useState<DataType>();
  const [isOpen, setOpen] = useState(false);
  const [responseData, setResponseData] = useState<any>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailedModal, setShowFailedModal] = useState(false);

  const methods = useForm<FormData>()
  const { handleSubmit } = methods

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  // const closeConfirmation = () => {
  //   setOpen(false);
  //   setShowSuccessModal(false);
  // } 
  
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

  const onSubmit = async (data: any) => {
    //console.log(data);    
    try {
      const response = await fetch(`${API_BaseUrl}api/user/transaksi/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${window.localStorage.getItem("token")}`
        },
        body: JSON.stringify({
          jumlah_penarikan : donation?.max_donasi,
          bank_id: data.bank,
          event_id: id
        }),
      });
      const responseData = (await response.json()) as PaymentResponse;
      console.log(responseData);
      setResponseData(responseData);
      if (response.ok) {
        setShowSuccessModal(true);
      } else {
        setShowFailedModal(true);
      }
    } catch (error) {
      throw new Error("Error Withdraw");
    }
  };

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
                : '/images/dummy-poster.svg'} //Foto_Event
            alt='Poster Image'
            width={640}
            height={480}
            className='h-40 w-full rounded-xl object-cover'
          />
          <Typography
            sizeVariant='h4'
            colorVariant='primary'
            className='text-wrap my-5 text-center font-bold'
          >
            {donation?.judul_event ? donation.judul_event : ''}
          </Typography>
          <Typography
            sizeVariant='c3'
            colorVariant='primary'
            className='text-center font-bold opacity-50'
          >
            Jumlah Donasi Terkumpul
          </Typography>
          <div className='flex flex-row flex-wrap justify-center'>
            {/* Jumlah_Donasi */}
            <Typography
              sizeVariant='h6'
              colorVariant='tertiary'
              className='font-bold'
            >
              Rp. {donation?.jumlah_donasi ? donation.jumlah_donasi : 0}
            </Typography>
            {/* Target_Donasi */}
            <Typography
              sizeVariant='c3'
              colorVariant='primary'
              className='mt-auto font-bold opacity-50'
            >
              /Rp. {donation?.max_donasi ? donation.max_donasi : 0}
            </Typography>
          </div>
          <div className='flex flex-row flex-wrap justify-center py-5'>
            <div className='mx-2 flex min-w-[10rem] flex-row justify-center gap-x-5 rounded-xl bg-primary-500 font-semibold shadow-xl transition duration-500 hover:scale-110'>
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
            <div className='mx-2 flex min-w-[10rem] flex-row justify-center gap-x-5 rounded-xl bg-primary-500 font-semibold shadow-xl transition duration-500 hover:scale-110'>
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
                  {donation?.time_left ? donation.time_left : '0'} Hari
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
            <form onSubmit={handleSubmit(onSubmit)} className='mt-2 w-full'>
              {/* Pop Up Window */}
              <PopUpBank isOpen={isOpen} onClose={closeModal} />
            </form>
          </FormProvider>
          <div className='py-5 flex justify-center'>
            <button
              className='w-25 mx-auto rounded-xl bg-secondary-100 px-5 py-3'
              onClick={openModal}
            >
              <Typography sizeVariant='c3' colorVariant='secondary'>
                Lanjutkan Pembayaran
              </Typography>
            </button>
          </div>
        </div>
        {showSuccessModal && (
          <SuccessModal
            href={`/payment/${id}`}
            message='Berhasil menyalurkan donasi'
            // onClose={closeConfirmation}
          />
        )}
        {showFailedModal && (
          <FailedModal
            href={`/payment/${id}`}
            onClick={() => setShowFailedModal(false)}
            message={responseData?.message}
          />
        )}
      </main>
    </Layout>
  );
}

export default Withdrawal;

