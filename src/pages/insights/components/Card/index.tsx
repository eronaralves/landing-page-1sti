import Image, { StaticImageData } from 'next/image';
import { HtmlHTMLAttributes } from 'react';

// Styles
import * as S from './styles';

// Interfaces
interface CardProps extends HtmlHTMLAttributes<HTMLDivElement> {
  image?: StaticImageData | string;
  backgroundCard?: string;
  className?: string;
  positionImage?: string;
  type: string;
  title: string;
}

export function Card({
  image,
  backgroundCard,
  className,
  positionImage,
  type,
  title,
}: CardProps) {
  return (
    <S.ContainerCard
      className={className}
      backgroundCard={backgroundCard}
      positionImage={positionImage}
    >
      <S.Heading className="heading">
        <span>{type}</span>
        <h2>{title}</h2>
      </S.Heading>
      {image && <Image src={image} alt="" />}
    </S.ContainerCard>
  );
}
