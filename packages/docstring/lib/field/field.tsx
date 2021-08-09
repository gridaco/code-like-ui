import React, { useState } from "react";
import { IField } from "./type";
import styled from "@emotion/styled";
import DropDown from "../drop-down";
import Handlebars from "handlebars";

const valuefield = /{{\s?options\s?}}/;
const dummyItems = [
  {
    name: "Flutter",
    value: "platform.flutter",
    description: "flutter",
  },
  {
    name: "React",
    value: "platform.react",
    description: "tsx",
  },
];

const defaulttemplate = "{{ tag }}{{ name }}{{ options }}";
const field = (props: IField) => {
  const template = props.template ?? defaulttemplate;
  const _splits = template.split(valuefield);
  const __splits_1 = _splits[0];
  const __splits_3 = _splits[1];
  const _1 =
    __splits_1 &&
    Handlebars.compile(__splits_1)({
      ...props,
    });

  const _2 = Handlebars.compile("{{ options.name }}")({
    ...props,
  });

  const _3 =
    __splits_3 &&
    Handlebars.compile(__splits_3)({
      ...props,
    });

  return (
    <Wrapper>
      {_1 && <Tag>{_1}</Tag>}
      <span>{_2}</span>
      <DropDown id={_1} items={dummyItems} />
      {_3 && <Label>{_3}</Label>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const Tag = styled.div`
  /* color: red; */
`;

const Label = styled.div``;

export default field;
