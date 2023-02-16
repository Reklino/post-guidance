import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import tokens from "../styles/tokens";

function Spread({
  children,
  gap = tokens.spacer.live.xs,
  items = 2,
  justify = "start",
  customCss,
  onClick,
  align = "center",
  alignSelf = "auto",
  justifySelf = "auto",
  padding = 0,
  columns = `repeat(${items}, auto)`,
  rowGap = 0,
}) {
  return (
    <div
      onClick={onClick}
      css={css`
        display: grid;
        grid-template-columns: ${columns};
        column-gap: ${gap}px;
        row-gap: ${rowGap}px;
        align-items: ${align};
        justify-items: ${justify};
        align-self: ${alignSelf};
        justify-self: ${justifySelf};
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

export default Spread;
