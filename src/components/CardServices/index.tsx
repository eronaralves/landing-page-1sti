// Styles
import * as S from './styles';

// Icons
import { HiPlus } from 'react-icons/hi';

interface CardService {
  description: {
    markdown: string;
  };
  asset: {
    url: string;
  };

  slug: string;
  subtitle: string;
  title: string;
}

interface CardServicesProps {
  data: CardService;
  className?: string;
}

export function CardServices({ data, className }: CardServicesProps) {
  return (
    <S.ContainerCard href={`/services/${data.slug}`} className={className}>
      <div>
        <h2>{data.title}</h2>
        <p>{data.subtitle}</p>
      </div>

      <span>
        Saiba mais <HiPlus size={25} />
      </span>
    </S.ContainerCard>
  );
}
