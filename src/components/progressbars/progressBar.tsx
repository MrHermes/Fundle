import React, { Children } from "react";

type ProgressBarProp = {
  classProperty: string;
  progress: number
};

function ProgressBar({progress, classProperty} : ProgressBarProp) {
  return (
    <div className='h-2 w-full bg-primary-500 rounded-xl'>
        <div
            style={{ width: `${progress}%`}}
            className={`${classProperty} h-full rounded-xl`}
        >
        </div>
    </div>
);
}

export default ProgressBar