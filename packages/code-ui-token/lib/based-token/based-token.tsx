import React from "react";
import Styled from "@emotion/styled";
import styled from "@emotion/styled";

interface BasedTokenProps {
  onClick: () => void;
  onDoubleClick: () => void;
  onHover?: boolean;
  hoverOverlayColor?: string;
  cornerRadius: number; // if input 10  => 10px
  contentPadding: number;
  contentColor: string;
  backgroundColor: string;
  content: any;
}

// Can I get number array to cornerRadius and contentPadding?

export function BasedToken(props: BasedTokenProps) {
  return (
    <StyleWrapper cornerRadius={props.cornerRadius}>
      <HoverOverlay
        onClick={props.onClick}
        onDoubleClick={props.onDoubleClick}
        onHover={props.onHover}
        hoverOverlayColor={props.hoverOverlayColor}
      >
        <Background bgColor={props.backgroundColor}>
          <Content color={props.contentColor} padding={props.contentPadding}>
            {props.content}
          </Content>
        </Background>
      </HoverOverlay>
    </StyleWrapper>
  );
}

const StyleWrapper = styled.div<{ cornerRadius: number }>`
  border-radius: ${(props) => `${props.cornerRadius}px`};
`;

const HoverOverlay = styled.div<{
  onHover: boolean;
  hoverOverlayColor: string;
}>`
  background-color: ${(props) => props.onHover ?? props.hoverOverlayColor};
`;

const Content = styled.div<{ color: string; padding: number }>`
  color: ${(props) => props.color};
  padding: ${(props) => `${props.padding}px`};
`;

const Background = styled.div<{ bgColor: string }>``;
