import React from "react";
import styled from "@emotion/styled";
import { HoverViewContent } from "./hover-view";

interface HoverViewContentBoxProps {
  content: HoverViewContent;
}

export function HoverViewContentBox(props: HoverViewContentBoxProps) {
  return <Wrapper>{props.content}</Wrapper>;
}

const Wrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #393939;

  &:last-child {
    border-bottom: none;
  }
`;
