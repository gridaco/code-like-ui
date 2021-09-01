import React, { useEffect, useState } from "react";
import { Monokai, Monokai_Test, ThemeType } from "@code-ui/color-scheme";
import { DropDown, Input } from "@code-ui/token";
import { ThemeProvider } from "@emotion/react";
import { InterfaceProps, InterfaceFieldProps } from "./type";
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
  | "bool"
  | "type"
  | "any"
  | "widget";
interface InterfaceAttr {
  label: string;
  type: KindOfType;
}

export function Interface(props: InterfaceProps) {
  const { lang, theme, interfaceName, attr, expandableConfig, addFieldConfig } =
    props;
  const [inputValue, setInputValue] = useState("props");
  const [inputSize, setInputSize] = useState(4);

  useEffect(() => {
    setInputSize(inputValue.length + 1);
  }, [inputValue]);

  return (
    <ThemeProvider theme={Monokai_Test}>
      <CodeBackground>
        <Span>interface</Span>

        <>
          {/* <Span className="keyword">interface</Span>
        <StyledInput
          size={inputSize}
          defaultValue={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Span>{`{`}</Span>
        <Depth level={1}>
          <Span>coverImage</Span>
          <Span>:</Span>
          <DropDownStyle>
            <DropDown
              id="coverImage"
              onSelect={() => props.onChange}
              items={interface_test_options}
            />
          </DropDownStyle>
        </Depth>
        <Depth level={1}>
          <Span>content</Span>
          <Span>:</Span>
          <DropDownStyle>
            <DropDown
              id="content"
              onSelect={() => props.onChange}
              items={interface_test_options}
            />
          </DropDownStyle>
        </Depth>
        <Depth level={1}>
          <Span>buttonText</Span>
          <Span>:</Span>
          <DropDownStyle>
            <DropDown
              id="buttonText"
              onSelect={() => props.onChange}
              items={interface_test_options}
            />
          </DropDownStyle>
        </Depth>
        <Depth level={1}>
          <Span>onClick</Span>
          <Span>:</Span>
          <DropDownStyle>
            <DropDown
              id="onClick"
              onSelect={() => props.onChange}
              items={interface_evnet_options}
            />
          </DropDownStyle>
        </Depth>
        <Span>{`}`}</Span> */}
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
