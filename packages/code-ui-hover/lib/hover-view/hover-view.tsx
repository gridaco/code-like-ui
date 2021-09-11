import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { HoverViewContentBox } from "./hover-view-content-box";

export type HoverViewContent = string | ReactNode;
export interface HoverViewProps {
  contents: HoverViewContent[];
}

export function HoverView(props: HoverViewProps) {
  return (
    <Wrapper>
      {props.contents.map((content: HoverViewContent, i: number) => {
        return (
          <HoverViewContentBox
            key={`hover-view-content-box-${i}`}
            content={content}
          />
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  background-color: #252526;
  padding: 4px 0;
  color: #b7b7b7;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  border: 1px solid #393939;

  a {
    color: #b7b7b7;
    font-style: italic;
  }
`;
