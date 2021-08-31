import React from "react";
import Handlebars from "handlebars";
import { InterfaceFieldProps } from "../type";
import { ContorlTokenHandle, StaticTokenHandle } from "@code-ui/token";

const defaultTemplate = "{{tag}}{{name}}{{ static }}{{ contorl.input }}";

interface IField<T = string> {
  field: InterfaceFieldProps;
  onChange: (field: string, value: T) => void;
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

  _fieldArray.map((field, index) => {
    if (field === CONTORL) {
      ContorlTokenHandle();
    } else if (field === STATIC) {
      StaticTokenHandle();
    }
  });

  // console.log(_1);
  return (
    <div>
      <div />
    </div>
  );
}
