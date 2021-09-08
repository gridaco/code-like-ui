export type ThemeType = "monokai";

type _Color = string;
export interface DocstringColorTheme {
  highlight: {
    text: { color: _Color };
    bg: { color: _Color };
  };
  comment: { color: _Color };
  link: { color: _Color };
  bg: { color: _Color };
}

export interface ThemePropery {
  color?: _Color;
  fontStyle?: string;
  bg?: _Color;
}
export interface KindOfTheme {
  default: ThemePropery;
  comment: ThemePropery;
  string: ThemePropery;
  number: ThemePropery;
  chatacter: ThemePropery;
  keyword: ThemePropery;
  type: ThemePropery;
  function: ThemePropery;
  parameter: ThemePropery;
}
