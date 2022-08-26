import Link from 'next/link';
import type { HTMLProps } from 'react';
import twsx from 'twsx';

export interface ButtonProps extends Omit<HTMLProps<HTMLButtonElement>, 'type'> {
  href?: string;
  htmlType?: 'button' | 'link' | 'reset' | 'submit';
  type?: 'primary' | 'secondary';
}

function Button({
  children,
  className,
  href = '#',
  htmlType = 'button',
  type = 'primary',
  ...props
}: ButtonProps) {
  const classNames = twsx('active:translate-y-1 active:shadow-none block hover:shadow-lg px-6 py-4 rounded shadow-md transition w-fit', {
    'bg-orange-400': type === 'primary',
    'hover:bg-orange-500': type === 'primary',
    'text-white': type === 'primary',
  }, className);
  if (htmlType === 'link') {
    // TODO: I could probably make this thing inherit link prop definitions, but eh
    return (
      <Link href={href}>
        <a className={classNames} href={href}>
          {children}
        </a>
      </Link>
    );
  }
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading, react/button-has-type
    <button {...props} className={classNames} type={htmlType}>
      {children}
    </button>
  );
}

export default Button;
