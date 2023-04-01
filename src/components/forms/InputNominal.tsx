import Typography from "@/components/Typography";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";

function InputNominal() {
  const [nominal, setNominal] = useState(10000);
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return(
    <div className='bg-primary-200 p-4 rounded-xl'>
      <div className='flex flex-row justify-between h-max'>
        <Typography
          sizeVariant='h3'
          colorVariant='primary'
          className='font-bold mr-3 my-auto'
        >
          Rp.
        </Typography>
        <div className='block w-full'>
          <input
            {...register("nominal",{
              required: true,
              min: 1000,
              max: 1000000000,
            })}
            id="nominal"
            type="number"
            defaultValue={nominal}
            className="appearance-none border-transparent bg-inherit text-right text-3xl font-bold focus:shadow-none w-full"
          />
            {errors && (errors.nominal?.type === "min" || errors.nominal?.type === "required")&& 
              (
                <Typography
                  sizeVariant='c4'
                  colorVariant='primary'
                  className='text-red-500 text-right font-bold'
                >
                  Nominal minimum adalah Rp. 10000
                </Typography>
              )
            }
            {errors && errors.nominal?.type === "max" && 
              (
                <Typography
                  sizeVariant='c4'
                  colorVariant='primary'
                  className='text-red-500 text-right font-bold'
                >
                  Nominal maksimum adalah Rp. 1000000000
                </Typography>
              )
            } 
        </div>
      </div>
    </div>
  );
}

export default InputNominal