import styled from 'styled-components';

// Components
import { LayoutHeroServices } from '../../../components/LayoutHeroServices';

export const Container = styled.div``;

export const Hero = styled(LayoutHeroServices)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-bottom: 200px;

  .heading-container {
    position: relative;
  }

  .heading h1 {
    width: 100%;
    max-width: 395px;
  }

  .heading p {
    width: 100%;
    max-width: 524px;
  }

  .description {
    width: 100%;
    max-width: 470px;
  }

  .box-image .image-web {
    width: 42%;
    height: auto;

    position: absolute;
    right: 0;
    top: 0;

    margin-top: 100px;
  }

  @media (max-width: 975px) {
    .box-image .image-web {
      width: 90%;
      height: auto;
      margin-top: 20px;

      position: initial;
    }
  }

  @media (max-width: 425px) {
    padding-bottom: 50px;

    .image-web {
      display: none;
    }

    .image-mob {
      width: 100%;
      height: auto;

      margin-block: 50px;
    }
  }
`;
