import styled from 'styled-components';

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
