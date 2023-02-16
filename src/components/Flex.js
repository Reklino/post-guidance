import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function Flex({
  justify,
  flexDirection = "row",
  align,
  gap = 0,
  children,
  customCss,
  padding = 0,
  onClick,
  className,
}) {
  return (
    <div
      className={className}
      onClick={onClick}
      css={css`
        display: flex;
        justify-content: ${justify};
        align-items: ${align};
        flex-direction: ${flexDirection};
        gap: ${gap}px;
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
