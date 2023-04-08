/* eslint-disable react/display-name */
import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import tokens from "../styles/tokens";
import Flex from "./Flex";
import icons from "../icons";

export default function IconContainer({ icon, size = "Large" }) {
  function getSize() {
    switch (size) {
      case "Large":
        return 20;

      case "Medium":
        return 20;

      case "Small":
        return 16;

      default:
        return tokens.size.live.xl;
    }
  }
  return (
    <Flex
      align="center"
      justify="center"
      customCss={css`
        width: ${tokens.size.live.xl}px;
        height: ${tokens.size.live.xl}px;
        svg {
          width: ${getSize()}px;
          height: ${getSize()}px;
          path {
            fill: var(--secondary-on-background) !important;
          }
        }
        ${icon.includes("Overflow") &&
        css`
          svg path {
            stroke: var(--secondary-on-background);
          }
        `}
        ${icon.includes("Close") &&
        css`
          svg {
            transform: scale(0.85);
          }
        `}
      `}
    >
      {icons[icon]}
    </Flex>
  );
}
