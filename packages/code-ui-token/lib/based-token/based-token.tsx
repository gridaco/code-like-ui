import React, { ReactNode, useEffect, useRef, useState } from "react";
import Styled from "@emotion/styled";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface BasedTokenProps {
  onClick: () => void;
  onDoubleClick: () => void;
  onHover?: () => void;
  hoverOverlayColor?: string;
  cornerRadius: number; // if input 10  => 10px
  contentPadding: number;
  contentColor: string;
  backgroundColor: string;
  content: ReactNode;
}

// Can I get number array to cornerRadius and contentPadding?

export function BasedToken(props: BasedTokenProps) {
  const bgRef = useRef(null);
  const [bgSize, setBgSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (!bgRef.current) {
      return;
    } else {
      setBgSize({
        ...bgSize,
        width: Math.floor(bgRef.current.getBoundingClientRect().width),
        height: Math.floor(bgRef.current.getBoundingClientRect().height),
      });
    }
  }, []); //empty dependency array so it only runs once at render

  return (
    <Wrapper>
      <HoverOverlay
        onClick={props.onClick}
        onDoubleClick={props.onDoubleClick}
        onMouseOver={props.onHover}
        hoverOverlayColor={props.hoverOverlayColor}
        cornerRadius={props.cornerRadius}
        size={bgSize}
      />
      <Background
        ref={bgRef}
        bgColor={props.backgroundColor}
        cornerRadius={props.cornerRadius}
      >
        <Content color={props.contentColor} padding={props.contentPadding}>
          {props.content}
        </Content>
      </Background>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: fit-content;
`;

const HoverOverlay = styled.div<{
  onHover?: boolean;
  hoverOverlayColor?: string;
  cornerRadius: number;
  size: { width: number; height: number };
}>`
  width: fit-content;
  border-radius: ${(props) => `${props.cornerRadius}px`};
  cursor: pointer;
  width: ${(props) => `${props.size.width}px`};
  height: ${(props) => `${props.size.height}px`};
  position: absolute;

  &:hover {
    background-color: ${(props) => props.hoverOverlayColor};
  }
`;

const Content = styled.div<{ color: string; padding: number }>`
  color: ${(props) => props.color};
  padding: ${(props) => `${props.padding}px`};
`;

const Background = styled.div<{ bgColor: string; cornerRadius: number }>`
  width: fit-content;
  background-color: ${(props) => props.bgColor};
  border-radius: ${(props) => `${props.cornerRadius}px`};
`;
