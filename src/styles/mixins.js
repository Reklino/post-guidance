import { css } from "@emotion/react";
import tokens from "./tokens";

const DefaultFontFamily = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`;

const DefaultTextStyle = css`
  font-family: ${DefaultFontFamily};
  font-style: normal;
  color: var(--neutral-content);
`;

const DefaultHeadingStyle = css`
  font-family: ${DefaultFontFamily};
  font-style: normal;
  color: var(--neutral-content-strong);
`;

const HeadingReg = css`
  ${DefaultHeadingStyle};
  font-weight: 400;
`;
const HeadingBold = css`
  ${DefaultHeadingStyle};
  font-weight: 700;
`;

const BodyReg = css`
  ${DefaultTextStyle};
  font-weight: 400;
`;
const BodySemi = css`
  ${DefaultTextStyle};
  font-weight: 600;
`;

const fontStyles = {
  HeadingReg64: css`
    ${HeadingReg};
    font-size: ${tokens.font.beta[64].size}px;
    line-height: ${tokens.font.beta[64].lineHeight}px;
  `,
  HeadingReg48: css`
    ${HeadingReg};
    font-size: ${tokens.font.beta[48].size}px;
    line-height: ${tokens.font.beta[48].lineHeight}px;
  `,
  HeadingReg32: css`
    ${HeadingReg};
    font-size: ${tokens.font.beta[32].size}px;
    line-height: ${tokens.font.beta[32].lineHeight}px;
  `,
  HeadingReg24: css`
    ${HeadingReg};
    font-size: ${tokens.font.beta[24].size}px;
    line-height: ${tokens.font.beta[24].lineHeight}px;
  `,
  HeadingReg20: css`
    ${HeadingReg};
    font-size: ${tokens.font.beta[20].size}px;
    line-height: ${tokens.font.beta[20].lineHeight}px;
  `,
  HeadingReg18: css`
    ${HeadingReg};
    font-size: ${tokens.font.beta[18].size}px;
    line-height: ${tokens.font.beta[18].lineHeight}px;
  `,
  HeadingReg16: css`
    ${HeadingReg};
    font-size: ${tokens.font.beta[16].size}px;
    line-height: ${tokens.font.beta[16].lineHeight}px;
  `,
  HeadingReg14: css`
    ${HeadingReg};
    font-size: ${tokens.font.beta[14].size}px;
    line-height: ${tokens.font.beta[14].lineHeight}px;
  `,
  HeadingReg12: css`
    ${HeadingReg};
    font-size: ${tokens.font.beta[12].size}px;
    line-height: ${tokens.font.beta[12].lineHeight}px;
  `,
  HeadingBold64: css`
    ${HeadingBold};
    font-size: ${tokens.font.beta[64].size}px;
    line-height: ${tokens.font.beta[64].lineHeight}px;
  `,
  HeadingBold48: css`
    ${HeadingBold};
    font-size: ${tokens.font.beta[48].size}px;
    line-height: ${tokens.font.beta[48].lineHeight}px;
  `,
  HeadingBold32: css`
    ${HeadingBold};
    font-size: ${tokens.font.beta[32].size}px;
    line-height: ${tokens.font.beta[32].lineHeight}px;
  `,
  HeadingBold24: css`
    ${HeadingBold};
    font-size: ${tokens.font.beta[24].size}px;
    line-height: ${tokens.font.beta[24].lineHeight}px;
  `,
  HeadingBold18: css`
    ${HeadingBold};
    font-size: ${tokens.font.beta[18].size}px;
    line-height: ${tokens.font.beta[18].lineHeight}px;
  `,
  HeadingBold16: css`
    ${HeadingBold};
    font-size: ${tokens.font.beta[16].size}px;
    line-height: ${tokens.font.beta[16].lineHeight}px;
  `,
  HeadingBold14: css`
    ${HeadingBold};
    font-size: ${tokens.font.beta[14].size}px;
    line-height: ${tokens.font.beta[14].lineHeight}px;
  `,
  HeadingBold12: css`
    ${HeadingBold};
    font-size: ${tokens.font.beta[12].size}px;
    line-height: ${tokens.font.beta[12].lineHeight}px;
  `,
  BodyReg18: css`
    ${BodyReg};
    font-size: ${tokens.font.beta[18].size}px;
    line-height: ${tokens.font.beta[18].lineHeight}px;
  `,
  BodyReg16: css`
    ${BodyReg};
    font-size: ${tokens.font.beta[16].size}px;
    line-height: ${tokens.font.beta[16].lineHeight}px;
  `,
  BodyReg14: css`
    ${BodyReg};
    font-size: ${tokens.font.beta[14].size}px;
    line-height: ${tokens.font.beta[14].lineHeight}px;
  `,
  BodyReg12: css`
    ${BodyReg};
    font-size: ${tokens.font.beta[12].size}px;
    line-height: ${tokens.font.beta[12].lineHeight}px;
  `,
  BodyReg10: css`
    ${BodyReg};
    font-size: ${tokens.font.beta[10].size}px;
    line-height: ${tokens.font.beta[10].lineHeight}px;
  `,
  BodyReg18Uline: css`
    ${BodyReg};
    font-size: ${tokens.font.beta[18].size}px;
    line-height: ${tokens.font.beta[18].lineHeight}px;
    text-decoration: underline;
  `,
  BodyReg16Uline: css`
    ${BodyReg};
    font-size: ${tokens.font.beta[16].size}px;
    line-height: ${tokens.font.beta[16].lineHeight}px;
    text-decoration: underline;
  `,
  BodyReg14Uline: css`
    ${BodyReg};
    font-size: ${tokens.font.beta[14].size}px;
    line-height: ${tokens.font.beta[14].lineHeight}px;
    text-decoration: underline;
  `,
  BodyReg12Uline: css`
    ${BodyReg};
    font-size: ${tokens.font.beta[12].size}px;
    line-height: ${tokens.font.beta[12].lineHeight}px;
    text-decoration: underline;
  `,
  BodyReg10Uline: css`
    ${BodyReg};
    font-size: ${tokens.font.beta[10].size}px;
    line-height: ${tokens.font.beta[10].lineHeight}px;
    text-decoration: underline;
  `,
  BodySemi18: css`
    ${BodySemi};
    font-size: ${tokens.font.beta[18].size}px;
    line-height: ${tokens.font.beta[18].lineHeight}px;
  `,
  BodySemi16: css`
    ${BodySemi};
    font-size: ${tokens.font.beta[16].size}px;
    line-height: ${tokens.font.beta[16].lineHeight}px;
  `,
  BodySemi14: css`
    ${BodySemi};
    font-size: ${tokens.font.beta[14].size}px;
    line-height: ${tokens.font.beta[14].lineHeight}px;
  `,
  BodySemi12: css`
    ${BodySemi};
    font-size: ${tokens.font.beta[12].size}px;
    line-height: ${tokens.font.beta[12].lineHeight}px;
  `,
  BodySemi12CAPS: css`
    ${BodySemi};
    font-size: ${tokens.font.beta[12].size}px;
    line-height: ${tokens.font.beta[12].lineHeight}px;
    text-transform: uppercase;
  `,
  BodySemi10: css`
    ${BodySemi};
    font-size: ${tokens.font.beta[10].size}px;
    line-height: ${tokens.font.beta[10].lineHeight}px;
  `,
  BodySemi18Uline: css`
    ${BodySemi};
    font-size: ${tokens.font.beta[18].size}px;
    line-height: ${tokens.font.beta[18].lineHeight}px;
    text-decoration: underline;
  `,
  BodySemi16Uline: css`
    ${BodySemi};
    font-size: ${tokens.font.beta[16].size}px;
    line-height: ${tokens.font.beta[16].lineHeight}px;
    text-decoration: underline;
  `,
  BodySemi14Uline: css`
    ${BodySemi};
    font-size: ${tokens.font.beta[14].size}px;
    line-height: ${tokens.font.beta[14].lineHeight}px;
    text-decoration: underline;
  `,
  BodySemi12Uline: css`
    ${BodySemi};
    font-size: ${tokens.font.beta[12].size}px;
    line-height: ${tokens.font.beta[12].lineHeight}px;
    text-decoration: underline;
  `,
  BodySemi10Uline: css`
    ${BodySemi};
    font-size: ${tokens.font.beta[10].size}px;
    line-height: ${tokens.font.beta[10].lineHeight}px;
    text-decoration: underline;
  `,
  BodyTall18: css`
    ${BodyReg};
    font-size: ${tokens.font.beta[18].size}px;
    line-height: 32px;
  `,
  BodyTall16: css`
    ${BodyReg};
    font-size: ${tokens.font.beta[16].size}px;
    line-height: 32px;
  `,
  BodyTall14: css`
    ${BodyReg};
    font-size: ${tokens.font.beta[14].size}px;
    line-height: 32px;
  `,
  BodyTall12: css`
    ${BodyReg};
    font-size: ${tokens.font.beta[12].size}px;
    line-height: 32px;
  `,
  BodyTall10: css`
    ${BodyReg};
    font-size: ${tokens.font.beta[10].size}px;
    line-height: 32px;
  `,
  BodyTall18Uline: css`
    ${BodyReg};
    font-size: ${tokens.font.beta[18].size}px;
    line-height: 32px;
    text-decoration: underline;
  `,
  BodyTall16Uline: css`
    ${BodyReg};
    font-size: ${tokens.font.beta[16].size}px;
    line-height: 32px;
    text-decoration: underline;
  `,
  BodyTall14Uline: css`
    ${BodyReg};
    font-size: ${tokens.font.beta[14].size}px;
    line-height: 32px;
    text-decoration: underline;
  `,
  BodyTall12Uline: css`
    ${BodyReg};
    font-size: ${tokens.font.beta[12].size}px;
    line-height: 32px;
    text-decoration: underline;
  `,
  BodyTall10Uline: css`
    ${BodyReg};
    font-size: ${tokens.font.beta[10].size}px;
    line-height: 32px;
    text-decoration: underline;
  `,
};

const DefaultButtonStyle = css`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  border: none;
  border-radius: ${tokens.size.live["3xl"]}px;

  &:focus {
    outline: none;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    user-select: none;
    pointer-events: none;
  }
`;

const buttonStyles = {
  Primary: (selected = false) => css`
    ${DefaultButtonStyle};
    background-color: var(--primary-background);
    color: var(--primary-on-background);
    svg path {
      fill: var(--primary-on-background);
    }

    &:hover {
      background-color: var(--primary-background-hover);
    }

    &:active {
      &::before {
        background-color: var(--interactive-pressed);
      }
    }

    &:disabled {
      background-color: var(--neutral-content-disabled);
      color: var(--interactive-content-disabled);
    }
  `,
  Secondary: (selected = false) => css`
    ${DefaultButtonStyle};
    background-color: ${selected
      ? "var(--secondary-background-selected)"
      : "var(--secondary-background)"};
    color: var(--secondary-on-background);
    svg path {
      fill: var(--secondary-on-background);
      /* stroke: var(--secondary-on-background); */
    }

    &:hover {
      background-color: var(--secondary-background-hover);
    }

    &:active {
      &::before {
        background-color: var(--interactive-pressed);
      }
    }

    &:disabled {
      background-color: var(--neutral-content-disabled);
      color: var(--interactive-content-disabled);
    }
  `,
  Bordered: (selected = false) => css`
    ${DefaultButtonStyle};
    background-color: ${selected
      ? "var(--secondary-background-selected)"
      : "transparent"};
    color: var(--neutral-content-strong);
    border: 1px solid var(--border-medium);
    svg path {
      fill: var(--neutral-content-strong);
    }

    &:hover {
      border-color: var(--border-strong);
    }

    &:active {
      &::before {
        background-color: var(--interactive-pressed);
        border-color: var(--border-strong);
      }
    }

    &:disabled {
      border-color: var(--neutral-content-disabled);
      color: var(--interactive-content-disabled);
    }
  `,
  Plain: (selected = false) => css`
    ${DefaultButtonStyle};
    background-color: ${selected
      ? "var(--secondary-background-selected)"
      : "transparent"};
    color: var(--secondary-on-background);
    svg path {
      fill: var(--secondary-on-background);
    }

    &:hover {
      background-color: var(--neutral-background-hover);
    }

    &:active {
      &::before {
        background-color: var(--interactive-pressed);
      }
    }

    &:disabled {
      background-color: transparent;
      color: var(--interactive-content-disabled);
    }
  `,
  Subdued: (selected = false) => css`
    ${DefaultButtonStyle};
    background-color: ${selected
      ? "var(--secondary-background-selected)"
      : "transparent"};
    color: var(--secondary-plain-weak);
    svg path {
      fill: var(--secondary-plain-weak);
    }

    &:hover {
      background-color: var(--neutral-background-hover);
    }

    &:active {
      &::before {
        background-color: var(--interactive-pressed);
      }
    }

    &:disabled {
      background-color: transparent;
      color: var(--interactive-content-disabled);
    }
  `,
  ListItem: (selected = false) => css`
    ${DefaultButtonStyle};
    background-color: ${selected
      ? "var(--secondary-background-selected)"
      : "transparent"};
    color: var(--secondary-on-background);
    border-radius: 0px;
    svg path {
      fill: var(--secondary-on-background);
    }
    svg {
      width: 24px;
      height: 24px;
    }

    &:hover {
      background-color: var(--neutral-background-hover);
    }

    &:active {
      &::before {
        background-color: var(--interactive-pressed);
      }
    }

    &:disabled {
      background-color: transparent;
      color: var(--interactive-content-disabled);
    }
  `,
  NavItem: (selected = false) => css`
    ${DefaultButtonStyle};
    background-color: transparent;
    color: ${selected
      ? "var(--secondary-on-background)"
      : "var(--neutral-content-weak)"};
    font-weight: 400;
    svg path {
      fill: ${selected
        ? "var(--secondary-on-background)"
        : "var(--neutral-content-weak)"};
    }
    width: calc(100% + 12px);
    overflow: visible;
    margin-left: -12px;
    padding-left: 12px !important;
    border-radius: 0;
    gap: 8px !important;

    &:hover {
      background-color: var(--neutral-background-hover);
    }
    &::after {
      position: absolute;
      top: 0;
      left: 0px;
      content: "";
      display: block;
      height: 100%;
      width: 8px;
      border-radius: 0 4px 4px 0;
      background-color: ${selected ? "var(--brand-background)" : "none"};
    }

    &:active {
      &::before {
        background-color: var(--interactive-pressed);
      }
    }

    &:disabled {
      background-color: transparent;
      color: var(--interactive-content-disabled);
    }
  `,
};

const DefaultContainerStyle = css`
  display: flex;
  align-items: center;
  gap: ${tokens.spacer.live.xs}px;
`;

const constainerStyles = {
  "2XL": css`
    ${fontStyles.HeadingReg18};
    padding: 0 ${tokens.spacer.live.lg}px 0 ${tokens.spacer.live.md}px;
    height: ${tokens.size.live["3xl"]}px;
    svg {
      width: 26px;
      height: 26px;
    }
    ${DefaultContainerStyle}
    column-gap: ${tokens.spacer.live.sm}px;
  `,
  XL: css`
    ${fontStyles.HeadingReg18};
    padding: 0 ${tokens.spacer.live.lg}px 0 ${tokens.spacer.live.md}px;
    height: ${tokens.size.live["2xl"]}px;
    svg {
      width: 24px;
      height: 24px;
    }
    ${DefaultContainerStyle}
    column-gap: ${tokens.spacer.live.sm}px;
  `,
  Large: css`
    ${fontStyles.BodySemi14};
    padding: 0 ${tokens.spacer.live.md}px;
    height: ${tokens.size.live["2xl"]}px;
    ${DefaultContainerStyle}
  `,
  Medium: css`
    ${fontStyles.BodySemi14};
    padding: 0 ${tokens.spacer.live.sm}px;
    height: 40px;
    ${DefaultContainerStyle}
  `,
  Small: css`
    ${fontStyles.BodySemi12};
    padding: 0 ${tokens.spacer.live.xs}px 0 ${tokens.spacer.live.xs}px;
    height: ${tokens.size.live.xl}px;
    ${DefaultContainerStyle}
  `,
};

export default {
  fontStyles,
  buttonStyles,
  constainerStyles,
  DefaultTextStyle,
  DefaultButtonStyle,
};
