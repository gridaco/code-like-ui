import React from "react";
import { Monokai, ThemeType } from "@code-ui/color-scheme";
import { DropDown, Input } from "@code-ui/token";
import { ThemeProvider } from "@emotion/react";
import { InterfaceProps, InterfaceFieldProps } from "./type";

export function Interface(props: InterfaceProps) {
  const { lang, theme, fields, expandableConfig, addFieldConfig } = props;
  return (
    <ThemeProvider theme={Monokai}>
      {fields.map((field: InterfaceFieldProps, i: number) => {
        return (
          <div key={`interface-field-num-${i}`}>
            <span>{field.tag}</span>
            <span>{field.name}</span>
            <span>{field.token.static?.keyword}</span>
            <span> : </span>
            {/* <span>{field.token}</span> */}
          </div>
        );
      })}
    </ThemeProvider>
  );
}
