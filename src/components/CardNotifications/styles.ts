import styled from 'styled-components';
import { Wrapper } from '../../styles/global';

export const Container = styled(Wrapper)`
  display: flex;
  justify-content: center;
`;

export const ContainerCard = styled.div`
  width: 100%;
  max-width: 653px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-inline: 24px;
  padding-block: 105px;

  border: 2px solid rgb(0, 200, 219);
  box-shadow: rgb(0 200 219) 0px 0px 40px inset;

  h2 {
    font-family: ${({ theme }) => theme.fonts.goshaSans.bold};
    font-size: 2.875rem;
    color: ${({ theme }) => theme.colors.white};

    margin-bottom: 27px;
  }

  p {
    max-width: 460px;
    text-align: center;

    font-family: ${({ theme }) => theme.fonts.cabinetGrotesk.regular};
    font-size: 1.125rem;
    color: ${({ theme }) => theme.colors.white};

    margin-bottom: 27px;
  }

  @media (max-width: 520px) {
    padding-block: 70px;
  }

  @media (max-width: 400px) {
    padding-block: 40px;
    p {
      text-align: left;
    }
  }
`;
