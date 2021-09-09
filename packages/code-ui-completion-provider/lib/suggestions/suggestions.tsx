import React, { ReactNode, useState } from "react";
import { SelectionItem, SelectionItemProps } from "../selection-item";
import styled from "@emotion/styled";
import { HoverView } from "@code-ui/hover";
import Tippy from "@tippyjs/react";

export interface SuggestionItems {
  id: string;
  label: string;
  detail?: string;
  leading?: ReactNode | true;
  documentation?: (ReactNode | string)[];
}

export interface SuggestionsProps {
  items: SuggestionItems[];
  selectedId?: string;
  hideOnSelect?: boolean;
  onSelected: (id: string) => void;
}

export function Suggestions(props: SuggestionsProps) {
  const [showDoc, setShowDoc] = useState<SuggestionItems>(undefined);

  function get_document(id: string) {
    const res = props.items.find((d) => d.id == id);
    return res;
  }

  const onFocusChange = (id: string) => {
    const foundDoc = get_document(id);
    setShowDoc(foundDoc);
  };

  return (
    <>
      <Wrapper>
        {props.items.map((data: SuggestionItems) => {
          const { id, label, detail, leading, documentation } = data;
          return (
            <SelectionItem
              id={id}
              label={label}
              detail={detail}
              leading={leading}
              documentation={documentation}
              variant={data.id === props.selectedId ? "selected" : "default"}
              onFocus={onFocusChange}
              onSelected={props.onSelected}
            />
          );
        })}
      </Wrapper>
      {!!showDoc && (
        <StyledTippy
          visible={!!props.selectedId}
          placement="bottom"
          content={<HoverView contents={showDoc.documentation} />}
        />
      )}
    </>
  );
}

const Wrapper = styled.div`
  background: #252526;
  border: 1px solid #393939;
  box-sizing: border-box;
  border-radius: 2px;
  padding: 4px 0;
`;

const StyledTippy = styled(Tippy)`
  pointer-events: auto !important;
`;
