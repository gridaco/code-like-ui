import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export type IconState = "placeholder" | "empty" | "color";

interface LeadingIconProps {
  state?: IconState;
  color?: string;
}

export function LeadingIcon(props: LeadingIconProps) {
  if (props.state === "color" && !props.color) {
    throw "has no color in leading icon";
  }
  return (
    <Wrapper state={props.state ? props.state : "empty"} color={props.color} />
  );
}

const Wrapper = styled.div<{ state: string; color?: string }>`
  width: 16px;
  height: 16px;
  margin-right: 4px;

  /* 1. placeholder 2. color 3. empty */

  ${(props) =>
    props.state === "placeholder"
      ? css`
          background: linear-gradient(
            132.44deg,
            #c4c4c4 -4.9%,
            rgba(196, 196, 196, 0) 100%
          );
        `
      : props.state === "color"
      ? css`
          background: ${props.color};
        `
      : css`
          background-color: rgba(255, 255, 255, 0);
        `}
`;
