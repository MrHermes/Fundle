import Image from 'next/image';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Input from '@/components/forms/Input';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Typography from '@/components/Typography';

function Login() {
  const methods = useForm({
    mode: 'onChange',
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const {
    formState: { errors },
  } = useForm();
  const { handleSubmit } = methods;

  const onSubmit = (data: unknown) => {
    {
      setShowSuccessModal(!showSuccessModal);
    }
    console.log(errors);
    console.log({ data });
    return;
  };

  return (
    <Layout>
      <Seo />

      <main>
        <Image
          src='/svg/Group.svg'
          alt='forms-bg'
          width={500}
          height={500}
          className='absolute -z-10 w-full'
        />
        <div className='layout w-9/12 pt-20'>
          <div className='flex rounded-[30px] bg-primary-200/20 drop-shadow-[4px_10px_10px_rgba(147,217,195,1)]'>
            <div className='mt-28 flex w-2/5 flex-col gap-y-6 p-12'>
              <Typography
                sizeVariant='h6'
                colorVariant='secondary'
                className='font-semibold drop-shadow-[6px_15px_10px_rgba(0,0,0,0.25)]'
              >
                Bergabung dengan kami
              </Typography>
              <Typography
                sizeVariant='c1'
                colorVariant='secondary'
                className='font-light'
              >
                Sebarkan Kebaikan dan Kebahagiaan
              </Typography>
            </div>
            <div className='w-3/5 rounded-[30px] bg-primary-500 px-20 py-32'>
              <Typography
                sizeVariant='h2'
                colorVariant='tertiary'
                className='pb-20 text-center font-semibold'
              >
                Sign In
              </Typography>
              <FormProvider {...methods}>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className='flex flex-col gap-y-7'
                >
                  <Input
                    id='Nama'
                    label='Name'
                    placeholder='Nama Pengguna'
                    validation={{
                      required: 'Nama Pengguna tidak boleh kosong',
                      pattern: {
                        value: /^[A-Za-z]+$/i,
                        message: 'Name Format not Valid',
                      },
                    }}
                  />

                  <button
                    type='submit'
                    className='w-full rounded-xl bg-primary-100 p-3 hover:bg-primary-100/70'
                  >
                    <Typography
                      sizeVariant='c2'
                      colorVariant='secondary'
                      className='font-light'
                    >
                      Masuk
                    </Typography>
                  </button>
                </form>
              </FormProvider>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Login;
