import Image from 'next/image';

// Images
import Cogna from '../../../../assets/images/cogna.png';
import Somos from '../../../../assets/images/somos.png';
import CurzeiroSul from '../../../../assets/images/cruzeiro-sul.png';
import Laureate from '../../../../assets/images/laureate.png';
import SirioLibanes from '../../../../assets/images/sirio.png';
import SulAmerica from '../../../../assets/images/sulamerica.png';
import Marisa from '../../../../assets/images/marisa.svg';

// Styles
import * as S from './styles';

// Components
import { HeadingSection } from '../../../../components/HeadingSection';

export function JourneyActive() {
  return (
    <S.Container>
      <HeadingSection
        href="/contact"
        labelButton="Inicie sua jornada"
        paragraph="Onde estamos e com quais soluções geramos impactos ampliados."
        title="Jornadas Ativas"
      />
      <S.ContainerParthers>
        <S.TitleParthers>Educaçāo</S.TitleParthers>
        <S.Line />
        <S.PartnersIEducation>
          <Image src={Cogna} alt="" />
          <Image src={Somos} alt="" />
          <Image src={CurzeiroSul} alt="" />
          <Image src={Laureate} alt="" />
        </S.PartnersIEducation>

        <S.ContentOutersParthers>
          <S.BoxOutersParthers>
            <div>
              <S.TitleParthers>Saúde</S.TitleParthers>
              <S.Line />
            </div>
            <Image src={SirioLibanes} alt="" width={224} />
          </S.BoxOutersParthers>

          <S.BoxOutersParthers>
            <div>
              <S.TitleParthers>Seguros</S.TitleParthers>
              <S.Line />
            </div>
            <Image src={SulAmerica} alt="" width={162} />
          </S.BoxOutersParthers>
          <S.BoxOutersParthers>
            <div>
              <S.TitleParthers>Varejos</S.TitleParthers>
              <S.Line />
            </div>

            <Image src={Marisa} alt="" width={116} />
          </S.BoxOutersParthers>
        </S.ContentOutersParthers>
      </S.ContainerParthers>
    </S.Container>
  );
}
