import styled from 'styled-components';

// Components
import { Wrapper } from '../../styles/global';

export const Container = styled(Wrapper)`
  width: 100%;
  margin-block: 21px 70px;

  h1 {
    font-family: ${({ theme }) => theme.fonts.goshaSans.bold};
    font-size: 4rem;
  }

  @media (max-width: 500px) {
    padding-inline: 50px;

    h1 {
      font-size: 3.375rem;
    }
  }

  @media (max-width: 370px) {
    padding-inline: 20px;
  }
`;

export const Content = styled.div`
  margin-top: 84px;
  padding-left: 100px;

  .description-deep-tech {
    width: 100%;
    max-width: 705px;

    font-family: ${({ theme }) => theme.fonts.cabinetGrotesk.regular};
    font-size: 1.75rem;
  }

  @media (max-width: 850px) {
    padding-left: 0px;
    margin-top: 50px;
  }

  @media (max-width: 500px) {
    .description-deep-tech {
      font-size: 1.375rem;
    }
  }
`;

export const SectionDeepTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 100px;

  margin-top: 88px;
`;

const BaseHeading = styled.div`
  h3 {
    font-family: ${({ theme }) => theme.fonts.cabinetGrotesk.extrabold};
    font-size: 1.25rem;

    margin-bottom: 20px;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.cabinetGrotesk.regular};
    font-size: 1.25rem;
    line-height: 32px;

    margin-bottom: 20px;
  }
`;

export const HeadingBook = styled(BaseHeading)`
  width: 100%;
  max-width: 298px;
  img {
    width: 100%;
    height: auto;
    margin-top: 30px;

    box-shadow: 0 0 20px 3px #00c8dbb8;
    border-radius: 5px;
  }
`;

export const SiteDeepTech = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  a {
    font-family: ${({ theme }) => theme.fonts.cabinetGrotesk.regular};
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.blue100};
  }

  & svg:nth-last-child(1) {
    display: none;
  }

  &:hover {
    & svg:nth-last-child(1) {
      display: block;
    }
  }

  @media (max-width: 500px) {
    a {
      font-family: ${({ theme }) => theme.fonts.cabinetGrotesk.extrabold};
    }

    & svg:nth-last-child(1) {
      display: block;
    }
  }
`;

export const HeadingNewsletter = styled(BaseHeading)`
  width: 100%;
  max-width: 293px;
`;

export const HeadingCarrer = styled(BaseHeading)`
  flex: 1;
  width: 100%;
  max-width: 293px;
`;
