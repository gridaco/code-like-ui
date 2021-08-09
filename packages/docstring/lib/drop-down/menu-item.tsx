import React from "react";
import { Option } from "../field/type";
import styled from "@emotion/styled";
import tippy from "tippy.js";

interface IMenuItem {
  option: Option<string>;
  onClick: (value: string) => void;
}

const MenuItem = (props: IMenuItem) => {
  const { option, onClick } = props;
  return (
    <FieldWrapper id="select" onClick={() => onClick(option.value)}>
      {/* <FieldWrapper id={option.value} onClick={() => onClick(option.value)}> */}
      {option.name}
      <Desc>{option.description}</Desc>
    </FieldWrapper>
  );
};

const FieldWrapper = styled.li`
  transition-duration: 0.5s;
  border: 1px black;
  list-style: none;
  cursor: pointer;
  color: white;
  padding: 2px 8px;
  font-size: 14px;
  line-height: 18px;

  &:hover {
    background: #5a5764;
  }
`;
const Desc = styled.span`
  color: #bcbcbc;
  font-size: 12px;
  line-height: 15px;
  text-align: right;
  float: right;
`;

export default MenuItem;
