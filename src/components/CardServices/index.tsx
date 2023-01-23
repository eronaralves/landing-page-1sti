// Styles
import * as S from './styles';

// Icons
import { HiPlus } from 'react-icons/hi';

// Interfaces
interface CardServic {
  title: string;
  paragraph: string;
  link: string;
}

interface CardServicesProps {
  data: CardServic;
  className?: string;
}

export function CardServices({ data, className }: CardServicesProps) {
  return (
    <S.ContainerCard href={data.link} className={className}>
      <div>
        <h2>{data.title}</h2>
        <p>{data.paragraph}</p>
      </div>

      <span>
        Saiba mais <HiPlus size={25} />
      </span>
    </S.ContainerCard>
  );
}
