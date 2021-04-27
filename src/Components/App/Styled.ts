import styled from 'styled-components';
import { position, PositionProps, space, SpaceProps } from 'styled-system';

export const AppHeading = styled.h1<SpaceProps>`
  font-size: ${(p) => p.theme.font.size.big};
  font-weight: bold;
  margin-top: 3rem;
  margin-bottom: 3rem;
  ${space}

  @media (max-width: 414px) {
    font-size: ${(p) => p.theme.font.size.large};
    font-weight: 600;
  }
`;

export const ThemeToggler = styled.span<PositionProps>`
  cursor: pointer;
  ${position}

  &:hover {
    transition: linear 0.5s stroke;
    svg path {
      stroke: ${(p) => p.theme.colors.emerald};
    }
  }
`;
