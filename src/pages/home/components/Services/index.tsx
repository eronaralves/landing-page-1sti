// Styles
import * as S from './styles';

// Interfaces
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
  data?: any;
}

export function Services({ card }: IServicesProps) {
  return (
    <S.Container>
      <S.ContentServiceText>
        <h2>Servicos</h2>
        <p>
          O que podemos fazer para elevar propostas de valor, escalar soluções
          com agilidade aumentada e amplificar resultados com tecnologias
          emergentes e inovação profunda:
        </p>
      </S.ContentServiceText>
      {card.map((card, index) => (
        <S.Cards key={index} data={card} />
      ))}
    </S.Container>
  );
}
