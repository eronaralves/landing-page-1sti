import Link from 'next/link';

// Icons
import {
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiFacebookBoxFill,
  RiMediumFill,
} from 'react-icons/ri';

// Styles
import * as S from './styles';
import { useTheme } from 'styled-components';

// Const
import { IMenu } from '../Navigation';

// Ultis
import { CONSTS } from '../../utils';

// hooks
import { useAppContext } from '../../context/app.context';
import { useRouter } from 'next/router';

// interfaces
interface MenuMobileProps {
  isOpenMenuMobile: boolean;
  menu: IMenu[];
  handleToggleMenuMobile: () => void;
}

export function MenuMobile({
  isOpenMenuMobile,
  handleToggleMenuMobile,
  menu,
}: MenuMobileProps) {
  const { currentLanguage, onToggleLanguage } = useAppContext();

  const theme = useTheme();
  const { asPath } = useRouter();
  const currentPath = asPath.split('#')[0].split('?')[0];

  const languages = Object.values(CONSTS.LANGUAGES).filter(
    (laguage) => laguage !== currentLanguage,
  );

  return (
    <>
      {isOpenMenuMobile && (
        <S.Container>
          <S.MenuMobile>
            {menu.map((item) => (
              <S.ItemMenuMobile
                key={item.label}
                currentRoute={currentPath}
                linkItem={item.link}
                onClick={() => handleToggleMenuMobile()}
              >
                <Link href={item.link}>{item.label}</Link>
              </S.ItemMenuMobile>
            ))}
            <S.BoxLaguages>
              <S.CurrentLaguage
                languageItem={currentLanguage}
                currentLanguage={currentLanguage}
              >
                {currentLanguage}
              </S.CurrentLaguage>
              <span>∙</span>
              <S.BaseLaguage onClick={onToggleLanguage}>
                {languages.map((language) => language)}
              </S.BaseLaguage>
            </S.BoxLaguages>

            <S.SocialMedia>
              <a
                href="https://medium.com/1sti"
                target="_blank"
                rel="noreferrer"
              >
                <RiMediumFill size={53} color={theme.colors.white} />
              </a>
              <a
                href="https://www.facebook.com/ola1STi/?_rdc=1&_rdr"
                target="_blank"
                rel="noreferrer"
              >
                <RiFacebookBoxFill size={53} color={theme.colors.white} />
              </a>
              <a
                href="https://www.linkedin.com/company/1sti/"
                target="_blank"
                rel="noreferrer"
              >
                <RiLinkedinBoxFill size={53} color={theme.colors.white} />
              </a>
              <a
                href="https://www.instagram.com/ola_1sti"
                target="_blank"
                rel="noreferrer"
              >
                <RiInstagramFill size={53} color={theme.colors.white} />
              </a>
            </S.SocialMedia>
          </S.MenuMobile>
        </S.Container>
      )}
    </>
  );
}
