import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { IconState, LeadingIcon } from "../leading-icon";

export interface SelectionItemProps {
  label: string;
  detail?: string;
  leading?: ReactNode | true;
  documentation?: (ReactNode | string)[];
  variant?: "default" | "focused" | "selected";
}

export function SelectionItem(props: SelectionItemProps) {
  return (
    <Wrapper variant={props.variant}>
      <InnerWrapper>
        {props.leading === true ? (
          <LeadingIcon state="empty" />
        ) : (
          props.documentation
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
`;

const Label = styled.span`
  color: #fff;
`;

const Desc = styled.div`
  color: #bcbcbc;
  margin-left: 8px;
`;
