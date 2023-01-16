// Styles
import * as S from './styles';

// Components
import { Button } from '../Button';

// interface
interface ILayoutSectionProps {
  title: string;
  paragraph: string;
  labelButton: string;
  href: string;
}

export function LayoutSection({
  title,
  labelButton,
  paragraph,
  href,
}: ILayoutSectionProps) {
  return (
    <S.BoxInformations href={href}>
      <S.Title>{title}</S.Title>
      <S.Paragraph>{paragraph}</S.Paragraph>
      <Button label={labelButton} />
    </S.BoxInformations>
  );
}
