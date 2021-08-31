import { Monokai, ThemeType } from "@code-ui/color-scheme";
import { DropDown, Input } from "@code-ui/token";

import { ExpandableConfig, AddFieldConfig } from "@code-ui/type";

export interface InterfaceOption {
  name: string;
  value: string;
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

export interface InterfaceFieldProps {
  tag: "@" | "";
  name?: string;
  template?: string;
  enabled?: boolean;
  token?: IToken;
}

export interface InterfaceProps<T = string> {
  lang?: LanguageType; // default 'js'
  theme?: ThemeType; // monokai
  fields: InterfaceFieldProps[];
  expandableConfig?: ExpandableConfig;
  addFieldConfig?: AddFieldConfig;
  onChange: (field: string, value: T) => void; // fix it!
}

export type LanguageType = "js" | "dart" | "paython";
