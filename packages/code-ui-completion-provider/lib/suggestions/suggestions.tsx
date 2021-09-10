import React, { ReactNode, useEffect, useRef, useState } from "react";
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
  const [showDoc, setShowDoc] = useState<SuggestionItems>(null);
  const [isHover, setIsHover] = useState<boolean>(false);
  const [sugWidth, setSugWidth] = useState<number>(0);
  const sugRef = useRef(null);

  useEffect(() => {
    if (!sugRef.current) {
      return;
    } else {
      setSugWidth(sugRef.current.getBoundingClientRect().width);
    }
  }, []); //empty dependency array so it only runs once at render

  const onHover = () => setIsHover(true);
  const onLeave = () => {
    setIsHover(false);
  };

  function get_document(id: string) {
    const res = props.items.find((d) => d.id == id);
    return res;
  }

  const onFocusChange = (id: string) => {
    const foundDoc = get_document(id);
    setShowDoc(foundDoc);
    onHover();
  };

  function TippyContent() {
    if (showDoc) {
      return <HoverView contents={showDoc.documentation} />;
    }
  }

  return (
    <>
      <StyledTippy
        visible={isHover}
        placement="bottom-start"
        content={TippyContent()}
        width={sugWidth}
        max-width={"100%"}
      >
        <Wrapper ref={sugRef}>
          <>
            {props.items.map((data: SuggestionItems) => {
              const { id, label, detail, leading, documentation } = data;
              return (
                <SelectionItem
                  id={id}
                  label={label}
                  detail={detail}
                  leading={leading}
                  documentation={documentation}
                  variant={
                    data.id === props.selectedId ? "selected" : "default"
                  }
                  onFocus={onFocusChange}
                  onSelected={props.onSelected}
                  onFocusOut={onLeave}
                />
              );
            })}
          </>
        </Wrapper>
      </StyledTippy>
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

const StyledTippy = styled(Tippy)<{ width: number }>`
  // 2px is border size
  width: ${(props) => `${Math.floor(props.width) - 2}px`};
  pointer-events: auto !important;
  transform: translate3d(0, -10px, 0px);
`;
