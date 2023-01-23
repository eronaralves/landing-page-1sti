// Styles
import * as S from './styles';

// Icons
import {
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiFacebookBoxFill,
  RiMediumFill,
} from 'react-icons/ri';

// Images
import LogoPacto from '../../assets/images/logo-pacto.png';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <S.WrapperContainer>
      <S.ContainerFooter>
        <S.ContainerMidia>
          <S.ContainerParthers>
            <Image src={LogoPacto} alt="" />
            <S.EcossistemParthers>
              <h3>ECOSSISTEMA DEEP TECH</h3>
              <S.ListPathers>
                <S.Parther>Sofya</S.Parther>
                <S.Parther>
                  <Link href="https://vainaweb.com.br/">Vai na Web</Link>
                </S.Parther>
                <S.Parther>
                  <Link href="https://institutoprecisaser.org/">
                    Instituto Precisa Ser
                  </Link>
                </S.Parther>
              </S.ListPathers>
            </S.EcossistemParthers>
          </S.ContainerParthers>
          <S.SocialMidia>
            <S.LinkSocial
              href="https://www.linkedin.com/company/1sti/"
              target="_blank"
            >
              <RiLinkedinBoxFill size={35} />
            </S.LinkSocial>
            <S.LinkSocial
              href="https://www.instagram.com/ola_1sti"
              target="_blank"
            >
              <RiInstagramFill size={35} />
            </S.LinkSocial>
            <S.LinkSocial href="https://medium.com/1sti" target="_blank">
              <RiMediumFill size={35} />
            </S.LinkSocial>
            <S.LinkSocial
              href="https://www.facebook.com/ola1STi/?_rdc=1&_rdr"
              target="_blank"
            >
              <RiFacebookBoxFill size={35} />
            </S.LinkSocial>
          </S.SocialMidia>
        </S.ContainerMidia>

        <S.ContainerOpenings>
          <h2>Come work with us!</h2>
          <p>
            We are always looking for talent to empower deep tech
            transformations.
          </p>
          <S.ButtonOpenings label="See openings" />
        </S.ContainerOpenings>
      </S.ContainerFooter>
    </S.WrapperContainer>
  );
}
