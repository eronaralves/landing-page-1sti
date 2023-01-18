import Link from 'next/link';
import styled from 'styled-components';
import { Wrapper } from '../../styles/global';
import { Button } from '../Button';

export const WrapperContainer = styled(Wrapper)``;

export const ContainerFooter = styled.footer`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  gap: 5%;

  padding-block: 30px;
  border-top: 2px solid ${({ theme }) => theme.colors.blue100};
`;

export const ContainerMidia = styled.div`
  flex: 1;
  display: flex;
  gap: 70px;

  @media (max-width: 905px) {
    flex: initial;
    width: 100%;
  }

  @media (max-width: 705px) {
    justify-content: space-between;
  }

  @media (max-width: 550px) {
    gap: 0;
  }
`;

export const ContainerParthers = styled.div`
  width: 50%;
  display: flex;
  gap: 85px;

  @media (max-width: 705px) {
    width: 100%;
    max-width: 300px;
    justify-content: space-between;
  }

  @media (max-width: 550px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const EcossistemParthers = styled.div`
  width: 100%;
  max-width: 250px;

  h3 {
    font-family: ${({ theme }) => theme.fonts.cabinetGrotesk.medium};
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: 15px;
  }
`;

export const ListPathers = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Parther = styled.li`
  font-family: ${({ theme }) => theme.fonts.cabinetGrotesk.regular};
  font-size: 20px;

  list-style: none;

  a {
    color: ${({ theme }) => theme.colors.white};
  }

  &:hover {
    a {
      text-decoration: underline;
    }
  }
`;

export const SocialMidia = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 25px;

  svg {
    cursor: pointer;
  }

  @media (max-width: 705px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const LinkSocial = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
`;

export const ContainerOpenings = styled.div`
  width: 100%;
  max-width: 300px;

  h2 {
    font-family: ${({ theme }) => theme.fonts.cabinetGrotesk.regular};
    font-size: 26px;
    letter-spacing: 1.5px;

    margin-bottom: 16px;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.cabinetGrotesk.regular};
    font-size: 18px;

    margin-bottom: 25px;
  }

  @media (max-width: 905px) {
    margin-top: 38px;
  }
`;

export const ButtonOpenings = styled(Button)`
  padding-block: 18px;
`;
