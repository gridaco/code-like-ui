import React from "react";
import { BasedToken, BasedTokenProps } from "..";
export function GroupToken(
  props: { children: React.ReactNode } & BasedTokenProps
) {
  return <BasedToken content={props.children} {...props} />;
}
