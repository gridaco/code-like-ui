import styled from '@emotion/styled';
import React, { ReactNode, useEffect, useRef, useState } from 'react';

interface ListProps {
  label: string;
  value: string;
}

export const dropdownList: ListProps[] = [
  { label: 'label1', value: 'value1' },
  { label: 'label2', value: 'value2' },
  { label: 'cat', value: 'cat' },
  { label: 'catDog', value: 'catDog' },
  { label: 'WOW', value: 'WOW' },
];
export function AutoComplete() {
  const [inputValue, setInputValue] = useState<string>('');
  const [showList, setShowList] = useState<ListProps[]>(dropdownList);
  const [inputWidth, setInputWidth] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!inputRef.current) {
      return;
    } else {
      const w = inputRef.current.getBoundingClientRect().width;
      setInputWidth(w);
    }
    findList(inputValue);
  }, [inputValue, inputRef]);

  function findList(value: string) {
    if (value === '') {
      setShowList([]);
    } else {
      var regex = new RegExp(
        '^' + inputValue.replace(/[-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&'),
        'i',
      );

      const resTest = dropdownList.filter((item) => {
        if (regex.test(item.label)) {
          return item;
        }
      });
      setShowList(resTest);
    }
  }

  function autoCompleteSetToInput(key: string) {
    if (key === 'ArrowRight' || key === 'Enter' || key === 'Tab') {
      setInputValue(showList[0].label);
    }
  }

  return (
    <>
      <Wrapper w={inputWidth}>
        <Input
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          ref={inputRef}
          onKeyDown={(e) => {
            autoCompleteSetToInput(e.key);
          }}
          value={inputValue}
        />
        <InputPlaceholder w={inputWidth}>{showList[0]?.label}</InputPlaceholder>
        {showList.map((item) => {
          return (
            <>
              <p>{item.label}</p>
            </>
          );
        })}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div<{ w?: number }>`
  width: fit-content;
  height: fit-content;
  width: ${(props) => `${props.w}px`};
  position: relative;
`;

const Input = styled.input`
  background-color: transparent;
  position: relative;
  z-index: 10;
  outline: none;
  border: 1px solid;
  border-radius: 2px;

  // Change InputPlaceholder when changing
  font: 400 14px system-ui;
`;

const InputPlaceholder = styled.div<{ w?: number; h?: number }>`
  position: absolute;
  width: ${(props) => `${props.w}px`};
  color: #b7b7b7;
  top: 2px;
  left: 3px;
  // Change Input when changing
  font: 400 14px system-ui;
`;
