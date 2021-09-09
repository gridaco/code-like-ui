import React from "react";
import styled from "@emotion/styled";

export type IconState = "placeholder" | "empty" | "color";

interface LeadingIconProps {
  state: IconState;
  color?: string;
}

export function LeadingIcon(props: LeadingIconProps) {
  return <Wrapper></Wrapper>;
}

const Wrapper = styled.div`
  width: 16px;
  height: 16px;
`;
