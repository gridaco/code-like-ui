import styled from "@emotion/styled";
import React, { Fragment, useCallback, useState } from "react";
import { BasedToken, Bracket, CodeComent, DropDown, Input } from "..";
import Tippy from "@tippyjs/react";

export function BasedTokenStorybookExample() {
  const items = [
    { name: "ReactNode", value: "ReactNode", description: "ReactNode" },
    { name: "string", value: "string", description: "string" },
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
