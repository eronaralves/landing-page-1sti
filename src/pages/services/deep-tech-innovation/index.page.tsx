// Styles
import * as S from './styles';

// Components
import { LayoutService } from '../../../components/LayoutService';

// Services
import { getService } from '../../../services/hygraph/service';
import { getServices } from '../../../services/hygraph/services';

// Interfaces
interface IDeepTechInovationProps {
  services: [
    {
      title: string;
      subtitle: string;
      description: {
        html: any;
      };
      asset: {
        url: any;
      };
      slug: string;
    },
  ];
  service: [
    {
      title: string;
      subtitle: string;
      description: {
        text: string;
      };
      asset: {
        url: any;
      };
      slug: string;
    },
  ];
}

export default function DeepTechInovation({
  service,
  services,
}: IDeepTechInovationProps) {
  return (
    <S.Container>
      <S.Hero
        title={service[0].title}
        subtitle={service[0].subtitle}
        description={service[0].description.text}
      />
      <LayoutService services={services} />
    </S.Container>
  );
}

export const getServerSideProps = async (context: any) => {
  const { services } = await getServices(context.locale);
  const { services: service } = await getService(
    context.locale,
    'deep-tech-innovation',
  );

  return {
    props: {
      services,
      service,
    },
  };
};
