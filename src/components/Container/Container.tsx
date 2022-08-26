import type { HTMLProps } from 'react';
import twsx from 'twsx';

export type ContainerProps = HTMLProps<HTMLDivElement>;

function Container({ children, className, ...props }: ContainerProps) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div className={twsx('container mx-auto px-6 md:px-8', className)} {...props}>
      {children}
    </div>
  );
}

export default Container;
