import { LanguageConfig, Option, ExpandableConfig } from "@code-ui/type";
export interface IField<T = string> {
  tag?: "@";
  name: string;
  enabled?: boolean;
  template?: string;
  options?: Option<T>[];
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
