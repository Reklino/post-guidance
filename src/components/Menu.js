import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import tokens from "../styles/tokens";
import Stack from "./Stack";

export default function Menu({ children }) {
  return (
    <Stack
      gap={0}
      customCss={css`
        position: relative;
        border-radius: ${tokens.radius.live.sm}px;
        background-color: var(--neutral-background);
        border: 1px solid var(--border-weak);
        box-shadow: var(--elevation-sm);
        padding: ${tokens.spacer.live.xs}px 0;
        justify-items: stretch;
      `}
    >
      {children}
    </Stack>
  );
}
