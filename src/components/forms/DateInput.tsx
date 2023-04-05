import get from 'lodash.get';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form';
import { IconType } from 'react-icons';
import { HiOutlineCalendar } from 'react-icons/hi';

import 'react-datepicker/dist/react-datepicker.css';

type DatePickerProps = {
  id: string;
  placeholder?: string;
  defaultYear?: number;
  defaultMonth?: number;
  defaultValue?: string;
  validation?: RegisterOptions;
  showError?: boolean;
  icon?: IconType;
} & Omit<ReactDatePickerProps, 'onChange'>;

export default function DateInput({
  id,
  placeholder,
  defaultYear,
  defaultMonth,
  defaultValue,
  validation,
  showError = true,
  icon: Icon = HiOutlineCalendar,
  ...rest
}: DatePickerProps) {
  const {
    formState: { errors },
    control,
  } = useFormContext();
  const error = get(errors, id);

  const defaultDate = new Date();
  if (defaultMonth) defaultDate.setMonth(defaultMonth);
  if (defaultYear) defaultDate.setFullYear(defaultYear);

  return (
    <div className='relative'>
      <Controller
        control={control}
        rules={validation}
        defaultValue={defaultValue}
        name={id}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <div className='relative mt-1'>
              <ReactDatePicker
                name={id}
                onChange={onChange}
                onBlur={onBlur}
                selected={value ? new Date(value) : undefined}
                className='w-full rounded-xl border-none bg-primary-200 py-4 pl-4 text-base focus:ring-primary-100'
                openToDate={value ? new Date(value) : defaultDate}
                dateFormat='dd/MM/yyyy'
                placeholderText={placeholder}
                dropdownMode='select'
                {...rest}
              />
              <Icon className='pointer-events-none absolute right-4 top-4 transform text-lg text-gray-500' />
              {showError && error && (
                <p className='text-error'>{error?.message?.toString()}</p>
              )}
            </div>
          </>
        )}
      />
    </div>
  );
}
