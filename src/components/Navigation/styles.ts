import styled, { css } from 'styled-components';
import { Wrapper } from '../../styles/global';

// Interfaces
interface ILinkMenuProps {
  currentRoute: string;
  linkItem: string;
}

interface ILaguange {
  currentLaguange: string;
}

export const Container = styled.nav`
  position: relative;
  background-color: ${({ theme }) => theme.colors.green800};
`;

export const Navigation = styled.nav`
  width: 100%;
  height: 74px;

  padding-inline: 73px;
  opacity: 1;

  background-color: gray;

  @media (max-width: 820px) {
    padding-inline: 50px;
  }

  @media (max-width: 750px) {
    padding-inline: 30px;
  }
`;

export const Content = styled(Wrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;

  img {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 630px) {
    justify-content: center;
  }
`;

export const MenuHamburguer = styled.div`
  display: none;

  @media (max-width: 630px) {
    display: block;

    position: absolute;
    right: 32px;
  }

  @media (max-width: 630px) {
    right: 20px;
  }
`;

export const Menu = styled.ul`
  display: flex;
  gap: 2.3rem;

  @media (max-width: 750px) {
    gap: 1.1rem;
  }

  @media (max-width: 630px) {
    display: none;
  }
`;

export const BaseMenuItems = styled.li`
  list-style: none;
  padding-block: 2px;
  cursor: pointer;

  color: ${({ theme }) => theme.colors.green800};
`;

export const LinkMenu = styled(BaseMenuItems)<ILinkMenuProps>`
  font-size: 1.125rem;
  font-family: ${({ theme }) => theme.fonts.goshaSans.bold};

  a {
    color: ${({ theme }) => theme.colors.green800};
  }

  ${(props) => {
    if (props.currentRoute === props.linkItem) {
      return css`
        border-bottom: 3px solid ${({ theme }) => theme.colors.green800};
      `;
    }
  }}
`;

export const Language = styled(BaseMenuItems)<ILaguange>`
  width: 30px;

  display: flex;
  justify-content: center;

  position: relative;

  span {
    font-size: 1.2rem;
    font-family: ${({ theme }) => theme.fonts.goshaSans.regular};
  }

  &:hover {
    span:nth-last-child(1) {
      display: flex;
      align-items: center;
    }
  }
`;

export const FutureLaguage = styled.span`
  display: none;

  position: absolute;
  right: -30px;
`;
