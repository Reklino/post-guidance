/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useRef, useState } from "react";
import tokens from "../styles/tokens";
import Button from "./Button";
import Menu from "./Menu";
import ListItem from "./ListItem";
import AnchoredFloatingMenu from "./AnchoredFloatingMenu";
import Input from "./Input";
import Stack from "./Stack";
import Type from "./Type";
import Spread from "./Spread";
import Flex from "./Flex";
import { useRecoilState, useSetRecoilState } from "recoil";
import postGuidancesState from "../atoms/postGuidancesState";
import MultiSelectCreatable from "./MultiSelectCreatable";
import Dropdown from "./Dropdown";
import Textarea from "./Textarea";
import IconContainer from "./IconContainer";
import { moveDown, moveUp } from "../fn";
import Toggle from "./Toggle";

const applicationStates = {
  title: {
    name: "Title",
  },
  body: {
    name: "Body",
  },
  both: {
    name: "Title or body",
  },
};

const logicStates = {
  isIncluded: {
    name: "Is included",
    descriptor: "includes",
    description: "Show if phrases are missing",
  },
  isMissing: {
    name: "Is missing",
    descriptor: "is missing",
    description: "Show if phrases are present",
  },
};

const actionStates = {
  inform: {
    name: "Inform",
    description: "Show a message to the user",
    icon: "IconChat",
  },
  block: {
    name: "Block",
    description: "Prevent the user from submitting",
    icon: "IconRemove",
  },
  flag: {
    name: "Flag for reivew",
    description: "Surface content in the mod queue",
    icon: "IconReport",
  },
};

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

function Guidance({
  title,
  phrases,
  application,
  message,
  logic,
  action,
  active,
  enabled,
}) {
  const [expanded, setExpanded] = useState(false);
  const [postGuidances, setPostGuidances] = useRecoilState(postGuidancesState);
  const index = postGuidances.findIndex(
    ({ title: existingTitle }) => existingTitle === title
  );
  const [localGuidance, setLocalGuidance] = useState({
    title,
    phrases,
    application,
    message,
    logic,
    action,
    enabled,
  });

  function updateGuidance() {
    const newList = replaceItemAtIndex(postGuidances, index, {
      ...localGuidance,
    });
    setPostGuidances(newList);
  }

  function toggleEnable() {
    const newList = replaceItemAtIndex(postGuidances, index, {
      ...localGuidance,
      enabled: !enabled,
    });
    setPostGuidances(newList);
  }

  function deletePostGuidance() {
    const newList = removeItemAtIndex(postGuidances, index);
    setPostGuidances(newList);
  }

  function moveItemUp() {
    if (index === 0) return;
    const newList = moveUp(postGuidances, index);
    setPostGuidances(newList);
  }

  function moveItemDown() {
    if (index === postGuidances.length - 1) return;
    const newList = moveDown(postGuidances, index);
    setPostGuidances(newList);
  }

  function cancel() {
    setLocalGuidance({
      title,
      phrases,
      application,
      message,
      logic,
      action,
      enabled,
    });
    setExpanded(false);
  }

  return (
    <Stack
      padding={[
        tokens.spacer.live.md,
        tokens.spacer.live.md,
        tokens.spacer.live.sm,
        tokens.spacer.live.md,
      ]}
      justify="stretch"
      customCss={css`
        background: var(
          --${active && !expanded ? "secondary-background" : "neutral-background-strong"}
        );
        border-radius: ${tokens.radius.live.md}px;
        width: 100%;
      `}
    >
      <Flex justify="space-between" align="center">
        <Spread>
          <IconContainer icon={actionStates[localGuidance.action].icon} />
          <Stack gap={0}>
            <Type fontStyle="HeadingBold18">{localGuidance.title}</Type>
            <Type fontStyle="BodyReg14" truncateAfter={1}>
              If{" "}
              {applicationStates[localGuidance.application].name.toLowerCase()}{" "}
              {logicStates[localGuidance.logic].descriptor.toLowerCase()}
              {": "}
              {localGuidance.phrases.join(", ")}
            </Type>
          </Stack>
        </Spread>
        <Spread
          items={4}
          gap={0}
          customCss={css`
            flex-shrink: 0;
          `}
        >
          <Button
            icon="IconCaretUp"
            size="Small"
            type="Plain"
            onClick={() => moveItemUp()}
          />
          <Button
            icon="IconCaretDown"
            size="Small"
            type="Plain"
            onClick={() => moveItemDown()}
          />
          <Toggle
            checked={enabled}
            onChange={() => {
              toggleEnable();
            }}
          />
          <Button
            icon={expanded ? "IconClose" : "IconEdit"}
            size="Small"
            type="Plain"
            onClick={() => {
              if (expanded) {
                cancel();
              } else {
                setExpanded(!expanded);
              }
            }}
          />
        </Spread>
      </Flex>
      <Stack
        justify="stretch"
        padding={expanded ? tokens.spacer.live.sm : 0}
        customCss={css`
          height: ${expanded ? "auto" : "0px"};
          overflow: hidden;
        `}
      >
        <Input
          label="Title"
          value={localGuidance.title}
          onChange={({ target: { value } }) =>
            setLocalGuidance({
              title: value,
              phrases,
              application,
              message,
              logic,
              action,
              enabled,
            })
          }
        />
        <MultiSelectCreatable
          label="Phrases"
          value={localGuidance.phrases.map((v) => ({ value: v, label: v }))}
          setValue={(value) =>
            setLocalGuidance({
              title,
              phrases: value.map(({ value }) => value),
              application,
              message,
              logic,
              action,
              enabled,
            })
          }
          onBlur={() => updateGuidance()}
        />

        <Dropdown
          label="What part of the post?"
          options={applicationStates}
          defaultValue={localGuidance.application}
          onChange={(value) =>
            setLocalGuidance({
              title,
              phrases,
              application: value,
              message,
              logic,
              action,
              enabled,
            })
          }
        />

        <Dropdown
          label="Included or missing"
          options={logicStates}
          defaultValue={localGuidance.logic}
          onChange={(value) =>
            setLocalGuidance({
              title,
              phrases,
              application,
              message,
              logic: value,
              action,
              enabled,
            })
          }
        />

        <Dropdown
          label="Action"
          options={actionStates}
          defaultValue={localGuidance.action}
          onChange={(value) =>
            setLocalGuidance({
              title,
              phrases,
              application,
              message,
              logic,
              action: value,
              enabled,
            })
          }
        />

        <Textarea
          label="Message"
          value={localGuidance.message}
          onBlur={() => updateGuidance()}
          onChange={({ target: { value } }) =>
            setLocalGuidance({
              title,
              phrases,
              application,
              message: value,
              logic,
              action,
              enabled,
            })
          }
        />
        <Flex justify="space-between">
          <Spread justifySelf="start">
            <Button
              onClick={() => {
                updateGuidance();
                setExpanded(false);
              }}
            >
              Save
            </Button>
            <Button type="Secondary" onClick={() => cancel()}>
              Cancel
            </Button>
          </Spread>
          <Button type="Plain" onClick={() => deletePostGuidance()}>
            Delete
          </Button>
        </Flex>
      </Stack>
    </Stack>
  );
}

export default Guidance;
