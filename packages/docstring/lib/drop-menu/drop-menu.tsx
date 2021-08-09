import styled from "@emotion/styled";
import React from "react";
import { IDropDown } from "./menu-type";
import MenuItem from "./menu-item";

const DropMenu = (props: IDropDown) => {
  return (
    <Wrapper>
      <select id={props.id}>
        <MenuItem value={props.items[0].value} name={props.items[0].name} />
      </select>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: fit-content;
  overflow-y: auto; // f
`;

export default DropMenu;
