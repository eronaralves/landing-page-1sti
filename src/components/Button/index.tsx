// Styles
import * as S from './styles';

// Interfaces
interface ButtonProps {
  label: string;
  className?: string;
}

export function Button({ label, className }: ButtonProps) {
  return (
    <S.Button className={className}>
      <span>{label}</span>
    </S.Button>
  );
}
