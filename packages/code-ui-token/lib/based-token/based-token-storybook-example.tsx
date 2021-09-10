import styled from "@emotion/styled";
import React, { Fragment, useCallback, useState } from "react";
import { BasedToken, CodeComent, DropDown, Input } from "..";
import Tippy from "@tippyjs/react";

export function BasedTokenStorybookExample() {
  const items = [
    { name: "name1", value: "name1 value", description: "desc" },
    { name: "name2", value: "name2 value", description: "desc" },
  ];
  const [item, setItme] = useState<string>(items[0].value);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);

  const handleItem = useCallback((value: string) => {
    setItme(value);
    hide();
    // props.onSelect(value);
  }, []);

  function basedTokenHover(isOver: boolean) {
    console.log(isOver);
  }

  return (
    <Wrapper>
      <StyledTippy
        visible={isVisible}
        onClickOutside={hide}
        placement={"bottom"}
        content={
          <Options>
            {items.map((item, index) => {
              return (
                <Fragment key={`select-box-${item.value}`}>
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
        <BasedToken
          onClick={isVisible ? hide : show}
          onDoubleClick={() => {
            console.log("onDoubleClick");
          }}
          cornerRadius={2}
          contentPadding={2}
          contentColor="#D7D7D7"
          backgroundColor="#3A3842"
          content={
            <Select>{items.find((el) => el.value === item)?.name}</Select>
          }
        />
      </StyledTippy>
    </Wrapper>
  );
}
const StyledTippy = styled(Tippy)`
  pointer-events: auto !important;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Select = styled.ul`
  cursor: pointer;
  list-style: none;
  margin: 0;
  padding-inline-start: 4px;
  padding-inline-end: 4px;
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

const Options = styled.div<{ isVisibe?: boolean }>`
  background: #3f3c47;
`;

const Desc = styled.span`
  color: #bcbcbc;
  font-size: 14px;
  line-height: 15px;
  margin-left: 17px;
  text-align: right;
  float: right;
`;
