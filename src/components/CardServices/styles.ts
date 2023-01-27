import styled from 'styled-components';
import Link from 'next/link';

export const ContainerCard = styled(Link)`
  height: 455px;

  padding-block: 55px;
  padding-inline: 73px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transition: linear all 0.2s;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};

  :hover {
    box-shadow: inset 0px 0px 70px #af39e6;

    h2 {
      font-family: ${({ theme }) => theme.fonts.goshaSans.bold};
    }

    p {
      color: ${({ theme }) => theme.colors.blue100};
    }
  }

  h2 {
    width: 100%;
    max-width: 150px;

    font-family: ${({ theme }) => theme.fonts.goshaSans.regular};
    font-size: 1.875rem;
    margin-bottom: 36px;
  }

  p {
    width: 100%;
    max-width: 300px;

    font-family: ${({ theme }) => theme.fonts.cabinetGrotesk.medium};
    font-size: 1.375rem;
    line-height: 34px;

    color: ${({ theme }) => theme.colors.gray600};
  }

  span {
    font-family: ${({ theme }) => theme.fonts.cabinetGrotesk.medium};
    font-size: 1.25rem;

    display: flex;
    align-items: center;
    gap: 16px;

    color: ${({ theme }) => theme.colors.purple500};
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

    h2 {
      font-size: 1.3rem;
    }
  }
`;
