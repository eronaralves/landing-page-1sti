import { HTMLAttributeAnchorTarget } from 'react';

// Styles
import * as S from './styles';

// Components
import { Button } from '../Button';

// interface
interface ILayoutSectionProps {
  title: string;
  paragraph: string;
  labelButton: string;
  hrefButton: string;
  targetButton?: HTMLAttributeAnchorTarget;
}

export function HeadingSection({
  title,
  labelButton,
  paragraph,
  hrefButton = '',
  targetButton,
}: ILayoutSectionProps) {
  return (
    <S.BoxInformations>
      <S.Title>{title}</S.Title>
      <S.Paragraph>{paragraph}</S.Paragraph>
      <Button label={labelButton} href={hrefButton} target={targetButton} />
    </S.BoxInformations>
  );
}
