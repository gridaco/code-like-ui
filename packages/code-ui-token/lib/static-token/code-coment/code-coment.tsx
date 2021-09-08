import React from "react";
import styled from "@emotion/styled";

interface fieldDocConfig {
  docstring?: string;
  indent?: number;
}

export const CodeComent = (props: fieldDocConfig) => {
  return <Doc indent={props.indent}>{props.docstring}</Doc>;
};

type DocProps = {
  indent?: number;
};

const Doc = styled.div<DocProps>`
  color: #868686;
  ${(props) => ({ marginRight: props.indent })}
`;
