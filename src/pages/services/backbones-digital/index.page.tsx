// Styles
import * as S from './styles';

// Images
import Backbones from '../../../../public/backbones.png';

// Components
import { LayoutService } from '../../../components/LayoutService';

export default function BackbonesDigital() {
  return (
    <S.Container>
      <S.Hero
        title="Backbones Digitais"
        subtitle="Acelerando inovações com agilidade aumentada"
        image={Backbones}
        description="Agilize a inserção e garanta a continuidade de sua empresa na economia digital, com uma fundação tecnológica escalável e flexível que viabiliza inovações e criação de novas capacidades na velocidade necessária para adaptação a mudanças e aproveitamento de oportunidades de mercado. Os Backbones Digitais construídos pela 1STi implementam uma espinha dorsal de tecnologia de missão crítica com interoperabilidade, escalabilidade e integridade costuradas em seu DNA, abrindo caminho para que sua equipe desenvolva plataformas digitais que geram inovações profundas."
      />
      <LayoutService />
    </S.Container>
  );
}
