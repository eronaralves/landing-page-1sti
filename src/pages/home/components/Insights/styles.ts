import styled from 'styled-components';

import { Swiper } from 'swiper/react';
import { Wrapper } from '../../../../styles/global';

export const Container = styled(Wrapper)`
  margin-top: 240px;

  display: flex;
  gap: 27px;

  @media (max-width: 700px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const BoxSlider = styled.div`
  flex: 1;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  img {
    width: 100%;
    height: auto;
  }

  span {
    font-family: ${({ theme }) => theme.fonts.cabinetGrotesk.bold};
    font-size: 0.875rem;
    text-transform: uppercase;

    color: ${({ theme }) => theme.colors.gray500};
  }

  h2 {
    max-width: 294px;

    font-family: ${({ theme }) => theme.fonts.goshaSans.bold};
    font-size: 1.75rem;

    color: ${({ theme }) => theme.colors.white};
  }
`;

export const SwiperContainer = styled(Swiper)`
  width: 100%;
  margin-top: 55px;

  @media (max-width: 600px) {
    .next {
      background: transparent
        linear-gradient(180deg, #0b161700 0%, #0b1617cf 100%) 0% 0% no-repeat
        padding-box;
      opacity: 0.5;
    }
  }
`;
