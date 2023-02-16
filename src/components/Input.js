import React, { useRef, useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import mixins from "../styles/mixins";
import tokens from "../styles/tokens";
import icons from "../icons";
import Type from "./Type";
import Stack from "./Stack";
import Flex from "./Flex";

export default function Input({
  onChange,
  placeholder = "Placeholder",
  label = "Label",
  innerLabel = true,
  trailingIcon = false,
  leadingIcon = false,
  value = "",
  width = "100%",
  rounded = false,
  className,
  error = false,
  helperText = false,
}) {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);
  const outlineColor = error
    ? "var(--danger-content)"
    : "var(--interactive-focused)";

  return (
    <Stack
      justify="stretch"
      gap={4}
      customCss={css`
        width: ${width};
      `}
    >
      <div
        className={className}
        onClick={() => {
          if (!isFocused) {
            inputRef.current.focus();
          }
        }}
        onMouseDown={(e) => e.preventDefault()}
        css={css`
          ${mixins.constainerStyles.Large}
          ${mixins.fontStyles.BodyReg16}
        height: ${tokens.size.live[innerLabel ? "3xl" : "2xl"]}px;
          width: ${width};
          background-color: ${isFocused
            ? "var(--secondary-background-hover)"
            : "var(--secondary-background)"};
          color: var(--neutral-content);
          svg path {
            fill: var(--neutral-content-weak);
          }
          border-radius: ${rounded ? "100" : tokens.radius.live.sm}px;
          &:hover {
            background-color: var(--secondary-background-hover);
          }
          outline: 4px solid ${isFocused ? outlineColor : "transparent"};
          cursor: ${isFocused || value !== "" ? "text" : "pointer"};
        `}
      >
        {leadingIcon !== false ? icons[leadingIcon] : null}
        <Stack
          gap={tokens.spacer.live.xs / 4}
          customCss={css`
            position: relative;
            width: 100%;
          `}
        >
          <Flex
            align="center"
            customCss={css`
              position: absolute;
              opacity: ${isFocused || value !== "" ? 0 : 1};
              left: 2px;
              top: 0;
              width: 100%;
              height: 100%;
              /* user-select: none; */
              cursor: ${isFocused || value !== "" ? "text" : "pointer"};
            `}
          >
            <Type fontStyle="BodyReg16" color="var(--neutral-content-weak)">
              {label}
            </Type>
          </Flex>
          {innerLabel && (
            <Type
              fontStyle="BodyReg12"
              color="var(--neutral-content-weak)"
              customCss={css`
                opacity: ${isFocused || value !== "" ? 1 : 0};
                margin-top: -${tokens.spacer.live.xs / 2}px;
                margin-left: 1px;
              `}
            >
              {label}
            </Type>
          )}
          <input
            onMouseDown={(e) => e.stopPropagation()}
            css={css`
              position: relative;
              z-index: 2;
              width: 100%;
              cursor: ${isFocused || value !== "" ? "text" : "pointer"};
              background-color: transparent;
              border: none;
              opacity: ${isFocused || value !== "" ? 1 : 0};
              ${mixins.fontStyles.BodyReg16}
              color: var(--neutral-content-strong);
              &::placeholder {
                color: var(--neutral-content-weak);
              }
              &:focus {
                outline: none;
              }

              &:disabled {
                background-color: var(--neutral-content-disabled);
                color: var(--interactive-content-disabled);
              }
            `}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            ref={inputRef}
            type="text"
            onChange={onChange}
            value={value}
            placeholder={placeholder}
          />
        </Stack>
      </div>
      {helperText && (
        <Type color={outlineColor} fontStyle="BodyReg12">
          {helperText}
        </Type>
      )}
    </Stack>
  );
}
