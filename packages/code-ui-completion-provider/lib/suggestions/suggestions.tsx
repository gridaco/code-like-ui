import React, { useState } from "react";
import { SelectionItem, SelectionItemProps } from "../selection-item";
import styled from "@emotion/styled";

export interface SuggestionItems extends SelectionItemProps {
  id: string;
}

export interface SuggestionsProps {
  items: SuggestionItems[];
  selectedId: string;
  hideOnSelect?: boolean;
  onSelected: (id: string) => {};
}

export function Suggestions(props: SuggestionsProps) {
  const [showDoc, setShowDoc] = useState(undefined);

  function get_document(id: string) {
    const res = props.items.find((d) => d.id === id);
    return res;
  }

  const onFocusChange = (id: string) => {
    const foundDoc = get_document(id);
    setShowDoc(foundDoc);
  };

  return (
    <Wrapper>
      {props.items.map((data: SuggestionItems) => {
        const { label, detail, leading, documentation } = data;
        return (
          <SelectionItem
            label={label}
            detail={detail}
            leading={leading}
            documentation={documentation}
            variant={data.id === props.selectedId ? "selected" : "default"}
            onFocus={onFocusChange}
          />
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #252526;
  border: 1px solid #393939;
  box-sizing: border-box;
  border-radius: 2px;
  padding: 4px 0;
`;
