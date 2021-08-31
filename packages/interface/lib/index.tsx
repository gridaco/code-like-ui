import React from "react";
import { Monokai, ThemeType } from "@code-ui/color-scheme";
import { ThemeProvider } from "@emotion/react";
import { IField } from "./type";
import { ExpandableConfig, AddFieldConfig } from "@code-ui/type";

type LanguageType = "js" | "dart" | "paython";

export interface IInterface<T = string> {
  lang?: LanguageType; // default 'js'
  theme?: ThemeType; // monokai
  Fields: IField[];
  expandableConfig: ExpandableConfig;
  addFieldConfig?: AddFieldConfig;
  onChange: (field: string, value: T) => void; // fix it!
}

export function Interface(props: IInterface) {
  return <ThemeProvider theme={Monokai}></ThemeProvider>;
}
