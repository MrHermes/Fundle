import get from 'lodash.get';
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form';
import Select, { MultiValue, StylesConfig } from 'react-select';

interface SelectInputProps {
  id: string;
  placeholder?: string;
  type?: string;
  validation?: RegisterOptions;
  isMulti?: boolean;
  options: { value: string; label: string }[];
  className?: string;
  showError?: boolean;
  isSearchable?: boolean;
}

export default function SelectInput({
  id,
  placeholder,
  validation,
  options,
  className,
  isMulti = false,
  showError = true,
  ...rest
}: SelectInputProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const error = get(errors, id);

  const customStyles: StylesConfig = {
    control: (styles) => ({
      ...styles,
      border: 'none',
      boxShadow: 'none',
      transition: 'none',
      borderRadius: '0.5rem',
      padding: '1rem 1rem',
      cursor: 'pointer',
      background: '#CFEEE4',
    }),
    valueContainer: (styles) => ({
      ...styles,
      padding: 0,
      gap: '0.5rem',
    }),
    input: (styles) => ({
      ...styles,
      padding: 0,
      margin: 0,
      caretColor: 'var(--color-primary-500)',
      color: '#1F201d',
      '::placeholder': {
        color: '#5a5d56',
      },
    }),
    indicatorsContainer: (styles) => ({
      ...styles,
      '&>div': {
        padding: 0,
      },
    }),
    option: (styles, state) => ({
      ...styles,
      color: 'black',
      background: state.isSelected ? 'var(--color-primary-100)' : 'white',
      ':hover': {
        background: '#EDFFF9',
      },
      cursor: 'pointer',
    }),
  };

  return (
    <div className={className}>
      <div>
        <Controller
          name={id}
          control={control}
          rules={validation}
          render={({ field }) => {
            return (
              <Select
                value={
                  //? null is needed so if the selected value is not found in the options, it will clear the value
                  isMulti
                    ? field.value?.map(
                        (value: unknown) =>
                          options.find((option) => option.value === value) ??
                          null
                      )
                    : options.find((opt) => opt.value === field.value) ?? null
                }
                onChange={(selectedOptions) => {
                  isMulti
                    ? field.onChange(
                        (
                          selectedOptions as MultiValue<
                            (typeof options)[number]
                          >
                        ).map((option) => option?.value ?? '')
                      )
                    : field.onChange(
                        (selectedOptions as (typeof options)[number])?.value ??
                          ''
                      );
                }}
                closeMenuOnSelect={!isMulti}
                placeholder={placeholder}
                styles={customStyles}
                options={options}
                components={{
                  IndicatorSeparator: () => null,
                }}
                {...rest}
              />
            );
          }}
        />
        {showError && error && (
          <p className='text-error'>{error?.message?.toString()}</p>
        )}
      </div>
    </div>
  );
}
