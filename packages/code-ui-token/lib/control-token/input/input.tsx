import styled from "@emotion/styled";
import React, { InputHTMLAttributes, useEffect, useState } from "react";

// ATTENTION
// Either value or defaultValue must be required
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  defaultValue?: string;
  color?: string;
  bgColor?: string;
}

export const Input = (props: InputProps) => {
  const [inputSize, setInputSize] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>(props.value);

  useEffect(() => {
    if (!inputValue) {
      if (props.defaultValue) {
        setInputSize(props.defaultValue.length);
      } else {
        setInputSize(5);
      }
    } else if (inputValue && inputValue.length > 0) {
      setInputSize(inputValue.length);
    }
  }, [inputValue]);

  return (
    <>
      <StyledInput
        type="text"
        value={inputValue}
        defaultValue={props.defaultValue}
        size={inputSize}
        color={props.color}
        bgColor={props.bgColor}
        {...props}
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
