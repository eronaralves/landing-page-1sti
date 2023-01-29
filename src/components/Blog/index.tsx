import Image, { StaticImageData } from 'next/image';

// Styles
import * as S from './styles';

// Interfaces
interface BlogType {
  type: string;
  title: string;
  image: StaticImageData;
}

interface BlogProps {
  data: BlogType;
  className?: string;
}

export function Blog({ data, className }: BlogProps) {
  return (
    <S.ContainerBlog className={className}>
      <div className="box-image-blog">
        <Image src={data.image} alt="" />
      </div>
      <div>
        <span>{data.type}</span>
        <p>{data.title}</p>
      </div>
    </S.ContainerBlog>
  );
}
