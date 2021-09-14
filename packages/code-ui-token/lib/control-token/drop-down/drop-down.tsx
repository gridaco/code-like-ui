import styled from "@emotion/styled";
import React, { Fragment, useCallback, useState } from "react";
import { IDropDown } from "./menu-type";
import Tippy from "@tippyjs/react";
// import { Option } from "../field/type";

export const DropDown = (props: IDropDown) => {
  const [item, setItem] = useState<string>(props.items[0].value);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);

  const handleItem = useCallback((value: string) => {
    setItem(value);
    hide();
    props.onSelect(value);
  }, []);

  /**
   * FUTURE UPDATE
   *
   * Key event handler
   * Not working now.
   */
  const controlKeyCommand = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowUp") {
        const prevIndex =
          (selectedIndex + props.items.length - 1) % props.items.length;
        setSelectedIndex(prevIndex);
      }

      if (event.key === "ArrowDown") {
        const nextIndex = (selectedIndex + 1) % props.items.length;
        setSelectedIndex(nextIndex);
      }

      if (event.key === "Enter") {
        //fix type!
        const item: any = props.items[selectedIndex];
        if (item) {
          setItem(item);
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
        placement={"bottom-start"}
        delay={[0, 0]}
        content={
          <Options onKeyUp={(event) => controlKeyCommand(event)}>
            {props.items.map((item, index) => {
              return (
                <Fragment key={`select-box-${props.id}-${item.value}`}>
                  <FieldWrapper
                    id={item.value}
                    onClick={() => handleItem(item.value)}
                    className={
                      index === selectedIndex ? "is-selected" : undefined
                    }
                  >
                    {item.name}
                    <Desc>{item.description}</Desc>
                  </FieldWrapper>
                </Fragment>
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

  // Temporarily fixed until theme is modified
  /* background: #3a3842; */
  /* color: #d7d7d7; */
  border-radius: 2px;
`;

const StyledTippy = styled(Tippy)`
  pointer-events: auto !important;
  transform: translate3d(0, -9px, 0);
  border-radius: 2px;
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
  border-radius: 2px;
  padding: 4px 0;
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

export default DropDown;
