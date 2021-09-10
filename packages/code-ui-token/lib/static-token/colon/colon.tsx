import React from "react";
import { BasedToken } from "../..";

export function Colon() {
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
      content={<span style={{ fontSize: "14px" }}>:</span>}
    />
  );
}
