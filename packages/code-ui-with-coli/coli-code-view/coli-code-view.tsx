import React from "react";
import { BasedToken } from "@code-ui/token";

export function ColiCodeView(props: {
  coli: any; // ColiObject
}) {
  //
  return (
    <BasedToken
      onClick={function (): void {
        throw new Error("Function not implemented.");
      }}
      onDoubleClick={function (): void {
        throw new Error("Function not implemented.");
      }}
      cornerRadius={0}
      contentPadding={0}
      contentColor={""}
      content={""}
    />
  );
}
