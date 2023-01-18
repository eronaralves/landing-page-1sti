import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Ultis
import { CONSTS } from '../../utils';

// Images
import Logo from '../../assets/images/logo-1sti.png';
import LogoAnimation from '../../assets/images/logo-animation.svg';

// Icons
import { VscMenu, VscChromeClose } from 'react-icons/vsc';

// Styles
import * as S from './styles';
import { useTheme } from 'styled-components';

// Components
import { MenuMobile } from '../MenuMobile';
import { useAppContext } from '../../context/app.context';

// Interfaces
export interface IMenu {
  label: string;
  link: string;
}

export function Navigation() {
  const [isOpenMenuMobile, setIsOpenMenuMobile] = useState(false);

  const { onToggleLanguage, currentLanguage } = useAppContext();
  const { asPath } = useRouter();
  const theme = useTheme();

  const menu: IMenu[] = [
    {
      label: 'Home',
      link: '/',
    },
    {
      label: 'Services',
      link: '/services',
    },
    {
      label: 'Insights',
      link: '/insights',
    },
    {
      label: 'Carreira',
      link: '/carreira',
    },
    {
      label: 'Contatos',
      link: '/contact',
    },
  ];

  const currentPath = asPath.split('#')[0].split('?')[0];

  function handleToggleMenuMobile() {
    setIsOpenMenuMobile((currentState) => !currentState);
  }

  function handleToggleLanguage() {
    onToggleLanguage();
  }

  return (
    <S.Container isMenuMobile={isOpenMenuMobile}>
      <S.WrapperNav>
        <S.Content>
          <S.BoxLogo>
            <Link href="/">
              <Image src={Logo} alt="Circulo preto escrito 1sti dentro" />
              <Image
                src={LogoAnimation}
                alt="Circulo preto escrito 1sti dentro"
              />
            </Link>
          </S.BoxLogo>

          <S.MenuHamburguer>
            {isOpenMenuMobile ? (
              <VscChromeClose
                onClick={handleToggleMenuMobile}
                size={40}
                color={theme.colors.green800}
              />
            ) : (
              <VscMenu
                onClick={handleToggleMenuMobile}
                size={40}
                color={theme.colors.green800}
              />
            )}
          </S.MenuHamburguer>

          <S.Menu>
            {menu.map((item) => (
              <S.LinkMenu
                key={item.label}
                currentRoute={currentPath}
                linkItem={item.link}
              >
                <Link href={item.link}>{item.label}</Link>
              </S.LinkMenu>
            ))}

            <S.Language currentLaguange={currentLanguage}>
              <span onClick={handleToggleLanguage}>{currentLanguage}</span>

              <S.FutureLaguage onClick={handleToggleLanguage}>
                <span>∙</span>
                {currentLanguage === CONSTS.LANGUAGES.PT
                  ? CONSTS.LANGUAGES.EN
                  : CONSTS.LANGUAGES.PT}
              </S.FutureLaguage>
            </S.Language>
          </S.Menu>
        </S.Content>
      </S.WrapperNav>
      <MenuMobile
        isOpenMenuMobile={isOpenMenuMobile}
        menu={menu}
        handleToggleMenuMobile={handleToggleMenuMobile}
      />
    </S.Container>
  );
}
