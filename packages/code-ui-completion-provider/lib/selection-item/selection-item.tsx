import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { IconState, LeadingIcon } from "../leading-icon";

export interface SelectionItemProps {
  id: string;
  label: string;
  detail?: string;
  leading?: ReactNode | true;
  documentation?: (ReactNode | string)[];
  variant?: "default" | "focused" | "selected";
  onFocus: (id: string) => void;
  onSelected: (id: string) => void;
  onFocusOut: () => void;
}

export function SelectionItem(props: SelectionItemProps) {
  return (
    <Wrapper
      variant={props.variant}
      onMouseOver={() => props.onFocus(props.id)}
      onMouseLeave={() => props.onFocusOut()}
      onClick={() => props.onSelected(props.id)}
    >
      <InnerWrapper>
        {/* checking more then */}
        {props.leading === true ? (
          <LeadingIcon state="empty" />
        ) : (
          <>{props.leading}</>
        )}

        <Label>{props.label}</Label>
      </InnerWrapper>
      <Desc>{props.detail}</Desc>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ variant?: string }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2px 8px;
  cursor: pointer;

  ${(props) =>
    props.variant === "focused"
      ? css`
          background-color: #828282;
        `
      : props.variant === "selected"
      ? css`
          background-color: #828282;
        `
      : css`
          &:hover {
            background-color: #333333;
          }
        `}
`;

const InnerWrapper = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const Label = styled.span`
  color: #fff;
`;

const Desc = styled.div`
  color: #bcbcbc;
  margin-left: 8px;
`;
