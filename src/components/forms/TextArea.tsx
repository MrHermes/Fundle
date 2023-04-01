import get from 'lodash.get';
import React from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';

interface Props {
  label?: string;
  id: string;
  placeholder: string;
  className?: string;
  validation?: RegisterOptions;
}

function TextArea({ label, id, validation, placeholder, className }: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = get(errors, id);

  return (
    <div data-testid='Label'>
      <div>{label}</div>
      <div className='pt-2'>
        <textarea
          {...register(id, validation)}
          name={id}
          id={id}
          rows={6}
          placeholder={placeholder}
          className={`w-full rounded-xl border-none bg-primary-200 py-4 pl-4 text-base
          ${className}`}
        />
        {error && (
          <p className='text-error' data-testid='error-message'>
            {error?.message?.toString()}
          </p>
        )}
      </div>
    </div>
  );
}

export default TextArea;
