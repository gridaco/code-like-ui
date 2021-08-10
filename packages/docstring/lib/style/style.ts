import { Theme } from "@emotion/react";
import styled from "@emotion/styled";

type _Color = string;

declare module "@emotion/react" {
  export interface Theme extends DocstringTheme {}
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

interface DocstringTheme {
  highlight: {
    text: { color: _Color };
    bg: { color: _Color };
  };
  comment: { color: _Color };
  link: { color: _Color };
  bg: { color: _Color };
}

export const Monokai: DocstringTheme = {
  highlight: {
    text: { color: "#D7D7D7" },
    bg: { color: "#3A3842" },
  },
  comment: { color: "#868686" },
  link: { color: "#868686" },
  bg: { color: "#2A2734" },
};
