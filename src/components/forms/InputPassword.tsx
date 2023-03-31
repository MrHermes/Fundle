import get from 'lodash.get';
import React, { HTMLInputTypeAttribute, useState } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

import Typography from '@/components/Typography';

interface InputPasswordProps {
  label?: string;
  placeholder?: string;
  validation?: RegisterOptions;
  id: string;
  type?: HTMLInputTypeAttribute;
  className?: string;
  helperText?: string;
  showError?: boolean;
}

function InputPassword({
  placeholder,
  validation,
  id,
  helperText,
  showError = true,
  className,
}: InputPasswordProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = get(errors, id);

  const [showPassword, setShowPassword] = useState(true);
  const toggleShow = () => setShowPassword(!showPassword);

  return (
    
    <div>
      <input
        {...register(id, validation)}
        name={id}
        id={id}
        type={showPassword ? 'password' : 'text'}
        placeholder={placeholder}
        className={`w-full rounded-xl border-none bg-primary-200 pl-4 text-base py-4
                   ${className}`}
      />
      <button onClick={toggleShow} type='button' className='absolute -ml-10 mt-4'>
        <Typography
          sizeVariant='c1'
          className='text-gray-800/80 hover:text-gray-800'
        >
          {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
        </Typography>
      </button>
      {!(showError && error) && helperText && (
        <Typography
          sizeVariant='c4'
          colorVariant='tertiary'
          className='mt-1 ml-2'
        >
          {helperText}
        </Typography>
      )}
      {showError && error && (
        <p className='text-error'>{error?.message?.toString()}</p>
      )}
    </div>
  );
}

export default InputPassword;
