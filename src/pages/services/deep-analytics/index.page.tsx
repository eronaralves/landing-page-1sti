// Styles
import * as S from './styles';

// Images
import DeepAnalytic from '../../../assets/images/deep-analytics.svg';

// Components
import { LayoutService } from '../../../components/LayoutService';

export default function DeepAnalytics() {
  return (
    <S.Container>
      <S.Hero
        title="Deep Analytics"
        subtitle="Amplificando análise de dados para multiplicar oportunidades"
        image={DeepAnalytic}
        description="Aumente o poder dos dados criando um núcleo de inteligência capaz de aprofundar as análises usando hiper relacionamento e processamento de nova geração. O Deep Analytics é capaz de extrair informação a partir da fala, imagens e vídeos, documentos digitalizados, robôs digitais de extração e bancos de dados em qualquer fonte, públicos e privados. Conecte os seus processos a esse centro de inteligência e habilite a inteligência artificial para criar experiências personalizadas, otimizar a alocação e distribuição de recursos, construir plataformas de dados com visão 360 graus e descobrir continuamente oportunidades de eficiência operacional e financeira."
      />
      <LayoutService />
    </S.Container>
  );
}
