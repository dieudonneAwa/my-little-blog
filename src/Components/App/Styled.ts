import styled from 'styled-components';

export const AppHeading = styled.h1`
  font-size: ${(p) => p.theme.font.size.big};
  font-weight: bold;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

export const ThemeToggler = styled.span`
  position: absolute;
  top: 3rem;
  right: 3rem;
  cursor: pointer;

  &:hover {
    transition: linear 0.5s stroke;
    svg path {
      stroke: ${(p) => p.theme.colors.emerald};
    }
  }
`;
