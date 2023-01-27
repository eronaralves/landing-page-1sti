import styled from 'styled-components';

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 38px;

  h1 {
    font-family: ${({ theme }) => theme.fonts.goshaSans.bold};
    font-size: 4rem;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.cabinetGrotesk.bold};
    font-size: 1.875rem;
    color: ${({ theme }) => theme.colors.blue100};
  }

  @media (max-width: 1090px) {
    p {
      font-size: 1.7rem;
    }
  }

  @media (max-width: 700px) {
    display: flex;
    gap: 8px;
    h1 {
      font-size: 3.375rem;
    }

    p {
      font-size: 1.375rem;
      line-height: 26px;
    }
  }

  @media (max-width: 360px) {
    p {
      font-size: 1.25rem;
    }
  }
`;
