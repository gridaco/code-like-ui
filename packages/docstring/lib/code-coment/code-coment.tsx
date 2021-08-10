import React from "react";
import { LanguageConfig } from "./code-coment-type";
import styled from "@emotion/styled";

interface fieldDocConfig {
  docstring?: string;
  indent?: number;
}

const CodeComent = (props: fieldDocConfig) => {
  return <Doc indent={props.indent}>{props.docstring}</Doc>;
};

type DocProps = {
  indent?: number;
};

const Doc = styled.div<DocProps>`
  color: ${(props) => props.theme.comment.color};
  ${(props) => ({ marginRight: props.indent })}
`;

export default CodeComent;
