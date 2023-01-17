import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #__next {
    width: 100%;
    height: 100%;
  }

  .main {
    padding-top: 93px;
  }
  
  body {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.green800};
    -webkit-font-smoothing: 'antialiased';
  }

  body, input, textarea, button {
    font-size: 1rem;
  }

  a {
    text-decoration: none;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1367px;
  margin: 0 auto;

  padding-inline: 73px;

  @media (max-width: 820px) {
    padding-inline: 50px;
  }

  @media (max-width: 750px) {
    padding-inline: 30px;
  }

  @media (max-width: 360px) {
    padding-inline: 20px;
  }
`;
