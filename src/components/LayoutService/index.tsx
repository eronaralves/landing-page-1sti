import { useRouter } from 'next/router';

// Styles
import * as S from './styles';

// Components
import { Button } from '../Button';
import { CardServices } from '../CardServices';

// Interfaces
interface ILayoutServiceProps {
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
}

export function LayoutService({ services }: ILayoutServiceProps) {
  const { asPath } = useRouter();
  const cleanPath = asPath.split('/');

  return (
    <S.Container>
      <S.ContainerContactUs>
        <S.ContentContactUs>
          <p>Como podemos ajudar a jornada digital do seu negócio?</p>
          <Button label="Fale Conosco" href="/contact" />
        </S.ContentContactUs>
      </S.ContainerContactUs>
      <S.ContainerCards>
        {services.map((card) => {
          if (card.slug !== cleanPath[2]) {
            return <CardServices key={card.slug} data={card} />;
          }

          return false;
        })}
      </S.ContainerCards>
    </S.Container>
  );
}
