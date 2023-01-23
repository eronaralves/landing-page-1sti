import { AnchorHTMLAttributes, HTMLAttributeAnchorTarget } from 'react';
import { LinkProps } from 'next/link';

// Styles
import * as S from './styles';

// Interfaces
interface ButtonProps extends AnchorHTMLAttributes<LinkProps> {
  label: string;
  className?: string;
  href: string;
  target?: HTMLAttributeAnchorTarget;
}

export function Button({ label, href = '', target, className }: ButtonProps) {
  return (
    <S.Button href={href} target={target} className={className}>
      {label}
    </S.Button>
  );
}
