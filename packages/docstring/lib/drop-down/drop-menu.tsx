import styled from "@emotion/styled";
import React, { useState } from "react";
import { IDropDown } from "./menu-type";
import MenuItem from "./menu-item";

const DropMenu = (props: IDropDown) => {
  const [item, setItme] = useState(props.items[0].value);

  function handleItme(event: React.ChangeEvent<HTMLSelectElement>) {
    setItme(event.target.value);
  }

  return (
    <Wrapper>
      <Select id={props.id} value={item} onChange={handleItme}>
        {props.items.map((item) => {
          return (
            <MenuItem key={`select-box-${props.id}-${item.value}`} {...item} />
          );
        })}
      </Select>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: fit-content;
  overflow-y: auto;
`;

const Select = styled.select``;

export default DropMenu;
