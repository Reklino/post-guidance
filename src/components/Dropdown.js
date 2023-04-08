import React, { useEffect, useRef, useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import tokens from "../styles/tokens";
import Stack from "./Stack";
import Button from "./Button";
import AnchoredFloatingMenu from "./AnchoredFloatingMenu";
import ListItem from "./ListItem";
import Menu from "./Menu";

export default function Dropdown({ label, defaultValue, options, onChange }) {
  const buttonRef = useRef(null);
  const [active, setActive] = useState(false);
  const [value, setValue] = useState(defaultValue);

  return (
    <>
      <Button
        ref={buttonRef}
        type="Secondary"
        onClick={() => setActive(!active)}
        selected={active}
        dropdown={true}
      >
        {options[value].name}
      </Button>
      <AnchoredFloatingMenu
        anchorRef={buttonRef}
        position="bottom"
        align="end"
        shouldShow={active}
        dismiss={() => setActive(false)}
        preventOutsideClick={false}
      >
        <Menu>
          {Object.keys(options).map((key) => (
            <ListItem
              key={key}
              label={options[key].name}
              description={options[key].description}
              selected={value === key}
              onClick={() => {
                setValue(key);
                onChange(key);
                setActive(false);
              }}
            />
          ))}
        </Menu>
      </AnchoredFloatingMenu>
    </>
  );
}
