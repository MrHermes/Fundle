import React from 'react';

type ProgressBarProp = {
  progress: number;
};

function ProgressBar({ progress }: ProgressBarProp) {
  return (
    <div className='h-2 w-full rounded-xl bg-primary-500'>
      <div
        style={{ width: `${progress}%` }}
        className="bg-primary-100 h-full rounded-xl"
      ></div>
    </div>
  );
}

export default ProgressBar;