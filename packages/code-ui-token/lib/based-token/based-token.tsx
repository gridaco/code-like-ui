import React, { ReactNode } from "react";
import Styled from "@emotion/styled";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface BasedTokenProps {
  onClick: () => void;
  onDoubleClick: () => void;
  onHover?: boolean;
  hoverOverlayColor?: string;
  cornerRadius: number; // if input 10  => 10px
  contentPadding: number;
  contentColor: string;
  backgroundColor: string;
  content: ReactNode;
}

// Can I get number array to cornerRadius and contentPadding?

export function BasedToken(props: BasedTokenProps) {
  return (
    <>
      <HoverOverlay
        onClick={props.onClick}
        onDoubleClick={props.onDoubleClick}
        onHover={props.onHover}
        hoverOverlayColor={props.hoverOverlayColor}
        cornerRadius={props.cornerRadius}
      >
        <Background
          bgColor={props.backgroundColor}
          cornerRadius={props.cornerRadius}
        >
          <Content color={props.contentColor} padding={props.contentPadding}>
            {props.content}
          </Content>
        </Background>
      </HoverOverlay>
    </>
  );
}

const HoverOverlay = styled.div<{
  onHover: boolean;
  hoverOverlayColor: string;
  cornerRadius: number;
}>`
  width: fit-content;
  border-radius: ${(props) => `${props.cornerRadius}px`};
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.onHover ? props.hoverOverlayColor : ""};
  }
`;

const Content = styled.div<{ color: string; padding: number }>`
  color: ${(props) => props.color};
  padding: ${(props) => `${props.padding}px`};
`;

const Background = styled.div<{ bgColor: string; cornerRadius: number }>`
  background-color: ${(props) => props.bgColor};
  border-radius: ${(props) => `${props.cornerRadius}px`};
`;
