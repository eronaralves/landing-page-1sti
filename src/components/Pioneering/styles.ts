import styled from 'styled-components';
import { Wrapper } from '../../styles/global';

export const Container = styled(Wrapper)`
  display: flex;
  gap: 5%;

  margin-top: 250px;

  @media (max-width: 750px) {
    flex-wrap: wrap;
  }
`;

export const ContentPioneering = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  & > img {
    width: 60%;
    margin-top: -55px;
  }

  @media (max-width: 990px) {
    display: flex;
    justify-content: center;

    & > img {
      width: 50%;
      margin-top: -55px;
    }
  }

  @media (max-width: 750px) {
    flex: initial;
    width: 100%;

    display: flex;
    justify-content: flex-start;

    & > img {
      width: 100%;
      max-width: 322px;
      margin-top: -30px;
    }
  }
`;

export const ModalTexts = styled.div`
  flex: 1;
  height: 350px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: 610px) {
    flex: initial;
    width: 100%;
  }
`;

export const BoxTextsModal = styled.div`
  width: 100%;
  max-width: 287px;

  display: flex;
  flex-direction: column;

  span {
    margin-top: 16px;
    color: ${({ theme }) => theme.colors.gray400};
  }
`;

export const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.cabinetGrotesk.regular};
  font-size: 1rem;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.white200};
`;

export const BoxButtonsArrows = styled.div`
  display: flex;
  gap: 16px;

  background-color: transparent;
  border: none;
`;

export const ButtonArrow = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;

  &:disabled {
    opacity: 0.7;
  }
`;
