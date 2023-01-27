import { useRouter } from 'next/router';

// Styles
import * as S from './styles';

// Components
import { Button } from '../Button';
import { CardServices } from '../CardServices';

// Interfaces
interface CardService {
  title: string;
  paragraph: string;
  link: string;
}

const Cards: CardService[] = [
  {
    title: 'Estratégia Digital',
    paragraph: 'A tecnologia como meio para transformações profundas',
    link: '/digital-strategy',
  },
  {
    title: 'Backbones Digitais',
    paragraph: 'Acelerando inovações com agilidade aumentada',
    link: '/backbones-digital',
  },
  {
    title: 'Plataformas Digitais',
    paragraph: 'O caminho para o presente e o futuro dos negócios',
    link: '/plataform-digital',
  },
  {
    title: 'Inovação Deep Tech',
    paragraph: 'Tecnologias visionárias para inovação de alto impacto',
    link: '/deep-tech-innovation',
  },
  {
    title: 'Deep Analytics',
    paragraph: 'Amplificando análise de dados para multiplicar oportunidades',
    link: '/deep-analytics',
  },
];

export function LayoutService() {
  const { asPath } = useRouter();
  const cleanPath = asPath.split('/');

  return (
    <S.Container>
      <S.ContentContactUs>
        <p>Como podemos ajudar a jornada digital do seu negócio?</p>
        <Button label="Fale Conosco" href="/contact" />
      </S.ContentContactUs>
      <S.ContainerCards>
        {Cards.map((card) => {
          if (card.link.split('/')[1] !== cleanPath[2]) {
            return <CardServices key={card.link} data={card} />;
          }

          return false;
        })}
      </S.ContainerCards>
    </S.Container>
  );
}
