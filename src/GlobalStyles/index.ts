import { createGlobalStyle } from "styled-components";
import { DefaultTheme } from "../Theme";

export const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${(p) => p.theme.font.family.poppins};
    font-size: ${(p) => p.theme.font.size.medium};
    background: ${(p) => p.theme.colors.lightgrey};
    color: ${(p) => p.theme.colors.spacecadet};
    padding: 0;
    overflow-x: hidden;
    line-height: 28px;
    -webkit-font-smoothing: antialiased;
  }
`;
