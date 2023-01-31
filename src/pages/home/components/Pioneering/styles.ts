import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Wrapper } from '../../../../styles/global';

export const Container = styled(Wrapper)`
  display: flex;
  gap: 15%;

  margin-block: 250px;

  @media (max-width: 750px) {
    flex-wrap: wrap;
    margin-bottom: 100px;
  }
`;

export const ContentPioneering = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px;

  & > img {
    width: 40%;
    height: auto;
    box-shadow: 0 0 20px 3px #00c8dbb8;
    border-radius: 5px;
  }

  @media (max-width: 990px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    & > img {
      width: 70%;
    }
  }

  @media (max-width: 750px) {
    flex: initial;
    width: 100%;

    display: flex;
    justify-content: flex-start;
    gap: 60px;

    margin-top: 50px;

    & > img {
      width: 100%;
      max-width: 322px;
    }
  }
`;

export const ContainerSliderTexts = styled.div`
  flex: 1;
  height: 350px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  overflow: hidden;

  @media (max-width: 1070px) {
    height: 100%;
  }

  @media (max-width: 990px) {
    flex: initial;
    width: 100%;
    height: 360px;
  }

  @media (max-width: 610px) {
    flex: initial;
    width: 100%;
  }
`;

export const BoxTexts = styled(motion.div)`
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

export const SliderFooter = styled.div`
  width: 100%;
  max-width: 287px;

  display: flex;
  justify-content: space-between;
  align-items: center;
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
    opacity: 0.5;
    cursor: initial;
  }
`;

export const AmountTexts = styled.div`
  font-family: ${({ theme }) => theme.fonts.cabinetGrotesk.regular};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white200};
`;
