import React from "react";
import { InterfaceFieldProps } from "../type";
import { ControlTokenHandle } from "@code-ui/token";

const defaultTemplate = "{{tag}}{{name}}{{ static }}{{ contorl.input }}";

interface IField<T = string> {
  field: InterfaceFieldProps;
  onChange: () => void;
}

// For checking {{ static }}
const staticRegx = /{{\s?static\s?}}/;
// For checking  {{ contorl.~ }}
const contorlRegx = /{{\s?contorl\.[a-z]*\s?}}/;

const CONTORL = "contorl";
const STATIC = "static";
export function Field(props: IField) {
  const { field, onChange } = props;
  const template = field.template ?? defaultTemplate;
  const contorlSplits = template.split(contorlRegx);

  let fieldArray: string[] = [];

  contorlSplits.map((split, index) => {
    if (index === 1) {
      fieldArray.push(CONTORL);
    }
    if (staticRegx.test(split)) {
      const staticSplits = split.split(staticRegx);
      fieldArray.push(staticSplits[0]);
      fieldArray.push(STATIC);
      fieldArray.push(staticSplits[1]);
    } else {
      fieldArray.push(split);
    }
  });

  const _fieldArray = fieldArray.filter((fieldArray) => fieldArray !== "");

  // step!
  // 1. check contorl token -> if contorl token: handle and return <Drop or <Input ~ like this
  // 2. check static token -> if contorl token: handle and return <span style={{}} ~
  // 3. if nothing -> <span>field</span>
  return _fieldArray.map((d, index) => {
    if (d === CONTORL) {
      ControlTokenHandle();
      return <span>contorl</span>;
    } else if (d === STATIC && !!field.token?.static) {
      return `static token ${field.token.static.keyword}`;
      // return StaticTokenHandle(field.token.static.keyword);
    } else {
      return <span>{field}</span>;
    }
  });
}
