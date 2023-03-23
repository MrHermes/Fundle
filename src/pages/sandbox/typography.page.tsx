import React from 'react';

import Typography from '@/components/Typography';

function typography() {
  return (
    <div className='min-h-screen bg-gray-200'>
      <div className='layout'>
        <Typography sizeVariant='h1' colorVariant='primary'>
          lorem ipsum
        </Typography>
        <Typography sizeVariant='h2' colorVariant='primary'>
          lorem ipsum
        </Typography>
        <Typography sizeVariant='h3' colorVariant='primary'>
          lorem ipsum
        </Typography>
        <Typography sizeVariant='h4' colorVariant='primary'>
          lorem ipsum
        </Typography>
        <Typography sizeVariant='h5' colorVariant='primary'>
          lorem ipsum
        </Typography>
        <Typography sizeVariant='h6' colorVariant='primary'>
          lorem ipsum
        </Typography>
        <Typography sizeVariant='c1' colorVariant='primary'>
          lorem ipsum
        </Typography>
        <Typography sizeVariant='c2' colorVariant='primary'>
          lorem ipsum
        </Typography>
        <Typography sizeVariant='c3' colorVariant='primary'>
          lorem ipsum
        </Typography>

        <div className='pt-9'>
          <Typography sizeVariant='h4' colorVariant='primary'>
            Primary
          </Typography>
          <Typography sizeVariant='h4' colorVariant='secondary'>
            Secondary
          </Typography>
          <Typography sizeVariant='h4' colorVariant='tertiary'>
            Tertiary
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default typography;
