import React from 'react';

import Typography from '@/components/Typography';

type ButtonProps = {
  href: string;
  className?: string;
  children?: React.ReactNode;
};

function ButtonLink({ children, href, className }: ButtonProps) {
  return (
    <a href={href}>
      <Typography
        colorVariant='secondary'
        className={`${className} rounded-3xl bg-secondary-100 transition`}
      >
        {children}
      </Typography>
    </a>
  );
}

export default ButtonLink;
