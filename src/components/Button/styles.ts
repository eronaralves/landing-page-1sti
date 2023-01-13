import styled from 'styled-components';

export const Button = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 5px;

  padding: 20px 24px;
  transition: linear all 0.3s;

  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.white};

  span {
    font-family: ${({ theme }) => theme.fonts.cabinetGrotesk.medium};
    font-size: 17px;

    color: ${({ theme }) => theme.colors.gray800};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.green800};

    span {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
