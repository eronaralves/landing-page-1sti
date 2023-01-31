import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

// Strles
import * as S from './styles';

// Images
import CapaServices from '../../assets/images/servicos.png';
import { getServices } from '../../services/hygraph/services';

// Interfaces
import { IHeading } from '../home';

export interface IServices {
  services: [
    {
      description: {
        markdown: string;
      };
      asset: {
        url: string;
      };

      slug: string;
      subtitle: string;
      title: string;
    },
  ];
  serviceSections: [
    {
      heading: IHeading;
      descrptionService: string;
    },
  ];
}

interface IServiceProps {
  data: IServices;
}

export default function Services({ data }: IServiceProps) {
  const { services, serviceSections } = data;

  console.log(serviceSections);

  return (
    <S.Container>
      <S.ContainerHero>
        <S.ContentHero>
          <S.Heading
            title={serviceSections[0].heading.title}
            description={serviceSections[0].heading.description}
          />
          <Image className="video" src={CapaServices} alt="" />
        </S.ContentHero>
        <ReactMarkdown>{serviceSections[0].descrptionService}</ReactMarkdown>
        {/* <p className="description">
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
        </p> */}
      </S.ContainerHero>
      <S.ContainerCards>
        <div className="espaco-vazio"></div>
        {services.map((card, index) => (
          <S.Cards key={index} data={card} />
        ))}
      </S.ContainerCards>
    </S.Container>
  );
}

export const getServerSideProps = async (context: any) => {
  const data = await getServices(context.locale);
  return {
    props: {
      data,
    },
  };
};
