import styled from "@emotion/styled";
import React from "react";
import { BasedToken } from "../..";

export function Tab() {
  return (
    <BasedToken
      onClick={() => {
        console.log("onClicked");
      }}
      onDoubleClick={() => {
        console.log("onDoubleClick");
      }}
      cornerRadius={0}
      contentPadding={0}
      contentColor="#D7D7D7"
      content={<Block />}
    />
  );
}

const Block = styled.div`
  width: 16px;
`;
