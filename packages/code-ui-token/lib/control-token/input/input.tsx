import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { InputStyle } from "./input-style";

export interface InputPrpps {
  value: string;
  onChange: (field: string, value: string) => void;
}

export const Input = (props: InputPrpps) => {
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
      />
    </>
  );
};

const StyledInput = styled.input`
  ${InputStyle}
`;
