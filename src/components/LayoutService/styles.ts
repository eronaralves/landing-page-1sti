import styled from 'styled-components';
import { Wrapper } from '../../styles/global';

export const Container = styled.div`
  padding-bottom: 50px;
`;

export const ContentContactUs = styled(Wrapper)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 5%;

  padding-block: 42px;
  border-top: 1px solid ${({ theme }) => theme.colors.purple700};

  p {
    width: 100%;
    max-width: 448px;
    font-family: ${({ theme }) => theme.fonts.goshaSans.regular};
    font-size: 1.875rem;
  }

  @media (max-width: 690px) {
    gap: 20px;
  }

  @media (max-width: 676px) {
    text-align: center;
  }
`;

export const ContainerCards = styled.div`
  display: grid;
  gap: 1px;
  grid-template-columns: repeat(4, 24.9%);

  @media (max-width: 1150px) {
    grid-template-columns: repeat(2, 49.9%);
  }
`;
