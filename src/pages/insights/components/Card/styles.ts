import styled from 'styled-components';

// interfaces
interface ContainerCardProps {
  backgroundCard?: string;
  positionImage?: string;
}

export const ContainerCard = styled.div<ContainerCardProps>`
  width: 100%;
  max-width: 550px;
  flex: 1;
  height: 520px;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-block: 60px;
  padding-inline: 30px;

  transition: all linear 0.2s;

  background-color: ${(props) => props.backgroundCard};
  overflow: hidden;

  &:hover {
    border-radius: 301px;
  }

  img {
    z-index: 1;
    width: ${(props) => props.positionImage && '100%'};
    height: ${(props) => props.positionImage && '100%'};
    position: ${(props) => props.positionImage};
    inset: 0;
  }

  @media (max-width: 1200px) {
    height: 450px;
  }
`;

export const Heading = styled.div`
  text-align: center;
  z-index: 4;
  margin-bottom: 30px;

  span {
    font-family: ${({ theme }) => theme.fonts.cabinetGrotesk.bold};
    font-size: 0.875rem;

    letter-spacing: 1.4px;
    text-transform: uppercase;
  }

  h2 {
    font-family: ${({ theme }) => theme.fonts.goshaSans.bold};
    font-size: 2.375rem;
  }
`;
