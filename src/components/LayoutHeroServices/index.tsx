import Image, { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

// Components
import { HeadingServices } from '../HeadingServices';

// Styles
import * as S from './styles';

// Interfaces
interface ILayoutHeroServicesProps {
  className?: string;
  image?: StaticImageData;
  description: ReactNode;
  title: string;
  subtitle: string;
  imageMob?: StaticImageData;
  imageSecond?: StaticImageData;
}

export function LayoutHeroServices({
  image,
  description,
  className,
  title,
  subtitle,
  imageMob,
  imageSecond,
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
          {image && (
            <div className="box-image">
              <Image
                className="image-web"
                src={image}
                alt=""
                width={100}
                height={100}
              />
            </div>
          )}

          {imageMob && <Image className="image-mob" src={imageMob} alt="" />}
        </div>
      </S.ContainerHeading>
      <p className="description">{description}</p>
      {imageSecond && <Image className="image-mob" src={imageSecond} alt="" />}
    </S.Container>
  );
}
