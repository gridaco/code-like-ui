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
  width: fit-content;
  padding: 4px 0;
`;
