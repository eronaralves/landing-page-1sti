import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    color: ${({ theme }) => theme.colors.white};
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
  max-width: 1227px;
  height: 100%;
`;
