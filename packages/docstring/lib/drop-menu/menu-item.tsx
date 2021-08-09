import React from "react";
import { Option } from "../field/type";
import styled from "@emotion/styled";

const MenuItem = (props: Option<string>) => {
  return (
    <FieldWrapper id={props.value}>
      {props.name}
      {props.description ?? <Desc>{props.description}</Desc>}
    </FieldWrapper>
  );
};

const FieldWrapper = styled.option``;
const Desc = styled.span``;

export default MenuItem;
