import styled from "@emotion/styled";
import React, { Fragment, useCallback, useState } from "react";
import {
  BasedToken,
  Bracket,
  CodeComent,
  DropDown,
  Input,
  Parentheses,
} from "..";
import Tippy from "@tippyjs/react";

export function BasedTokenStorybookExample() {
  function voidFunc() {
    return (
      <>
        <BasedToken
          onClick={() => {
            console.log("onClicked");
          }}
          onDoubleClick={() => {
            console.log("onDoubleClick");
          }}
          cornerRadius={2}
          contentPadding={[0, 2]}
          contentColor="#4EC9B0"
          content={
            <>
              <Parentheses isOpen={true} />
              <Parentheses isOpen={false} />
              <BasedToken
                onClick={() => {}}
                onDoubleClick={() => {}}
                cornerRadius={2}
                contentPadding={[0, 2]}
                contentColor="#2F7AD2"
                content={<>{"=>"}</>}
              />
              <BasedToken
                onClick={() => {}}
                onDoubleClick={() => {}}
                cornerRadius={2}
                contentPadding={[0, 2]}
                contentColor="#4EC9B0"
                content={<>void</>}
              />
            </>
          }
        />
      </>
    );
  }
  const items = [
    { name: voidFunc(), value: "hi", description: "" },
    { name: <>ReactNode</>, value: "ReactNode", description: "ReactNode" },
    { name: "string", value: "string", description: "string" },
  ];
  const [item, setItem] = useState<string>(items[0].value);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);

  const handleItem = useCallback((value: string) => {
    setItem(value);
    hide();
    // props.onSelect(value);
  }, []);

  return (
    <>
      <DropDown
        id="dropdown-id"
        items={items}
        onSelect={(d) => {
          (field: string, value: string) => {
            console.log(field, value);
          };
        }}
      />
    </>
  );
}
