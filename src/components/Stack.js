import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import tokens from "../styles/tokens";

function Stack({
  children,
  gap = tokens.spacer.live.xs,
  customCss,
  justify = "start",
  align = "start",
  onClick,
  padding = 0,
  alignSelf = false,
  justifySelf = false,
}) {
  return (
    <div
      onClick={onClick}
      css={css`
        display: grid;
        row-gap: ${gap}px;
        align-items: ${align};
        justify-items: ${justify};
        ${alignSelf &&
        css`
          align-self: ${alignSelf};
        `}
        ${justifySelf &&
        css`
          justify-self: ${justifySelf};
        `}
        padding: ${Array.isArray(padding)
          ? padding.length === 2
            ? `${padding[0]}px ${padding[1]}px`
            : `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`
          : `${padding}px`};
        ${customCss}
      `}
    >
      {children}
    </div>
  );
}

export default Stack;
