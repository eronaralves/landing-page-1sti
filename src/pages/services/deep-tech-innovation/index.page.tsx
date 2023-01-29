// Styles
import * as S from './styles';

// Images
import DeepTechImage from '../../../assets/images/deep-tech-inovation.svg';
import DeepTechImageBottom from '../../../assets/images/deep-tech-inovation-bottom.svg';
import DeepTechImageTop from '../../../assets/images/deep-tech-inovacao-top.svg';

// Components
import { LayoutService } from '../../../components/LayoutService';

export default function DeepTechInovation() {
  return (
    <S.Container>
      <S.Hero
        title="Plataformas Digitais"
        subtitle="O caminho para o presente e o futuro dos negócioscom agilidade aumentada"
        image={DeepTechImage}
        imageMob={DeepTechImageTop}
        imageSecond={DeepTechImageBottom}
        description="Concretize sua estratégia digital através de uma plataforma que aumenta a eficácia operacional e habilita o desenvolvimento de novos produtos ou serviços, com agilidade que proporciona vantagens de mercado a seus negócios. Os squads de agilidade aumentada da 1STi estão a postos para construir arquiteturas adequadas à escalabilidade, com discovery conjunto e desenvolvimento de plataformas prontas para a experiência físico-digital, com visão AI nativa e aplicada, habilitando o alcance de novos modelos de negócio, novos mercados ou novas fontes de receita."
      />
      <LayoutService />
    </S.Container>
  );
}
