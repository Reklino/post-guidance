import React, { useRef, useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import mixins from "../styles/mixins";
import tokens from "../styles/tokens";
import icons from "../icons";
import Type from "./Type";
import Stack from "./Stack";
import Flex from "./Flex";
import { getGuidanceMessage } from "../fn";

export default function Textarea({
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
  helperTexts = [],
  onBlur,
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
        css={css`
          ${mixins.constainerStyles.Large}
          ${mixins.fontStyles.BodyReg16}
          height: ${128}px;
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
          ${isFocused &&
          css`
            outline: 4px solid ${outlineColor};
          `}
          ${error &&
          !isFocused &&
          css`
            outline: 1px solid ${outlineColor};
          `}
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
            // align="center"
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
          <textarea
            defaultValue={value}
            rows={4}
            onChange={onChange}
            placeholder={placeholder}
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              setIsFocused(false);
              onBlur();
            }}
            ref={inputRef}
            css={css`
              position: relative;
              z-index: 2;
              width: 100%;
              resize: none;
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
          />
        </Stack>
      </div>
      {helperText && (
        <Type color={outlineColor} fontStyle="BodyReg12">
          {helperText}
        </Type>
      )}
      {helperTexts.length > 0 && (
        <Stack gap={4}>
          {helperTexts
            .reduce((acc, current) => {
              if (current.action !== "block" && error) {
                return acc;
              }
              return [...acc, current];
            }, [])
            .map(
              ({ message, title, action, phrases, caughtPhrases, logic }) => (
                <Type
                  key={title}
                  color={
                    action === "block" && error
                      ? "var(--danger-content)"
                      : "var(--neutral-content)"
                  }
                  fontStyle="BodyReg12"
                >
                  {getGuidanceMessage(
                    message,
                    caughtPhrases,
                    phrases,
                    logic,
                    "body"
                  )}
                </Type>
              )
            )}
        </Stack>
      )}
    </Stack>
  );
}
