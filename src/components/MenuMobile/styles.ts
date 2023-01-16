import styled, { css } from 'styled-components';

// Interfaces
interface LaguagesProps {
  languageItem: string;
  currentLanguage: string;
}

interface IItemMenuMobileProps {
  currentRoute: string;
  linkItem: string;
}

export const Container = styled.div`
  width: 100%;

  padding-block: 70px;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-inline: 50px;

  background-color: ${({ theme }) => theme.colors.green800};

  @media (min-width: 630px) {
    display: none;
  }
`;

export const MenuMobile = styled.ul`
  height: 100vh;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const BaseItemMenuMobile = styled.li`
  list-style: none;
  padding-block: 2px;
  cursor: pointer;
  list-style: none;

  color: ${({ theme }) => theme.colors.green800};
`;

export const ItemMenuMobile = styled(BaseItemMenuMobile)<IItemMenuMobileProps>`
  font-family: ${({ theme }) => theme.fonts.goshaSans.bold};
  font-size: 33px;

  a {
    color: ${({ theme }) => theme.colors.white};
    padding-block: 5px;
  }

  ${(props) => {
    if (props.currentRoute === props.linkItem) {
      return css`
        a {
          border-bottom: 3px solid ${({ theme }) => theme.colors.white};
        }
      `;
    }
  }}
`;

export const BoxLaguages = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  margin-bottom: 30px;
`;

export const BaseLaguage = styled.span`
  font-family: ${({ theme }) => theme.fonts.goshaSans.regular};
  font-size: 33px;
`;

export const CurrentLaguage = styled(BaseLaguage)<LaguagesProps>`
  ${(props) => {
    if (props.languageItem === props.currentLanguage) {
      return css`
        border-bottom: 1px solid ${({ theme }) => theme.colors.white};
      `;
    }
  }}
`;

export const SocialMedia = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50px);
  gap: 40px;

  a {
    font-family: ${({ theme }) => theme.colors.white};
  }
`;
