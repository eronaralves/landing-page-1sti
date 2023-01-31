// Styles
import * as S from './styles';

// Components
import { LayoutService } from '../../../components/LayoutService';

// Services
import { getServices } from '../../../services/hygraph/services';
import { getService } from '../../../services/hygraph/service';

// Interfaces
interface IPlataformDigitalProps {
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

export default function PlataformDigital({
  service,
  services,
}: IPlataformDigitalProps) {
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
    'plataform-digital',
  );

  return {
    props: {
      services,
      service,
    },
  };
};
