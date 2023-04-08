import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import tokens from "../styles/tokens";
import mixins from "../styles/mixins";

export default function Badge({ type, count, customCss }) {
  return (
    <div
      css={css`
        position: relative;
        min-width: ${tokens.size.live[count ? "md" : "xs"]}px;
        height: ${tokens.size.live[count ? "md" : "xs"]}px;
        padding: 0 ${tokens.size.live["2xs"]}px;
        border-radius: ${tokens.size.live[count ? "md" : "xs"]}px;
        background-color: var(--brand-background);
        text-align: center;
        line-height: 15px;
        letter-spacing: 0.2px;
        ${mixins.fontStyles.BodySemi10}
        font-weight: bold;
        color: var(--primary-on-background);
        ${customCss}
      `}
    >
      {count && count}
    </div>
  );
}
