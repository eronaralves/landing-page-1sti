import styled from 'styled-components';

// Components
import { CardServices } from '../../components/CardServices';
import { HeadingServices } from '../../components/HeadingServices';
import { Wrapper } from '../../styles/global';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 100px;

  @media (max-width: 700px) {
    margin-bottom: 60px;
  }
`;

export const ContainerHero = styled(Wrapper)`
  margin-block: 28px;
  position: relative;

  .video {
    width: 100%;
    max-width: 500px;
    height: fit-content;
  }

  .description {
    width: 100%;
    max-width: 345px;

    position: absolute;
    bottom: -200px;

    font-family: ${({ theme }) => theme.fonts.cabinetGrotesk.regular};
    font-size: 1.125rem;
    line-height: 30px;
  }

  @media (max-width: 1050px) {
    .description {
      position: initial;
    }
  }
`;

export const ContentHero = styled.div`
  display: flex;
  justify-content: space-between;

  gap: 28px;

  @media (max-width: 1050px) {
    flex-wrap: wrap;
    margin-bottom: 32px;
  }
`;

export const Heading = styled(HeadingServices)`
  p {
    width: 100%;
    max-width: 780px;
  }
`;

export const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: 42% 28.5% 28.5%;
  gap: 1px;

  @media (max-width: 1050px) {
    display: grid;
    grid-template-columns: 49.25% 49.25%;

    .espaco-vazio {
      display: none;
    }
  }
`;

export const Cards = styled(CardServices)`
  flex: 1;

  @media (max-width: 820px) {
    padding-inline: 50px;
  }

  @media (max-width: 750px) {
    padding-inline: 30px;
  }

  @media (max-width: 550px) {
    height: auto;
    gap: 38px;

    h2 {
      font-size: 1.5rem;
      line-height: 32px;

      font-family: ${({ theme }) => theme.fonts.goshaSans.regular};
    }

    p {
      font-size: 1.125rem;
      line-height: 27px;
    }

    span {
      font-size: 1rem;

      svg {
        width: 1.5rem;
      }
    }
  }

  @media (max-width: 360px) {
    padding-inline: 20px;
  }
`;
