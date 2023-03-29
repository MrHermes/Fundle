import React from 'react';

type ProgressBarProp = {
  classProperty: string;
  progress: number;
};

function ProgressBar({ progress, classProperty }: ProgressBarProp) {
  return (
    <div className='h-2 w-full rounded-xl bg-primary-500'>
      <div
        style={{ width: `${progress}%` }}
        className={`${classProperty} h-full rounded-xl`}
      ></div>
    </div>
  );
}

export default ProgressBar;