import styled from "@emotion/styled";
import React, { useCallback, useState } from "react";
import { IDropDown } from "./menu-type";
import Tippy from "@tippyjs/react";
import { Option } from "../field/type";

const DropMenu = (props: IDropDown) => {
  const [item, setItme] = useState<string>(props.items[0].value);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);

  const handleItem = useCallback((value: string) => {
    setItme(value);
    hide();
    props.onSelect(value);
  }, []);

  /**
   * FUTURE UPDATE
   *
   * Key event handler
   * Not working now.
   */
  const controlKeyComand = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowUp") {
        const previndex =
          (selectedIndex + props.items.length - 1) % props.items.length;
        setSelectedIndex(previndex);
      }

      if (event.key === "ArrowDown") {
        const nextIndex = (selectedIndex + 1) % props.items.length;
        setSelectedIndex(nextIndex);
      }

      if (event.key === "Enter") {
        //fix type!
        const item: any = props.items[selectedIndex];
        if (item) {
          setItme(item);
        }
      }
    },
    []
  );

  return (
    <Wrapper>
      <StyledTippy
        visible={isVisible}
        onClickOutside={hide}
        placement={"bottom"}
        content={
          <Options onKeyUp={(event) => controlKeyComand(event)}>
            {props.items.map((item, index) => {
              return (
                <>
                  <FieldWrapper
                    key={`select-box-${props.id}-${item.value}`}
                    id={item.value}
                    onClick={() => handleItem(item.value)}
                    className={
                      index === selectedIndex ? "is-selected" : undefined
                    }
                  >
                    {item.name}
                    <Desc>{item.description}</Desc>
                  </FieldWrapper>
                </>
              );
            })}
          </Options>
        }
      >
        <Select onClick={isVisible ? hide : show}>
          {props.items.find((el) => el.value === item)?.name}
        </Select>
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
  background: ${(props) => props.theme.highlight.bg.color};
  color: ${(props) => props.theme.highlight.text.color};
  border-radius: 2px;
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
`;

const FieldWrapper = styled.li`
  transition-duration: 0.5s;
  border: 1px black;
  list-style: none;
  cursor: pointer;
  color: white;
  padding: 2px 8px;
  font-size: 14px;
  line-height: 18px;

  /* &.is-selected, */
  &:hover {
    background: #5a5764;
  }
`;
const Desc = styled.span`
  color: #bcbcbc;
  font-size: 14px;
  line-height: 15px;
  margin-left: 17px;
  text-align: right;
  float: right;
`;

export default DropMenu;
