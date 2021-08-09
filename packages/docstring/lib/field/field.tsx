import React from "react";
import { IField } from "./type";
import styled from "@emotion/styled";
import DropDown from "../drop-menu";
import Handlebars from "handlebars";

const valuefield = /{{\s?value\s?}}/;

const defaulttemplate = "{{ tag }}{{ name }}{{ value }}";
const field = (props: IField) => {
  const template = props.template ?? defaulttemplate;
  const _splits = template.split(valuefield);
  const __splits_1 = _splits[0];
  const _1 =
    __splits_1 &&
    Handlebars.compile(__splits_1)({
      ...props,
    });

  const _2 = "!value: todo!"; // value
  const __splits_3 = _splits[1];
  const _3 =
    __splits_3 &&
    Handlebars.compile(__splits_3)({
      ...props,
    });

  console.log(props);
  console.log(_1, _2, _3);
  console.log(__splits_1, _2, __splits_3);

  return (
    <Wrapper>
      {/* <Tag>{props?.tag}</Tag> */}
      {_1 && <Label>{_1}</Label>}
      <p>{_2}</p>
      {_3 && <Label>{_3}</Label>}
      <DropDown />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const Tag = styled.div``;

const Label = styled.div``;

export default field;
