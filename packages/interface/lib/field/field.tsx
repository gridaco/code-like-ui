import React from "react";
import Handlebars from "handlebars";
import { InterfaceFieldProps } from "../type";

const defaultTemplate = "{{tag}}{{name}}{{ static }}{{ contorl.input }}";

interface IField<T = string> {
  field: InterfaceFieldProps;
  onChange: (field: string, value: T) => void;
}

// For checking {{ static }}
const staticRegx = /{{\s?static\s?}}/;

// For checking  {{ contorl.~ }}
const contorlRegx = /{{\s?contorl\.[a-z]*\s?}}/;

export function Field(props: IField) {
  const { field, onChange } = props;
  const template = field.template ?? defaultTemplate;
  const contorlSplits = template.split(contorlRegx);

  let fieldArray = [];

  contorlSplits.map((split, index) => {
    if (index === 1) {
      fieldArray.push("contorl");
    }
    if (staticRegx.test(split)) {
      const staticSplits = split.split(staticRegx);
      fieldArray.push(staticSplits[0]);
      fieldArray.push("static");
      fieldArray.push(staticSplits[1]);
    } else {
      fieldArray.push(split);
    }
  });
  console.log("origin : ", field);
  console.log("handling : ", fieldArray);

  // console.log(_1);
  return (
    <div>
      <div />
    </div>
  );
}
