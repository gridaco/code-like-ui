import { Monokai, ThemeType } from "@code-ui/color-scheme";
import { DropDown, Input } from "@code-ui/token";

import { ExpandableConfig, AddFieldConfig } from "@code-ui/core";

export interface InterfaceOption {
  name: string;
  value: string;
  description: string;
}

export interface InterfaceTypeOption {
  name: string;
  value: KindOfType;
  description: string;
}

export interface IToken {
  static?: {
    keyword: string;
  };
  contorl: {
    defaultValue: InterfaceOption | string;
    options?: InterfaceOption[];
  };
}

export type KindOfType =
  | "enum"
  | "string"
  | "TypeAlias"
  | "number"
  | "boolean"
  | "type"
  | "any"
  | "widget";

export interface InterfaceAttr {
  label: string;
  // type: string;
  contorls: InterfaceTypeOption[];
}

export type LanguageType = "js" | "dart" | "paython";

export interface InterfaceFieldProps {
  tag: "@" | "";
  name?: string;
  template?: string;
  enabled?: boolean;
  token?: IToken;
}

// export interface InterfaceProps<T = string> {
//   lang?: LanguageType; // default 'js'
//   theme?: ThemeType; // monokai
//   fields: InterfaceFieldProps[];
//   expandableConfig?: ExpandableConfig;
//   addFieldConfig?: AddFieldConfig;
//   onChange: (field: string, value: T) => void; // fix it!
// }

export interface InterfaceProps<T = string> {
  lang?: LanguageType; // default 'js'
  theme?: ThemeType; // monokai
  interfaceName: string;
  attrs: InterfaceAttr[];
  expandableConfig?: ExpandableConfig;
  addFieldConfig?: AddFieldConfig;
  onChange: (field: string, value: T) => void; // fix it!
}
