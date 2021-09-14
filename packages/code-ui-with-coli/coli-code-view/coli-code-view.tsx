import React, { useEffect, useRef } from "react";
import { BasedToken } from "@code-ui/token";
import { ColiObject, stringfy, stringfy_tokenformatted } from "coli";
import { format } from "@coli.codes/ast-formatter";
import { get_color_scheme_for_syntax_kind } from "../color-scheme-mappings";
import { SyntaxKind } from "@coli.codes/core-syntax-kind";
import hljs from "highlight.js";
import "highlight.js/styles/vs2015.css";

export function ColiCodeView({
  coli,
  fallbackContentColor = "white",
  language = "typescript",
  flatten = true,
  depth = 0,
  useHightlight = true,
}: {
  coli: ColiObject | ColiObject[];
  fallbackContentColor?: string;
  language?: "typescript";
  flatten?: boolean;
  useHightlight?: boolean;
  depth?: number;
}) {
  const ast = format(coli);

  const token = useRef();
  useEffect(() => {
    if (useHightlight) {
      if (token.current) {
        hljs.configure({
          languages: ["tsx"],
        });
        hljs.highlightElement(token.current);
      }
    }
  }, []);

  return (
    <div ref={token}>
      <pre>
        <code>
          <AstView token={ast} />
        </code>
      </pre>
    </div>
  );
}

function AstView({ token }: { token: any }) {
  if (Array.isArray(token)) {
    return (
      <>
        {token.map((t) => {
          return <AstView token={t} />;
        })}
      </>
    );
  }

  if (token.kind == "\n") {
    return <br />;
  }
  const code_string = stringfy_tokenformatted(token);
  return (
    <>
      <BasedToken
        onClick={function (): void {
          console.log("clicked", token);
        }}
        onDoubleClick={function (): void {
          throw new Error("Function not implemented.");
        }}
        cornerRadius={0}
        contentPadding={0}
        backgroundColor="#1eff0022"
        contentColor={"black"}
        content={code_string ?? ""}
      />
    </>
  );
}
