import React, { ReactNode } from "react";
import styled from "@emotion/styled";

export interface SelectionItemProps {
  contents: any[];
}

export function SelectionItem(props: SelectionItemProps) {
  return <Wrapper></Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  background-color: #252526; // will be set theme
  padding: 0 8px;
  color: #b7b7b7; // will be set theme
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  border: 1px solid #393939; // will be set theme

  a {
    color: #b7b7b7;
    font-style: italic; // will be set theme
  }
`;
