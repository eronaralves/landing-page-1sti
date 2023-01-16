import Link from 'next/link';
import styled from 'styled-components';

export const BoxInformations = styled(Link)`
  width: 100%;
  max-width: 250px;

  color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.h2`
  width: 100%;
  max-width: 250px;

  font-family: ${({ theme }) => theme.fonts.goshaSans.bold};
  font-size: 2.875rem;
  margin-bottom: 28px;
`;

export const Paragraph = styled.p`
  width: 100%;
  max-width: 280px;

  font-family: ${({ theme }) => theme.fonts.cabinetGrotesk.medium};
  font-size: 1.125rem;

  margin-bottom: 18px;
`;
