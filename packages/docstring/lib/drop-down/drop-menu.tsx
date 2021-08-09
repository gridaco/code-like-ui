import styled from "@emotion/styled";
import React, { useCallback, useEffect, useState } from "react";
import { IDropDown } from "./menu-type";
import MenuItem from "./menu-item";
import Tippy from "@tippyjs/react";

const DropMenu = (props: IDropDown) => {
  const [item, setItme] = useState<string>(props.items[0].value);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);

  const handleItem = useCallback((value: string) => {
    setItme(value);
    hide();
  }, []);

  return (
    <Wrapper>
      <StyledTippy
        visible={isVisible}
        onClickOutside={hide}
        content={
          <Options>
            {props.items.map((item) => {
              return (
                <MenuItem
                  key={`select-box-${props.id}-${item.value}`}
                  option={item}
                  onClick={handleItem}
                />
              );
            })}
          </Options>
        }
      >
        <Select onClick={isVisible ? hide : show}>{item}</Select>
      </StyledTippy>
    </Wrapper>
  );
};

type OptionsProps = {
  isVisible?: boolean;
};

const Wrapper = styled.div`
  width: fit-content;
  overflow-y: auto;
`;

const StyledTippy = styled(Tippy)`
  pointer-events: auto !important;
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
  /* display: ${(props) => (props.isVisible ? "block" : "none")}; */
`;

export default DropMenu;
