import React from "react";
import { BasedToken } from "@code-ui/token";
import { ColiObject, stringfy } from "coli";
import { get_color_scheme_for_syntax_kind } from "../color-scheme-mappings";
import { SyntaxKind } from "@coli.codes/core-syntax-kind";

export function ColiCodeView({
  coli,
  fallbackContentColor = "white",
  language = "typescript",
}: {
  coli: ColiObject;
  fallbackContentColor?: string;
  language?: "typescript";
}) {
  const tree = (coli) => {
    const all_fields = Object.keys(coli);
    const composisions = all_fields
      .map((k) => {
        console.log(k);
        const field = coli[k];
        if (field instanceof ColiObject) {
          return <ColiCodeView key={field.__type} coli={field} />;
        } else if (instanceArrayOf(field, ColiObject)) {
          return field.map((c) => tree(c));
        }
      })
      .filter((x) => x !== undefined);
    return composisions;
  };

  const composisions = tree(coli).flat();

  if (composisions?.length > 0) {
    return <>{composisions}</>;
  } else {
    const maybe_syntax_kind = coli.__type;
    const color =
      get_color_scheme_for_syntax_kind(maybe_syntax_kind as SyntaxKind) ??
      fallbackContentColor;
    const code_string = stringfy(coli, { language: language });

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
        backgroundColor="black"
        contentColor={color}
        content={code_string}
      />
    );
  }
}

function instanceArrayOf(a: any[], t) {
  return Array.isArray(a) && a.every((x) => x instanceof t);
}
