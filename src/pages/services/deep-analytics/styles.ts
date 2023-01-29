import styled from 'styled-components';

// Components
import { LayoutHeroServices } from '../../../components/LayoutHeroServices';

export const Container = styled.div``;

export const Hero = styled(LayoutHeroServices)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  overflow: hidden;

  .heading-container {
    position: relative;
  }

  .heading h1 {
    width: 100%;
    max-width: 312px;
  }

  .heading p {
    width: 100%;
    max-width: 445px;
  }

  .description {
    width: 100%;
    max-width: 470px;
  }

  .box-image img {
    width: 45%;
    height: auto;

    position: absolute;
    right: 0;
    top: 0;

    margin-top: 100px;
  }

  @media (max-width: 950px) {
    .box-image img {
      width: 100%;
      margin-top: 20px;

      position: initial;
    }
  }

  @media (max-width: 400px) {
    .box-image img {
      width: 441px;
      margin-right: -200px;
    }
  }

  @media (max-width: 340px) {
    .box-image img {
      width: 400px;
    }
  }
`;
