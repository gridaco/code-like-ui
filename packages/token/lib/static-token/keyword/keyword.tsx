import styled from "@emotion/styled";
import React from "react";

export function KeyWord(value: string) {
  return <Span>{value}</Span>;
}

const Span = styled.span`
  margin-right: 5px;
  //for test
  color: "red";
`;
