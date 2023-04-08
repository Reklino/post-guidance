import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import tokens from "../styles/tokens";

export default function Divider({ inset = false, verticalPadding = "md" }) {
  return (
    <hr
      css={css`
        height: 1px;
        background-color: var(--border-weak);
        border: none;
        width: ${inset
          ? `calc(100% - ${tokens.spacer.live.md * 2}px)`
          : "100%"};
        margin: ${tokens.spacer.live[verticalPadding]}px
          ${inset ? `${tokens.spacer.live.md}px` : 0};
      `}
    />
  );
}
