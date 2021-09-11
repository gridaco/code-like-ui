import React from "react";
import { BasedToken } from "../..";

export interface ParenthesesProps {
  isOpen: boolean;
}

export function Parentheses(props: ParenthesesProps) {
  return (
    <BasedToken
      onClick={() => {
        console.log("onClicked");
      }}
      onDoubleClick={() => {
        console.log("onDoubleClick");
      }}
      cornerRadius={2}
      contentPadding={[0, 2]}
      contentColor="#D4D4D4"
      content={
        <span style={{ fontSize: "14px" }}>
          {props.isOpen ? <> &#40;</> : <> &#41;</>}
        </span>
      }
    />
  );
}
