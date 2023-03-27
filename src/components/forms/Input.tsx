import get from 'lodash.get';
import React, { HTMLInputTypeAttribute } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';

import Typography from '@/components/Typography';

interface Props {
  label?: string;
  placeholder?: string;
  validation: RegisterOptions;
  id: string;
  type?: HTMLInputTypeAttribute;
  className?: string;
  helperText?: string;
  showError?: boolean;
}

function Input({
  placeholder,
  validation,
  id,
  helperText,
  showError = true,
  type = 'text',
  className,
}: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = get(errors, id);
  return (
    <div>
      <div className=''>
        <input
          {...register(id, validation)}
          name={id}
          id={id}
          placeholder={placeholder}
          type={type}
          className={`w-full rounded-xl border-none bg-primary-200 pl-4 text-base py-4
                      ${className}`}
        />
        {!(showError && error) && helperText && (
          <Typography
            sizeVariant='c4'
            colorVariant='tertiary'
            className='mt-1 ml-2 '
          >
            {helperText}
          </Typography>
        )}
        {showError && error && (
          <p className='text-error'>{error?.message?.toString()}</p>
        )}
      </div>
    </div>
  );
}

export default Input;
