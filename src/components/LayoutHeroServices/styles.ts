import styled from 'styled-components';
import { Wrapper } from '../../styles/global';

// Components
import { HeadingServices } from '../HeadingServices';

export const Container = styled(Wrapper)`
  width: 100%;
  padding-block: 20px 150px;

  .description {
    max-width: 500px;
    font-size: 1.125rem;
    font-family: ${({ theme }) => theme.fonts.cabinetGrotesk.regular};
  }
`;

export const ContainerHeading = styled.div`
  margin-bottom: 120px;

  img {
    width: 1500px;
    height: auto;

    position: absolute;
    right: -250px;
    top: -170px;
    z-index: -1;
  }

  @media (max-width: 950px) {
    img {
      width: 1100px;
    }
  }

  @media (max-width: 750px) {
    margin-bottom: 16px;

    .box-image {
      width: 100%;
      height: 300px;
      position: relative;
    }

    img {
      width: 100%;
      position: absolute;
      top: 0;
      right: 0;
    }
  }
`;

export const Heading = styled(HeadingServices)`
  h1 {
    width: 100%;
    max-width: 300px;
  }

  p {
    width: 100%;
    max-width: 350px;
  }
`;
