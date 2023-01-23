import styled from 'styled-components';

export const BoxInformations = styled.div`
  width: 100%;
  max-width: 250px;

  color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.goshaSans.bold};
  font-size: 2.875rem;
  margin-bottom: 28px;
`;

export const Paragraph = styled.p`
  font-family: ${({ theme }) => theme.fonts.cabinetGrotesk.regular};
  font-size: 1.125rem;

  margin-bottom: 36px;
`;
