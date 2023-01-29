import styled from 'styled-components';

// Components
import { Wrapper } from '../../styles/global';
import { HeadingServices } from '../../components/HeadingServices';
import { Card } from './components/Card';
import { Blog as BLogComponent } from '../../components/Blog';

export const Container = styled.div`
  margin-top: -93px;
  padding-top: 93px;

  background-color: #fff;
`;

export const Content = styled(Wrapper)`
  padding-block: 30px;
`;

export const Heading = styled(HeadingServices)`
  h1 {
    color: ${({ theme }) => theme.colors.gray800};
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 50px;

  margin-top: 200px;

  @media (max-width: 1040px) {
    display: flex;
    justify-content: center;

    margin-top: 54px;
  }
`;

const CardBase = styled(Card)`
  @media (max-width: 1040px) {
    height: 100%;
    flex: initial;

    display: flex;
    flex-direction: column-reverse;
    gap: 20px;

    padding: 0;

    img {
      width: 100%;
      height: auto;
      position: initial;

      transition: all linear 0.2s;
    }

    &:hover {
      border-radius: 0;

      img {
        border-radius: 250px;
      }
    }
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 1.75rem;
    }
  }
`;

export const CardIdeal = styled(CardBase)`
  span {
    color: ${({ theme }) => theme.colors.gray200};
  }

  h2 {
    width: 100%;
    max-width: 396px;
    color: ${({ theme }) => theme.colors.green800};
  }
`;

export const CardDeepTech = styled(CardBase)`
  width: 100%;
  color: #fff;

  h2 {
    width: 100%;
    max-width: 396px;
  }

  @media (max-width: 1040px) {
    background-color: transparent;

    span {
      color: ${({ theme }) => theme.colors.gray200};
    }

    h2 {
      color: ${({ theme }) => theme.colors.green800};
    }

    img {
      background-color: #742698;
      padding-block: 40px;
    }
  }
`;

export const ContainerBlogs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 70px 40px;

  margin-top: 78px;
`;

export const Blog = styled(BLogComponent)`
  flex: 1;

  .box-image-blog img {
    width: 293px;
  }

  @media (max-width: 1130px) {
    width: 100%;
    max-width: 280px;
    flex-wrap: wrap;
    div {
      width: 100%;
    }
  }

  @media (max-width: 450px) {
    width: 100%;
    flex: initial;
    text-align: center;

    p {
      font-size: 28px;
      letter-spacing: 0;
    }

    img {
      width: 100%;
      height: auto;
    }
  }
`;

export const LoadMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;
  margin-top: 28px;

  border: 1px solid ${({ theme }) => theme.colors.purple700};
  border-radius: 5px;
  cursor: pointer;
  transition: all linear 0.2s;

  span {
    font-family: ${({ theme }) => theme.fonts.cabinetGrotesk.medium};
    font-size: 1.0625rem;
    letter-spacing: 0.17px;

    color: ${({ theme }) => theme.colors.green800};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.purple700};

    span {
      color: ${({ theme }) => theme.colors.white200};
    }
  }
`;
