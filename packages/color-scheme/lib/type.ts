export type ThemeType = "monokai";

type _Color = string;

export interface ColorTheme {
  highlight: {
    text: { color: _Color };
    bg: { color: _Color };
  };
  comment: { color: _Color };
  link: { color: _Color };
  bg: { color: _Color };
}
