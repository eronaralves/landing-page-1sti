import Link from 'next/link';
import styled from 'styled-components';

export const Button = styled(Link)`
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 5px;

  padding: 20px 24px;
  transition: linear all 0.3s;

  font-family: ${({ theme }) => theme.fonts.cabinetGrotesk.medium};
  font-size: 17px;

  color: ${({ theme }) => theme.colors.gray800};

  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.green800};
    color: ${({ theme }) => theme.colors.white};
  }
`;
