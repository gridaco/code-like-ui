import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";

export interface DocstringInputProps {
  value: string;
  onChange: (field: string, value: string) => void;
  color?: string;
  bgColor?: string;
}

export const DocstringInput = (props: DocstringInputProps) => {
  const [inputSize, setInputSize] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>(props.value);

  useEffect(() => {
    if (inputValue.length === 0) {
      setInputSize(1);
    } else {
      setInputSize(inputValue.length);
    }
  }, [inputValue]);

  function inputOnChange(value: string) {
    setInputValue(value);
    // Don't change this static!
    props.onChange("static.input.value", value);
  }

  return (
    <>
      <StyledInput
        onChange={(e) => inputOnChange(e.target.value)}
        value={inputValue}
        size={inputSize}
        color={props.color}
        bgColor={props.bgColor}
      />
    </>
  );
};

const StyledInput = styled.input<{ color?: string; bgColor?: string }>`
  padding-right: 5px;
  background: rgba(255, 255, 255, 0);
  border: 0;
  outline: none;

  color: ${(props) => props.color};
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : "rgba(255,255,255,0)"};
`;
