import Image from 'next/image';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Input from '@/components/forms/Input';
import InputPassword from '@/components/forms/InputPassword';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Typography from '@/components/Typography';

function Register() {
  const methods = useForm({
    mode: 'onTouched',
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
          className='absolute -z-10 -mt-20 w-full'
        />
        <div className='layout w-2/3 py-28'>
          <div className='flex rounded-[30px] bg-primary-200/20 shadow-[4px_10px_10px_rgba(147,217,195,1)]'>
            <Image
              src='/images/forms-asset.svg'
              alt='form-asset'
              width={550}
              height={300}
              className='absolute -bottom-1/2 mb-16 ml-4 drop-shadow-[6px_15px_10px_rgba(0,0,0,0.25)]'
            />
            <div className='py-36 flex w-2/5 flex-col gap-y-6 p-12 '>
              <Typography
                sizeVariant='c1'
                colorVariant='secondary'
                className='font-semibold drop-shadow-[6px_15px_10px_rgba(0,0,0,0.25)]'
              >
                Bergabung dengan kami
              </Typography>
              <Typography
                sizeVariant='c2'
                colorVariant='secondary'
                className='font-light'
              >
                Sebarkan Kebaikan dan Kebahagiaan
              </Typography>
            </div>
            <div className='w-3/5 rounded-[30px] bg-primary-500 px-20 py-36'>
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
                    id='nama'
                    placeholder='Nama Pengguna'
                    helperText='Masukkan Nama Pengguna'
                    validation={{
                      required: 'Nama Pengguna tidak boleh kosong',
                    }}
                  />
                  <Input
                    id='noTelp'
                    placeholder='Nomor Telepon'
                    helperText='Masukkan Nomor Telepon'
                    validation={{
                      required: 'Nomor Telepon tidak boleh kosong',
                      minLength: {
                        value: 11,
                        message: 'Masukkan Nomor telepon yang benar'
                      },
                      pattern: {
                        value: /[0-9]/,
                        message: 'Masukkan Nomor telepon yang benar',
                      },
                    }}
                  />
                  <Input
                    id='email'
                    placeholder='Email'
                    helperText='Masukkan Email'
                    validation={{
                      required: 'Email tidak boleh kosong',
                      pattern: {
                        value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                        message: 'Format Email salah',
                      },
                    }}
                  />
                  <InputPassword
                    id='password'
                    placeholder='Kata Sandi'
                    helperText='Masukkan Kata Sandi'
                    validation={{
                      required: 'Kata Sandi tidak boleh kosong',
                      minLength: {
                        value: 8,
                        message: 'Minimal 8 karakter',
                      },
                      pattern: {
                        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                        message: 'Minimal 1 huruf',
                      },
                    }}
                  />
                  <InputPassword
                    id='confirmPassword'
                    placeholder='Konfirmasi Kata Sandi'
                    helperText='Masukkan Kata Sandi'
                    validation={{
                      required: 'Masukkan Konfirmasi Kata Sandi',
                      validate: (value) =>
                      value === methods.getValues('password') ||
                      'Kata Sandi tidak sama',
                    }}
                  />
                  <button
                    type='submit'
                    className='w-full rounded-xl bg-primary-100 p-3 hover:bg-[#23926f]'
                  >
                    <Typography sizeVariant='c2' colorVariant='secondary'>
                      Daftar
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

export default Register;
