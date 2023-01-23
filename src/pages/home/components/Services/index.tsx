// Styles
import * as S from './styles';

// Interfaces
interface CardService {
  title: string;
  paragraph: string;
  link: string;
}

export function Services() {
  const Services: CardService[] = [
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
      {Services.map((card, index) => (
        <S.Cards key={index} data={card} />
      ))}
    </S.Container>
  );
}
