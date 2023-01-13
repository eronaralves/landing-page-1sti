// Styles
import * as S from './styles';

// Interfaces
interface ButtonProps {
  label?: string;
}

export function Button({ label }: ButtonProps) {
  return (
    <S.Button>
      <span>{label}</span>
    </S.Button>
  );
}
