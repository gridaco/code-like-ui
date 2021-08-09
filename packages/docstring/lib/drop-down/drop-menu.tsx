import styled from "@emotion/styled";
import React, { useCallback, useEffect, useState } from "react";
import { IDropDown } from "./menu-type";
import MenuItem from "./menu-item";

const DropMenu = (props: IDropDown) => {
  const [item, setItme] = useState<string>(props.items[0].value);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleItme = useCallback(
    (value: string) => {
      setItme(value);
      setIsVisible(!isVisible);
    },
    [item]
  );

  return (
    <Wrapper>
      <Select id={props.id} onClick={() => setIsVisible(!isVisible)}>
        {item}
      </Select>

      <Options isVisible={isVisible}>
        {props.items.map((item) => {
          return (
            <MenuItem
              key={`select-box-${props.id}-${item.value}`}
              option={item}
              onClick={handleItme}
            />
          );
        })}
      </Options>
    </Wrapper>
  );
};

type OptionsProps = {
  isVisible: boolean;
};

const Wrapper = styled.div`
  width: fit-content;
  overflow-y: auto;
`;

const Select = styled.ul`
  cursor: pointer;
  list-style: none;
  margin: 0;
  padding-inline-start: 4px;
  padding-inline-end: 4px;
`;

const Options = styled.div<OptionsProps>`
  background: #3f3c47;
  display: ${(props) => (props.isVisible ? "block" : "none")};
`;
export default DropMenu;
