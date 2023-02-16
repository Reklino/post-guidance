import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import mixins from "../styles/mixins";

function Type({
  children,
  fontStyle = "BodyReg18",
  onClick,
  customCss,
  color,
  link = false,
  truncateAfter = false,
  align = "auto",
}) {
  const styling = css`
    ${mixins.fontStyles[fontStyle]}
    ${color && `color: ${color};`}
    display: -webkit-box;
    text-align: ${align};
    ${truncateAfter &&
    css`
      -webkit-line-clamp: ${truncateAfter};
      -webkit-box-orient: vertical;
      overflow: hidden;
    `}
    ${customCss}
    ${link &&
    css`
      cursor: pointer;
    `}
  `;

  const getSize = () => {
    const numb = fontStyle.match(/\d/g);
    return numb.join("");
  };

  switch (getSize()) {
    case "64":
      return (
        <h1 css={styling} onClick={onClick}>
          {children}
        </h1>
      );

    case "48":
      return (
        <h2 css={styling} onClick={onClick}>
          {children}
        </h2>
      );
    case "32":
      return (
        <h3 css={styling} onClick={onClick}>
          {children}
        </h3>
      );
    case "24":
      return (
        <h4 css={styling} onClick={onClick}>
          {children}
        </h4>
      );

    default:
      return (
        <p css={styling} onClick={onClick}>
          {children}
        </p>
      );
  }
}

export default Type;
