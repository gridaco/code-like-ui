import React, { useEffect, useState } from "react";
import { Monokai, Monokai_Test, ThemeType } from "@code-ui/color-scheme";
import { DropDown, Input } from "@code-ui/token";
import { ThemeProvider } from "@emotion/react";
import { InterfaceProps, InterfaceFieldProps, InterfaceAttr } from "./type";
import { Field } from "./field";
import styled from "@emotion/styled";

const interface_test_options = [
  {
    name: "string",
    value: "type.string",
    description: "string",
  },
  {
    name: "enum",
    value: "type.enum",
    description: "enum",
  },
];

const interface_evnet_options = [
  {
    name: "() => void",
    value: "type.arrowFunction",
    description: "arrowFunction",
  },
  {
    name: "() => string",
    value: "type.arrowFunctionString",
    description: "arrowFunctionString",
  },
];

type KindOfType =
  | "enum"
  | "string"
  | "TypeAlias"
  | "number"
  | "boolean"
  | "type"
  | "any"
  | "widget";

export function Interface(props: InterfaceProps) {
  const {
    lang,
    theme,
    interfaceName,
    attrs,
    expandableConfig,
    addFieldConfig,
  } = props;
  const [inputValue, setInputValue] = useState("props");

  return (
    <ThemeProvider theme={Monokai_Test}>
      <CodeBackground>
        <>
          <Span className="keyword">interface</Span>

          <Input value={props.interfaceName} onChange={props.onChange} />
          <Span>{`{`}</Span>
          {attrs.map((attr: InterfaceAttr, index: number) => {
            return (
              <Depth level={1} key={`interface-label-${attr.label}-${index}`}>
                <Span>{attr.label}</Span>
                <Span>:</Span>
                <DropDownStyle>
                  <DropDown
                    id={attr.label}
                    onSelect={(d) => props.onChange(attr.label, d)}
                    items={attr.contorls}
                  />
                </DropDownStyle>
              </Depth>
            );
          })}

          <Span>{`}`}</Span>
        </>
      </CodeBackground>

      {/* {fields.map((field: InterfaceFieldProps, i: number) => {
        console.log(field.token.contorl.defaultValue);
        return (
          <div key={`interface-field-num-${i}`}>
            <span>{field.tag}</span>
            <span>{field.name}</span>
            <span>{field.token?.static?.keyword}</span>
            <span> : </span>

            {field.token.contorl.options ? (
              <DropDown
                id="hi"
                onSelect={() => props.onChange}
                items={field.token.contorl.options}
              />
            ) : (
              <>
                <Input defaultValue={field.token.contorl.defaultValue} />
              </>
            )}

            <Field field={field} onChange={props.onChange} />
          </div>
        );
      })} */}
    </ThemeProvider>
  );
}

const CodeBackground = styled.div`
  background-color: #1e1e1e;
  color: #fff;
  padding: 10px;
`;

const Span = styled.span`
  margin-right: 5px;

  &.keyword {
    color: #f92672 !important;
  }
`;

const Depth = styled.div<{ level?: number }>`
  margin-left: ${(props) => (!!props.level ? `${props.level * 20}px` : "0px")};
  display: flex;
`;

const DropDownStyle = styled.div`
  ul {
    color: #f92672 !important;
  }
`;
