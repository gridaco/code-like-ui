import { IField } from "./field/type";
import { LanguageConfig } from "@code-ui/type";

export interface ExpandableConfig {
  lines: number;
  expandable: boolean;
  hidable?: boolean;
}

export interface CodeLikeViewProps<T = string> {
  lang?: LanguageType;
  theme?: string;
  padding?: string;
  controls: IField[];
  expandableConfig: ExpandableConfig;
  onChange: (field: string, value: T) => void;
}

export const _DEFAULT_JS_STYLE: LanguageConfig = {
  docstring: {
    start: "/**",
    mid: " *",
    end: "*/",
  },
  indent: {
    mid: 8,
    end: 8,
  },
};

export const _DEFAULT_DART: LanguageConfig = {
  docstring: {
    start: "///",
    mid: "///",
    end: "///",
  },
  indent: {
    mid: 8, // TODO:
    end: 8, // TODO:
  },
};

export type LanguageType = "js" | "dart" | "paython" | LanguageConfig;

export function _language_config(type: LanguageType): LanguageConfig {
  if (typeof type == "string") {
    if (type === "js") {
      return _DEFAULT_JS_STYLE;
    } else if (type === "dart") {
      return _DEFAULT_DART;
    }
    //  TODO: add python preset
    else {
      throw `${type} is not a valid preset`;
    }
  } else {
    return type as LanguageConfig;
  }
}
