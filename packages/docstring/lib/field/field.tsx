import React, { useState } from "react";
import { IField } from "./type";
import styled from "@emotion/styled";
import DropDown from "../drop-down";
import Handlebars from "handlebars";

const valuefield = /{{\s?options\s?}}/;


const defaulttemplate = "{{tag}}{{name}} {{ options }}";

interface Props<T = string> {
  field: IField;
  onChange: (field: string, value: T) => void;
}

const field = (props: Props) => {
  const template = props.field.template ?? defaulttemplate;
  const field = props.field;
  const _splits = template.split(valuefield);
  const __splits_1 = _splits[0];
  const __splits_3 = _splits[1];
  const _1 =
    __splits_1 &&
    Handlebars.compile(__splits_1)({
      ...props.field,
    });
  const _2 = Handlebars.compile("option")({
    ...props.field,
  });

  const _3 =
    __splits_3 &&
    Handlebars.compile(__splits_3)({
      ...props.field,
    });

    console.log(_1)
    console.log(_2)
  return (
    <Wrapper>
      {_1 && <Tag>{_1}</Tag>}
      &nbsp;
      {_2  && field.options && 
      <DropDown
        id={field.name}
        items={field.options}
        onSelect={(d) => {
          props.onChange(field.name, d);
        }}
      />}
      &nbsp;
      {_3 && <Label>{_3}</Label>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  color: ${(props) => props.theme.comment.color};
`;

const Tag = styled.div``;

const Label = styled.div``;

export default field;
