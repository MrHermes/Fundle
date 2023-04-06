import React from 'react';
import { useFormContext } from 'react-hook-form';

import Typography from '@/components/Typography';

type inputType = {
  max_withdraw? : number;
}

function InputNominal( {max_withdraw = 1000000000}: inputType ) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className='rounded-xl bg-primary-200 p-2 px-4'>
      <div className='flex h-max flex-row justify-between'>
        <Typography
          sizeVariant='c2'
          colorVariant='primary'
          className='my-auto ml-2 font-bold'
        >
          Rp.
        </Typography>
        <div className='block w-full'>
          <input
            {...register('nominal', {
              required: true,
              min: 1000,
              max: max_withdraw,
            })}
            id='nominal'
            type='number'
            defaultValue={10000}
            className='w-full appearance-none border-none bg-inherit text-right text-xl font-bold focus:shadow-none focus:ring-0'
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
