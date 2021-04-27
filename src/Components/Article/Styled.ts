import styled from 'styled-components';

export const ArticleHeading = styled.h1`
  font-size: ${(p) => p.theme.font.size.big};
  font-weight: 500;
  line-height: 1.3;
  margin-bottom: 1rem;
`;

export const BackButton = styled.span`
  position: fixed;
  left: 3rem;
  top: 3rem;
  font-size: ${(p) => p.theme.font.size.small};
  cursor: pointer;

  &:hover {
    color: ${(p) => p.theme.colors.emerald};
    svg path {
      fill: ${(p) => p.theme.colors.emerald};
    }
  }
`;

export const CommentName = styled.strong`
  font-size: ${(p) => p.theme.font.size.small};
  font-weight: 500;
`;
export const CommentTime = styled.p`
  font-size: calc(${(p) => p.theme.font.size.small} - 0.2rem);
  font-weight: 300;
  margin-top: -0.5rem;
`;
