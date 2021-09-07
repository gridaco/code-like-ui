import { DocstringColorTheme, KindOfTheme } from "../type";

export const MonokaiDocstring: DocstringColorTheme = {
  highlight: {
    text: { color: "#D7D7D7" },
    bg: { color: "#3A3842" },
  },
  comment: { color: "#868686" },
  link: { color: "#868686" },
  bg: { color: "#1E1E1E" },
};

export const Monokai: KindOfTheme = {
  default: {
    bg: "#414339",
    color: "#d4d4d4",
  },
  comment: {
    color: "#75715e",
  },
  string: {
    color: "#e6db74",
  },
  number: {
    color: "#ae81ff",
  },
  chatacter: {
    color: "#ae81ff",
  },
  keyword: {
    color: "#f92672",
  },
  type: {
    color: "#66d9ef",
    fontStyle: "italic",
  },
  function: {
    color: "#a6e22e",
  },
  parameter: {
    color: "#fd971f",
  },
};
