import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Flex from "./Flex";
import Type from "./Type";
import tokens from "../styles/tokens";
import Stack from "./Stack";
import icons from "../icons";
import mixins from "../styles/mixins";

export default function ListItem({
  customCss,
  label,
  description,
  icon = false,
  image = false,
  selected,
  onClick,
  truncateAfter = 2,
  leadingElement = false,
}) {
  return (
    <Flex
      onClick={onClick}
      padding={[tokens.spacer.live.sm, tokens.spacer.live.md]}
      gap={tokens.spacer.live.md}
      align="center"
      customCss={css`
        ${customCss}
        min-width: 240px;
        ${mixins.DefaultButtonStyle}
        ${mixins.buttonStyles.ListItem(selected)}
      `}
    >
      {icon !== false ? (
        <div
          css={css`
            margin: 0 -2px;
            display: flex;
            ${icon.includes("Overflow") &&
            css`
              svg path {
                stroke: var(--secondary-on-background);
              }
            `}
          `}
        >
          {selected ? icons[`${icon}Fill`] : icons[icon]}
        </div>
      ) : null}
      {leadingElement && leadingElement()}
      {image !== false && (
        <div
          css={css`
            background-color: white;
            background-image: url(${image});
            background-size: cover;
            background-position: center;
            width: ${tokens.size.live.xl}px;
            height: ${tokens.size.live.xl}px;
            margin: 0 -3px;
            border-radius: 100%;
          `}
        />
      )}
      <Stack gap={0}>
        <Type
          fontStyle="BodyReg16"
          color="var(--neutral-content-strong)"
          truncateAfter={truncateAfter}
          align="left"
        >
          {label}
        </Type>
        {!!description && (
          <Type
            fontStyle="BodyReg12"
            truncateAfter={truncateAfter}
            align="left"
            customCss={css`
              max-width: ${selected ? 200 : 230}px;
            `}
          >
            {description}
          </Type>
        )}
      </Stack>
      {selected && (
        <div
          css={css`
            margin-left: auto;
            display: flex;
          `}
        >
          {icons.IconCheckmark}
        </div>
      )}
    </Flex>
  );
}
