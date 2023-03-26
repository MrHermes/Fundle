import clsx from 'clsx';
import React, { ReactNode } from 'react';

const SizeVariant = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'c1',
  'c2',
  'c3',
  'c4',
] as const;

const ColorVariant = ['primary', 'secondary', 'tertiary'] as const;

type TypographyProps = {
  sizeVariant?: (typeof SizeVariant)[number];
  colorVariant?: (typeof ColorVariant)[number];
  children: ReactNode;
} & React.HTMLAttributes<HTMLElement>;

const Typography = ({
  sizeVariant = 'c3',
  colorVariant = 'primary',
  children,
  className,
  ...props
}: TypographyProps) => {
  return (
    <p
      className={clsx(
        [
          sizeVariant === 'h1' && ['text-6xl'],
          sizeVariant === 'h2' && ['text-5xl'],
          sizeVariant === 'h3' && ['text-[40px]'],
          sizeVariant === 'h4' && ['text-4xl'],
          sizeVariant === 'h5' && ['text-[32px]'],
          sizeVariant === 'h6' && ['text-[28px]'],
          sizeVariant === 'c1' && ['text-2xl'],
          sizeVariant === 'c2' && ['text-xl'],
          sizeVariant === 'c3' && ['text-base'],
          sizeVariant === 'c4' && ['text-sm'],
        ],
        [
          colorVariant === 'primary' && ['text-[#201F1F]'],
          colorVariant === 'secondary' && ['text-white'],
          colorVariant === 'tertiary' && ['text-[#06A371]'],
        ],
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};

export default Typography;
