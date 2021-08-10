export interface LanguageConfig {
  docstring: {
    start: string;
    mid?: string;
    end: string;
  };
  indent: {
    start?: number;
    mid?: number;
    end: number;
  };
}

export const jsstyle: LanguageConfig = {
  docstring: {
    start: "/**",
    mid: "*",
    end: "*/",
  },
  indent: {
    mid: 8,
    end: 8,
  },
};
