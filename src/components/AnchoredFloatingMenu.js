import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import useWindowSize from "../hooks/useWindowSize";

function AnchoredFloatingMenu({
  children,
  shouldShow,
  dismiss,
  anchorRef,
  position = "bottom",
  align = "end",
  preventOutsideClick = true,
  offset = 8,
}) {
  const menuRef = useRef(null);
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const [refWidth, setRefWidth] = useState(0);
  const [refHeight, setRefHeight] = useState(0);
  const [ready, setReady] = useState(false);
  const contextMenuNode = document.getElementById("DynamicFloatingMenu");

  useEffect(() => {
    function handleClick(e) {
      if (
        !menuRef ||
        !menuRef.current ||
        menuRef.current.contains(e.target) ||
        anchorRef.current.contains(e.target)
        // contextMenuNode.contains(e.target)
      ) {
        return;
      }
      e.stopPropagation();
      dismiss();
    }
    document.addEventListener("mousedown", handleClick);
    if (menuRef.current !== null) {
      const { width, height } = menuRef.current.getBoundingClientRect();
      if (width + height !== 0) {
        setReady(true);
      }
      setRefWidth(width);
      setRefHeight(height);
    }
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [dismiss, menuRef, contextMenuNode]);

  if (!shouldShow || !anchorRef.current) {
    return null;
  }

  const buffer = 20;
  const { x, y, width, height } = anchorRef.current.getBoundingClientRect();
  const determinedPosition = () => {
    switch (position) {
      case "bottom":
        if (y + height + offset + refHeight > windowHeight) {
          return "top";
        }
        return "bottom";
      case "top":
        if (y - buffer < refHeight) {
          return "bottom";
        }
        return "top";

      case "right":
        return "right";

      case "left":
        return "left";

      default:
        return "bottom";
    }
  };

  function getVerticalAlignmentPosition() {
    switch (align) {
      case "start":
        return x - refWidth + width;
      case "center":
        return x - refWidth / 2 + width / 2;
      case "end":
        return x + refWidth + buffer > windowWidth
          ? windowWidth - refWidth - buffer
          : x;

      default:
        return 0;
    }
  }

  function getPositionCss(pos) {
    switch (pos) {
      case "bottom":
        return css`
          top: ${y + height + offset}px;
          left: ${getVerticalAlignmentPosition()}px;
        `;
      case "top":
        return css`
          top: ${y - refHeight - offset}px;
          left: ${getVerticalAlignmentPosition()}px;
        `;
      case "left":
        return css`
          top: ${y + height + offset}px;
          left: ${x}px;
        `;
      case "right":
        return css`
          top: ${y + height / 2 - refHeight / 2}px;
          left: ${x + width + offset}px;
        `;

      default:
        return css`
          top: ${y + height + offset}px;
          left: ${x}px;
        `;
    }
  }

  const modalRoot = document.getElementById("DynamicFloatingMenu");
  return ReactDOM.createPortal(
    <React.Fragment>
      <div
        ref={menuRef}
        css={css`
          position: fixed;
          z-index: 81;
          opacity: ${ready ? 1 : 0};
          ${getPositionCss(determinedPosition())}
        `}
      >
        {children}
      </div>
      {preventOutsideClick && (
        <div
          css={css`
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 80;
            display: block;
            cursor: default;
            background: transparent;
          `}
        />
      )}
    </React.Fragment>,
    modalRoot
  );
}

export default AnchoredFloatingMenu;
