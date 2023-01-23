import Image from 'next/image';

// Strles
import * as S from './styles';

// Images
import CapaServices from '../../assets/images/servicos.png';

// Interfaces
interface CardService {
  title: string;
  paragraph: string;
  link: string;
}

export default function Services() {
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
      <S.ContainerHero>
        <S.ContentHero>
          <S.Heading
            title="Services"
            description="Explore novos caminhos para resolver os desafios mais complexos de sua organização"
          />
          <Image className="video" src={CapaServices} alt="" />
        </S.ContentHero>
        <p className="description">
          Experiência profunda em arquitetura digital, iniciativas estratégicas
          e de missão crítica, sendo pioneira em Deep Tech, a 1STi está pronta
          para inserir sua empresa em uma jornada de tecnologia com alma e
          impacto, que: <br />
          <br />
          <br />• <strong>Eleva</strong>
          propostas de valor,
          <br /> • <strong>Escala</strong> soluções com agilidade aumentada, e{' '}
          <br />• <strong>Amplifica</strong> resultados com tecnologias
          emergentes e inovação profunda.
        </p>
      </S.ContainerHero>
      <S.ContainerCards>
        <div className="espaco-vazio"></div>
        {Services.map((card, index) => (
          <S.Cards key={index} data={card} />
        ))}
      </S.ContainerCards>
    </S.Container>
  );
}
