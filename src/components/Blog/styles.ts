import styled from 'styled-components';

export const ContainerBlog = styled.div`
  display: flex;
  gap: 16px;

  cursor: pointer;

  span {
    font-family: ${({ theme }) => theme.fonts.cabinetGrotesk.bold};
    font-size: 0.875rem;
    letter-spacing: 1.4px;
    text-transform: uppercase;

    color: ${({ theme }) => theme.colors.gray200};
  }

  p {
    font-family: ${({ theme }) => theme.fonts.goshaSans.bold};
    font-size: 1.75rem;

    color: ${({ theme }) => theme.colors.green800};
  }
`;
