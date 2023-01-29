import styled from 'styled-components';
import { Wrapper } from '../../styles/global';

export const Container = styled(Wrapper)`
  width: 100%;
  padding-block: 20px 150px;

  .description {
    font-size: 1.125rem;
    font-family: ${({ theme }) => theme.fonts.cabinetGrotesk.regular};
  }
`;

export const ContainerHeading = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 120px;

  @media (max-width: 750px) {
    margin-bottom: 16px;
  }
`;
