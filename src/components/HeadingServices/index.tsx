// Styles
import * as S from './styles';

// Interfaces
interface HeadingServicesProps {
  title: string;
  description: string;
  className?: string;
}

export function HeadingServices({
  description,
  title,
  className,
}: HeadingServicesProps) {
  return (
    <S.Heading className={className}>
      <h1>{title}</h1>
      <p>{description}</p>
    </S.Heading>
  );
}
