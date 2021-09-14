import styled from "@emotion/styled";
import React, { InputHTMLAttributes, useEffect, useState } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  color?: string;
  bgColor?: string;
}

export const Input = (props: InputProps) => {
  const [inputSize, setInputSize] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>(
    props.value ?? props.defaultValue.toString()
  );

  useEffect(() => {
    if (!inputValue) {
      // if user mistake
      setInputSize(5);
    }
    if (inputValue.length === 0) {
      setInputSize(1);
    } else {
      setInputSize(inputValue.length);
    }
  }, [inputValue]);

  return (
    <>
      <StyledInput
        value={inputValue}
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
