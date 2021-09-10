import styled from "@emotion/styled";
import React, { Fragment, useCallback, useRef, useState } from "react";
import { BasedToken } from "..";
import Tippy from "@tippyjs/react";
import { HoverView, StoryViewImageExample } from "@code-ui/hover";

export function StorybookExampleWithHover() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  function onHover(isOver: boolean) {
    setIsVisible(isOver);
  }
  function TippyContent() {
    return <HoverView contents={["text only text", "text"]} />;
  }
  return (
    <>
      <BasedToken
        onClick={() => {
          console.log("onClicked");
        }}
        onDoubleClick={() => {
          console.log("onDoubleClick");
        }}
        onHover={(isOver) => onHover(isOver)}
        hoverOverlayColor={"rgba(157, 178, 255, 0.25)"}
        cornerRadius={2}
        contentPadding={[0, 2]}
        contentColor="#4EC9B0"
        content={
          <>
            <StyledTippy
              visible={isVisible}
              placement="bottom-start"
              content={TippyContent()}
              max-width={"100%"}
            >
              <span style={{ fontSize: "14px" }}>string1</span>
            </StyledTippy>
          </>
        }
      />
    </>
  );
}

const StyledTippy = styled(Tippy)`
  // 2px is border size
  width: fit-content;
  pointer-events: auto !important;
  // -3 is border + padding (1px + 2px)
  transform: translate3d(-3px, -10px, 0px);
`;
