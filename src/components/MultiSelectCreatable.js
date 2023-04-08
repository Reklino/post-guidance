/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";
import tokens from "../styles/tokens";
import { selectStyles, selectTheme } from "./selectTheme";
import Stack from "./Stack";
import Type from "./Type";

const createOption = (label) => ({
  label,
  value: label,
});

export default function MultiSelectCreatable({
  value,
  setValue,
  label,
  onBlur,
}) {
  const [inputValue, setInputValue] = useState("");

  function handleChange(newValue) {
    setValue(newValue);
  }

  function handleKeyDown(event) {
    if (!inputValue) return;
    switch (event.key) {
      case "Enter":
      case "Tab":
        setInputValue("");
        setValue([...value, createOption(inputValue)]);
        event.preventDefault();
    }
  }

  return (
    <Stack
      justify="stretch"
      gap={0}
      padding={tokens.spacer.live.xs}
      customCss={css`
        background: var(--secondary-background);
        border-radius: ${tokens.radius.live.sm}px;
      `}
    >
      <Type
        fontStyle="BodyReg12"
        color="var(--neutral-content-weak)"
        customCss={css`
          padding-left: ${tokens.spacer.live.xs}px;
        `}
      >
        {label}
      </Type>
      <CreatableSelect
        styles={selectStyles}
        components={{ DropdownIndicator: null }}
        inputValue={inputValue}
        isClearable={false}
        isMulti
        menuIsOpen={false}
        onChange={handleChange}
        onBlur={onBlur}
        onInputChange={(v) => setInputValue(v)}
        onKeyDown={handleKeyDown}
        placeholder="Type something and press enter..."
        value={value}
        theme={selectTheme}
      />
    </Stack>
  );
}
