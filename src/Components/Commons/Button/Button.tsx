/* eslint-disable react/forbid-prop-types */
import React from "react";
import { StyledButton } from "./Styled";
import { Spinner } from "../Spinner";
import { SpaceProps } from "styled-system";

export type Props = SpaceProps & {
  /** Defines color of the button based on theme */
  color?: "emerald" | "spacecadet" | "blueviolet" | "default";

  /** This is the content of the button. Detault: 'Button' */
  children?: string | Node;

  /** The size of the button. Default: 'small' */
  size?: "small" | "medium" | "large";

  /** Shows a loading button. Default: false */
  loading?: boolean;

  /** Shape of the button through absolute radii */
  shape?: "rounded" | "pill" | "square";

  /** onClickHandler */
  onClick?: (e?: any) => void;

  m?: string;
};

const Button = ({
  color = "emerald",
  children = "button",
  onClick,
  size = "small",
  shape = "rounded",
  loading = false,
  ...rest
}: Props) => {
  const content = loading ? (
    <>
      {children}
      <Spinner ml="small" color="l001" size="0.6rem" />
    </>
  ) : (
    children
  );
  return (
    <StyledButton
      type="button"
      color={color}
      size={size}
      shape={shape}
      onClick={onClick}
      m="0.2rem"
      {...rest}
    >
      {content}
    </StyledButton>
  );
};

export default Button;
