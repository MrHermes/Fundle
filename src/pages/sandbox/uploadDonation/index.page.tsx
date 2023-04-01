/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Step, Steps, useSteps } from 'chakra-ui-steps';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import DateInput from '@/components/forms/DateInput';
import Input from '@/components/forms/Input';
import SelectInput from '@/components/forms/SelectInput';
import TextArea from '@/components/forms/TextArea';
import Layout from '@/components/layout/Layout';
import StepperController from '@/components/multistep/StepperController';
import Seo from '@/components/Seo';
import Typography from '@/components/Typography';

export default function HomePage() {
  const methods = useForm({
    mode: 'onTouched',
  });

  const {
    formState: { errors },
  } = useForm();
  const { handleSubmit, trigger } = methods;
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const onSubmit = (data: any) => {
    {
      setShowSuccessModal(!showSuccessModal);
    }
    console.log(errors);
    console.log({ data });
    return;
  };

  const { activeStep, nextStep, prevStep } = useSteps({
    initialStep: 0,
  });

  const handleNext = async () => {
    let isValid = false;

    switch (activeStep) {
      case 0:
        isValid = await trigger([
          'nama_depan',
          'nama_belakang',
          'no_ktp',
          'no_telp',
          'instansi',
          'nama_depan_penerima',
          'nama_belakang_penerima',
          'tujuan',
          'lokasi_tujuan',
        ]);
        break;
    }
    if (isValid) {
      nextStep();
    }
  };

  return (
    <Layout withFooter={false}>
      <Seo />
      <main>
        <div className='absolute top-0 w-full bg-primary-100 p-9' />
        <div className='mx-auto w-3/5 rounded-2xl bg-primary-500 py-3 px-40 pb-2 shadow-xl'>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className='font-primary'>
              <Steps activeStep={activeStep}>
                <Step label='BIODATA'>
                  <div className='py-9'>
                    <Typography
                      sizeVariant='c2'
                      className='text-center font-semibold drop-shadow-[0_15px_10px_rgba(0,0,0,0.25)]'
                    >
                      Biodata Pembuat Donasi
                    </Typography>
                    <div>
                      <div className='flex flex-col gap-y-4 pt-12'>
                        <div className='flex justify-between'>
                          <Input
                            id='nama_depan_pembuat'
                            placeholder='Nama Depan'
                            validation={{
                              required: '* Nama Depan harus diisi',
                            }}
                            className='px-10'
                          />
                          <Input
                            id='nama_belakang_pembuat'
                            placeholder='Nama Belakang'
                            validation={{
                              required: '* Nama Belakang harus diisi',
                            }}
                            className='px-10'
                          />
                        </div>
                        <Input
                          id='nomor_telepon_pembuat'
                          placeholder='No. Telepon'
                          validation={{
                            required: '* Masukkan No Telepon',
                            minLength: {
                              value: 11,
                              message: '* Format No Telepon salah',
                            },
                          }}
                        />
                        <Input
                          id='nomor_ktp'
                          placeholder='No. KTP'
                          validation={{
                            required: '* Masukkan No KTP',
                            pattern: {
                              value: /[0-9]/,
                              message: '* Format No KTP salah',
                            },
                            minLength: {
                              value: 16,
                              message: '* Format No KTP salah',
                            },
                          }}
                        />
                        <Input
                          id='pekerjaan'
                          placeholder='Pekerjaan'
                          validation={{
                            required: '* Masukkan Nama Pekerjaan',
                          }}
                        />
                        <Input
                          id='asal_instansi'
                          placeholder='Tempat Instansi'
                          validation={{
                            required: '* Masukkan Nama Instansi',
                            pattern: {
                              value: /^[A-Za-z]+$/i,
                              message: '* Format Instansi salah',
                            },
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <Typography
                      sizeVariant='c2'
                      className='text-center font-semibold drop-shadow-[0_15px_10px_rgba(0,0,0,0.25)]'
                    >
                      Biodata Penerima Donasi
                    </Typography>
                    <div>
                      <div className='flex flex-col gap-y-4 py-12'>
                        <div className='flex justify-between'>
                          <Input
                            id='nama_depan_penerima'
                            placeholder='Nama Depan'
                            validation={{
                              required: '* Nama Depan harus diisi',
                            }}
                            className='px-10'
                          />
                          <Input
                            id='nama_belakang_penerima'
                            placeholder='Nama Belakang'
                            validation={{
                              required: '* Nama Belakang harus diisi',
                            }}
                            className='px-10'
                          />
                        </div>
                        <TextArea
                          id='tujuan_galang_dana'
                          placeholder='Tujuan Galang Dana'
                          validation={{
                            required: '* Tujuan Galang Dana harus diisi',
                          }}
                        />
                        <Input
                          id='lokasi_tujuan'
                          placeholder='Lokasi Tujuan'
                          validation={{
                            required: '* Lokasi Tujuan harus diisi',
                          }}
                        />
                        <Input
                          id='rekening_event'
                          placeholder='Nomor Rekening'
                          type='number'
                          validation={{
                            required: '* Nomor Rekening Harus diisi',
                            pattern: {
                              value: /[0-9]/,
                              message: '* Format Nomor Rekening salah',
                            },
                          }}
                          className='px-10'
                        />
                      </div>
                    </div>
                  </div>
                </Step>
                <Step label='UPLOAD'>
                  <div className='py-9'>
                    <Typography
                      sizeVariant='c2'
                      className='text-center font-semibold drop-shadow-[0_15px_10px_rgba(0,0,0,0.25)]'
                    >
                      Biodata Pembuat Donasi
                    </Typography>
                    <div>
                      <div className='flex flex-col gap-y-4 pt-12'>
                        <SelectInput
                          id='jenis_event'
                          placeholder='Kategori'
                          isSearchable={false}
                          options={[
                            {
                              value: 'KegiatanSosial',
                              label: 'Kegiatan Sosial',
                            },
                            { value: 'Kesehatan', label: 'Kesehatan' },
                            { value: 'Pendidikan', label: 'Pendidikan' },
                          ]}
                          validation={{ required: '* Pilih Kategori' }}
                        />
                        <Input
                          id='judul_event'
                          placeholder='Judul Postingan'
                          validation={{
                            required: '* Judul Postingan harus diisi',
                          }}
                        />
                        <Input
                          id='max_donasi'
                          placeholder='Perkiraan Biaya'
                          type='number'
                          validation={{
                            required: '* Perkiraan Biaya harus diisi',
                          }}
                        />
                        <TextArea
                          id='deskripsi_event'
                          placeholder='Rincian Penggalangan Dana'
                          validation={{
                            required: '* Rincian harus diisi',
                          }}
                        />
                        <Input
                          id='foto_event'
                          placeholder='Foto Event'
                          validation={{
                            required: '* Foto harus diisi',
                          }}
                        />
                        <DateInput
                          id='expired_donasi'
                          placeholder='Lama Target Galang Dana'
                          validation={{
                            required: '* Tanggal harus diisi',
                            valueAsDate: true,
                          }}
                          minDate={new Date()}
                          showTimeInput
                        />
                      </div>
                    </div>
                  </div>
                </Step>
              </Steps>
              <div className='flex justify-center'>
                {activeStep !== 0 ? (
                  <div className='flex gap-x-5'>
                    <StepperController onClick={prevStep} steps='Kembali' />
                    <StepperController type='submit' steps='Selesai' />
                  </div>
                ) : (
                  <StepperController onClick={handleNext} steps='Selanjutnya' />
                )}
              </div>
            </form>
          </FormProvider>
        </div>
      </main>
    </Layout>
  );
}
