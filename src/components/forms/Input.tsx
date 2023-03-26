import get from 'lodash.get';
import React, { HTMLInputTypeAttribute } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';

interface Props {
  label?: string;
  placeholder?: string;
  validation: RegisterOptions;
  id: string;
  type?: HTMLInputTypeAttribute;
  className?: string;
}

function Input({
  placeholder,
  validation,
  id,
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
          className={
            `h-[45px] w-full pl-4 border-none rounded-xl bg-primary-200 text-sm py-6
                            ${className}`}
        />
        {error && (
        <p className='text-error'>
          {error?.message?.toString()}
        </p>
      )}
      </div>
    </div>
  );
}

export default Input;
