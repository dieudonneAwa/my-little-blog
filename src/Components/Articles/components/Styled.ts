import styled, { css } from 'styled-components';
import { DefaultTheme } from '../../../Theme';
import { Box } from '../../Commons/Box';

export const cardAnimations = css`
  -webkit-animation-duration: 0.7s;
  animation-duration: 0.7s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-name: slideInUp;
  animation-name: slideInUp;

  @keyframes slideInUp {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }
`;
export const StyledArticle = styled(Box)<{ idnumber: number }>`
  ${cardAnimations}
  animation-delay: ${(p) => p.idnumber}s;
  
  &:hover {
    cursor: pointer;
  }
`;

export const ArticleHeading = styled.h2<{ theme: DefaultTheme }>`
  font-weight: 500;
  font-size: ${(p) => p.theme.font.size.large};
  margin-bottom: 1rem;

  &:hover {
    color: ${(p) => p.theme.colors.emerald};
    cursor: pointer;
    transition: all 0.5s cubic-bezier(0, 0, 0.2, 1);
  }
  &:not(:hover) {
    color: ${(p) => p.theme.colors.spacecadet};
    transition: all 0.5s cubic-bezier(0, 0, 0.2, 1);
  }
`;

export const ArticleFooter = styled.small`
  font-size: ${(p) => p.theme.font.size.small};
`;
