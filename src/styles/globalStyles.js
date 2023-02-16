import { css } from "@emotion/react";
import mixins from "./mixins";
import tokens from "./tokens";

function getOpacityValue(opacity, color) {
  if (color === "black") {
    return `rgba(0,0,0,${opacity})`;
  }
  return `rgba(255,255,255,${opacity})`;
}

function getColorVars(mode = "light") {
  const base = mode === "light" ? "0,0,0" : "255,255,255";
  return css`
    --global-focus: ${tokens.color.live.global[
      tokens.color.beta[mode]["global-focus"]
    ]};
    --neutral-content: ${tokens.color.live.global[
      tokens.color.beta[mode]["neutral-content"]
    ]};
    --neutral-content-disabled: ${tokens.color.live.global[
      tokens.color.beta[mode]["neutral-content-disabled"]
    ]};
    --neutral-content-weak: ${tokens.color.live.global[
      tokens.color.beta[mode]["neutral-content-weak"]
    ]};
    --neutral-content-strong: ${tokens.color.live.global[
      tokens.color.beta[mode]["neutral-content-strong"]
    ]};
    --neutral-background: ${tokens.color.live.global[
      tokens.color.beta[mode]["neutral-background"]
    ]};
    --neutral-background-disabled: ${tokens.color.live.global[
      tokens.color.beta[mode]["neutral-background-disabled"]
    ]};
    --neutral-background-medium: ${tokens.color.live.global[
      tokens.color.beta[mode]["neutral-background-medium"]
    ]};
    --neutral-background-strong: ${tokens.color.live.global[
      tokens.color.beta[mode]["neutral-background-strong"]
    ]};
    --neutral-background-hover: ${tokens.color.live.global[
      tokens.color.beta[mode]["neutral-background-hover"]
    ]};
    --neutral-border: ${tokens.color.live.global[
      tokens.color.beta[mode]["neutral-border"]
    ]};
    --neutral-border-weak: ${tokens.color.live.global[
      tokens.color.beta[mode]["neutral-border-weak"]
    ]};
    --neutral-border-strong: ${tokens.color.live.global[
      tokens.color.beta[mode]["neutral-border-strong"]
    ]};
    --primary: ${tokens.color.live.global[tokens.color.beta[mode].primary]};
    --primary-hover: ${tokens.color.live.global[
      tokens.color.beta[mode]["primary-hover"]
    ]};
    --primary-visited: ${tokens.color.live.global[
      tokens.color.beta[mode]["primary-visited"]
    ]};
    --primary-background: ${tokens.color.live.global[
      tokens.color.beta[mode]["primary-background"]
    ]};
    --primary-background-hover: ${tokens.color.live.global[
      tokens.color.beta[mode]["primary-background-hover"]
    ]};
    --secondary-background: ${tokens.color.live.global[
      tokens.color.beta[mode]["secondary-background"]
    ]};
    --secondary-background-hover: ${tokens.color.live.global[
      tokens.color.beta[mode]["secondary-background-hover"]
    ]};
    --danger-background: ${tokens.color.live.global[
      tokens.color.beta[mode]["danger-background"]
    ]};
    --danger-background-disabled: ${tokens.color.live.global[
      tokens.color.beta[mode]["danger-background-disabled"]
    ]};
    --danger-background-hover: ${tokens.color.live.global[
      tokens.color.beta[mode]["danger-background-hover"]
    ]};
    --danger-content: ${tokens.color.live.global[
      tokens.color.beta[mode]["danger-content"]
    ]};
    --danger-content-default: ${tokens.color.live.global[
      tokens.color.beta[mode]["danger-content-default"]
    ]};
    --brand-background: ${tokens.color.live.global[
      tokens.color.beta[mode]["brand-background"]
    ]};
    --brand-background-hover: ${tokens.color.live.global[
      tokens.color.beta[mode]["brand-background-hover"]
    ]};
    --media-background: ${tokens.color.live.global[
      tokens.color.beta[mode]["media-background"]
    ]};
    --media-background-hover: ${tokens.color.live.global[
      tokens.color.beta[mode]["media-background-hover"]
    ]};
    --media-onbackground-disabled: ${tokens.color.live.global[
      tokens.color.beta[mode]["media-onbackground-disabled"]
    ]};
    --success-content: ${tokens.color.live.global[
      tokens.color.beta[mode]["success-content"]
    ]};
    --warning-content: ${tokens.color.live.global[
      tokens.color.beta[mode]["warning-content"]
    ]};
    --global-black: ${tokens.color.live.global[
      tokens.color.beta[mode]["global-black"]
    ]};
    --global-white: ${tokens.color.live.global[
      tokens.color.beta[mode]["global-white"]
    ]};
    --global-orangered: ${tokens.color.live.global[
      tokens.color.beta[mode]["global-orangered"]
    ]};
    --global-alienblue: ${tokens.color.live.global[
      tokens.color.beta[mode]["global-alienblue"]
    ]};
    --global-darkblue: ${tokens.color.live.global[
      tokens.color.beta[mode]["global-darkblue"]
    ]};
    --tone-1: ${tokens.color.live.global[tokens.color.beta[mode]["tone-1"]]};
    --tone-2: ${tokens.color.live.global[tokens.color.beta[mode]["tone-2"]]};
    --tone-3: ${tokens.color.live.global[tokens.color.beta[mode]["tone-3"]]};
    --tone-4: ${tokens.color.live.global[tokens.color.beta[mode]["tone-4"]]};
    --tone-5: ${tokens.color.live.global[tokens.color.beta[mode]["tone-5"]]};
    --tone-6: ${tokens.color.live.global[tokens.color.beta[mode]["tone-6"]]};
    --tone-7: ${tokens.color.live.global[tokens.color.beta[mode]["tone-7"]]};
    --action-upvote: ${tokens.color.live.global[
      tokens.color.beta[mode]["action-upvote"]
    ]};
    --action-downvote: ${tokens.color.live.global[
      tokens.color.beta[mode]["action-downvote"]
    ]};
    --alert-caution: ${tokens.color.live.global[
      tokens.color.beta[mode]["alert-caution"]
    ]};
    --identity-admin: ${tokens.color.live.global[
      tokens.color.beta[mode]["identity-admin"]
    ]};
    --identity-moderator: ${tokens.color.live.global[
      tokens.color.beta[mode]["identity-moderator"]
    ]};
    --identity-self: ${tokens.color.live.global[
      tokens.color.beta[mode]["identity-self"]
    ]};
    --identity-coins: ${tokens.color.live.global[
      tokens.color.beta[mode]["identity-coins"]
    ]};
    --category-live: ${tokens.color.live.global[
      tokens.color.beta[mode]["category-live"]
    ]};
    --category-nsfw: ${tokens.color.live.global[
      tokens.color.beta[mode]["category-nsfw"]
    ]};
    --category-spoiler: var(--tone-1);
    --ui-canvas: var(--tone-5);
    --ui-modalbackground: var(--tone-7);
    --interactive-content-disabled: rgba(${base}, 0.25);
    --interactive-pressed: rgba(${base}, 0.16);
    --border-weakest: rgba(${base}, 0.1);
    --border-weak: rgba(${base}, 0.1);
    --border-medium: rgba(${base}, 0.5);
    --border-strong: rgba(${base}, 0.95);
    --secondary-plain: ${tokens.color.live.global[
      tokens.color.beta[mode]["secondary-plain"]
    ]};
    --secondary-plain-hovered: ${tokens.color.live.global[
      tokens.color.beta[mode]["secondary-plain-hovered"]
    ]};
    --secondary-plain-weak: ${tokens.color.live.global[
      tokens.color.beta[mode]["secondary-plain-weak"]
    ]};

    --flair-1: ${tokens.color.live.global[
      `berrypurple-${mode === "light" ? "800" : "200"}`
    ]};

    --elevation-sm: ${tokens.elevation.live[mode].sm
      .reduce(
        (prev, { x, y, b, s, color }) =>
          `${prev} ${x}px ${y}px ${b}px ${s}px ${" "}${getOpacityValue(
            color.opacity,
            color.value
          )},${" "}`,
        ""
      )
      .slice(0, -2)};
    --elevation-md: ${tokens.elevation.live[mode].md
      .reduce(
        (prev, { x, y, b, s, color }) =>
          `${prev} ${x}px ${y}px ${b}px ${s}px ${" "}${getOpacityValue(
            color.opacity,
            color.value
          )},${" "}`,
        ""
      )
      .slice(0, -2)};
    --elevation-lg: ${tokens.elevation.live[mode].lg
      .reduce(
        (prev, { x, y, b, s, color }) =>
          `${prev} ${x}px ${y}px ${b}px ${s}px ${" "}${getOpacityValue(
            color.opacity,
            color.value
          )},${" "}`,
        ""
      )
      .slice(0, -2)};
  `;
}

export default css`
  :root {
    @media (prefers-color-scheme: dark) {
      ${getColorVars("dark")}
      --secondary-on-background: white;
      --secondary-background-selected: ${tokens.color.live.global[
        "coolgray-650"
      ]};
      --neutral-background-weak: ${tokens.color.live.global["coolgray-950"]};
      --interactive-focused: ${tokens.color.live.global["lightblue-500"]};
    }
    @media (prefers-color-scheme: light) {
      ${getColorVars("light")}
      --secondary-on-background: black;
      --secondary-background-selected: ${tokens.color.live.global[
        "coolgray-250"
      ]};
      --neutral-background-weak: ${tokens.color.live.global["coolgray-50"]};
      --interactive-focused: ${tokens.color.live.global["lightblue-400"]};
    }
    --primary-on-background: white;
    --scrim: rgba(0, 0, 0, 0.6);
  }
  html {
    font-size: 110%;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  body {
    background-color: var(--neutral-background);
    overscroll-behavior-x: contain;
    ${mixins.DefaultTextStyle}
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  * {
    box-sizing: border-box;
  }

  hr {
    width: calc(100% - 8px);
    height: 1px;
    background: var(--border-weak);
    border: none;
    margin: 0 auto;
  }

  h1 {
    font-size: ${tokens.font.beta[64].size}px;
    line-height: ${tokens.font.beta[64].lineHeight}px;
  }
`;
