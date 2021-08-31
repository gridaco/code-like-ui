import Field from "./field";
import { IField } from "@code-ui/docstring/lib/field/type";
import React from "react";
import CodeComent from "./code-coment";
import { CodeLikeViewProps, _language_config } from "./type";
import { Line, CodeWrapper, Monokai, Link } from "./style";
import { ThemeProvider } from "@emotion/react";

export const Docstring = (props: CodeLikeViewProps) => {
  const expandableConfig = props?.expandableConfig;
  const langconfig = _language_config(props.lang ?? "js");
  const lines = props.controls.length; // TODO: make state

  const onChange = props.onChange;

  // const shouldhide = () => {
  //   return expandableConfig.hidable && lines > expandableConfig.lines;
  // };

  return (
    <ThemeProvider theme={Monokai}>
      <CodeWrapper padding={props.padding}>
        <CodeComent
          docstring={langconfig.docstring.start}
          indent={langconfig.indent.start}
        />
        {props.controls.map((field, i) => {
          return (
            <Line>
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
