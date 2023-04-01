import React from 'react';
import { useFormContext } from 'react-hook-form';

import Typography from '@/components/Typography';

function InputNominal() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className='rounded-xl bg-primary-200 p-2'>
      <div className='flex h-max flex-row justify-between'>
        <Typography
          sizeVariant='c2'
          colorVariant='primary'
          className='my-auto mr-3 font-bold'
        >
          Rp.
        </Typography>
        <div className='block w-full'>
          <input
            {...register('nominal', {
              required: true,
              min: 1000,
              max: 1000000000,
            })}
            id='nominal'
            type='number'
            defaultValue={10000}
            className='w-full appearance-none border-transparent bg-inherit text-right text-xl font-bold focus:shadow-none'
          />
          {errors &&
            (errors.nominal?.type === 'min' ||
              errors.nominal?.type === 'required') && (
              <Typography
                sizeVariant='c4'
                colorVariant='primary'
                className='text-right font-bold text-red-500'
              >
                Nominal minimum adalah Rp. 10000
              </Typography>
            )}
          {errors && errors.nominal?.type === 'max' && (
            <Typography
              sizeVariant='c4'
              colorVariant='primary'
              className='text-right font-bold text-red-500'
            >
              Nominal maksimum adalah Rp. 1000000000
            </Typography>
          )}
        </div>
      </div>
    </div>
  );
}

export default InputNominal;
