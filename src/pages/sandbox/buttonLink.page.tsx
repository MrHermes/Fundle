import React from 'react';

import ButtonLink from '@/components/buttons/ButtonLink';

function buttonLink() {
  return (
    <div className='flex p-4'>
      <ButtonLink
        href='/'
        className='layout py-2 px-5 font-light hover:bg-secondary-100/60'
      >
        ButtonLink
      </ButtonLink>
    </div>
  );
}

export default buttonLink;
