import React from "react";
import { LanguageConfig } from "./code-coment-type";
import styled from "@emotion/styled";

const CodeComent = (props: LanguageConfig) => {
  const docstring = props.docstring;
  const indent = props.indent;

  return (
    <Wrapper>
      <Doc>{docstring.start}</Doc>
      {/* todo: check field length */}
      <Doc>{docstring.mid}</Doc>
      <Doc>{docstring.end}</Doc>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;
const Doc = styled.div``;

export default CodeComent;
