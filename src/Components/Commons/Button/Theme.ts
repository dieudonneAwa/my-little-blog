import { css } from "styled-components";
import { darken, lighten, transparentize } from "polished";
import { font, space } from "../../../Theme/typography";

// BASE
const buttonBase = css`
  font-weight: 500;
  transition: all 0.2s linear;
  min-width: fit-content;
  font-size: ${font.size.medium};

  &:hover {
    cursor: pointer;
    transform: scale(1);
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  &:not(:hover) {
    transform: scale(1);
    transition: all 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  @media (max-width: 767px) {
    padding: ${space.small};
  }
`;

// COLOR

const emerald = css`
  background: ${(p) => p.theme.colors.emerald};
  color: ${(p) => p.theme.colors.white};
  box-shadow: -1px -1px 8px ${(p) => transparentize(0.7, darken(0.2, p.theme.colors.emerald))};
  border: 1px solid ${(p) => p.theme.colors.emerald};

  &:hover {
    background: ${(p) => lighten(0.05, p.theme.colors.emerald)};
    box-shadow: 0px 0px 12px
      ${(p) => transparentize(0.7, darken(0.2, p.theme.colors.emerald))};
  }
`;

const spacecadet = css`
  border: 1px solid ${(p) => p.theme.colors.spacecadet};
  background: ${(p) => p.theme.colors.spacecadet};
  color: ${(p) => p.theme.colors.white};

  &:hover {
    background: ${(p) => darken(0.05, p.theme.colors.spacecadet)};
    box-shadow: 0px 0px 12px
      ${(p) => transparentize(0.7, darken(0.2, p.theme.colors.spacecadet))};
  }
`;

const blueviolet = css`
  border: 1px solid ${(p) => p.theme.colors.blueviolet};
  background: ${(p) => p.theme.colors.blueviolet};
  color: ${(p) => p.theme.colors.white};

  &:hover {
    background: ${(p) => darken(0.05, p.theme.colors.blueviolet)};
    box-shadow: 0px 0px 12px
      ${(p) => transparentize(0.7, darken(0.2, p.theme.colors.blueviolet))};
  }
`;

const defaultcolor = css``;

const buttonColor: any = {
  emerald,
  spacecadet,
  default: defaultcolor,
  blueviolet,
};

// SIZE

const small = css`
  font-size: ${font.size.medium};
  padding: ${space.tiny} ${space.medium};
  border-radius: ${(p) => p.theme.radii.small};
`;

const medium = css`
  font-size: ${font.size.medium};
  padding: ${space.small} ${space.large};
  border-radius: ${(p) => p.theme.radii.small};
`;

const large = css`
  font-size: ${font.size.large};
  padding: ${space.medium} ${space.large};
  border-radius: ${(p) => p.theme.radii.medium};
`;

const buttonSize: any = {
  small,
  medium,
  large,
};

// SHAPE
const rounded = css``;

const square = css`
  border-radius: 0;
`;
const pill = css`
  border-radius: 50px;
`;

const buttonShape: any = {
  rounded,
  square,
  pill,
};

export { buttonBase, buttonColor, buttonSize, buttonShape };
