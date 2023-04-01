import Typography from "@/components/Typography";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";

function InputNominal() {
  const [nominal, setNominal] = useState(10000);
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const result = event.target.value.replace(/[^0-9]/gi, '');
    var resultNum = Number(result);
    if (resultNum <= 10000) resultNum = 10000;
    if (resultNum >= 1000000000) resultNum = 1000000000; 
    setNominal(resultNum);
  };

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
            {...register("nominal")}
            id="nominal"
            type="text"
            value={nominal}
            onChange={handleInputChange}
            className="border-transparent bg-inherit text-right text-3xl font-bold focus:shadow-none w-full"
          />
          <Typography
            sizeVariant='c4'
            colorVariant='secondary'
            className='text-red-500 text-right font-bold'
          >
            Nominal minimum adalah 100000 dan nominal maksimal adalah 1000000000
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default InputNominal