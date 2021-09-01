import Field from "./field";
import React from "react";
import { CodeComent } from "@code-ui/token";
import {
  CodeLikeViewProps,
  LanguageType,
  _DEFAULT_DART,
  _DEFAULT_JS_STYLE,
} from "./type";
import { Line, CodeWrapper, Monokai, Link } from "./style";
import { ThemeProvider } from "@emotion/react";
import { LanguageConfig } from "@code-ui/type";

export const Docstring = (props: CodeLikeViewProps) => {
  const expandableConfig = props?.expandableConfig;
  const langconfig = _language_config(props.lang ?? "js");
  const lines = props.controls.length; // TODO: make state

  const onChange = props.onChange;

  // const shouldhide = () => {
  //   return expandableConfig.hidable && lines > expandableConfig.lines;
  // };

  function _language_config(type: LanguageType): LanguageConfig {
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

  return (
    <ThemeProvider theme={Monokai}>
      <CodeWrapper padding={props.padding}>
        <CodeComent
          docstring={langconfig.docstring.start}
          indent={langconfig.indent.start}
        />
        {props.controls.map((field, i) => {
          return (
            <Line key={`line-number-${i}`}>
              <CodeComent
                docstring={langconfig.docstring.mid}
                indent={langconfig.indent.mid}
              />
              <Field field={field} onChange={onChange} />
            </Line>
          );
        })}
        <>
          <CodeComent
            docstring={langconfig.docstring.end}
            indent={langconfig.indent.end}
          />
          {/* {expandableConfig?.expandable && shouldhide() && <p>hide</p>} */}
        </>
      </CodeWrapper>
    </ThemeProvider>
  );
};
