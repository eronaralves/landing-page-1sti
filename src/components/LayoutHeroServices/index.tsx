import Image, { StaticImageData } from 'next/image';

// Components
import { HeadingServices } from '../HeadingServices';

// Styles
import * as S from './styles';

// Interfaces
interface ILayoutHeroServicesProps {
  className?: string;
  image: StaticImageData;
  description: string;
  title: string;
  subtitle: string;
}

export function LayoutHeroServices({
  image,
  description,
  className,
  title,
  subtitle,
}: ILayoutHeroServicesProps) {
  return (
    <S.Container className={className}>
      <S.ContainerHeading className="heading-container">
        <div>
          <HeadingServices
            className="heading"
            title={title}
            description={subtitle}
          />
          <div className="box-image">
            <Image src={image} alt="" />
          </div>
        </div>
      </S.ContainerHeading>
      <p className="description">{description}</p>
    </S.Container>
  );
}
