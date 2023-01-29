// Styles
import * as S from './styles';

// Images
import Estrategia from '../../../assets/images/strategy-en.svg';

// Components
import { LayoutService } from '../../../components/LayoutService';

export default function DigitalStrategy() {
  return (
    <S.Container>
      <S.Hero
        title="Estratégia Digital"
        subtitle="A tecnologia como meio para transformações profundas"
        image={Estrategia}
        description="Amplifique a estratégia de negócios com a dimensão digital pensando tecnologia como parte integrante do todo, alavancando otimizações e inovações de alto impacto. Conte com um trabalho de inteligência e aconselhamento para analisar e qualificar demandas e capacidades de sua organização, fundamentando a definição de focos de atuação e visão de futuro, com clareza dos passos a serem adotados e dos investimentos a serem realizados para a execução. A prática de Estratégia Digital da 1STi conta com especialistas em tecnologia, arquitetura organizacional e análise de missão crítica, permitindo a construção de modelos operacionais digitais consistentes e conectados aos objetivos de sua área ou negócio."
      />
      <LayoutService />
    </S.Container>
  );
}
