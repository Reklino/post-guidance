/* eslint-disable react/display-name */
import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import mixins from "../styles/mixins";
import icons from "../icons";
import tokens from "../styles/tokens";
import Badge from "./Badge";
import IconContainer from "./IconContainer";

const Button = React.forwardRef(
  (
    {
      children,
      onClick,
      type = "Primary",
      disabled = false,
      selected = false,
      size = "Large",
      customCss,
      icon = false,
      image = false,
      dropdown = false,
      badge = false,
      newBadge = false,
      avatar = false,
      nestedItems = false,
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        disabled={disabled}
        css={css`
          position: relative;
          flex-shrink: 0;
          ${mixins.constainerStyles[size]}
          ${mixins.buttonStyles[type](selected)}
          ${icon !== false &&
          css`
            padding-left: ${size === "Small" ? 0 : tokens.size.live.xs}px;
            gap: 2px;
          `}
          ${icon !== false &&
          React.Children.count(children) === 0 &&
          css`
            padding-left: ${size === "Small" ? 0 : tokens.size.live["2xs"]}px;
            padding-right: ${size === "Small" ? 0 : tokens.size.live["2xs"]}px;
          `}
          cursor: ${disabled ? "not-allowed" : "pointer"};
          ${customCss}
        `}
        type="button"
      >
        {icon !== false && (
          <IconContainer size={size} icon={selected ? `${icon}Fill` : icon} />
        )}

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
        {avatar !== false && avatar}
        {children}
        {badge !== false && <Badge count={badge} />}
        {newBadge !== false && (
          <Badge
            customCss={css`
              position: absolute;
              left: 36px;
              top: 8px;
            `}
          />
        )}
        {dropdown && (
          <div
            css={css`
              width: 20px;
              height: 20px;
              margin: 0 -8px 0 -4px;
              svg {
                width: 20px !important;
                height: 20px !important;
              }
            `}
          >
            {icons.IconCaretDown}
          </div>
        )}
        {nestedItems !== false && (
          <div
            css={css`
              width: 20px;
              height: 20px;
              margin: 0 -8px 0 auto;
              svg {
                width: 20px !important;
                height: 20px !important;
              }
            `}
          >
            {icons.IconCaretDown}
          </div>
        )}
      </button>
    );
  }
);

export default Button;
