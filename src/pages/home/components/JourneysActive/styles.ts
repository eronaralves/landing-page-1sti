import styled from 'styled-components';
import { Wrapper } from '../../../../styles/global';

export const Container = styled(Wrapper)`
  display: flex;
  flex-wrap: wrap;
  gap: 130px;

  margin-top: 123px;

  @media (max-width: 700px) {
    gap: 40px;
  }
`;

export const ContainerParthers = styled.div`
  max-width: 1200px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 100px;

  @media (max-width: 1283px) {
    margin-top: 0px;
  }

  @media (max-width: 700px) {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: start;
  }
`;

export const TitleParthers = styled.h3`
  font-family: ${({ theme }) => theme.fonts.cabinetGrotesk.bold};
  font-size: 0.875rem;

  text-align: center;
  text-transform: uppercase;

  margin-bottom: 10px;

  color: ${({ theme }) => theme.colors.blue100};

  @media (max-width: 700px) {
    text-align: left;
  }
`;

export const Line = styled.hr`
  width: 100%;
  height: 2px;
  border: 0;

  background: ${({ theme }) => theme.colors.blue100};
`;

export const PartnersIEducation = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 40px;

  margin-top: 23px;

  img {
    width: 20%;
    height: auto;
    aspect-ratio: 3/2;
    object-fit: contain;
  }

  @media (max-width: 700px) {
    display: flex;
    justify-content: start;

    img {
      width: 30%;
    }
  }

  @media (max-width: 450px) {
    img {
      width: 40%;
    }
  }
`;

export const ContentOutersParthers = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 100px;

  margin-top: 43px;

  @media (max-width: 700px) {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 58px;
  }
`;

export const BoxOutersParthers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;

  img {
    aspect-ratio: 3/2;
    object-fit: contain;
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`;
