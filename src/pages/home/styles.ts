import styled from 'styled-components';
import { Wrapper } from '../../styles/global';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 100px;
`;

export const VideoContainer = styled.div`
  width: 100%;
  max-height: calc(100vh - 74px);
  overflow: hidden;
  position: absolute;

  &::after {
    content: '';
    display: block;
    pointer-events: none;
    background: linear-gradient(rgba(11, 22, 23, 0) 0%, rgb(11, 22, 23) 100%) 0%
      0% no-repeat padding-box padding-box transparent;
    width: 100%;
    height: 239px;
    position: absolute;
    bottom: 0;
  }

  @media (max-width: 630px) {
    max-height: 100%;
    position: relative;
  }
`;

export const Video = styled.video`
  width: 100%;
`;

export const ContentHero = styled(Wrapper)`
  height: calc(100vh - 74px);

  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: transparent;

  position: relative;

  h2 {
    font-family: ${({ theme }) => theme.fonts.goshaSans.bold};
    font-size: 2.125rem;
    margin-bottom: 30px;
  }

  hr {
    width: 25px;
    height: 5px;
    border: 0;
    margin-bottom: 20px;

    background-color: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: 630px) {
    height: auto;

    display: flex;
    justify-content: center;

    h2,
    hr {
      display: none;
    }
  }
`;

export const Title = styled.h1`
  width: 100%;
  max-width: 600px;
  margin-bottom: 30px;

  color: ${({ theme }) => theme.colors.white};

  font-family: ${({ theme }) => theme.fonts.goshaSans.bold};
  font-size: 3.375rem;

  @media (max-width: 630px) {
    width: 100%;
    max-width: 400px;

    font-size: 2.8rem;

    br {
      display: none;
    }
  }

  @media (max-width: 425px) {
    font-size: 2.3rem;
  }
`;

export const ParagraphExplication = styled.p`
  width: 100%;
  max-width: 400px;

  font-family: ${({ theme }) => theme.fonts.cabinetGrotesk.bold};
  font-size: 1.25rem;
  line-height: 32px;

  margin-bottom: 30px;

  @media (max-width: 630px) {
    font-family: ${({ theme }) => theme.fonts.cabinetGrotesk.medium};
  }

  @media (max-width: 380px) {
    font-size: 1.1rem;
    line-height: 28px;
  }
`;

export const BoxButtons = styled.div`
  display: flex;
  gap: 1.875rem;

  @media (max-width: 450px) {
    gap: 0.5rem;
  }
`;

export const BaseButton = styled.button`
  border-radius: 5px;
  border: 1px solid #ffffff;

  display: flex;
  align-items: center;

  font-family: ${({ theme }) => theme.fonts.cabinetGrotesk.medium};
  font-size: 1rem;

  cursor: pointer;

  span {
    font-family: ${({ theme }) => theme.fonts.cabinetGrotesk.medium};
    font-size: 17px;
  }

  @media (max-width: 450px) {
    height: 60px;
    padding: 12px 10px;
  }
`;

export const ButtonDeepTech = styled(BaseButton)`
  gap: 0.5rem;
  padding: 18px 14px;

  transition: linear all 0.2s;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray800};

  &:hover {
    background-color: transparent;

    color: ${({ theme }) => theme.colors.white};

    path {
      stroke: #fff;
    }
  }

  @media (max-width: 450px) {
    svg {
      width: 60px;
      height: 40px;
    }

    span {
      max-width: 100px;
      text-align: left;
    }
  }
`;

export const ButtonCLient = styled(BaseButton)`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 18px 24px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  transition: linear all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.gray800};
  }

  @media (max-width: 450px) {
    span {
      text-align: center;
    }
  }
`;
