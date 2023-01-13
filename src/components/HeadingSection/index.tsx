// Styles
import * as S from './styles';

// Components
import { Button } from '../Button';
import { ReactNode } from 'react';

// interface
interface ILayoutSectionProps {
  children?: ReactNode;
  title?: string;
  paragraph?: string;
  labelButton?: string;
}

export function LayoutSection({
  children,
  title,
  labelButton,
  paragraph,
}: ILayoutSectionProps) {
  return (
    <S.BoxInformations>
      <S.Title>{title}</S.Title>
      <S.Paragraph>{paragraph}</S.Paragraph>
      <Button label={labelButton} />
    </S.BoxInformations>
  );
}
