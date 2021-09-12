import React from "react";
import { tokens } from "@code-ui/core";
export function Token({ token }: { token: tokens.TokenObject }) {
  if (token instanceof tokens.ControlToken) {
  } else if (token instanceof tokens.GroupToken) {
    //   return
  } else if (token instanceof tokens.InputToken) {
  } else if (token instanceof tokens.SelectInputToken) {
  } else if (token instanceof tokens.StaticToken) {
  } else if (token instanceof tokens.SuggestionsSelectInputToken) {
  }
  // last
  else if (token instanceof tokens.TokenObject) {
  }
  return <></>;
}
