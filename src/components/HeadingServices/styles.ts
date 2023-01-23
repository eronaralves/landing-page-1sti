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
`;
