import { Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { DocstringColorTheme } from "@code-ui/color-scheme";

declare module "@emotion/react" {
  export interface Theme extends DocstringColorTheme {}
}

export interface Props {
  padding?: string;
}

export const Line = styled.div`
  display: flex;
  margin-top: 1px;
  &:first-child() {
    margin-top: 0;
  }
`;

export const CodeWrapper = styled.div<Props>`
  background: ${(props) => props.theme.bg.color};
  padding: ${(props) => props.padding};
  font-family: "Source Code Pro", "Courier New", "Lucida Console", Monaco;
  font-weight: 400;
  overflow-x: auto;
`;

export const Link = styled.div`
  margin: 0;
  color: ${(props) => props.theme.link.color};
  cursor: pointer;
  text-decoration-line: underline;
`;
