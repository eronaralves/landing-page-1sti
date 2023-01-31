// Styles
import * as S from './styles';

// Interfaces
import { IHeading } from '../..';

export interface CardService {
  title: string;
  subtitle: string;
  description?: {
    html: any;
  };
  asset?: {
    url: any;
  };
  slug: string;
}

interface IServicesProps {
  card: CardService[];
  serviceSections: [
    {
      heading: IHeading;
      descriptionHome: string;
    },
  ];
}

export function Services({ card, serviceSections }: IServicesProps) {
  const { descriptionHome, heading } = serviceSections[0];

  console.log(serviceSections[0]);

  return (
    <S.Container>
      <S.ContentServiceText>
        <h2>{heading.title}</h2>
        <p>{descriptionHome}</p>
      </S.ContentServiceText>
      {card.map((card, index) => (
        <S.Cards key={index} data={card} />
      ))}
    </S.Container>
  );
}
