import React from 'react';
import { cn } from '../../utils/cn';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: 'default' | 'narrow' | 'wide';
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  size = 'default',
  ...props
}) => {
  const maxWidths = {
    narrow: 'max-w-5xl', // 1024px
    default: 'max-w-7xl', // 1280px
    wide: 'max-w-[1440px]', // 1440px
  };

  return (
    <div
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-12',
        maxWidths[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
