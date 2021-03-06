import React, { ReactNode, useEffect, useRef, useState } from "react";
import Styled from "@emotion/styled";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface BasedTokenProps {
  onClick: () => void;
  onDoubleClick: () => void;
  onHover?: (isOver: boolean) => void;
  hoverOverlayColor?: string;
  cornerRadius: number; // if input 10  => 10px
  contentPadding: number | number[];
  contentColor: string;
  backgroundColor?: string;
  content: ReactNode;
}

// Can I get number array to cornerRadius and contentPadding?

export function BasedToken(props: BasedTokenProps) {
  // const bgRef = useRef(null);

  const onMouseOver = () => {
    if (props.onHover) {
      props.onHover(true);
    }
  };
  const onMouseLeave = () => {
    if (props.onHover) {
      props.onHover(false);
    }
  };

  return (
    <Wrapper>
      <HoverOverlay
        onClick={props.onClick}
        onDoubleClick={props.onDoubleClick}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        hoverOverlayColor={props.hoverOverlayColor}
        cornerRadius={props.cornerRadius}
      >
        <Background
          bgColor={props.backgroundColor}
          cornerRadius={props.cornerRadius}
        >
          <Content
            // ref={bgRef}
            color={props.contentColor}
            padding={props.contentPadding}
          >
            {props.content}
          </Content>
        </Background>
      </HoverOverlay>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: fit-content;
  display: inline-block;
`;

const HoverOverlay = styled.div<{
  hoverOverlayColor?: string;
  cornerRadius: number;
  // size: { width: number; height: number };
}>`
  border-radius: ${(props) => `${props.cornerRadius + 1}px`};

  /* temp hover state for demo purposes*/

  &:hover {
    background-color: ${(props) => props.hoverOverlayColor};
  }

  &:hover::after {
    display: none;
  }

  border: 1px solid rgba(255, 255, 255, 0);
  &:focus-within {
    border: 1px solid #524e4e;
  }
`;

const Content = styled.div<{ color: string; padding: number[] | number }>`
  color: ${(props) => props.color};
  ${(props) =>
    typeof props.padding === "object"
      ? css`
          padding: ${props.padding[0]}px ${props.padding[1]}px;
        `
      : css`
          padding: ${props.padding}px;
        `}
`;

const Background = styled.div<{ bgColor?: string; cornerRadius: number }>`
  width: fit-content;
  background-color: ${(props) => props.bgColor};
  border-radius: ${(props) => `${props.cornerRadius}px`};
`;
