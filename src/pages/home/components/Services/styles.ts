import styled from 'styled-components';
import { CardServices } from '../../../../components/CardServices';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1px;

  @media (max-width: 630px) {
    margin-top: 140px;
  }
`;

export const ContentServiceText = styled.div`
  width: 33.3%;
  height: 455px;

  padding-block: 55px;
  padding-inline: 73px;

  h2 {
    font-family: ${({ theme }) => theme.fonts.goshaSans.bold};
    font-size: 2.8rem;
    margin-bottom: 16px;
  }

  p {
    max-width: 300px;

    font-family: ${({ theme }) => theme.fonts.cabinetGrotesk.medium};
    font-size: 1.125rem;
    line-height: 30px;
  }

  @media (max-width: 990px) {
    width: 100%;
    height: auto;
  }

  @media (max-width: 820px) {
    padding-inline: 50px;
  }

  @media (max-width: 750px) {
    padding-inline: 30px;
  }

  @media (max-width: 360px) {
    padding-inline: 20px;
  }
`;

export const Cards = styled(CardServices)`
  width: 33.25%;

  @media (max-width: 990px) {
    width: 49.8%;
  }

  @media (max-width: 820px) {
    padding-inline: 50px;
  }

  @media (max-width: 750px) {
    padding-inline: 30px;
    height: 400px;
  }

  @media (max-width: 430px) {
    height: 340px;
    padding-block: 40px;

    h2 {
      font-size: 1.5rem;
      margin-bottom: 16px;
    }

    p {
      font-size: 1.125rem;
      line-height: 27px;
    }

    span {
      font-size: 18px;

      gap: 8px;

      color: ${({ theme }) => theme.colors.purple500};
    }
  }

  @media (max-width: 360px) {
    padding-inline: 20px;
  }
`;
