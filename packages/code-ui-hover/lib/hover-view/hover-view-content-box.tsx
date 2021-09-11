import React from "react";
import styled from "@emotion/styled";
import { HoverViewContent } from "./hover-view";

interface HoverViewContentBoxProps {
  content: HoverViewContent;
}

export function HoverViewContentBox(props: HoverViewContentBoxProps) {
  return (
    <Wrapper>
      <Content>{props.content}</Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #393939;
  cursor: default;

  &:last-child {
    border-bottom: none;
  }
`;
const Content = styled.div`
  padding: 0 6px;
`;
