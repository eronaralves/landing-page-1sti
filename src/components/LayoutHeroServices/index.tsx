import Image from 'next/image';
// Styles
import * as S from './styles';

// Images
import Backbones from '../../../public/backbones.png';

export function LayoutHeroServices() {
  return (
    <S.Container>
      <S.ContainerHeading>
        <S.Heading
          title="Backbones Digitais"
          description="Acelerando inovações com agilidade aumentada"
        />
        <div className="box-image">
          <Image src={Backbones} alt="" />
        </div>
      </S.ContainerHeading>
      <p className="description">
        Agilize a inserção e garanta a continuidade de sua empresa na economia
        digital, com uma fundação tecnológica escalável e flexível que viabiliza
        inovações e criação de novas capacidades na velocidade necessária para
        adaptação a mudanças e aproveitamento de oportunidades de mercado.
        <br />
        <br />
        Os Backbones Digitais construídos pela 1STi implementam uma espinha
        dorsal de tecnologia de missão crítica com interoperabilidade,
        escalabilidade e integridade costuradas em seu DNA, abrindo caminho para
        que sua equipe desenvolva plataformas digitais que geram inovações
        profundas.
      </p>
    </S.Container>
  );
}
