/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable unused-imports/no-unused-vars */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Input from '@/components/forms/Input';
import InputPassword from '@/components/forms/InputPassword';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Typography from '@/components/Typography';


function Login() {
  const methods = useForm({
    mode: 'onTouched',
  });

  const {
    formState: { errors },
  } = useForm();
  const { handleSubmit } = methods;

  const onSubmit = async (data: any) => {
    try {
       const response = await fetch("http://localhost:8888/api/user/login", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({
           email: data.Email,
           password: data.Password,
         }),
       });
       const responseData = await response.json();
       console.log(responseData)
       console.log(errors)
       if (response.ok) {
         localStorage.setItem("token", responseData.data.token);
         alert('Berhasil Login');
       } else {
         throw new Error(responseData.message);
       }
     } catch (error) {
       alert(error);
     }
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
            <div className='ml-3 mt-[29rem] flex'>
              <Image
                src='/svg/forms-asset.svg'
                alt='form-asset'
                width={550}
                height={300}
                className='absolute drop-shadow-[6px_15px_10px_rgba(0,0,0,0.25)]'
              />
            </div>
            <div className='mt-24 flex w-2/5 flex-col gap-y-6 p-12 '>
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
                    id='Email'
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
                    id='Password'
                    label='password'
                    placeholder='Kata Sandi'
                    helperText='Masukkan Kata Sandi'
                    validation={{
                      required: 'Masukkan Kata Sandi anda',
                    }}
                    className='py-4'
                  />

                  <div>
                    <Link href=''>
                      <button
                        type='submit'
                        className='w-full rounded-xl bg-primary-100 p-3 hover:bg-[#23926f]'
                      >
                        <Typography sizeVariant='c2' colorVariant='secondary'>
                          Masuk
                        </Typography>
                      </button>
                    </Link>

                    <div className='mt-2 flex justify-end gap-2'>
                      <Typography sizeVariant='c4'>
                        Belum punya akun?
                      </Typography>
                      <Link href='/register'>
                        <Typography
                          sizeVariant='c4'
                          colorVariant='tertiary'
                          className='hover:text-primary-600'
                        >
                          Buat akun
                        </Typography>
                      </Link>
                    </div>
                  </div>
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
