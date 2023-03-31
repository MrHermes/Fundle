import React, { MouseEventHandler } from 'react';

import Typography from '@/components/Typography';

type ButtonProps = {
  href: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

function ButtonSubmit({ children, href, className, onClick }: ButtonProps) {
  return (
    <a href={href} onClick={onClick}>
      <button
        className={`${className} inline-flex w-full justify-center rounded-md border border-transparent bg-primary-100 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:ring-offset-2  sm:ml-3 sm:w-auto`}
      >
        <Typography colorVariant='secondary'>{children}</Typography>
      </button>
    </a>
  );
}

export default ButtonSubmit;
