import dropMenu from "./drop-down";
import Field from "./field";
import { IField } from "@code-ui/docstring/lib/field/type";
import React from "react";
import CodeComent from "./code-coment";
import { CodeLikeViewProps, _language_config } from "./type";

export const CodeLikeView = (props: CodeLikeViewProps) => {
  const expandableConfig = props?.expandableConfig;
  const langconfig = _language_config(props.lang ?? "js");
  const lines = props.controls.length; // TODO: make state

  // const shouldhide = () => {
  //   return expandableConfig.hidable && lines > expandableConfig.lines;
  // };
  return (
    <>
      <CodeComent
        docstring={langconfig.docstring.start}
        indent={langconfig.indent.start}
      />
      {props.controls.map((field, i) => {
        return (
          <>
            <CodeComent
              docstring={langconfig.docstring.mid}
              indent={langconfig.indent.mid}
            />
            <Field {...field} />
          </>
        );
      })}
      <>
        <CodeComent
          docstring={langconfig.docstring.end}
          indent={langconfig.indent.end}
        />
        {/* {expandableConfig?.expandable && shouldhide() && <p>hide</p>} */}
      </>
    </>
  );
};
