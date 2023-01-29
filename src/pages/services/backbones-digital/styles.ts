import styled from 'styled-components';

// Components
import { LayoutHeroServices } from '../../../components/LayoutHeroServices';

export const Container = styled.div`
  position: relative;
  overflow: hidden;
`;

export const Hero = styled(LayoutHeroServices)`
  .heading {
    h1 {
      width: 100%;
      max-width: 326px;
    }

    p {
      width: 100%;
      max-width: 340px;
    }
  }

  .description {
    width: 100%;
    max-width: 500px;
  }

  .box-image img {
    width: 1500px;
    height: auto;

    position: absolute;
    right: -250px;
    top: -170px;
    z-index: -1;
  }

  @media (max-width: 950px) {
    .box-image img {
      width: 1100px;
    }
  }

  @media (max-width: 750px) {
    margin-bottom: 16px;

    .box-image img {
      width: 100%;
      height: auto;
      position: initial;
    }
  }

  @media (max-width: 400px) {
    .box-image img {
      width: 120%;
      margin-left: -23px;
    }
  }
`;
